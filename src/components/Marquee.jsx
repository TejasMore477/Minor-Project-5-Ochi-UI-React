import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
 let marqueeElem = Array.from({length:4}).map((ele,index)=>(
  <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} key={index} className='md:text-[20vw] text-[30vw] font-bold font-title md:-mb-6 pr-10'>We Are Ochi</motion.h1>
 ))
  return (
    <div   data-scroll data-scroll-section data-scroll-speed=".1" className='w-full md:py-12 py-6 bg-emerald-800 md:rounded-t-[3.4rem] rounded-[1rem]'>
        <div className='h-fit border-b-2 border-t-2 border-gray-500  overflow-x-hidden overflow-y-hidden text-white flex whitespace-nowrap leading-none'>
          {marqueeElem}
        </div>
    </div>
  )
}

export default Marquee