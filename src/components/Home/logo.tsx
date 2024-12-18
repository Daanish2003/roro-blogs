import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Logo = () => {
  
  return (
    <Link href={'/'} className='flex items-center gap-x-2'>
        <Image 
        src="/logo-dark.svg"
        width={24}
        height={24}
        alt={"logo"}
        className='text-normal'
        />
        <span className='lg:flex font-bold text-2xl text-nowrap hidden'>{"RoRo's Blogs"}</span>
    </Link>
  )
}

export default Logo