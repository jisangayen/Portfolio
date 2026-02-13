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
    // Logic to close one if the other is opened
    if (item.isResume) {
      e.preventDefault();
      setShowContactPopup(false); // Close Contact if opening Resume
      setShowResumePopup(true);
      if (setNavOpen) setNavOpen(false);
      return;
    }
    
    if (item.isContact) {
      e.preventDefault();
      setShowResumePopup(false); // Close Resume if opening Contact
      setShowContactPopup(true);
      if (setNavOpen) setNavOpen(false);
      return;
    }
    
    // Close any open popups when clicking a regular link
    setShowResumePopup(false);
    setShowContactPopup(false);
    
    setActiveLink(item.link);
    if (setNavOpen) setNavOpen(false);
  };

  return (
    <>
      <nav className={`
        md:relative md:flex md:items-center top-16 md:top-0 md:p-1 md:bg-zinc-900/50 md:backdrop-blur-xl md:border md:border-zinc-800 md:rounded-full
        fixed  right-4 left-4 p-4 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 
        transition-all duration-500 ${navOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'}
      `}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          {navItems.map((item, key) => (
            <motion.a
              href={item.link}
              key={key}
              onClick={(e) => handleLinkClick(e, item)}
              className={`relative px-5 py-3 md:py-2 text-xs font-black uppercase tracking-[0.2em] transition-colors z-10 text-center
                ${activeLink === item.link ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              {item.label}
              {activeLink === item.link && !item.isResume && !item.isContact && (
                <motion.div layoutId="active-pill" className="absolute inset-0 bg-PrimaryColor/10 border border-PrimaryColor/50 rounded-xl md:rounded-full -z-10" />
              )}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* --- RESUME POPUP --- */}
      <AnimatePresence>
        {showResumePopup && (
          <div className="fixed top-80 inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowResumePopup(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            >
              <button onClick={() => setShowResumePopup(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-700">
                  <FileText className="text-PrimaryColor" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter mb-2">VIEW RESUME</h3>
                <p className="text-zinc-400 text-sm mb-8">Access my professional profile or download for offline viewing.</p>
                <div className="grid gap-4">
                  <a href="/JisanHoqueGayen.pdf" target="_blank" className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-PrimaryColor transition-colors">
                    View Online <ExternalLink size={16} />
                  </a>
                  <a href="/JisanHoqueGayen.pdf" download className="flex items-center justify-center gap-3 w-full bg-zinc-800 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer">
                    Download PDF <Download size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CONTACT POPUP --- */}
      <AnimatePresence>
        {showContactPopup && (
          <div className="fixed inset-0 top-80 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowContactPopup(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            >
              <button onClick={() => setShowContactPopup(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-700">
                  <Mail className="text-PrimaryColor" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter mb-2">GET IN TOUCH</h3>
                <p className="text-zinc-400 text-sm mb-8">Ready to collaborate? Reach out via email or social media.</p>
                <div className="grid gap-4">
                  <a href="mailto:jisangayen@gmail.com" className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-PrimaryColor transition-colors">
                    Send Email <Mail size={16} />
                  </a>
                  <a href="#contact" onClick={() => setShowContactPopup(false)} className="flex items-center justify-center gap-3 w-full bg-zinc-800 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs border border-zinc-700 hover:bg-zinc-700 transition-colors">
                    Fill Form <MessageSquare size={16} />
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