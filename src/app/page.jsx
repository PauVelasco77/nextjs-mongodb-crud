'use client'

import CreateTask from '@/components/CreateTask/CreateTask'
import LoadingTask from '@/components/LoadingTask/LoadingTask'
import useHomePage from '@/hooks/useHomePage'
import { Inter } from 'next/font/google'
import React, { Suspense } from 'react'
import TasksInfo from '@/components/TasksInfo/TasksInfo'

const LazyTask = React.lazy(() => import('@/components/TaskCard'))

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function HomePage () {
  const { tasks, handleDeleteTask, handleCreateTask, handleUpdateTask, errors } = useHomePage()
  return (
    <div className='gap-7 flex flex-col'>
      <header>
        <h1>Home Page</h1>
        <CreateTask actionOnCreate={handleCreateTask} errorMessage={errors.createTask} />
        <TasksInfo tasks={tasks} />
      </header>
      <div className={`grid grid-rows-none gap-4 place-items-center ${inter.className} w-full`}>
        {tasks?.length === 0 && <h2 className='text-2xl text-gray-100'>No tasks yet</h2>}
        {tasks?.map((task) =>
          <Suspense fallback={<LoadingTask />} key={task.id}>
            <LazyTask taskData={task} key={task.id} actionOnUpdate={handleUpdateTask} actionOnDelete={handleDeleteTask} />
          </Suspense>
        )}
      </div>
    </div>
  )
}
