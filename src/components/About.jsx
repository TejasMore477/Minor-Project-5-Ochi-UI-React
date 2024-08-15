import React from 'react'

function About() {
  return (
    <div className='w-full rounded-t-[3.4rem] rounded-b-[1rem] bg-lime-400 py-20 px-16'>
        <h2 className='text-[3.5vw] leading-none'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span>raise funds</span>, 
            <span className='underline'> sell prod­ucts</span>, 
            <span className='underline'> ex­plain com­plex ideas</span>, and 
            <span className='underline'> hire great peo­ple</span>.
        </h2>

        <div className='w-full border-t-[1px] border-gray-600 mt-20'></div>
        <div className='flex mt-2 mb-36 justify-between w-full text-[1.2vw]'>
            <h4 className='w-[80%]'>What you can expect:</h4>
            <div>
                <p className='w-[70%]'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p className='w-[70%] mt-5'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='underline mt-auto'>
                <p>Instagram</p>
                <p>Behance</p>
                <p>FaceBook</p>
                <p>LinkedIn</p>
            </div>
        </div>

        <div className='w-full border-t-[1px] border-gray-600 mt-20'></div>
        <div className='flex items-start justify-between w-full pt-4'>
            <div className='w-1/2'>
                <h1 className='text-[3vw]'>Our approach:</h1>
                <button className='w-36 px-3 py-4 rounded-full bg-black text-white flex items-center gap-3'>
                    READ MORE
                    <div className='size-1 bg-white rounded-full'></div>
                    </button>
            </div>
            <div className='w-1/2 h-[55vh] bg-yellow-300 rounded-3xl'>
            </div>
        </div>

    </div>
  )
}

export default About