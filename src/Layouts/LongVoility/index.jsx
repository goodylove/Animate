import React from 'react'
import { Button } from './../../components/common/Button/index';
import {motion} from "framer-motion"
import { textContainer, textVariant2 } from '../../util/motion';

function LongVolitality() {
  const  text = "Perpetuals"
  return (
      <div className=' flex  items-center  justify-around  py-10 overflow-hidden  '>
          

      <motion.div
        initial={{ x: "-100%",rotate:120 }}
        transition={{ ease: 'circOut', duration: 1.8, type: 'spring',delay:0.5 }}
        whileInView={{ x: 0, rotate: 0 }}
        className="relative">
        
         <motion.div

                animate={{
                  x: [0, -10, 0], // Vertical vibrating animation
                  transition: {
                    duration: 0.1,
                    repeat: Infinity, // Repeat infinitely
                    repeatType: "loop", // Loop back and forth
                  },
                }}
              >
                <motion.div
                  animate={{
                    y: [1000, 0, 0, -1000, -1000, 1000], // Vertical flying animation
                    x: [-1000, 0, 0, 1000, 1000, -1000],
                    opacity: [0, 1, 1, 1, 0, 0],
                    transition: {
                      duration: 12,
                      repeat: Infinity, // Repeat infinitely
                      repeatType: "loop", // Loop back and forth
                    },
                  }}
                >
                  <motion.img
                    src="/assets/3dicons.png"
                    alt="dollar"
                    className="absolute -top-[30%] right-[10%]"
                  />
                </motion.div>
              </motion.div>
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-[500px]"
                 src="/assets/dollar.png"
                alt="dollar"
              />
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src="/assets/coins.png"
                alt="eth"
                className="w-[250px] absolute right-0 bottom-6 "
        />
              <div className='bg-[#FF630B]  h-[300px] w-[300px]  absolute z-10  bottom-14 rounded-full blur-[150px]'></div>

      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{repeatType:"mirror",type:"tween",duration:2,ease:"easeOut"}}
        
        className='flex flex-col gap-5 items-start'>
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

<h1 className='text-white text-5xl leading-[1.3] font-black'>Long Volatility</h1>
              <p className='text-white'>
        Earn a higher yield by providing liquidity through GammaSwap. <br />
Think of our wrapped pools like wrapped tokens.
        
        
        
                 
        </p>
        <p className='text-white'>The GammaSwap protocol will directly deposit liquidity into <br/>
the underlying AMM and provide an LP token to the depositor
 <br/>representing the position..</p>
        {/* <p className='text-white'>The GammaSwap protocol will directly deposit liquidity into<br/>
         the underlying AMM and provide an LP token to the depositor<br/>
          representing the position.</p> */}
        
        <Button className="bg-[#262526] text-white p-3 font-semibold rounded-md w-32">Learn More</Button>
              
          </motion.div>
        
      
    </div>
    
  )
}

export default LongVolitality