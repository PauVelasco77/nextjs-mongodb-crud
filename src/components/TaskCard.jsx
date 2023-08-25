import DeleteButton from './DeleteButton'
import CheckButton from './CheckButton/CheckButton'

export default function TaskCard ({ task, actionOnDelete, actionOnComplete }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleComplete = async () => {
    await actionOnComplete(task)
  }

  const handleDelete = async () => {
    await actionOnDelete(task.id)
  }

  const title = capitalizeFirstLetter(task.title)

  return (
    <div className=' bg-gray-500 p-2 rounded-lg transition-colors hover:border-secondary2 flex justify-between items-center gap-5 break-keep w-full border-2 border-gray-400'>
      <div className='flex items-center gap-4'>
        <CheckButton checked={task.complete} actionOnClick={handleComplete} />
        <div className='flex gap-1'>
          <h3 className={`text-sm whitespace-nowrap font-normal ${task.complete ? 'line-through text-gray-300' : 'text-gray-100'}`}>{title}</h3>
        </div>
      </div>
      <DeleteButton actionOnClick={handleDelete} />
    </div>
  )
}
