import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiArrowDownCircleLine } from "react-icons/ri";
import { IoArrowUpCircleOutline } from "react-icons/io5";

function AddLiquidity() {
  return (
      <div className=' bg-[#131625] max-w-[600px] w-full  p-3 my-3'>
          <div className='flex items-center gap-3 py-2 '>
              <span className='font-bold text-xl text-white '>Add Liquidity</span>
              <IoIosInformationCircleOutline className='text-gray-500' size={20}/>
              
          </div>
          <div className='bg-[#1F2230] flex items-center justify-between px-4 py-2 rounded'>
              
              <div className='flex items-center gap-2 bg-[#2A2D3C] p-2 rounded-md'>
             <span className='font-bold text-xl text-white '>Deposit</span>
              <RiArrowDownCircleLine className='text-white' size={20}/>
              
              </div>
              <div className='flex items-center gap-2 bg-[#2A2D3C] p-2 rounded-md'>
                  
             <span className='font-bold text-xl text-white '>Withdraw</span>
              <IoArrowUpCircleOutline className='text-white' size={20}/>
              </div>
          </div>
    </div>
  )
}

export default AddLiquidity