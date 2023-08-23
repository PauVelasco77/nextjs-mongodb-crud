'use client'

import CreateTask from '@/components/CreateTask/CreateTask'
import TaskCard from '@/components/TaskCard'
import useHomePage from '@/hooks/useHomePage'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function HomePage () {
  const { tasks, handleDeleteTask, handleChangeStatus, handleCreateTask, errors } = useHomePage()

  return (
    <div className='gap-7 flex flex-col'>
      <h1>Home Page</h1>
      <CreateTask actionOnCreate={handleCreateTask} errorMessage={errors.createTask} />
      <div className={`grid grid-rows-none gap-4 place-items-center ${inter.className} w-full`}>
        {tasks?.map((task) =>
          <TaskCard task={task} key={task.id} actionOnDelete={handleDeleteTask} actionOnComplete={handleChangeStatus} />
        )}
      </div>
    </div>
  )
}
