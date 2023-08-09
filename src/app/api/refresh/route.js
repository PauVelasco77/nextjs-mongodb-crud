import { revalidateTag } from 'next/cache'

export function POST (tag) {
  revalidateTag(tag)
  return new Response()
}
