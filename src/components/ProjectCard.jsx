import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ imgScr, title, tags, projectLink, classes }) => {
  return (
    <div className={`group relative rounded-xl bg-zinc-900 border border-zinc-800/80 p-3 overflow-hidden hover:border-zinc-700/60 transition-all duration-300 flex flex-col h-full max-w-sm ${classes}`}>
      
      {/* Small Aspect Ratio Image Container */}
      <div className="relative rounded-lg aspect-video mb-3 overflow-hidden bg-zinc-950">
        <img 
          src={imgScr} 
          alt={title} 
          className="object-cover w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500" 
          loading="lazy"
        />
      </div>

      {/* Content Space */}
      <div className="flex justify-between items-end gap-3 mt-auto">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors leading-tight mb-2 tracking-tight">
            {title}
          </h3>
          
          {/* Micro Metadata Tech Labels */}
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((label, key) => (
              <span 
                key={key} 
                className="px-1.5 py-0.5 text-[9px] font-medium tracking-wide text-zinc-400 bg-zinc-950 border border-zinc-800/60 rounded"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        
        {/* Compact Directional Arrow Box */}
        <div className="p-2 rounded-lg bg-zinc-950 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 border border-zinc-800/80 group-hover:border-zinc-700/60 transition-all duration-300 shrink-0">
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Production-ready Click Mask */}
      <a 
        href={projectLink} 
        target="_blank" 
        rel="noreferrer" 
        className="absolute inset-0 z-10" 
        aria-label={`View project details for ${title}`}
      />
    </div>
  );
};

ProjectCard.propTypes = {
  imgScr: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard; 