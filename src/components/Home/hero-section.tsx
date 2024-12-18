import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { FaAward } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[700px] sm:text-center gap-y-8 mb-28 mx-12">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <FaAward />
          <span>Available for Hire</span>
        </HoverBorderGradient>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Learn, Build, and Grow Together
          </h1>
          <p className="mt-4 text-md sm:text-xl text-muted-foreground">
            {"Discover in-depth guides, project tutorials, and insights from my journey in software development. From coding tutorials to tech insights, I'm here to help you level up your skills."}
          </p>
        </div>
        <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:justify-center w-full">
          <Button asChild size={"lg"}>
            <Link
              href={"/blogs"}
            >
              Explore Blogs
              <ChevronRight />
            </Link>
          </Button>
          <Button asChild variant={"outline"} size={"lg"}>
            <Link
              href={"/blogs"}
            >
              Explore Guides
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
  )
}

export default HeroSection