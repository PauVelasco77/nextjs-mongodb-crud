import Task from '@/models/Task'
import { connectDB } from '@/utils/mongoose'

export async function GET () {
  await connectDB()
  await Task.deleteMany({})
}
