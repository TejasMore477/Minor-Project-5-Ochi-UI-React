import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'

function App() {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Playfull />
      </div>
    
    </>
  )
}

export default App