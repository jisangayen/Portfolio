import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary } from './Button';
import { ArrowUpRight, ChevronUp, Globe } from 'lucide-react';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/jisangayen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jisan-gayen/' },
  { label: 'Instagram', href: 'https://www.instagram.com/jisan__hoque/' },
  { label: 'Facebook', href: 'https://www.facebook.com/jisan.h.gayen' }
];

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-zinc-950 pt-32 pb-10 overflow-hidden border-t border-zinc-900">
      
      <div className="container px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          {/* --- LEFT SIDE: THE BIG CALL --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10">
                READY TO <br />
                <span className="text-PrimaryColor italic">COLLABORATE?</span>
              </h2>
              <div className="flex flex-wrap items-center gap-6">
                <ButtonPrimary
                  href="mailto:jisangayen@gmail.com"
                  label="Get in Touch"
                />
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm">
                  <Globe size={14} className="animate-spin-slow" />
                  <span>Based in India — Working Worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: LINKS --- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">Navigation</h4>
              <ul className="space-y-3">
                {sitemap.map((item, key) => (
                  <li key={key}>
                    <a href={item.href} className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-all">
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-PrimaryColor">/</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">Connect</h4>
              <ul className="space-y-3">
                {socials.map((item, key) => (
                  <li key={key}>
                    <a href={item.href} target="_blank" className="flex items-center justify-between text-zinc-400 hover:text-white transition-all group border-b border-zinc-900 pb-1">
                      {item.label}
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-zinc-900/50">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-zinc-100 font-black text-2xl tracking-tighter">
              JISAN<span className="text-PrimaryColor">.</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-zinc-800" />
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
              Local Time: <span className="text-zinc-300">{time}</span>
            </div>
          </div>

          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
            &copy; 2026 Developed with ❤️ by Jisan
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-zinc-950 transition-all shadow-xl"
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Decorative Gradient Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-PrimaryColor to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;