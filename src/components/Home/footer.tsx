import React from 'react'
import LogoFooter from './logo-footer'
import Link from 'next/link'
import SocialLinks from './social-links'
import FooterLinks from './footer-links'

const Footer = () => {
  return (
    <div className='py-10 border-t'>
      <div className='flex justify-evenly'>
        <div className='space-y-4'>
          <LogoFooter />
          <span>Built by
            <Link
              href={"https://x.com/daanish288275"}
              className='text-blue-700 ml-1'
            >
              @daanish
            </Link>
          </span>
          <SocialLinks />
        </div>
        <div className='flex flex-col text-muted-foreground font-medium'>
          <Link href={"https://buymeacoffee.com/daanish2003"}
          className='text-muted-foreground flex px-4 py-2 hover:text-foreground text-sm font-medium'
          >
            Donate
          </Link>
          <Link
            href="/hire"
            className='text-muted-foreground flex px-4 py-2 hover:text-foreground text-sm font-medium'
          >
            Hire Me
          </Link>
        </div>
        <FooterLinks />
      </div>
    </div>
  )
}

export default Footer