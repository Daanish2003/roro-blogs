import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";




const SocialLinks = () => {
  return (
    <div className='flex '>
        <FaSquareXTwitter size={30} />
        <FaLinkedin size={30} />
        <FaDev size={30} />
    </div>
  )
}

export default SocialLinks