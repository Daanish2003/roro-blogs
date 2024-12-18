import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { Button } from '../ui/button'
import Link from 'next/link'

interface SectionWrapperProps {
   children: React.ReactNode
   heading: string
   type:string
}

const SectionWrapper = ({children, heading, type}: SectionWrapperProps) => {
  return (
    <div className='flex flex-col items-center py-8 gap-y-12'>
       <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
            <span>{heading}</span>
        </HoverBorderGradient>
       {children}
       <Button asChild variant={"outline"}>
         <Link
         href={`/${type}`}
         >
            Explore More..
         </Link>
       </Button>
    </div>
  )
}

export default SectionWrapper