"use client"
import React from 'react'
import NavLinks from './nav-links'
import Logo from './logo'
import DonateButton from './donate-button'
import HireMeButton from './hire-button'
import NavMobile from './nav-mobile'
import { Button } from '../ui/button'
import { useNavbarMobile } from '@/components/providers/navbar-provider'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const {isOpen, toggleNavbar } = useNavbarMobile();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-8 px-3 py-2 transition-all duration-300 border-b dark:bg-background bg-white shadow-md"
      >
        <Logo />
        <div className='md:flex lg:ml-20 hidden'>
          <NavLinks href="/" label="Home" />
          <NavLinks href="/blogs" label="Blogs" />
          <NavLinks href="/projects" label='Projects' />
          <NavLinks href='/guides' label="Guides" />
          <NavLinks href='/portfolio' label="Portfolio" />
        </div>
        <div className='space-x-4 md:flex hidden'>
          <DonateButton />
          <HireMeButton />
        </div>
        <div className='md:hidden'>
        {!isOpen ? (<Button variant={"ghost"}
          onClick={() => toggleNavbar()}
        >
          <Menu />
        </Button>): (
          <Button variant={"ghost"}
          onClick={() => toggleNavbar()}
          >
            <X />
          </Button>
        )}
        </div>
      </nav>
      <NavMobile />
    </>
  )
}

export default Navbar