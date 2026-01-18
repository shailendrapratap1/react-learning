import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Components'
const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-30 bg-amber-50 flex items-center justify-between px-8 z-100'>
     
        <img src="/Logo.png" className='h-3 ' alt="" />
     <div className='hidden md:flex gap-8 '>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Home</li>
          <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>features</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none '>Community</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Blog</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Pricing</li>
     <Button className='bg-lime-500'>Register now</Button>
    </div>
    </nav>
  )
}

export default Navbar
