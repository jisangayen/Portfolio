import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ imgScr, title, tags, projectLink, classes }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative p-px rounded-3xl bg-gradient-to-b from-zinc-700/50 to-transparent ${classes}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative p-5 rounded-[23px] bg-zinc-900 border border-zinc-800/50 h-full overflow-hidden">
        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[23px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: useMotionTemplate`radial-gradient(350px circle at ${useTransform(x, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(y, [-0.5, 0.5], ["0%", "100%"])}, rgba(var(--primary-rgb), 0.1), transparent 80%)` }}
        />

        <figure className="relative rounded-xl aspect-video mb-4 overflow-hidden bg-zinc-800">
          <img src={imgScr} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
        </figure>

        <div className="flex justify-between items-end" style={{ transform: "translateZ(30px)" }}>
          <div>
            <h3 className="text-xl font-black text-zinc-100 group-hover:text-PrimaryColor transition-colors leading-none mb-2">{title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((label, key) => (
                <span key={key} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight text-zinc-500 bg-zinc-950/50 border border-zinc-800 rounded-md">{label}</span>
              ))}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-100 group-hover:bg-PrimaryColor group-hover:text-zinc-950 transition-all shrink-0">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <a href={projectLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" />
      </div>
    </motion.div>
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