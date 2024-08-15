import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-slate-50 border-t-2 px-16'>
        <div className='w-full relative'>
            <div className='mt-48 w-fit'>
                {["We create","eye-opening","presentations"].map((word, index)=>(
                    <div key={index} className='flex items-center justify-start gap-3'>
                        {index === 1 && (<div className='w-[11vw]  h-[7vw] rounded-md overflow-hidden bg-yellow-300'> 
                        </div>)}
                        <div className='font-title text-[8.3vw] font-extrabold leading-[7.4vw] overflow-hidden'><h1>{word}</h1></div>
                    </div>
                ))}
            </div>
            <button className='bg-red-600 px-3 py-1 text-white -rotate-90 absolute top-16 -right-[8rem]'>Site of the Day<span className='ml-3 font-bold text-lg'>W.</span></button>
        </div>
        <div className='w-full border-t-[2px] border-slate-200 mt-32 flex items-start justify-between pt-4 cursor-pointer '>
            {["For public and private companies","From the first pitch to IPO"].map((paras,index)=>(
                <p className=' text-lg leading-none tracking-tight'>{paras}</p>
            ))}
            <div id='startProject' className='flex items-center justify-center gap-3 group'>
                <button className='px-4 py-1 rounded-full border-2 border-zinc-600 uppercase tracking-tight font-semibold group-hover:bg-black group-hover:text-white'>start the project</button>
                <div className='rounded-full border-2 border-zinc-600 p-2 text-xl font-semibold group-hover:bg-black group-hover:text-white'>
                    <MdArrowOutward />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage