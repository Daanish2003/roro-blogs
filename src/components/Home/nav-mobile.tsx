"use client"
import { ArrowUpRight } from 'lucide-react';
import { Separator } from '../ui/separator';
import NavLinks from './nav-links';
import DonateButton from './donate-button';
import HireMeButton from './hire-button';
import { useNavbarMobile } from '@/components/providers/navbar-provider';

const NavMobile = () => {
    const { isOpen } = useNavbarMobile()

    return (
        <div className={`md:hidden fixed top-[50px] dark:bg-background bg-white px-8 z-50 w-full border-b transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            {isOpen && (
                <div className='space-y-4 mb-4'>
                    <div>
                        <div className='flex items-center'>
                        <NavLinks href="/" label="Home" />
                        <ArrowUpRight className='w-4 h-4 text-muted-foreground'/>   
                        </div>
                        <Separator />
                        <div className='flex items-center'>
                        <NavLinks href="/blogs" label="Blogs" />
                        <ArrowUpRight className='w-4 h-4 text-muted-foreground'/>   
                        </div>
                        <Separator />
                        <div className='flex items-center'>
                        <NavLinks href="projects" label="Projects" />
                        <ArrowUpRight className='w-4 h-4 text-muted-foreground'/>   
                        </div>
                        <Separator />
                        <div className='flex items-center'>
                        <NavLinks href="guides" label="Guides" />
                        <ArrowUpRight className='w-4 h-4 text-muted-foreground'/>   
                        </div>
                        <Separator />
                        <div className='flex items-center'>
                        <NavLinks href="portfolio" label="Portfolio" />
                        <ArrowUpRight className='w-4 h-4 text-muted-foreground'/>   
                        </div>
                        <Separator />
                    </div>
                    <div className='space-x-4 items-center'>
                        <DonateButton />
                        <HireMeButton />
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavMobile