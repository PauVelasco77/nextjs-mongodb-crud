'use client'

import TaskCard from '@/components/TaskCard'
import useApi from '@/hooks/useApi'
import { useEffect, useState } from 'react'

export default function HomePage () {
  const [tasks, setTasks] = useState([])
  const { getAllTasks } = useApi()

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data)).catch((error) => { throw new Error(error) })
  }, [getAllTasks])

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
