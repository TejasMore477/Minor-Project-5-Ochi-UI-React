import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full sm:h-screen sm:mb-0 mb-36 bg-slate-50 border-t-2 sm:px-16 px-5'>
        <div className='w-full relative'>
            <div className='md:mt-48 mt-36 w-fit'>
                {["We create","eye-opening","presentations"].map((word, index)=>(
                    <div key={index} className='flex items-center justify-start gap-3'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"11vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='md:w-[11vw]  md:h-[7vw] hidden md:block rounded-md overflow-hidden bg-landingImage bg-center bg-cover'> 
                        </motion.div>)}
                        <div className='font-title md:text-[8.3vw] text-[17vw] font-extrabold md:leading-[7.4vw] leading-[16vw] overflow-hidden'><h1>{word}</h1></div>
                    </div>
                ))}
            </div>
            <button className='hidden md:block bg-red-600 px-3 py-1 text-white -rotate-90 absolute top-16 -right-[8rem]'>Site of the Day<span className='ml-3 font-bold text-lg'>W.</span></button>
        </div>
        <div className='w-full border-t-[2px] border-slate-200 md:mt-32  mt-20 flex flex-col md:flex-row items-start justify-between pt-4 cursor-pointer gap-5'>
            {["For public and private companies","From the first pitch to IPO"].map((paras,index)=>(
                <p key={index} className=' text-lg leading-none tracking-tight'>{paras}</p>
            ))}
            <div id='startProject' className='flex items-center justify-center gap-3 group '>
                <button className='px-4 py-1 rounded-full border-2 border-zinc-600 uppercase tracking-tight font-semibold group-hover:bg-black group-hover:text-white transition duration-700 '>start the project</button>
                <div className='rounded-full border-2 border-zinc-600 p-2 text-xl font-semibold group-hover:bg-black group-hover:text-white transition duration-700 '>
                    <MdArrowOutward />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage