import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AboutCounter from "./AboutCounter";

const AboutStatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
      {stats.map(({ label, number, suffix, icon: Icon, desc, accent }, key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: key * 0.08 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group relative p-3.5 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Ambient Hover Glow */}
          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${accent} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none`} />

          <div className="flex items-center justify-between mb-2.5 sm:mb-4 relative z-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-PrimaryColor dark:text-PrimaryColor2 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Icon size={16} className="sm:w-5 sm:h-5" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 dark:text-zinc-500 font-bold">
              0{key + 1}
            </span>
          </div>

          <div className="relative z-10">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight flex items-baseline">
              <AboutCounter to={number} />
              <span className="text-PrimaryColor dark:text-PrimaryColor2 ml-0.5 sm:ml-1 text-xl sm:text-2xl lg:text-3xl font-black">
                {suffix}
              </span>
            </div>
            
            <p className="text-[10px] sm:text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1 sm:mt-1.5 uppercase tracking-wider">
              {label}
            </p>
            
            <p className="text-[9px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug line-clamp-1 sm:line-clamp-none">
              {desc}
            </p>

            {/* Bottom Progress Accent Bar */}
            <div className="mt-2.5 sm:mt-4 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className={`h-full w-full bg-gradient-to-r ${accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

AboutStatsGrid.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      suffix: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      desc: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutStatsGrid;
