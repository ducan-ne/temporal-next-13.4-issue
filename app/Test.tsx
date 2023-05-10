'use client'

import {testAction} from "@/app/actions";
import {useState} from "react";
import {Notification} from "@/app/Notification";

export function TestButton() {
  const [r, setR] = useState(null)
  return <>
    <button onClick={async () => {
      console.log(await testAction())
    }}>Test123
    </button>
    <Notification/>
    <div>
      DD: {r}
    </div>
  </>
}
