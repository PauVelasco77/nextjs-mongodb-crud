import { NextResponse } from 'next/server'

export async function middleware (request) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', '*')
  }
  // ...
  return response
}
