import React, { useState } from 'react'

function Featured() {
    let data = [
        {title:"FYDE",image:"bg-Feature1",subArr:["AUDIT","COPYWRITIN","SALES DECK","SLIDES DESIGN"]},
        {title:"VISE",image:"bg-Feature2",subArr:["AGENCY","COMPANY PRESENTATION"]},
        {title:"PREMIUM BLEND",image:"bg-Feature3",subArr:["BRANDED TEMPLATE"]},
        {title:"TRAWA",image:"bg-Feature4",subArr:["BRAND IDENTITY","DESIGN RESEARCH","INVESTOR DECK"]},
    ]

    const [featured, setFeatured] = useState(data);

  return (
    <div className='w-full pt-16 px-16'>
        <h1 className='text-[3vw] font-semibold tracking-tight'>Featured projects</h1>
        <div className='w-full border-t-[2px] my-10'></div>
        <div className='w-full  grid grid-cols-2 gap-5'>

            {featured.map((card,no)=>(
                        <div key={no} className='w-full  h-[90vh]'>
                            <h3 className='flex items-center gap-1 text-lg font-light mb-5'> <div className='size-2 bg-black rounded-full'></div>{card.title}</h3>
                            <div className='w-full h-[80%]  relative'>
                                <h2 className={`absolute top-1/2 ${no % 2 === 0 ? "left-full -translate-x-[50%]" : "right-full translate-x-[50%]"} -translate-y-[50%] z-10 text-[6vw] font-bold text-lime-400 tracking-tight`}>
                                {card.title.split(' ').map((alphab, index)=><span key={index}>{alphab}</span>)}
                                </h2>
                                <div className={`scale-[100%] rounded-xl w-full h-full ${card.image} bg-cover bg-center`}></div>
                            </div>
                            <div className='flex gap-3 mt-5'>
                                {card.subArr.map((tag,index)=>(
                                    <button key={index} className='px-3 py-1 rounded-full border-2 border-gray-700 hover:bg-black hover:text-white transition duration-700'>{tag}</button>
                                ))}
                            </div>
                        </div>
            ))}
        </div>
    </div>
  )
}

export default Featured