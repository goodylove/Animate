import React from 'react'
import { Button } from '../common/Button'
import { HiOutlineMenu } from "react-icons/hi";

function NavBar() {
  return (
    <nav className='flex justify-between items-center p-5'>
      <img src='/assets/logo.png' alt='' />

      <div className='md:flex gap-5 rounded-full   sm:hidden hidden   bg-[#FFFFFF08]  text-white text-xl font-semibold border-gray-600  font-serif border-[1px] p-4 '>
        <span>Blog</span>
        <span>Changelog</span>
        <span>Documentation</span>
      </div>

      <Button className='p-3 rounded-md bg-[#b44201]   text-white w-44 font-semibold text-2xl slide hidden md:flex '>
        Launch App
      </Button>
      <div className='md:hidden flex'>
        <HiOutlineMenu size={ 30} className='text-white' />
     </div>
    </nav>
  )
}

export default NavBar
