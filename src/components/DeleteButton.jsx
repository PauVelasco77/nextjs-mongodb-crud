'use client'

import { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined'

export default function DeleteButton ({ actionOnClick }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    actionOnClick().catch((error) => {
      setLoading(false)
      throw new Error(error)
    })
  }

  return (
    <button onClick={handleClick} className='cursor-pointer'>
      <div className='rounded-full p-1 transition-colors hover:bg-gray-400 active:transition-ease-in active:duration-200 active:bg-gray-500'>
        {loading
          ? <RecyclingOutlinedIcon className='h-6 w-6 text-secondary2 text-green-500 animate-spin' />
          : <DeleteOutlineOutlinedIcon className='h-6 w-6 text-secondary1 ' />}
      </div>
    </button>
  )
}
