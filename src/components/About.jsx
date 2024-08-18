import React from 'react'

function About() {
  return (
    <div className='w-full md:rounded-t-[3.4rem] rounded-b-[1rem] overflow-hidden bg-lime-400 py-20 md:px-16 px-5'>
        <h2 className='md:text-[3.5vw] text-[5.5vw] leading-none'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span>raise funds</span>, 
            <span className='underline'> sell prod­ucts</span>, 
            <span className='underline'> ex­plain com­plex ideas</span>, and 
            <span className='underline'> hire great peo­ple</span>.
        </h2>

        <div className='w-full border-t-[1px] border-gray-600 mt-20'></div>
        <div className='flex flex-col md:flex-row gap-5 mt-2 mb-36 justify-between w-full text-[1.2vw]'>
            <h4 className='w-[80%] text-[4.5vw] md:text-base'>What you can expect:</h4>
            <div>
                <p className='md:w-[70%] text-[4.5vw] md:text-base'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p className='md:w-[70%] mt-5  text-[4.5vw] md:text-base'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='underline mt-auto'>
                <p className='text-lg md:text-base'>Instagram</p>
                <p className='text-lg md:text-base'>Behance</p>
                <p className='text-lg md:text-base'>FaceBook</p>
                <p className='text-lg md:text-base'>LinkedIn</p>
            </div>
        </div>

        <div className='w-full border-t-[1px] border-gray-600 mt-20'></div>
        <div className='flex md:flex-row flex-col gap-5 items-start justify-between w-full pt-4'>
            <div className='w-1/2'>
                <h1 className='text-[3vw] font-semibold tracking-tight'>Our approach:</h1>
                <button className='w-36 mt-3 px-3 py-4 rounded-full bg-black text-white flex items-center gap-3'>
                    READ MORE
                    <div className='size-1 bg-white rounded-full'></div>
                    </button>
            </div>
            <div style={{ backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')" }} className='md:w-1/2 w-full h-[55vh] rounded-3xl bg-center bg-cover'>
            </div>
        </div>

    </div>
  )
}

export default About
