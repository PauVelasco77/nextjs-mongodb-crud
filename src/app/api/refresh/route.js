import { revalidateTag } from 'next/cache'

export async function POST (req) {
  const { tag } = await req.json()
  revalidateTag(tag)
  return new Response()
}
