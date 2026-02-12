import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Navbar } from './Navbar'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  
  // 1. DYNAMIC SCROLL ANIMATIONS
  const { scrollY, scrollYProgress } = useScroll()
  
  // Shrink height and adjust aesthetics on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["80px", "64px"])
  const headerBg = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.8)"]
  )
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"])

  // 2. SMOOTH PROGRESS BAR PHYSICS
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.header 
      style={{ 
        height: headerHeight, 
        backgroundColor: headerBg, 
        backdropFilter: headerBlur 
      }}
      className="fixed top-0 left-0 w-full flex items-center z-50 border-b border-transparent transition-colors data-[scrolled=true]:border-zinc-800/50"
      data-scrolled={scrollY.get() > 50}
    >
      {/* --- READING PROGRESS BAR --- */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 origin-left"
        style={{ scaleX }}
      />

      <div className="container px-4 md:px-6 flex justify-between items-center gap-6">
        
        {/* --- LOGO --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center group-hover:border-PrimaryColor/50 transition-colors">
              <img 
                src="/images/L22.png" 
                alt="jisan" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-20 sm:ml-0 font-black text-xl tracking-tighter text-zinc-100">
             JISAN<span className="text-PrimaryColor animate-pulse">_</span>
            </span>
          </a>
        </motion.div>

        {/* --- NAVIGATION --- */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Mobile Toggle */}
            <button 
              className="lg:hidden w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 transition-all active:scale-90"
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
            
            {/* IMPORTANT: Pass setNavOpen here so the menu can close itself */}
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>

      
        </div>

      </div>
    </motion.header>
  )
}

export default Header