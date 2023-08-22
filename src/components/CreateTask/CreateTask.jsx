'use client'

import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

export default function CreateTask ({ actionOnCreate, errorMessage }) {
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

  return (
    <div className='flex flex-col gap-2'>
      <form className='w-full gap-2 flex'>
        <input onChange={handleChange} type='text' autoFocus placeholder='Add new task' className='w-4/5 bg-gray-500 rounded-lg text-gray-100 text-base placeholder:text-gray-300 p-4 border-gray-700 border-2 outline-none transition-colors duration-300 hover:border-secondary2 focus:border-secondary2' />
        <button onClick={() => actionOnCreate(title)} className='w-1/5 bg-secondary2 h-full p-4 rounded-lg border-gray-700 border-2 flex items-center justify-center transition-colors duration-200 hover:border-secondary2'>
          <span>Create</span>
          <AddIcon />
        </button>
      </form>
      <div className={`text-xs text-error ${!errorMessage && !error ? 'invisible' : ''}`}>
        <p className='inline-block'>{errorMessage || error}</p>
      </div>
    </div>
  )
}
