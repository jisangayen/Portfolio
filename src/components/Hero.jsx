import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonPrimary } from "./Button";
import {
  Github,
  Instagram,
  Linkedin,
  ArrowDown,
  MousePointer2,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    /* Changed min-h-screen to min-h-fit and adjusted padding for mobile */
    <section
      id="home"
      className="relative min-h-fit lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-zinc-950"
    >
      {/* --- 1. ENGINEERING GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* --- 2. DYNAMIC MESH GRADIENTS --- */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-PrimaryColor/20 blur-[140px] rounded-full -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-PrimaryColor2/10 blur-[140px] rounded-full -z-10"
      />

      {/* --- 3. SIDEBARS --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:flex fixed left-12 bottom-0 flex-col items-center gap-8 z-50"
      >
        <div className="flex flex-col gap-6 text-zinc-500">
          {[Github, Linkedin, Instagram].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -4, color: "#fff" }}
              href="#"
              className="transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-zinc-800 to-zinc-800" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:flex fixed right-12 bottom-0 flex-col items-center gap-8 z-50"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 [writing-mode:vertical-lr] rotate-180">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-PrimaryColor"
        >
          <ArrowDown size={18} />
        </motion.div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-zinc-800 to-zinc-800" />
      </motion.div>

      {/* --- 4. MAIN CONTENT --- */}
      <div className="container px-6 relative z-10 ">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {/* Status Badge - Adjusted margin for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6 lg:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[8vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter text-white mb-8 lg:mb-10">
              FULL-STACK <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2">
                ENGINEER
                <motion.span
                  className="absolute -right-20 -top-4 hidden lg:block text-PrimaryColor"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <MousePointer2 size={60} fill="currentColor" />
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Bio & Actions - Tightened text for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-zinc-500 text-base md:text-2xl max-w-2xl leading-relaxed mb-10 lg:mb-12">
              I am{" "}
              <span className="text-zinc-100 underline decoration-PrimaryColor/40 decoration-4 underline-offset-4">
                Jisan Hoque Gayen
              </span>
              . Turning ideas into reliable, high-quality applications built for
              real-world scale.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              <ButtonPrimary label="Explore Work" href="#work" />
              <a
                href="#contact"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-PrimaryColor transition-colors">
                  <ArrowDown
                    size={16}
                    className="text-zinc-500 group-hover:text-PrimaryColor transition-colors"
                  />
                </div>
                <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  Get in touch
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Large text watermark */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
        <h2 className="text-[20vw] font-black leading-none translate-y-1/2">
          DEVELOPER
        </h2>
      </div>
    </section>
  );
};

export default Hero;
