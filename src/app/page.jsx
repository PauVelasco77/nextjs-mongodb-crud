import TaskCard from '@/components/TaskCard'

export async function loadTasks () {
  const res = (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tasks`))
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
