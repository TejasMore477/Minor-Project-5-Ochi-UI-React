import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-12 bg-green-900 rounded-t-[3.4rem]'>
        <div className='h-fit border-b-2 border-t-2 border-gray-500  overflow-x-hidden overflow-y-hidden text-white flex whitespace-nowrap gap-10 leading-none'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] font-bold font-title -mb-6'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] font-bold font-title -mb-6'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] font-bold font-title -mb-6'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] font-bold font-title -mb-6'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee