import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, X, Mail, MessageSquare } from 'lucide-react';

export const Navbar = ({ navOpen, setNavOpen }) => {
  const [activeLink, setActiveLink] = useState('#home');
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Resume', link: '#resume', isResume: true },
    { label: 'Contact', link: '#contact', isContact: true },
  ];

  const handleLinkClick = (e, item) => {
    // Keep track of the active sliding pill across all tabs
    setActiveLink(item.link);

    if (item.isResume) {
      e.preventDefault();
      setShowContactPopup(false);
      setShowResumePopup(true);
      if (setNavOpen) setNavOpen(false);
      return;
    }
    
    if (item.isContact) {
      e.preventDefault();
      setShowResumePopup(false);
      setShowContactPopup(true);
      if (setNavOpen) setNavOpen(false);
      return;
    }
    
    setShowResumePopup(false);
    setShowContactPopup(false);
    if (setNavOpen) setNavOpen(false);
  };

  return (
    <>
      {/* --- PREMIUM NAVBAR --- */}
      <nav className={`
        md:relative md:flex md:items-center top-16 md:top-0 p-1.5 md:bg-zinc-950/40 md:backdrop-blur-xl md:border md:border-zinc-800/60 md:rounded-full
        fixed right-4 left-4 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] z-50 
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${navOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'}
      `}>
        <div className="flex flex-col md:flex-row gap-1 w-full md:w-auto">
          {navItems.map((item, key) => (
            <motion.a
              href={item.link}
              key={key}
              onClick={(e) => handleLinkClick(e, item)}
              className={`relative px-5 py-3 md:py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 z-10 text-center rounded-full
                ${activeLink === item.link ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeLink === item.link && (
                <motion.div 
                  layoutId="active-pill" 
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-zinc-800/20 border border-zinc-700/30 rounded-xl md:rounded-full z-0" 
                />
              )}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* --- PREMIUM RESUME POPUP --- */}
      <AnimatePresence>
        {showResumePopup && (
          <div className="fixed top-80 inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowResumePopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800/80 p-8 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
            >
              <button onClick={() => setShowResumePopup(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-200 transition-colors">
                <X size={20} />
              </button>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-zinc-700/50 shadow-inner">
                  <FileText className="text-zinc-200" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-[0.05em] uppercase mb-1.5">View Resume</h3>
                <p className="text-zinc-400 text-xs px-2 mb-6 leading-relaxed">Access my professional experience or download a copy for offline viewing.</p>
                <div className="grid gap-3">
                  <a href="/Jisan_Hoque_Gayen.pdf" target="_blank" className="flex items-center justify-center gap-2.5 w-full bg-white text-zinc-950 py-3.5 rounded-xl font-medium tracking-wider text-xs hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200">
                    View Online <ExternalLink size={14} />
                  </a>
                  <a href="/Jisan_Hoque_Gayen.pdf" download className="flex items-center justify-center gap-2.5 w-full bg-zinc-800/50 text-zinc-200 py-3.5 rounded-xl font-medium tracking-wider text-xs border border-zinc-700/40 hover:bg-zinc-800 hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer">
                    Download PDF <Download size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- PREMIUM CONTACT POPUP --- */}
      <AnimatePresence>
        {showContactPopup && (
          <div className="fixed top-80 inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowContactPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800/80 p-8 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
            >
              <button onClick={() => setShowContactPopup(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-200 transition-colors">
                <X size={20} />
              </button>
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-zinc-700/50 shadow-inner">
                  <Mail className="text-zinc-200" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-[0.05em] uppercase mb-1.5">Get In Touch</h3>
                <p className="text-zinc-400 text-xs px-2 mb-6 leading-relaxed">Let's build something beautiful together. Reach out via email directly or through the contact portal.</p>
                <div className="grid gap-3">
                  <a href="mailto:jisangayen@gmail.com" className="flex items-center justify-center gap-2.5 w-full bg-white text-zinc-950 py-3.5 rounded-xl font-medium tracking-wider text-xs hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200">
                    Send Email <Mail size={14} />
                  </a>
                  <a href="#contact" onClick={() => setShowContactPopup(false)} className="flex items-center justify-center gap-2.5 w-full bg-zinc-800/50 text-zinc-200 py-3.5 rounded-xl font-medium tracking-wider text-xs border border-zinc-700/40 hover:bg-zinc-800 hover:text-white active:scale-[0.98] transition-all duration-200">
                    Fill Form <MessageSquare size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};