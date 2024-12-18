import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const LogoFooter = () => {
  
  return (
    <Link href={'/'} className='flex items-center gap-x-2'>
        <Image 
        src="/logo-dark.svg"
        width={24}
        height={24}
        alt={"logo"}
        className='text-normal'
        />
        <span className='flex font-bold text-2xl text-nowrap'>{"RoRo's Blogs"}</span>
    </Link>
  )
}

export default LogoFooter