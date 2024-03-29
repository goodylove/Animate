import React from 'react'
import { Button } from '../../components/common/Button'
import AddLiquidity from '../../components/AddLiquidity'

function Hero() {
  return (
    <div className='relative'>
      <div
        style={{
          background: `url("/assets/hero.png")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '',
          display: 'flex',
           alignItems: 'center',
          gap:"20px",

          flexDirection: 'column',
        }}
      >
        <h1 className=' font-extrabold text-white text-6xl  text-center   leading-[1.5] my-4'>
          Oracle Free Perpetual
          <br /> Volatility Trading
        </h1>
        <p className='text-white text-center my-6 text-lg'>
          A novel primitive for scaling DeFi liquidity through <br />
          permissionless risk markets
        </p>

      <div className='bg-[#FF630B]  h-[400px] w-[400px]  absolute z-10 right-2 bottom-0 rounded-full blur-[150px]'></div>
        <div className='flex gap-5 my-5'>
          <Button className='p-3 rounded-md bg-[#b44201]  shadow-lg  text-white  font-semibold text-2xl slide '>
            Launch App
          </Button>
          <Button className='p-3 rounded-md border-white border   text-white  font-semibold text-2xl slide '>
            Learn More
          </Button>
        </div>
        
         

        <div className='flex items-end w-full justify-center gap-3 relative'>
          <div className='absolute left-[16rem] flex-col gap-5 flex  bottom-5 starshere justify-evenly  '>
               <div className='-rotate-[30deg] my-5'>
           <div className='flex items-center gap-3 p-2 rounded bg-[#2C1310] text-[#FF630B]'>
          <img src='/assets/icons/Star 1.png' />
          <span>33.3%</span>
        </div>
        </div>
         <div className='-rotate-[30deg] my-5'>
           <div className='flex items-center gap-3 p-2 rounded bg-[#2C1310] text-[#FF630B]'>
          <img src='/assets/icons/Star 1.png' />
          <span>56.3%</span>
        </div>
       </div>
          </div>
           <div className='card max-w-[600px] w-full rounded-xl '>
           <AddLiquidity />
             <span class="span top"></span>
                <span class="span right"></span>
                <span class="span bottom"></span>
                <span class="span left"></span>


          
        </div>

        
        </div>
        
       
      </div>
    </div>
  )
}

export default Hero
