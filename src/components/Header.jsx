import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Navbar } from './Navbar'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const { isDark } = useTheme()
  
  // 1. DYNAMIC SCROLL ANIMATIONS
  const { scrollY, scrollYProgress } = useScroll()
  
  // Shrink height and adjust aesthetics on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["80px", "64px"])
  const headerBg = useTransform(
    scrollY, 
    [0, 100], 
    [
      isDark ? "rgba(9, 9, 11, 0)" : "rgba(255, 255, 255, 0)",
      isDark ? "rgba(9, 9, 11, 0.85)" : "rgba(255, 255, 255, 0.85)"
    ]
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
      className="fixed top-0 left-0 w-full flex items-center z-50 border-b border-transparent transition-colors duration-300 dark:data-[scrolled=true]:border-zinc-800/50 data-[scrolled=true]:border-zinc-200/80"
      data-scrolled={scrollY.get() > 50}
    >
      {/* --- READING PROGRESS BAR --- */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 origin-left"
        style={{ scaleX }}
      />

      <div className="container px-4 md:px-6 flex justify-between items-center gap-4">
        
        {/* --- LOGO --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden flex items-center justify-center group-hover:border-PrimaryColor/50 transition-colors">
              <img 
                src="/images/L22.png" 
                alt="jisan" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-black text-xl tracking-tighter text-zinc-900 dark:text-zinc-100">
             JISAN<span className="text-PrimaryColor animate-pulse">_</span>
            </span>
          </a>
        </motion.div>

        {/* --- NAVIGATION & THEME TOGGLE --- */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="relative flex items-center">
            {/* Desktop Navbar */}
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>

          {/* Theme Toggle with generous left spacing & subtle vertical divider */}
          <div className="flex items-center pl-1 sm:pl-3 md:pl-6 md:ml-3 md:border-l md:border-zinc-200/80 dark:md:border-zinc-800/80">
            <ThemeToggle />
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-100 transition-all active:scale-90 shadow-sm"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close Menu' : 'Open Menu'}
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
        </div>

      </div>
    </motion.header>
  )
}

export default Header