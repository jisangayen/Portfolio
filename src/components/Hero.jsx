import React from "react";
import { motion } from "framer-motion";
import { ButtonPrimary } from "./Button";
// Assuming you use Lucide or similar for icons, or you can use SVGs
import { Github, Instagram, Linkedin, ArrowDown } from "lucide-react"; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-0 overflow-hidden bg-zinc-950">
      
      {/* --- 1. LEFT SIDEBAR: SOCIALS --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden xl:flex fixed left-10 bottom-0 flex-col items-center gap-6 z-50"
      >
        <div className="flex flex-col gap-5 text-zinc-400">
          <a href="https://github.com" target="_blank" className="hover:text-PrimaryColor transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-PrimaryColor transition-colors"><Linkedin size={20} /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-PrimaryColor transition-colors"><Instagram size={20} /></a>
        </div>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-zinc-700 to-zinc-700"></div>
      </motion.div>

      {/* --- 2. RIGHT SIDEBAR: SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden xl:flex fixed right-10 bottom-0 flex-col items-center gap-6 z-50"
      >
        <p className="vertical-text text-xs tracking-[0.3em] text-zinc-500 uppercase font-medium rotate-180 [writing-mode:vertical-lr]">
          Scroll Down
        </p>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-PrimaryColor"
        >
          <ArrowDown size={20} />
        </motion.div>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-zinc-700 to-zinc-700"></div>
      </motion.div>

      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-PrimaryColor/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-PrimaryColor2/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
              Available for Hire
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-100 leading-[0.85] mb-8">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2">
              ARCHITECT
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            I build high-performance web applications with 
            <span className="text-zinc-100"> React & Tailwind</span>. 
            Focused on clean code and exceptional user experiences.
          </p>

          <div className="flex items-center gap-6">
            <ButtonPrimary label="View Projects" href="#projects" />
            <div className="h-[1px] w-12 bg-zinc-800"></div>
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-PrimaryColor transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;