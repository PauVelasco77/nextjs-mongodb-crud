'use client'

import TaskCard from '@/components/TaskCard'
import useHomePage from '@/hooks/useHomePage'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function HomePage () {
  const { tasks, handleDeleteTask, handleChangeStatus } = useHomePage()

  return (
    <div>
      <h1>Home Page</h1>
      <div className={`grid grid-rows-none gap-4 place-items-center ${inter.className}`}>
        {tasks.map((task) =>
          <TaskCard task={task} key={task.id} actionOnDelete={handleDeleteTask} actionOnComplete={handleChangeStatus} />
        )}
      </div>
    </div>
  )
}
