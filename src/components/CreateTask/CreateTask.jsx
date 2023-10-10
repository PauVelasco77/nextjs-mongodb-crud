'use client'

import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

export default function CreateTask ({ actionOnCreate }) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    if (e.target.value.length > 50) {
      setError('The task title must be less than 50 characters')
      return
    }
    setTitle(e.target.value)
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      setError('The task title is required')
      return
    }

    actionOnCreate(title)
      .then(() => {
        setTitle('')
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className='flex flex-col gap-2'>
      <form className='w-full gap-2 flex'>
        <input onChange={handleChange} value={title} type='text' autoFocus placeholder='Add new task' className='w-4/5 bg-gray-500 rounded-lg text-gray-100 text-base placeholder:text-gray-300 p-4 border-gray-700 border-2 outline-none transition-colors duration-300 hover:border-secondary2 focus:border-secondary2' />
        <button onClick={handleSubmit} className='w-1/5 bg-secondary2 h-full p-4 rounded-lg border-gray-700 border-2 flex items-center justify-center transition-colors duration-200 hover:border-secondary2'>
          <span className='hidden md:block'>Create</span>
          <AddIcon />
        </button>
      </form>
      <div className={`text-xs text-error ${!error ? 'invisible' : ''}`}>
        <p className='inline-block'>{error}</p>
      </div>
    </div>
  )
}
