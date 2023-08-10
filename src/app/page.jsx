import TaskCard from '@/components/TaskCard'

const api = `http://${process.env.API_URL}`

export async function loadTasks () {
  const res = await fetch(`${api}/api/tasks`, {
    next: {
      tags: ['tasks']
    }
  })
  const data = await res.json()
  return data
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
