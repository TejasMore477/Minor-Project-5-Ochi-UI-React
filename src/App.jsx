import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Playfull />
        <Featured />
        <Cards />
        <Footer />
      </div>
    
    </>
  )
}

export default App