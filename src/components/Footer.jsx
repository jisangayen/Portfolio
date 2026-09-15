import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ChevronUp, 
  Globe, 
  Sparkles, 
  Copy, 
  Check, 
  Mail, 
  Clock, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  ArrowRight
} from "lucide-react";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { 
    label: "GitHub", 
    href: "https://github.com/jisangayen", 
    icon: Github, 
    handle: "@jisangayen"
  },
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/jisangayen/", 
    icon: Linkedin, 
    handle: "in/jisangayen"
  },
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/jisan__hoque/", 
    icon: Instagram, 
    handle: "@jisan__hoque"
  },
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/jisan.h.gayen", 
    icon: Facebook, 
    handle: "jisan.h.gayen"
  },
];

const Magnetic = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  const container = useRef(null);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Live India Time Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jisangayen@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={container}
      className="relative bg-zinc-100/90 dark:bg-[#070709] pt-10 pb-8 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300"
    >
      {/* --- AMBIENT GLOW EFFECTS --- */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-PrimaryColor/15 via-PrimaryColor2/5 to-transparent blur-[120px] md:blur-[180px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-PrimaryColor/10 via-PrimaryColor2/5 to-transparent blur-[100px] md:blur-[150px] rounded-full pointer-events-none -translate-x-1/4" />

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" 
      />

      <div className="container px-6 relative z-10 mx-auto max-w-7xl">
        
        {/* --- TOP: CALL TO ACTION SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-8 md:mb-10">
          
          {/* Left Column: Headline & Quick Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm mb-6 md:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] md:text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Available for new projects
                </span>
              </div>

              {/* Impactful Headline */}
              <motion.div style={{ x: textX }}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-zinc-900 dark:text-white leading-[0.95] tracking-tight mb-8">
                  LET'S BUILD <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-zinc-500 italic">
                    SOMETHING EPIC.
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Contact CTA */}
              <Magnetic>
                <a
                  href="#contact"
                  className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs md:text-sm tracking-wider uppercase overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Magnetic>

              {/* Copy Email Quick Pill */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                className="group relative flex items-center justify-between sm:justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-300/80 dark:border-zinc-800/90 text-zinc-800 dark:text-zinc-200 text-xs md:text-sm font-medium hover:border-PrimaryColor/50 dark:hover:border-PrimaryColor2/50 transition-all duration-200 shadow-sm"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-PrimaryColor dark:text-PrimaryColor2" />
                  <span className="font-mono text-xs">jisangayen@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200 dark:border-zinc-800 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400"
                      >
                        <Check size={13} /> Copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex items-center gap-1 text-[11px]"
                      >
                        <Copy size={13} /> Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Sitemap & Social Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            
            {/* Quick Navigation & Social List */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              
              {/* Sitemap Column */}
              <div className="space-y-4">
                <p className="text-zinc-400 dark:text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Navigation
                </p>
                <ul className="space-y-2.5">
                  {sitemap.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-PrimaryColor dark:hover:text-white transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-PrimaryColor transition-colors duration-200" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location & Time Widget */}
              <div className="space-y-4">
                <p className="text-zinc-400 dark:text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Location & Time
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                    <Globe size={16} className="text-PrimaryColor dark:text-PrimaryColor2 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">India</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">Working Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                    <Clock size={16} className="text-PrimaryColor dark:text-PrimaryColor2 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-mono font-semibold text-zinc-900 dark:text-white">
                        {time || "Loading..."}
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">IST (UTC +5:30)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Interactive Cards */}
            <div className="space-y-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <p className="text-zinc-400 dark:text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
                Social Profiles
              </p>
              
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map((item, key) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-PrimaryColor/40 dark:hover:border-PrimaryColor2/40 hover:bg-white dark:hover:bg-zinc-800/80 transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-PrimaryColor dark:group-hover:text-PrimaryColor2 group-hover:scale-110 transition-all shrink-0">
                          <Icon size={15} />
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                            {item.label}
                          </p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                            {item.handle}
                          </p>
                        </div>
                      </div>
                      
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-400 group-hover:text-PrimaryColor dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="text-zinc-900 dark:text-white font-black text-xl tracking-tighter">
              JISAN<span className="text-PrimaryColor animate-pulse">_</span>
            </div>
            <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">|</span>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs">
              Crafting high-performance digital experiences
            </p>
          </div>

          {/* Copyright */}
          <div className="text-zinc-500 dark:text-zinc-400 text-xs tracking-wide text-center">
            © {new Date().getFullYear()} Jisan Hoque Gayen. All rights reserved.
          </div>

          {/* Back To Top Magnetic Button */}
          <Magnetic>
            <button
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-PrimaryColor/50 dark:hover:border-PrimaryColor2/50 hover:text-zinc-900 dark:hover:text-white shadow-sm transition-all duration-200"
              aria-label="Scroll back to top"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">Top</span>
              <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-PrimaryColor group-hover:text-white transition-colors">
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </Magnetic>

        </div>

      </div>

      {/* Ambient bottom border glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-PrimaryColor/40 to-transparent" />
    </footer>
  );
};

export default Footer;
