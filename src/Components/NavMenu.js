import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='text-black font-poppins flex flex-col gap-1 p-3 fixed z-10 top-[3.8rem] animate-fade-in-up-nav right-[0.098rem] w-full bg-white'>
        <Link to="/novo"><h1 className='font-MONO'>NEW</h1></Link>
        <Link to="/siteproizvodi"><h1 className='font-mono'>ALL PRODUCTS</h1></Link>
        <Link to="/maski"><h1 className='font-mono'>MAN</h1></Link>
        <Link to="/zenski"><h1 className='font-mono'>WOMAN</h1></Link>
    </div>
  )
}

export default NavMenu