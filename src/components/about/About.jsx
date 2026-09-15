import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AboutBioCard from "./AboutBioCard";
import AboutStatusCard from "./AboutStatusCard";
import AboutStatsGrid from "./AboutStatsGrid";
import AboutPillars from "./AboutPillars";
import { stats, pillars, skillsPills } from "./aboutData";

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-6 sm:py-8 lg:py-10 bg-zinc-100/70 dark:bg-[#08080a] transition-colors duration-300 overflow-hidden select-none"
    >
      {/* Ambient background lighting glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-PrimaryColor/15 dark:bg-PrimaryColor/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-PrimaryColor2/15 dark:bg-PrimaryColor2/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />

      <div className="container px-4 sm:px-6 mx-auto max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-3xl mb-3 sm:mb-4 lg:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm"
          >
            <Sparkles size={12} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              About Me • The Full-Stack Engineer
            </span>
          </motion.div>
        </div>

        {/* --- LUXURY BENTO GRID SYSTEM --- */}
        <div className="space-y-3.5 sm:space-y-4 lg:space-y-5">
          
          {/* 1. TOP ROW: Main Bio Story (8 cols) + Live Radar & Status Card (4 cols) */}
          <div className="grid lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5">
            <AboutBioCard skillsPills={skillsPills} />
            <AboutStatusCard />
          </div>

          {/* 2. MIDDLE ROW: 4 Animated Stats Cards */}
          <AboutStatsGrid stats={stats} />

          {/* 3. THIRD ROW: 3 Pillars of Engineering Excellence */}
          <AboutPillars pillars={pillars} />

        </div>

      </div>
    </section>
  );
};

export default About;
