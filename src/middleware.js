import { NextResponse } from 'next/server'

export async function middleware (req) {
  const response = NextResponse.next()

  if (req.nextUrl.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', '*')
  }
  if (req.nextUrl.pathname.startsWith('/api/cron')) {
    const cronKey = process.env.CRON_JOB_KEY
    const { key } = Object.fromEntries(req.nextUrl.searchParams)

    if (key !== cronKey) {
      return NextResponse.json({
        status: 401,
        error: 'Unauthorized key'
      })
    }
  }

  return response
}
