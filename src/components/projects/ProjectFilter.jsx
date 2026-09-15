import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm">
      {categories.map((cat, i) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={i}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              isActive
                ? "text-zinc-950 dark:text-white font-semibold"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <span className="relative z-10">{cat}</span>
            {isActive && (
              <motion.div
                layoutId="project-active-filter"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-sm z-0 border border-zinc-200/80 dark:border-zinc-700/60"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

ProjectFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default ProjectFilter;
