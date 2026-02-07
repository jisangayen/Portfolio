import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const Navbar = ({ navOpen }) => {
  // We use state now instead of manual refs for the active link
  // This makes the component more "React-way" and reliable
  const [activeLink, setActiveLink] = React.useState('#home');

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contact', link: '#contact', mobileOnly: true }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''} relative flex items-center p-1 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-full`}>
      {navItems.map(({ label, link, mobileOnly }, key) => (
        <a
          href={link}
          key={key}
          onClick={() => setActiveLink(link)}
          className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 z-10 
            ${activeLink === link ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}
            ${mobileOnly ? 'md:hidden' : ''}`}
        >
          {label}

          {/* This is the magic "Active Box" */}
          {activeLink === link && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-gradient-to-r from-PrimaryColor/20 to-PrimaryColor2/20 border border-PrimaryColor/50 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </a>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};