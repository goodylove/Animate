import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiArrowDownCircleLine } from "react-icons/ri";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import CoinsComponent from '../common/coins';
import { Button } from '../common/Button';

function AddLiquidity() {
  return (
      <div className=' bg-[#131625]   p-4  rounded-lg '>
          <div className='flex items-center gap-3 py-2 my-3 '>
              <span className='font-bold text-xl text-white '>Add Liquidity</span>
              <IoIosInformationCircleOutline className='text-gray-500' size={25}/>
              
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
          <div className='my-3' >
              <h2 className='text-white py-2 text-base font-bold px-3'>Provide Collateral</h2>
              <CoinsComponent/>
          <CoinsComponent />
          </div>
          <Button className="w-full text-white slide  text-2xl font-semibold bg-[#b44201] p-3 rounded-md my-3">Provide Liquidty</Button>
    </div>
  )
}

export default AddLiquidity