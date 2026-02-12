import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ href, target = '_self', label, icon, classes = "" }) => {
  const ref = useRef(null);
  
  // Minimal Magnetic Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Very subtle magnetic pull (0.15 instead of 0.3)
    x.set((clientX - (left + width / 2)) * 0.15);
    y.set((clientY - (top + height / 2)) * 0.15);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <>
      {/* Subtle Hover Background Fill */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
      />

      <div className="relative z-10 flex items-center gap-2">
        <span className="tracking-[0.3em] uppercase font-medium text-[9px] lg:text-[10px] text-zinc-400 group-hover:text-white transition-colors duration-300">
          {label}
        </span>

        {icon && (
          <motion.span 
            className="material-symbols-rounded text-[1.1rem] text-zinc-500 group-hover:text-PrimaryColor transition-colors duration-300"
          >
            {icon}
          </motion.span>
        )}
      </div>
    </>
  );

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: resetPosition,
    style: { x: springX, y: springY },
    whileTap: { scale: 0.97 },
    className: `group relative flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-full 
                bg-transparent border border-zinc-800 text-white transition-all duration-500
                hover:border-zinc-500 hover:bg-zinc-900/40 ${classes}`
  };

  return href ? (
    <motion.a href={href} target={target} {...commonProps}>{content}</motion.a>
  ) : (
    <motion.button type="button" {...commonProps}>{content}</motion.button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

export { ButtonPrimary };