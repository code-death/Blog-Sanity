import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between sm:px-0 md:px-5 py-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <img
            className='w-44 object-contain cursor-pointer'
            src='https://links.papareact.com/yvf'
            alt='logo'
          />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
          <h3 className='cursor-pointer hover:text-green-600'>About</h3>
          <h3 className='cursor-pointer hover:text-green-600'>Contact</h3>
          <h3 className='cursor-pointer hover:bg-green-600 hover:text-white border border-green-600 px-4 py-1 rounded-full text-green-600 transition duration-150 ease-in'>
            Folllow
          </h3>
        </div>
      </div>
      <div className='flex items-center space-x-5'>
        <h3 className='cursor-pointer hover:text-green-600'>Sign In</h3>
        <h3 className='cursor-pointer hover:bg-green-600 hover:text-white border border-green-600 px-4 py-1 rounded-full text-green-600 transition duration-150 ease-in'>
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
