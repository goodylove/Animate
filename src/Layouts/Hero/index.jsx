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
          gap:"5px",

          flexDirection: 'column',
        }}
      >
        <h1 className=' font-black text-white text-6xl my-3 text-center  leading-snug'>
          Oracle Free Perpetual
          <br /> Volatility Trading
        </h1>
        <p className='text-white text-center my-6 text-3xl'>
          A novel primitive for scaling DeFi liquidity through <br />
          permissionless risk markets
        </p>

        <div className='flex gap-5 my-3'>
          <Button className='p-3 rounded-md bg-[#b44201]  shadow-lg  text-white w-44 font-semibold text-2xl slide '>
            Launch App
          </Button>
          <Button className='p-3 rounded-md border-white border   text-white w-44 font-semibold text-2xl slide '>
            Learn More
          </Button>
        </div>
        <AddLiquidity/>
      </div>
    </div>
  )
}

export default Hero
