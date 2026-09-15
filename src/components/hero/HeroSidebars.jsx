import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { socialLinks } from "./heroData";

const HeroSidebars = () => {
  return (
    <>
      {/* Left Social Links Strip (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden xl:flex fixed left-10 bottom-0 flex-col items-center gap-7 z-40"
      >
        <div className="flex flex-col gap-5 text-zinc-500 dark:text-zinc-500">
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              title={label}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-PrimaryColor dark:hover:text-white hover:border-PrimaryColor/50 shadow-sm transition-all"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-zinc-300 dark:via-zinc-800 to-zinc-300 dark:to-zinc-800" />
      </motion.div>

      {/* Right Scroll Indicator Strip (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden xl:flex fixed right-10 bottom-0 flex-col items-center gap-6 z-40"
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 [writing-mode:vertical-lr] rotate-180">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-PrimaryColor dark:text-PrimaryColor2"
        >
          <ArrowDown size={16} />
        </motion.div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-zinc-300 dark:via-zinc-800 to-zinc-300 dark:to-zinc-800" />
      </motion.div>
    </>
  );
};

export default HeroSidebars;
