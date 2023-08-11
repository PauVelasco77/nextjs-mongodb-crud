const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'https' : 'http'
export const API_URL = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
