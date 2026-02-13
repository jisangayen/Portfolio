import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonPrimary } from "./Button";
import { ArrowUpRight, ChevronUp, Globe, Sparkles } from "lucide-react";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/jisangayen" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jisan-gayen/" },
  { label: "Instagram", href: "https://www.instagram.com/jisan__hoque/" },
  { label: "Facebook", href: "https://www.facebook.com/jisan.h.gayen" },
];

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (window.innerWidth < 768) return; // Disable magnetic on mobile for better touch UX
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Reduced travel distance for mobile parallax
  const textX = useTransform(scrollYProgress, [0, 1], [-50, 0]);



  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={container}
      className="relative bg-[#080808] pt-20 pb-6 md:pt-32 md:pb-10 overflow-hidden border-t border-zinc-900/50"
    >
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-PrimaryColor/5 blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-32">
          {/* --- TOP: CALL TO ACTION --- */}
          <div className="lg:col-span-7">
            <motion.div style={{ x: textX }}>
              <h2 className="text-[15vw] lg:text-[7rem] font-bold text-white leading-[0.8] tracking-tightest mb-8 md:mb-12">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-zinc-500 italic">
                  SOMETHING.
                </span>
              </h2>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
              <Magnetic>
                <ButtonPrimary
                  href="mailto:jisangayen@gmail.com"
                  label="Start a Project"
                />
              </Magnetic>

              <div className="flex flex-col gap-1 border-l border-zinc-800 pl-4 sm:border-none sm:pl-0">
                <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] md:text-xs uppercase tracking-tighter">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available for Freelance
                </div>
                <div className="flex items-center gap-2 text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase">
                  <Globe size={10} />
                  <span>Based in India — Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- LINKS SECTION: Tightened for Mobile --- */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4 md:space-y-8">
                <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">
                  Menu
                </p>
                <ul className="space-y-2 md:space-y-4">
                  {sitemap.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.href}
                        className="text-sm md:text-xl text-zinc-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 md:space-y-8">
                <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">
                  Social
                </p>
                <ul className="space-y-2 md:space-y-4">
                  {socials.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between text-zinc-400 hover:text-white transition-all border-b border-zinc-900 pb-1 text-sm md:text-lg"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Optimized stacking --- */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-center justify-between md:justify-start gap-6">
            <div className="text-white font-bold text-lg md:text-xl tracking-tighter">
              JISAN<span className="text-PrimaryColor animate-pulse">_</span>
            </div>
          </div>

          <div className="flex items-center justify-between md:contents">
            <div className="text-zinc-600 text-[11px] tracking-wide">
              © {new Date().getFullYear()} Jisan Hoque Gayen. All rights reserved.
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group relative w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 border border-zinc-800"
            >
              <ChevronUp
                size={20}
                className="relative z-10 group-hover:text-PrimaryColor transition-colors"
              />
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-PrimaryColor/50 to-transparent"
      />
    </footer>
  );
};

export default Footer;
