import React from 'react'
import { Button } from './../../components/common/Button/index';
import {motion} from "framer-motion"
import { textContainer, textVariant2 } from '../../util/motion';

function EarnProviding() {
  const  text = "Multiple AMMs"
  return (
      <div className=' flex  items-center w-full  justify-around  flex-col md:flex-row py-10 md:px-0 px-3 '>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{repeatType:"mirror",type:"tween",duration:2,ease:"easeOut"}}
        
        className='flex flex-col gap-5 items-start my-7'>
        <motion.p
          
           variants={textContainer}
              initial="hidden"
              whileInView="show"
          className='text-white'>
          {
          Array.from(text).map((value, index) => {
            return <motion.span key={index}
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
              
            
            >
              {value === "" ? "\u00A0": value}
            </motion.span>
          })

          }
        </motion.p>


        <h1 className='text-white md:text-5xl text-4xl leading-[1.3] font-black'>Earn by Providing
 <br/>
          Liquidity</h1>
        <p className='text-white'>Earn a higher yield by providing liquidity through GammaSwap.<br/>
          Think of our wrapped pools like wrapped tokens.</p>
        <p className='text-white'>The GammaSwap protocol will directly deposit liquidity into<br/>
         the underlying AMM and provide an LP token to the depositor<br/>
          representing the position.</p>
        
        <Button className="bg-[#262526] text-white p-3 font-semibold rounded-md w-32">Learn More</Button>
              
          </motion.div>
        
          <motion.div className="relative mt-30  flex items-center ">
              
              <img src="/assets/earn.png" width={400} height={400}/>
              <img src="/assets/erann.png" width={300} height={300}  className='absolute left-10 erann'/>
        </motion.div>
    </div>
    
  )
}

export default EarnProviding