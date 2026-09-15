import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const NavLinks = ({ navItems, activeLink, onLinkClick }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 w-full md:w-auto">
      {navItems.map((item, key) => (
        <motion.a
          href={item.link}
          key={key}
          onClick={(e) => onLinkClick(e, item)}
          className={`relative px-5 py-3 md:py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 z-10 text-center rounded-full
            ${activeLink === item.link ? 'text-zinc-950 dark:text-white font-semibold' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'}`}
        >
          <span className="relative z-10">{item.label}</span>
          {activeLink === item.link && (
            <motion.div 
              layoutId="active-pill" 
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-0 bg-zinc-200/80 dark:bg-gradient-to-b dark:from-zinc-800/60 dark:to-zinc-800/30 border border-zinc-300/80 dark:border-zinc-700/30 rounded-xl md:rounded-full z-0 shadow-sm" 
            />
          )}
        </motion.a>
      ))}
    </div>
  );
};

NavLinks.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      isResume: PropTypes.bool,
      isContact: PropTypes.bool,
    })
  ).isRequired,
  activeLink: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default NavLinks;
