import React from 'react'
import { Button } from '../../components/common/Button'
import AddLiquidity from '../../components/AddLiquidity'
import { motion } from "framer-motion";

import { container ,poppin,textVariant} from '../../util/motion'

function Hero() {
  return (
    < motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      
      className='relative overflow-hidden'>
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
        <motion.h1
         
          initial={{ opacity: 0, y: -50, }}
          transition={{type:"tween",duration:1}}
          // animate={{ opacity: 1, y: 0 }}
            whileInView={{opacity:1,y: 0}}
        
          className=' font-extrabold text-white md:text-6xl  text-3xl  text-center   leading-[1.5] my-4'>
          Oracle Free Perpetual
          <br /> Volatility Trading
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, x: -50, }}
          transition={{type:"tween",duration:1}}
          // animate={{opacity:1, x:0}}
            whileInView={{opacity:1,x: 0}}
        
          className='text-white text-center my-6 text-lg'>
          A novel primitive for scaling DeFi liquidity through <br />
          permissionless risk markets
        </motion.p>

      <div className='bg-[#FF630B]  h-[400px] w-[400px]  absolute z-10 right-2 bottom-24 rounded-full blur-[150px]'></div>
        <motion.div
           initial={{ opacity: 0, y: -50, }}
          transition={{type:"tween",duration:5,delay:0.2}}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{opacity:1,y: 0}}
        
          className='flex gap-5 my-5'>
          <Button className='p-3 rounded-md bg-[#b44201]  shadow-lg  text-white  font-semibold text-lg slide '>
            Launch App
          </Button>
          <Button className='p-3 rounded-md border-white border   text-white  font-semibold text-lg slide '>
            Learn More
          </Button>
        </motion.div>
        
         

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
          <motion.div
            initial={{ opacity: 0, x: 100, }}
          transition={{type:"tween",duration:5,ease: "easeOut"}}
       
          whileInView={{opacity:1,x: 0}}
            
            
            className='card max-w-[600px] w-full rounded-xl my-6 '>
           <AddLiquidity />
             <span class="span top"></span>
                <span class="span right"></span>
                <span class="span bottom"></span>
                <span class="span left"></span>


          
        </motion.div>

        
        </div>
        
       
      </div>
    </motion.div>
  )
}

export default Hero
