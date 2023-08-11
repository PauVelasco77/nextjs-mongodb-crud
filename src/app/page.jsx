import TaskCard from '@/components/TaskCard'
import Task from '@/models/Task'
import { connectDB } from '@/utils/mongoose'

export async function loadTasks () {
  // const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
  //   next: {
  //     tags: ['tasks']
  //   }
  // })
  // const data = await res.json()
  // return data

  await connectDB()
  const tasks = await Task.find()
  // console.log('TAAASKS', tasks)
  return tasks
}

export default async function HomePage () {
  const tasks = await loadTasks()
  return (
    <div>
      <h1>Home Page</h1>
      <div className='grid grid-cols-3 gap-2'>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  )
}
