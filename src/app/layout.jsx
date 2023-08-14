import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <title>Todo list + MongoDB API</title>
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <main className='container mx-auto px-5 mt-4'>{children}</main>
      </body>
    </html>
  )
}
