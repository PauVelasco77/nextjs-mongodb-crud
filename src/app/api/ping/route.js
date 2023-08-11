import { connectDB } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET () {
  await connectDB()
  return NextResponse.json({ message: 'Hello World!' })
}
