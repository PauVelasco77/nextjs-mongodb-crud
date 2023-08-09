import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'

export async function GET (req, { params }) {
  // await connectDB()
  // const validId = params.id

  // try {
  //   const task = await Task.findById(validId)

  //   if (!task) {
  //     console.log('Tarea no encontrada')
  //     return NextResponse.json(
  //       {
  //         error: true,
  //         message: 'Task not found'
  //       },
  //       {
  //         status: 404
  //       }
  //     )
  //   }

  //   return NextResponse.json(task)
  // } catch (error) {
  //   return NextResponse.json(
  //     {
  //       error: true,
  //       message: error.message
  //     },
  //     {
  //       status: 400
  //     }
  //   )
  // }
  return NextResponse.json({ message: 'Hello' })
}

export async function PUT (req, { params }) {
  try {
    const data = await req.json()

    const updatedTask = await Task.findByIdAndUpdate(params.id, data, {
      new: true
    })

    return NextResponse.json(updatedTask)
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

export async function DELETE (req, { params }) {
  try {
    const deletedTask = await Task.findByIdAndDelete(params.id)

    if (!deletedTask) {
      return NextResponse.json(
        {
          error: true,
          message: 'Task not found'
        },
        {
          status: 404
        }
      )
    }

    return NextResponse.json(deletedTask)
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
