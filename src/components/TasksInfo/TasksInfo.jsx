export default function TasksInfo ({ tasks }) {
  const totalTasks = tasks?.length || 0
  const completedTasks = tasks?.filter(task => task.complete).length || 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-3 items-center'>
        <h4 className='font-bold text-sm text-secondary2'>Total Tasks</h4>
        <span className='text-gray-200 text-xs font-bold bg-gray-400 px-3 py-0.5 rounded-xl'>{totalTasks}</span>
      </div>
      <div className='flex gap-3 items-center'>
        <h4 className='font-bold text-sm text-secondary1'>Completed</h4>
        <span className='text-gray-200 text-xs font-bold bg-gray-400 px-3 py-1 rounded-xl'>{completedTasks} of {totalTasks}</span>
      </div>
    </div>
  )
}
