import React from 'react'
import { motion } from 'framer-motion'
import SkillsCard from './SkillsCard'

const skillItem = [
  { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
  { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
  { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
  { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
  { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
];

// Split skills for two rows of marquee
const firstRow = skillItem.slice(0, 4);
const secondRow = skillItem.slice(4);

const Skills = () => {
  return (
    <section className='relative py-24 lg:py-32 overflow-hidden bg-zinc-950' id="skills">
      
      {/* 1. LAYERED BACKGROUND GRADIENTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-PrimaryColor/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-PrimaryColor2/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse delay-700" />

      <div className="container px-6 mb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-zinc-100 tracking-tighter leading-none mb-6"
          >
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2">POWERS.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-sm md:text-base uppercase tracking-[0.2em] max-w-2xl"
          >
            Solving complex problems with an <span className="text-zinc-100">advanced modern stack</span>
          </motion.p>
        </div>
      </div>

      {/* 2. DYNAMIC COUNTER-ROTATING MARQUEES */}
      <div className="flex flex-col gap-6 lg:gap-10">
        
        {/* Row 1: Moving Right */}
        <div className="flex overflow-hidden mask-fade-edges">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...firstRow, ...firstRow, ...firstRow].map(({imgSrc, label, desc}, key) => (
              <div key={key} className="w-[280px]">
                <SkillsCard
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-PrimaryColor/50 transition-colors"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left */}
        <div className="flex overflow-hidden mask-fade-edges">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...secondRow, ...secondRow, ...secondRow].map(({imgSrc, label, desc}, key) => (
              <div key={key} className="w-[280px]">
                <SkillsCard
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-PrimaryColor2/50 transition-colors"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. INTERACTIVE MOUSE LIGHTING (Spotlight) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.03),transparent_100%)]" />
    </section>
  )
}

export default Skills