import { NextResponse } from 'next/server'

export async function middleware (req) {
  const response = NextResponse.next()

  if (req.nextUrl.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', '*')
  }

  return response
}
