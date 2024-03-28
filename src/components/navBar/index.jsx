import React from 'react'
import { Button } from '../common/Button'

function NavBar() {
  return (
    <nav className='flex justify-between items-center p-5'>
      <img src='/assets/logo.png' alt='' />

      <div className='flex gap-5 rounded-full    bg-[#FFFFFF08]  text-white text-xl font-semibold border-gray-600  font-serif border-[1px] p-4 '>
        <span>Blog</span>
        <span>Changelog</span>
        <span>Documentation</span>
      </div>

      <Button className='p-3 rounded-md bg-[#b44201]   text-white w-44 font-semibold text-2xl slide '>
        Launch App
      </Button>
    </nav>
  )
}

export default NavBar
