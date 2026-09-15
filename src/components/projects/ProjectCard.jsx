import React from 'react';
import PropTypes from 'prop-types';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

const ProjectCard = ({ 
  imgSrc, 
  title, 
  desc, 
  tags = [], 
  category,
  featured = false,
  projectLink, 
  githubLink,
  classes = '' 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`group relative rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 p-3.5 overflow-hidden backdrop-blur-xl shadow-sm hover:shadow-lg dark:shadow-none hover:border-PrimaryColor/50 dark:hover:border-PrimaryColor2/50 transition-all duration-300 flex flex-col justify-between h-full ${classes}`}
    >
      {/* Dynamic Mouse Spotlight Border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              rgba(107, 144, 113, 0.2),
              transparent 80%
            )
          `,
        }}
      />

      <div>
        {/* Compact Thumbnail Container */}
        <div className="relative rounded-xl aspect-video mb-3 overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/60">
          <img 
            src={imgSrc} 
            alt={title} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out" 
            loading="lazy"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

          {/* Category & Featured Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
            {category && (
              <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono font-medium text-white shadow-sm">
                {category}
              </span>
            )}
            {featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-PrimaryColor/90 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={8} /> Featured
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-PrimaryColor dark:group-hover:text-PrimaryColor2 transition-colors leading-snug mb-1.5 tracking-tight truncate">
          {title}
        </h3>
        
        {desc && (
          <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed mb-2.5 line-clamp-2">
            {desc}
          </p>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 4).map((label, key) => (
            <span 
              key={key} 
              className="px-1.5 py-0.5 text-[9px] font-mono font-medium tracking-wide text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 rounded"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800/80 mt-auto z-10">
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm active:scale-95"
        >
          <span>Live Demo</span>
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/40 transition-colors"
            title="View Source Code"
          >
            <Github size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  tags: PropTypes.array.isRequired,
  category: PropTypes.string,
  featured: PropTypes.bool,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
