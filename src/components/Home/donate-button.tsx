import React from 'react'
import { Button } from '../ui/button'
import { FaHeart } from "react-icons/fa"
import Link from 'next/link'

const DonateButton = () => {
  return (
    <Button asChild variant={"outline"}>
        <Link
        href={"https://buymeacoffee.com/daanish2003"}
        >
        <span>Donate</span>
        <FaHeart className='text-red-500 mt-0.5'/>
        </Link>
    </Button>
  )
}

export default DonateButton