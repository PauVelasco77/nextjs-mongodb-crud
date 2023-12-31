import DeleteButton from './DeleteButton'
import CheckButton from './CheckButton/CheckButton'
import { useCallback, useState } from 'react'
import { capitalizeFirstLetter } from '@/utils/capitalize'
import debounce from 'just-debounce-it'
import { TASK } from '@/constants'

export default function TaskCard ({ taskData, actionOnDelete, actionOnUpdate }) {
  const [task, setTask] = useState({
    ...taskData,
    title: capitalizeFirstLetter(taskData.title)
  })
  const [error, setError] = useState('')

  const handleDelete = async () => {
    await actionOnDelete(task.id)
  }

  const debouncedUpdateTask = useCallback(debounce(task => {
    actionOnUpdate(task).catch((error) => {
      setError(error.message)
    })
  }, 300), [actionOnUpdate])

  const handleComplete = (e) => {
    const newTask = { ...task, [e.target.name]: e.target.checked }
    setTask(newTask)
    actionOnUpdate(newTask)
  }

  const handleUpdate = (e) => {
    const newTask = { ...task, [e.target.name]: e.target.value }
    setTask(newTask)
    setError('')

    if (e.target.value.length > 50) {
      setError('The task title must be less than 50 characters')
      return
    }
    if (!e.target.value) {
      setError('The task title is required')
      return
    }

    debouncedUpdateTask(newTask)
  }

  return (
    <>
      <div className=' bg-gray-500 p-2 rounded-lg transition-colors hover:border-secondary2 flex justify-between items-center gap-5 break-keep w-full border-2 border-gray-400'>
        <div className='flex items-center gap-4 w-full'>
          <CheckButton task={task} actionOnClick={handleComplete} />
          <input type='text' onChange={handleUpdate} name={TASK.title} value={task.title} className={`text-sm whitespace-nowrap font-normal bg-transparent outline-none w-full ${task.complete ? 'line-through text-gray-300' : 'text-gray-100'}`} />
        </div>
        <DeleteButton actionOnClick={handleDelete} />
      </div>
      <div className={`text-xs text-error w-full ${!error ? 'hidden' : ''}`}>
        <p className='inline-block'>{error}</p>
      </div>
    </>
  )
}
