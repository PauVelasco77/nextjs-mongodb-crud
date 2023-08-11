'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { API_URL } from '@/constants'
import useApi from '@/hooks/useApi'

export default function FormPage () {
  const router = useRouter()
  const params = useParams()
  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  })
  const { deleteTask, getTaskById, createTask, updateTask } = useApi()

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {
      updateTask(newTask)
        .then((data) => router.push('/'))
        .catch((error) => { throw new Error(error) })
    } else {
      createTask(newTask)
        .then((data) => router.push('/'))
        .catch((error) => { throw new Error(error) })
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    deleteTask(params.id)
      .then((data) => router.push('/'))
      .catch((error) => { throw new Error(error) })
  }

  useEffect(() => {
    if (params.id) {
      getTaskById(params.id)
        .then((data) => {
          setNewTask(data)
        })
    }
  }, [params.id, getTaskById])

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <h2 className='font-bold text-3xl'>
          {params.id ? 'Edit Task' : 'Create Task'}
        </h2>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={newTask.title}
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
        />
        <textarea
          name='description'
          placeholder='description...'
          value={newTask.description}
          rows={3}
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
        />
        <div className='flex justify-between'>
          <button
            type='submit'
            className='bg-green-600 text-white px-4 py-2 rounded font-medium w-1/3'
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className='bg-red-600 text-white px-4 py-2 rounded font-medium w-1/3'
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}
