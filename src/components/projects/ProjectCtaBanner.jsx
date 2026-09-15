import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, MessageCircle } from "lucide-react";

const ProjectCtaBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative mt-8 sm:mt-10 p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-zinc-50/90 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 border border-zinc-200/90 dark:border-zinc-800/90 backdrop-blur-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-PrimaryColor/20 via-PrimaryColor2/15 to-transparent blur-3xl rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Cybernetic Micro-Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-25 dark:opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,#000_60%,transparent_100%)]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Content Area */}
        <div className="space-y-3 text-center lg:text-left max-w-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            Have a Vision or Project in Mind? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500 italic font-black">
              Let's engineer it together.
            </span>
          </h3>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
              <Zap size={13} className="text-amber-500" /> Rapid Turnaround
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
              <ShieldCheck size={13} className="text-emerald-500" /> Clean Architecture
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
              <MessageCircle size={13} className="text-PrimaryColor dark:text-PrimaryColor2" /> Direct Communication
            </span>
          </div>
        </div>

        {/* Right Action Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 shrink-0 overflow-hidden"
        >
          {/* Shimmer on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10 group-hover:text-white transition-colors">Start Collaboration</span>
          <ArrowRight size={16} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </motion.a>

      </div>
    </motion.div>
  );
};

export default ProjectCtaBanner;
