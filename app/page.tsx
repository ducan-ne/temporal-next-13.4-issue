import { TestButton } from '@/app/Test'
import { Client, Connection } from '@temporalio/client'
// import { getStatusQuery } from '@riziu/worker/src/workflow'

export default async function Home() {
  const onSubmit = async (form: FormData) => {
    'use server'
    console.log(123123)
    return <div>Hello</div>
  }

  const temporal = new Client({
    connection: await Connection.connect({ address: 'localhost:7233' }).catch((err) => {
      console.error('Error connecting to Temporal Server: ', err)
      return undefined
    }),
    namespace: 'default',
  })


  const list = await temporal.workflow.list({
    query: 'WorkflowType = "order"',
  })

  const promises = []
  for await (const workflow of list) {
    if (workflow.status.name === 'TERMINATED') {
      continue
    }
    if (promises.length >= 30) {
      break
    }

    promises.push(
      (async () => {
        const orderId = workflow.workflowId
        // const status = await temporal.workflow.getHandle(orderId).query(getStatusQuery)
        return {
          // ...status,
          // state: workflow.status.name === 'FAILED' ? 'Failed' : status.state,
          orderId,
        }
      })(),
    )
  }

  const orders = await Promise.all(promises)
  console.log(orders)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form action={onSubmit}>
          <button type={'submit'}>Submit</button>
        </form>
        <TestButton/>
      </div>
      {/*<MyVideo/>*/}
    </main>
  )
}
