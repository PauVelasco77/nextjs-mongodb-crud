'use client'

import TaskCard from '@/components/TaskCard'
import useHomePage from '@/hooks/useHomePage'

export default function HomePage () {
  const { tasks } = useHomePage()

  return (
    <div>
      <h1>Home Page</h1>
      <div className='grid grid-cols-3 gap-2'>
        {tasks.map((task) => {
          console.log(task.id)
          return (
            <TaskCard task={task} key={task.id} />
          )
        })}
      </div>
    </div>
  )
}
