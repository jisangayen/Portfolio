import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AboutPillars = ({ pillars }) => {
  return (
    <div>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 md:grid md:grid-cols-3 md:gap-5 pb-2 md:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {pillars.map(({ icon: Icon, tag, title, desc, color, iconBg, iconColor, borderGlow }, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: key * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group relative min-w-[78vw] sm:min-w-[280px] md:min-w-0 snap-center shrink-0 md:shrink p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-2xl shadow-sm hover:shadow-xl ${borderGlow} transition-all duration-300 overflow-hidden flex flex-col justify-between`}
          >
            {/* Ambient Corner Glow */}
            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${color} blur-2xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

            <div className="relative z-10">
              
              {/* Top Tag & Icon Row */}
              <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-5">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${iconBg} border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center ${iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  {tag}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-2.5 tracking-tight group-hover:text-PrimaryColor dark:group-hover:text-PrimaryColor2 transition-colors">
                {title}
              </h4>
              
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Horizontal Swipe Indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-2.5 md:hidden text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
        <span>← Swipe to explore pillars →</span>
      </div>
    </div>
  );
};

AboutPillars.propTypes = {
  pillars: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      iconBg: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
      borderGlow: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutPillars;
