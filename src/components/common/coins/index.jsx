import React from 'react'

function CoinsComponent() {
  return (
      <div className=' '>
          <div className='flex items-center justify-between px-3 bg-[#161926] py-2 rounded-md opacity-[0.2px]'>
          <div className='flex items-center  gap-3  bg-[#2A2D3C] rounded-md p-2  justify-center '>
                  <img src="/assets/icons/eth.svg" />
                  <span className='text-white font-extrabold '>ETH</span>
          </div>
          <div className='text-white text-lg font-extrabold'>0.346</div>
          </div>
          <div className='flex justify-between items-center px-3 text-gray-500 py-2 text-xs'>
              <span>Available balance</span>
              <span>2.473844736 ETH</span>
          </div>
      </div>
  )
}

export default CoinsComponent