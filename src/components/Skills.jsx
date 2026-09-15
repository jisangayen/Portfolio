import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu } from 'lucide-react';
import SkillsCard from './SkillsCard';

const skillItem = [
  { imgSrc: '/images/react.svg', label: 'React 19', desc: 'Frontend Engine', tag: 'Expert' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Core Logic & ES6+', tag: 'Advanced' },
  { imgSrc: '/images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'Modern Styling', tag: 'Mastery' },
  { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Runtime Server', tag: 'Backend' },
  { imgSrc: '/images/expressjs.svg', label: 'Express.js', desc: 'REST APIs', tag: 'Backend' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL Database', tag: 'Database' },
  { imgSrc: '/images/css3.svg', label: 'CSS3 & Modern UI', desc: 'Responsive Design', tag: 'UI/UX' },
  { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Wireframing & UI', tag: 'Design' },
];

const firstRow = skillItem.slice(0, 4);
const secondRow = skillItem.slice(4);

const Skills = () => {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300" id="skills">
      
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-PrimaryColor/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-PrimaryColor2/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse delay-700" />

      <div className="container px-6 mx-auto max-w-7xl mb-6 sm:mb-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm mb-4"
          >
            <Cpu size={12} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              Tech Arsenal • Tools & Frameworks
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tight leading-none mb-5"
          >
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500">POWERS.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] max-w-2xl leading-relaxed"
          >
            Building resilient digital products with an <span className="text-zinc-950 dark:text-white font-bold">advanced full-stack ecosystem</span>
          </motion.p>
        </div>
      </div>

      {/* DYNAMIC DUAL-ROW COUNTER-ROTATING MARQUEES */}
      <div className="flex flex-col gap-5 lg:gap-6 relative">
        
        {/* Left & Right Edge Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moving Right -> Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1080] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-5 shrink-0"
          >
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((item, key) => (
              <div key={key} className="w-[280px] sm:w-[310px]">
                <SkillsCard
                  imgSrc={item.imgSrc}
                  label={item.label}
                  desc={item.desc}
                  tag={item.tag}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left -> Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [-1080, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-5 shrink-0"
          >
            {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((item, key) => (
              <div key={key} className="w-[280px] sm:w-[310px]">
                <SkillsCard
                  imgSrc={item.imgSrc}
                  label={item.label}
                  desc={item.desc}
                  tag={item.tag}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;