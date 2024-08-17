import React, { useState } from 'react'

function Cards() {
    const packs = [
        {logo:"src/assets/images/logo001.svg",btn:"©2019-2020"},
        {logo:"src/assets/images/logo002.svg",btn:"RATTING 5.0 ON CLUTCH"},
        {logo:"src/assets/images/logo003.png",btn:"BUISNESS BOOTCAMP ALUMINI"},
    ]

    const [pack, setPack] = useState(packs);
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2"  className='h-[80vh] w-full grid grid-flow-col px-16 gap-5 '>
        {pack.map((items,index)=>(
           <div key={index} className={`h-[53vh] mt-32 rounded-2xl px-6 py-3 ${index === 0? "w-[45vw] bg-emerald-800":"w-[22vw] bg-zinc-900"}`}>
                <div className='w-full h-[85%] grid place-items-center'>   
                    <img className='w-[8vw] h-[10vh] rounded-xl' src={`${items.logo}`} alt="" />        
                </div>
                <button className='px-3 text-white py-2 border-2 border-gray-500 rounded-full text-sm'>{items.btn}</button>
            </div> 
        ))}
    </div>
  )
}

export default Cards