'use client'

import CreateTask from '@/components/CreateTask/CreateTask'
import LoadingTask from '@/components/LoadingTask/LoadingTask'
import useHomePage from '@/hooks/useHomePage'
import { Inter } from 'next/font/google'
import React, { Suspense } from 'react'

const LazyTask = React.lazy(() => import('@/components/TaskCard'))

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
          <Suspense fallback={<LoadingTask />} key={task.id}>
            <LazyTask task={task} key={task.id} actionOnDelete={handleDeleteTask} actionOnComplete={handleChangeStatus} />
          </Suspense>
        )}
      </div>
    </div>
  )
}
