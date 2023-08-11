'use client'

import TaskCard from '@/components/TaskCard'
import { API_URL } from '@/constants'
import { useEffect, useState } from 'react'

export async function loadTasks () {
  const res = await fetch(`${API_URL}/tasks`, {
    next: {
      tags: ['tasks']
    }
  })
  const data = await res.json()
  return data
}

export default function HomePage () {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    loadTasks().then((data) => setTasks(data)).catch((error) => console.log(error))
  }, [])

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
