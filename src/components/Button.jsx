import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ href, target = '_self', label, icon, classes = "" }) => {
  const ref = useRef(null);

  // 1. MAGNETIC & SPOTLIGHT SETUP
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { height, width, left, top } = currentTarget.getBoundingClientRect();
    
    // Magnetic pull calculation
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);

    // Spotlight position calculation
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  // 2. DYNAMIC BACKGROUND TEMPLATE
  // This creates a glowing "liquid" light that follows the cursor
  const background = useMotionTemplate`
    radial-gradient(
      120px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.15),
      transparent 80%
    )
  `;

  const content = (
    <>
      {/* Spotlight Layer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background }}
      />
      
      {/* Animated Border Shimmer (Conic) */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,rgba(255,255,255,0.4)_100%)]"
        />
      </div>

      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        <span className="tracking-tight uppercase font-black text-sm">{label}</span>
        {icon && (
          <motion.span 
            variants={{
              hover: { x: 5, scale: 1.2, rotate: 5 }
            }}
            className="material-symbols-rounded text-[1.3em] transition-transform" 
            aria-hidden="true"
          >
            {icon}
          </motion.span>
        )}
      </span>
    </>
  );

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: resetPosition,
    style: { x: springX, y: springY, transformStyle: "preserve-3d" },
    whileHover: "hover",
    whileTap: { scale: 0.94, rotate: -1 },
    className: `group relative flex items-center justify-center px-8 py-4 overflow-hidden rounded-2xl 
                bg-zinc-900 border border-zinc-800 text-zinc-100 transition-all duration-300
                hover:border-zinc-400 hover:text-white shadow-2xl ${classes}`
  };

  if (href) {
    return (
      <motion.a href={href} target={target} {...commonProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps}>
      {content}
    </motion.button>
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