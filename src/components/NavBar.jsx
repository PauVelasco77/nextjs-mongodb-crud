import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className='py-5'>
      <div className='container flex justify-between px-10 md:px-0 mx-auto text-white'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'> Next Mongo App </h1>
        </Link>
        <ul className='flex gap-x-4'>
          <li>
            <Link href='/tasks/new'>New task</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
