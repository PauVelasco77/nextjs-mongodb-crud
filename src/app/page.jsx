import TaskCard from '@/components/TaskCard'

export async function loadTasks () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
    next: {
      revalidate: 60 // every 10 seconds revalidate the data from the server and update the cache with the new data
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
