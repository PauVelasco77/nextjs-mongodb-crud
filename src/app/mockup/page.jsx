'use client'

import Image from 'next/image'
import iphone from '../../assets/iphone.png'

export default function HomePage () {
  return (
    <div>
      <Image src={iphone} />
    </div>
  )
}
