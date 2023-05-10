'use server'

import {Notification} from "@/app/Notification";

export async function testAction() {
  return {
    date: new Date()
  }
}
