import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, FileText, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";

const AboutStatusCard = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="group relative lg:col-span-4 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-3 sm:gap-4 lg:gap-6 overflow-hidden"
    >
      {/* Ambient Inner Orb */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="space-y-3 sm:space-y-4 lg:space-y-5 relative z-10">
        
        {/* Global Location & Live IST Clock */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 shadow-sm flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-PrimaryColor/10 dark:bg-PrimaryColor/20 flex items-center justify-center text-PrimaryColor dark:text-PrimaryColor2 shrink-0">
              <Globe size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Location & Zone</p>
              <p className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-white">
                India • IST (UTC+5:30)
              </p>
            </div>
          </div>

          {currentTime && (
            <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 text-[10px] sm:text-[11px] font-mono font-bold text-zinc-700 dark:text-zinc-300 shrink-0 shadow-sm">
              <Clock size={11} className="sm:w-3 sm:h-3 text-PrimaryColor dark:text-PrimaryColor2" />
              <span>{currentTime}</span>
            </div>
          )}
        </div>

        {/* End-to-End Reliability Guarantee (Desktop view) */}
        <div className="hidden lg:flex items-center gap-3 px-1 text-zinc-600 dark:text-zinc-400 text-xs">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck size={14} />
          </div>
          <span>Production-grade clean code & CI/CD deployment</span>
        </div>

      </div>

      {/* Horizontal Split for Mobile/Tablet View */}
      <div className="grid grid-cols-2 lg:hidden gap-2 sm:gap-3 relative z-10">
        <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck size={13} />
          </div>
          <span className="text-[10px] sm:text-xs font-medium leading-tight line-clamp-2">Clean CI/CD Code</span>
        </div>

        <motion.a
          href="#resume"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-[10px] sm:text-xs uppercase tracking-wider overflow-hidden shadow-md active:scale-98"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors">
            <FileText size={13} className="sm:w-3.5 sm:h-3.5" />
            <span className="truncate">Resume</span>
          </div>
          <ArrowUpRight size={13} className="relative z-10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
        </motion.a>
      </div>

      {/* Quick Resume Link (Desktop view) */}
      <motion.a
        href="#resume"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden lg:flex group relative z-10 items-center justify-between p-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs uppercase tracking-wider overflow-hidden shadow-md transition-all active:scale-98"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-PrimaryColor to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center gap-2.5 group-hover:text-white transition-colors">
          <FileText size={16} />
          <span>Resume & Credentials</span>
        </div>
        <ArrowUpRight size={16} className="relative z-10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </motion.a>
    </motion.div>
  );
};

export default AboutStatusCard;
