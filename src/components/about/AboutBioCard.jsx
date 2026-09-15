import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const AboutBioCard = ({ skillsPills }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative lg:col-span-8 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Corner Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-PrimaryColor/15 via-PrimaryColor2/10 to-transparent blur-3xl rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />

      <div className="space-y-4 sm:space-y-6 relative z-10">

        {/* Profile Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 pb-3 sm:pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
              Jisan Hoque Gayen
            </h3>
            <p className="text-[11px] sm:text-xs font-mono font-medium text-PrimaryColor dark:text-PrimaryColor2 mt-0.5 sm:mt-1">
              Full-Stack MERN Engineer
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 text-[9px] sm:text-[10px] font-mono font-bold text-zinc-700 dark:text-zinc-300">
            <Code2 size={12} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <span>MERN Stack Specialist</span>
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-2.5 sm:space-y-3">
          <p className="text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
            I engineer complete full-stack web applications where <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-emerald-500 font-bold">clean architectural logic</span> meets intuitive, fluid user experiences.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-xs lg:text-sm leading-relaxed">
            From crafting modular, accessible React and Next.js frontends to developing secure, high-throughput Node.js/Express APIs and optimized MongoDB database schemas, every system is designed end-to-end for speed, maintainability, and scale.
          </p>
        </div>

      </div>

      {/* Interactive Core Tech Arsenal Strip */}
      <div className="pt-4 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800/80 mt-4 sm:mt-6 relative z-10">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <p className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Engineered With • Core Technologies
          </p>
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
            Hover to inspect proficiency
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {skillsPills.map((skill, i) => {
            const isHovered = activeSkill?.name === skill.name;
            return (
              <motion.button
                key={i}
                type="button"
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono font-medium rounded-lg sm:rounded-xl border transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                  isHovered
                    ? "bg-PrimaryColor text-white border-PrimaryColor shadow-md"
                    : "bg-zinc-50 dark:bg-zinc-800/70 border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:border-PrimaryColor/50"
                }`}
              >
                <span>{skill.name}</span>
                {isHovered && (
                  <span className="text-[9px] sm:text-[10px] opacity-90 font-bold">({skill.level})</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

    </motion.div>
  );
};

AboutBioCard.propTypes = {
  skillsPills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutBioCard;
