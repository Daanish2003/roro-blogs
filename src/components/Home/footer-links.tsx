import React from 'react'
import NavLinks from './nav-links'


const FooterLinks = () => {
    return (
        <div className='flex flex-col'>
            <NavLinks href="" label="Home" />
            <NavLinks href="" label="Blogs" />
            <NavLinks href="" label='Projects' />
            <NavLinks href='' label="Guides" />
            <NavLinks href='' label="Portfolio" />
        </div>
    )
}

export default FooterLinks