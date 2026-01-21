import React, { useState } from 'react'
import { Button } from '../Components'
import { MoveRightIcon, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 h-30 bg-amber-50 flex items-center justify-between px-8 z-100">
      <img src="/Logo.png" className="h-3" alt="Logo" />

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="text-black font-medium transition-colors hover:text-gray-400 list-none cursor-pointer"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}

        <Button className="text-lime-500 bg-green-400 h-15 w-45">
          Register now <MoveRightIcon />
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        className="block md:hidden text-sky-500 bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-15 left-0 right-0 bg-black text-white flex flex-col gap-4 md:hidden px-4 py-3">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="font-medium transition-colors hover:text-gray-400 list-none cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}

          <Button
            className="text-lime-500 bg-green-400 h-15 w-45"
            onClick={() => setIsOpen(false)}
          >
            Register now <MoveRightIcon className="size-5" />
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
