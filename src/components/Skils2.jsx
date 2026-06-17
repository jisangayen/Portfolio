import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTimes, FaArrowRight } from "react-icons/fa";

const skills = [
  {
    id: 1,
    title: "Frontend",
    desc: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind", level: 95 },
    ],
    icon: <FaCode />,
    color: "from-blue-500/10 to-cyan-500/10",
    barColor: "from-blue-500 to-cyan-400",
    text: "text-zinc-200 group-hover:text-cyan-400",
    activeText: "text-cyan-400"
  },
  {
    id: 2,
    title: "Backend",
    desc: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 90 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
    icon: <FaServer />,
    color: "from-emerald-500/10 to-teal-500/10",
    barColor: "from-emerald-500 to-teal-400",
    text: "text-zinc-200 group-hover:text-emerald-400",
    activeText: "text-emerald-400"
  },
  {
    id: 3,
    title: "Database",
    desc: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 70 },
      { name: "Firebase", level: 90 },
    ],
    icon: <FaDatabase />,
    color: "from-purple-500/10 to-pink-500/10",
    barColor: "from-purple-500 to-pink-400",
    text: "text-zinc-200 group-hover:text-purple-400",
    activeText: "text-purple-400"
  },
  {
    id: 4,
    title: "DevOps",
    desc: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 95 },
      { name: "Git", level: 92 },
    ],
    icon: <FaCloud />,
    color: "from-amber-500/10 to-orange-500/10",
    barColor: "from-amber-500 to-orange-400",
    text: "text-zinc-200 group-hover:text-amber-400",
    activeText: "text-amber-400"
  },
];

const Skills2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedSkill ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedSkill]);

  return (
    <section className="py-20 bg-zinc-950 relative min-h-fit overflow-hidden select-none">
      {/* Absolute Geometric Light Background Structure */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-zinc-950 to-zinc-950 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="container px-6 mx-auto max-w-7xl">
        {/* Header Space */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500 mb-3"
          >
            Capabilities & Stack
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-6xl font-semibold text-white tracking-tight"
          >
            Technical <span className="text-zinc-600 font-light">Expertise.</span>
          </motion.h2>
          
          <p className="mt-5 text-zinc-500 text-xs uppercase tracking-widest font-medium block md:hidden animate-pulse">
            Swipe left to explore →
          </p>
          <p className="mt-5 text-zinc-500 text-xs uppercase tracking-widest font-medium hidden md:block opacity-60">
            Select a system quadrant to view proficiencies
          </p>
        </div>

        {/* Grid Canvas Wrapper */}
        <div className="relative w-full ">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-6 md:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layoutId={`card-${skill.id}`}
                onClick={() => setSelectedSkill(skill)}
                className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-zinc-900 hover:border-zinc-800/80 cursor-pointer overflow-hidden flex-shrink-0 min-w-[82vw] sm:min-w-[300px] md:min-w-0 snap-center transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 90 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Micro Ambient Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full  justify-between ">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800/60 flex items-center justify-center text-lg mb-8 transition-all duration-300 group-hover:scale-105 ${skill.text} shadow-inner`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-medium text-white tracking-tight mb-2">{skill.title}</h3>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 font-medium">
                    Analyze Core <FaArrowRight size={10} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Deep-Dive View Overlay */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-zinc-950/70 backdrop-blur-xl"
              />

              <motion.div
                layoutId={`card-${selectedSkill.id}`}
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
                className="relative w-full max-w-xl bg-zinc-900/90 border border-zinc-800/80 p-8 md:p-12 rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[85vh] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden backdrop-blur-md"
              >
                {/* Modern Frameless Close Trigger */}
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-950/40 border border-zinc-800/60 text-zinc-400 hover:text-white hover:border-zinc-700/80 transition-all duration-300 z-20"
                >
                  <FaTimes size={12} />
                </button>

                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-zinc-800/60 relative z-10">
                  <div className={`text-2xl w-12 h-12 rounded-xl bg-zinc-950/50 border border-zinc-800/60 flex items-center justify-center ${selectedSkill.activeText}`}>
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">{selectedSkill.title}</h3>
                    <p className="text-zinc-500 text-[11px] uppercase tracking-widest mt-0.5">System Performance Matrix</p>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-7 relative z-10">
                  {selectedSkill.desc.map((item, i) => (
                    <div key={i} className="space-y-2.5">
                      <div className="flex justify-between items-end">
                        <span className="text-zinc-200 font-medium tracking-tight text-sm md:text-base">{item.name}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className={`${selectedSkill.activeText} font-mono text-xs font-semibold`}
                        >
                          {item.level}%
                        </motion.span>
                      </div>

                      {/* Clean Precision Metric Slider Bars */}
                      <div className="relative h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/40">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.05 + (i * 0.08), 
                            ease: [0.16, 1, 0.3, 1] 
                          }}
                          className={`h-full bg-gradient-to-r ${selectedSkill.barColor} relative rounded-full`}
                        >
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2.5, 
                              ease: "linear" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Refined Context Atmospheric Light Flare */}
                <div className={`absolute -bottom-12 -right-12 w-44 h-44 bg-gradient-to-br ${selectedSkill.color} blur-[100px] opacity-40 pointer-events-none`} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills2;