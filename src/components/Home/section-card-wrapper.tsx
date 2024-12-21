"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


interface SectionCardWrapperProps {
  title: string
  description: string
  imageUrl: string
  slug: string
  type: string
}



const SectionCardWrapper = ({title, description, imageUrl, type, slug}: SectionCardWrapperProps) => {
    const router = useRouter()

    const handleSectionCardClick = () => {
        router.replace(`/${type}/${slug}`)
    }
    
  return (
    <Card className="overflow-hidden w-[350px] rounded-xl hover:scale-105 transition-all ease-in-out duration-300"
    onClick={handleSectionCardClick}
    >
      <Image 
        src={imageUrl} 
        alt={title} 
        width={100} 
        height={100} 
        className="w-full h-48 object-cover"
      />
      <CardHeader className='border-t'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default SectionCardWrapper