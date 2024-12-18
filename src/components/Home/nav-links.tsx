import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from '../ui/navigation-menu'
import Link from 'next/link'

const NavLinks = ({href, label}: {href: string, label:string}) => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className='text-muted-foreground flex px-4 py-2 hover:text-foreground text-sm font-medium'>
                    {label}
                  </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavLinks