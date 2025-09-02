import React from 'react'

// node module
import { useState } from 'react'
// components
import { Navbar } from './Navbar'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to to-zinc-600 " >
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-4 md:grid  md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className='logo'>
                <img src="/images/L22.png"
                height={60}
                width={60}
                alt="jisan"
                /></a>
            </h1>
            <div className="relative md:justify-self-center">
              <button className="menu-btn md:hidden" onClick={()=> setNavOpen((prev) => ! prev) }>
                <span className="material-symbols-rounded">
                  {navOpen ? 'close' : 'menu'}
                </span>
              </button>
              <Navbar navOpen={navOpen}/>
            </div>
            <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end hover:bg-PrimaryColor hover:text-white transition-colors duration-300 ease-in-out'>
               Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header