import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Navbar } from './Navbar'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  
  // 1. DYNAMIC SCROLL ANIMATION
  const { scrollY } = useScroll()
  
  // Shrink height from 80px (h-20) to 64px (h-16) on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["80px", "64px"])
  // Darken and blur background more as we scroll
  const headerBg = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.8)"]
  )
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  return (
    <motion.header 
      style={{ 
        height: headerHeight, 
        backgroundColor: headerBg, 
        backdropFilter: headerBlur 
      }}
      className="fixed top-0 left-0 w-full flex items-center z-50 transition-colors duration-300 border-b border-transparent data-[scrolled=true]:border-zinc-800/50"
      // Custom attribute for CSS targeting if needed
      data-scrolled={scrollY.get() > 50}
    >
      <div className="container px-4 md:px-6 flex justify-between items-center gap-6">
        
        {/* --- LOGO WITH MAGNETIC HOVER --- */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center group-hover:border-PrimaryColor/50 transition-colors">
              <img 
                src="/images/L22.png" 
                alt="jisan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-PrimaryColor/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="hidden sm:block font-black text-xl tracking-tighter text-zinc-100">
              JISAN<span className="text-PrimaryColor">.</span>
            </span>
          </a>
        </motion.div>

        {/* --- NAVIGATION & MENU BUTTON --- */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Mobile Menu Button with Framer Motion Icon Change */}
            <button 
              className="menu-btn lg:hidden w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 hover:border-PrimaryColor/50 transition-all active:scale-90"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <AnimatePresence mode="wait">
                <motion.span 
                  key={navOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-rounded"
                >
                  {navOpen ? 'close' : 'menu'}
                </motion.span>
              </AnimatePresence>
            </button>
            
            <Navbar navOpen={navOpen} />
          </div>

          {/* --- CALL TO ACTION --- */}
          {/* <motion.a 
            href="#contact" 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
          >
            Contact Me
            <span className="material-symbols-rounded text-lg">arrow_outward</span>
          </motion.a> */}
        </div>

      </div>
    </motion.header>
  )
}

export default Header