import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import ResumeModal from './ResumeModal';
import { navItems } from './navData';

export const Navbar = ({ navOpen, setNavOpen }) => {
  const [activeLink, setActiveLink] = useState('#home');
  const [showResumePopup, setShowResumePopup] = useState(false);

  const handleLinkClick = (e, item) => {
    setActiveLink(item.link);

    if (item.isResume) {
      e.preventDefault();
      setShowResumePopup(true);
      if (setNavOpen) setNavOpen(false);
      return;
    }

    setShowResumePopup(false);
    if (setNavOpen) setNavOpen(false);
  };

  return (
    <>
      {/* Floating Pill Navigation Bar */}
      <nav className={`
        md:relative md:flex md:items-center top-16 md:top-0 p-1.5 
        md:bg-white/80 dark:md:bg-zinc-950/40 md:backdrop-blur-xl md:border md:border-zinc-200/80 dark:md:border-zinc-800/60 md:rounded-full
        fixed right-4 left-4 rounded-2xl bg-white/95 dark:bg-zinc-950/95 border border-zinc-200/90 dark:border-zinc-800/80 
        shadow-[0_24px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] z-50 
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${navOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'}
      `}>
        <NavLinks
          navItems={navItems}
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
        />
      </nav>

      {/* Resume Modal Teleported to Document Body */}
      <ResumeModal
        isOpen={showResumePopup}
        onClose={() => setShowResumePopup(false)}
      />
    </>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool,
  setNavOpen: PropTypes.func,
};

export default Navbar;
