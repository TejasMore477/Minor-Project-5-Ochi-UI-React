import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

function StartProject() {
    const [rotateVal, setRotateVal] = useState(0);
    useEffect(() => {
      const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
  
        const deltaX = mouseX - window.innerWidth / 2;
        const deltaY = mouseY - window.innerHeight / 2;
  
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  
        setRotateVal(angle - 180);
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    const elements = Array.from({ length: 2 }).map((_, i) => (
      <div key={i} className='size-[14vw] bg-white rounded-full grid items-center justify-center'>
        <div className='size-[8.5vw] bg-black relative rounded-full'>
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotateVal}deg)`,
            }}
            className='w-full absolute top-1/2 left-1/2'
          >
            <div className='size-[1.5vw] top-0 right-0 bg-white rounded-full'></div>
          </div>
        </div>
      </div>
    ));
  return (
    <div className='w-full h-screen bg-lime-400 pt-20 relative'>
        <h1 className='font-extrabold text-[12.5vw] uppercase leading-[10vw] text-center tracking-tighter'>Ready</h1>
        <h1 className='font-extrabold text-[12.5vw] uppercase leading-[10vw] text-center tracking-tighter'>to start</h1>
        <h1 className='font-extrabold text-[12.5vw] uppercase leading-[10vw] text-center tracking-tighter'>the project?</h1>

        <div  data-scroll data-scroll-section data-scroll-speed=".6" className='absolute top-[40%] left-[35%] -translate-x-[50%] -translate-y-[70%] flex items-center justify-center gap-5'>
          {elements}
        </div>

        <div id='startProject' className='flex items-center justify-center gap-3 group mt-20'>
                <button className='px-4 py-1  text-2xl rounded-full border-2 border-zinc-600 uppercase tracking-tight font-semibold group-hover:bg-black group-hover:text-white transition duration-700 '>start the project</button>
                <div className='rounded-full border-2 border-zinc-600 p-2 text-2xl font-semibold group-hover:bg-black group-hover:text-white transition duration-700 '>
                    <MdArrowOutward />
                </div>
        </div>
    </div>     
  )
}

export default StartProject