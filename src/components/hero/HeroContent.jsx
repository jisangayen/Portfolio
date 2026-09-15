import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary } from "../Button";
import { Sparkles, ArrowRight } from "lucide-react";
import { roles } from "./heroData";

const HeroContent = ({ roleIndex }) => {
  return (
    <div className="lg:col-span-7">
      
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-zinc-700 dark:text-zinc-300 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider">
          Available for Q1/Q2 Projects
        </span>
      </motion.div>

      {/* Kinetic Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] font-black leading-[0.92] tracking-tight text-zinc-900 dark:text-white mb-5">
          FULL-STACK <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500">
            ENGINEER
            {/* Decorative Rotating Sparkle */}
            <motion.span
              animate={{ rotate: [0, 180, 360], scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute -top-2 -right-8 text-PrimaryColor dark:text-PrimaryColor2 hidden sm:inline-block"
            >
              <Sparkles size={28} />
            </motion.span>
          </span>
        </h1>
      </motion.div>

      {/* Dynamic Rotating Role Animator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2.5 mb-6"
      >
        <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          Specialized in
        </span>
        <div className="h-7 overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-mono text-xs sm:text-sm font-bold text-PrimaryColor dark:text-PrimaryColor2 px-2.5 py-0.5 rounded-md bg-PrimaryColor/10 dark:bg-PrimaryColor/20 border border-PrimaryColor/20"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bio Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-8"
      >
        I am{" "}
        <span className="text-zinc-950 dark:text-zinc-100 font-semibold underline decoration-PrimaryColor/40 decoration-2 underline-offset-4">
          Jisan Hoque Gayen
        </span>
        . Crafting reliable, scalable, and high-performance digital products with obsessive attention to detail.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap items-center gap-4 sm:gap-6"
      >
        <ButtonPrimary label="Explore Work" href="#work" />

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-3 px-6 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md text-zinc-700 dark:text-zinc-300 hover:border-PrimaryColor/50 hover:text-zinc-950 dark:hover:text-white transition-all shadow-sm"
        >
          <span className="text-xs font-bold uppercase tracking-wider">Get In Touch</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-PrimaryColor dark:text-PrimaryColor2" />
        </motion.a>
      </motion.div>

    </div>
  );
};

HeroContent.propTypes = {
  roleIndex: PropTypes.number.isRequired,
};

export default HeroContent;
