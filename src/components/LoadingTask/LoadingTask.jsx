import DeleteButton from '../DeleteButton'

export default function LoadingTask () {
  return (
    <div className=' bg-gray-500 p-2 rounded-lg transition-colors hover:border-secondary2 flex justify-between items-center gap-5 break-keep w-full border-2 border-gray-400'>
      <div className='flex items-center justify-center gap-4 '>
        <div class='w-6 h-6 flex justify-center items-center'>
          <span class='loader' />
        </div>
      </div>
      <DeleteButton />
    </div>
  )
}
