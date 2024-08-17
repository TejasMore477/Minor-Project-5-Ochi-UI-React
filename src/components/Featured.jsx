import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Featured() {
    let data = [
        {title:"FYDE",image:"bg-Feature1",subArr:["AUDIT","COPYWRITING","SALES DECK","SLIDES DESIGN"]},
        {title:"VISE",image:"bg-Feature2",subArr:["AGENCY","COMPANY PRESENTATION"]},
        {title:"PREMIUM BLEND",image:"bg-Feature3",subArr:["BRANDED TEMPLATE"]},
        {title:"TRAWA",image:"bg-Feature4",subArr:["BRAND IDENTITY","DESIGN RESEARCH","INVESTOR DECK"]},
    ]

    const [hovering, setHovering] = useState(Array(data.length).fill(false));

    const handleMouseEnter = (index) => {
        const updatedHovering = [...hovering];
        updatedHovering[index] = true;
        setHovering(updatedHovering);
    };

    const handleMouseLeave = (index) => {
        const updatedHovering = [...hovering];
        updatedHovering[index] = false;
        setHovering(updatedHovering);
    };

    return (
        <div className='w-full pt-16 px-16'>
            <h1 className='text-[3vw] font-semibold tracking-tight'>Featured projects</h1>
            <div className='w-full border-t-[2px] my-10'></div>
            <div className='w-full grid grid-cols-2 gap-5'>

                {data.map((card, no) => (
                    <div 
                        onMouseEnter={() => handleMouseEnter(no)} 
                        onMouseLeave={() => handleMouseLeave(no)} 
                        key={no} 
                        className='w-full h-[90vh]'
                    >
                        <h3 className='flex items-center gap-1 text-lg font-light mb-5'>
                            <div className='size-2 bg-black rounded-full'></div>{card.title}
                        </h3>
                        <div className='w-full h-[80%] relative'>
                            <h2 className={`absolute overflow-hidden flex top-1/2 ${no % 2 === 0 ? "left-full -translate-x-[50%]" : "right-full translate-x-[50%]"} -translate-y-[50%] z-10 text-[6vw] font-bold text-lime-400 tracking-tight`}>
                                {card.title.split('').map((alphab, index) => (
                                    <motion.span 
                                        initial={{ y: "100%" }} 
                                        animate={hovering[no] ? { y: "0" } : { y: "100%" }} 
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }} 
                                        className='inline-block' 
                                        key={index}
                                    >
                                        {alphab}
                                    </motion.span>
                                ))}
                            </h2>
                            <div className={`scale-[100%] rounded-xl w-full h-full ${card.image} bg-cover bg-center`}></div>
                        </div>
                        <div className='flex gap-3 mt-5'>
                            {card.subArr.map((tag, index) => (
                                <button 
                                    key={index} 
                                    className='px-3 py-1 rounded-full border-2 border-gray-700 hover:bg-black hover:text-white transition duration-700'
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid place-items-center mb-5'>
                <div className='px-5 py-3 rounded-full flex items-center justify-center bg-black text-white group'>  
                    <button className='font-semibold w-fit mr-2'>VIEW ALL CASE STUDIES</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
