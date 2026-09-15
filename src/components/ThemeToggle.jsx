import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`group relative flex items-center w-[68px] h-[34px] rounded-full 
        bg-zinc-200/80 dark:bg-zinc-900/90 
        border border-zinc-300/80 dark:border-zinc-700/60 
        shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.6)]
        backdrop-blur-xl transition-colors duration-300 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-PrimaryColor cursor-pointer select-none ${className}`}
    >
      {/* Sliding Thumb */}
      <motion.div
        className={`absolute top-1 left-1 w-[26px] h-[26px] rounded-full flex items-center justify-center z-10
          ${isDark
            ? 'bg-zinc-800 border border-zinc-700 shadow-[0_2px_10px_rgba(99,102,241,0.35),0_1px_2px_rgba(0,0,0,0.5)]'
            : 'bg-white border border-amber-100/80 shadow-[0_2px_10px_rgba(245,158,11,0.3),0_1px_2px_rgba(0,0,0,0.08)]'
          }`}
        animate={{
          x: isDark ? 34 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 28,
        }}
      >
        {/* Ambient Glow Aura */}
        <div
          className={`absolute inset-0 rounded-full blur-[3px] opacity-40 transition-colors duration-300 pointer-events-none
            ${isDark ? 'bg-indigo-400' : 'bg-amber-400'}`}
        />

        {/* Active Animated Icon inside Thumb */}
        <motion.div
          key={isDark ? 'moon-active' : 'sun-active'}
          initial={{ rotate: isDark ? -45 : 45, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          className="relative z-10 flex items-center justify-center"
        >
          {isDark ? (
            <Moon size={14} className="text-amber-300 fill-amber-300/30" />
          ) : (
            <Sun size={14} className="text-amber-500 fill-amber-500/25" />
          )}
        </motion.div>
      </motion.div>

      {/* Dual Static Track Icons for Context */}
      <div className="relative z-0 flex w-full items-center justify-between px-2 pointer-events-none select-none">
        {/* Sun Track Slot */}
        <div className={`flex items-center justify-center w-5 h-5 transition-opacity duration-300 ${!isDark ? 'opacity-0' : 'opacity-35 text-zinc-400 dark:text-zinc-500'}`}>
          <Sun size={13} />
        </div>

        {/* Moon Track Slot */}
        <div className={`flex items-center justify-center w-5 h-5 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-35 text-zinc-500 dark:text-zinc-400'}`}>
          <Moon size={13} />
        </div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
