import Link from 'next/link'
import DeleteButton from './DeleteButton'
import CheckButton from './CheckButton/CheckButton'

export default function TaskCard ({ task }) {
  return (
  // <Link href={`/tasks/${task.id}`}>
    <div className=' bg-gray-500 p-2 rounded-lg transition-colors hover:border-secondary2 flex justify-between items-center gap-5 break-keep w-3/5 border border-gray-400'>
      <div className='flex items-center gap-4'>
        <CheckButton checked={task.completed} actionOnClick={() => {}} />
        <div className='flex gap-1'>
          <h3 className='text-lg whitespace-nowrap font-medium'>{task.title}:</h3>
          <p className='text-slate-300 w-full'>{task.description}</p>
        </div>
      </div>
      <p className='text-slate-400 my-2'>
        <span className='mr-1'>Created At</span>
        <span>{new Date(task.createdAt).toLocaleDateString()}</span>
      </p>
      <DeleteButton actionOnClick={() => console.log('hola')} />
    </div>
  // </Link>
  )
}
