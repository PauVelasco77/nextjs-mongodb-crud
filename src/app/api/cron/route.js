import Task from '@/models/Task'
import { connectDB } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    await connectDB()

    await Task.deleteMany({})

    const newTask = new Task({
      title: 'Learn React'
    })

    const savedTask = await newTask.save()
    return NextResponse.json(savedTask)
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: error.message
      },
      {
        status: 400
      }
    )
  }
}
