import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'

// Get all tasks
export async function GET () {
  await connectDB()

  const tasks = await Task.find()

  return NextResponse.json(tasks)
}

// Create new task
export async function POST (req) {
  try {
    const data = await req.json()

    const newTask = new Task(data)
    const savedTask = await newTask.save()

    return NextResponse.json(savedTask)
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return NextResponse.json(
        {
          error: true,
          message: 'The title must be unique for every task'
        },
        {
          status: 400
        }
      )
    } else {
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
}
