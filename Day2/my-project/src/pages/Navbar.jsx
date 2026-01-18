import React,{useState} from 'react'
import { Button } from '../Components'
import { MoveRightIcon ,Menu,X} from 'lucide-react'
const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 h-30 bg-amber-50 flex items-center justify-between px-8 z-100'>
     
        <img src="/Logo.png" className='h-3 ' alt="" />
     <div className='hidden md:flex gap-8 '>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Home</li>
          <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>features</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none '>Community</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Blog</li>
     <li className='text-black font-medium transition-colors hover:text-gray-400 list-none'>Pricing</li>
     <Button className='text-lime-500 bg-green-400 h-15 w-45 '>Register now <MoveRightIcon /></Button>
    
    
    </div>
      <button className='block md:hidden text-sky-500   cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
      {isOpen ? <X /> : <Menu />}
      </button>
    
    {isOpen &&(
        <div className='absolute top-15 left-0 right-0 bg-black text-white flex flex-col gap-4 md:hidden'>
     <li className=' font-medium transition-colors hover:text-gray-400 list-none' onClick={()=>setIsOpen(false)}>Home</li>
          <li className=' font-medium transition-colors hover:text-gray-400 list-none' onClick={()=> setIsOpen(false)}>features</li>
     <li className=' font-medium transition-colors hover:text-gray-400 list-none ' onClick={()=> setIsOpen(false)}>Community</li>
     <li className=' font-medium transition-colors hover:text-gray-400 list-none' onClick={()=>setIsOpen(false)}>Blog</li>
     <li className=' font-medium transition-colors hover:text-gray-400 list-none' onClick={()=> setIsOpen(false)}>Pricing</li>
          <Button className='text-lime-500 bg-green-400 h-15 w-45 '>Register now <MoveRightIcon className='size-5 'onClick={()=> setIsOpen(false)}/></Button>

        </div>
    )
    }
    
    </nav>
  )
}

export default Navbar
