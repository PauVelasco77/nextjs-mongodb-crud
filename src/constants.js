const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? 'http' : 'https'
export const API_URL = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`

export const TASK = {
  id: 'id',
  title: 'title',
  complete: 'complete'
}
