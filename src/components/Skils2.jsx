import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTimes, FaChevronRight } from "react-icons/fa";

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
    color: "from-blue-500/20 to-cyan-500/20",
    barColor: "from-blue-500 to-cyan-500",
    text: "text-blue-400",
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
    color: "from-emerald-500/20 to-teal-500/20",
    barColor: "from-emerald-500 to-teal-500",
    text: "text-emerald-400",
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
    color: "from-purple-500/20 to-pink-500/20",
    barColor: "from-purple-500 to-pink-500",
    text: "text-purple-400",
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
    color: "from-amber-500/20 to-orange-500/20",
    barColor: "from-amber-500 to-orange-500",
    text: "text-amber-400",
  },
];

const Skills2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedSkill]);

  return (
    /* Changed min-h-screen to min-h-fit on mobile to reduce bottom gap */
    <section className="py-10  bg-zinc-950 relative min-h-fit overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-20 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            Technical <span className="text-zinc-500">Expertise.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center mt-4 md:hidden"
          >
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">
              Swipe to explore
            </p>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-zinc-600"
            >
              <FaChevronRight size={20} />
            </motion.div>
          </motion.div>

          <p className="hidden md:block text-zinc-500 mt-4 font-mono text-sm uppercase tracking-widest">
            Tap a card to view proficiency
          </p>
        </div>

        {/* Reduced pb-8 to pb-4 and added md:pb-0 to tighten bottom space */}
        <div className="relative group/container mb-0 md:mb-0">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layoutId={`card-${skill.id}`}
                onClick={() => setSelectedSkill(skill)}
                className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 cursor-pointer overflow-hidden flex-shrink-0 min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-zinc-800 flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110 ${skill.text}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{skill.title}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm">Details →</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="pointer-events-none absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-zinc-950 to-transparent md:hidden" />
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
              />

              <motion.div
                layoutId={`card-${selectedSkill.id}`}
                className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide"
              >
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-zinc-500 hover:text-white transition-colors z-20"
                >
                  <FaTimes size={20} />
                </button>

                <div className="flex items-center gap-4 mb-8 md:mb-10 relative z-10">
                  <div className={`text-3xl md:text-4xl ${selectedSkill.text}`}>{selectedSkill.icon}</div>
                  <h3 className="text-2xl md:text-4xl font-black text-white">{selectedSkill.title}</h3>
                </div>

                <div className="space-y-6 md:space-y-8 relative z-10">
                  {selectedSkill.desc.map((item, i) => (
                    <div key={i} className="space-y-2 md:space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-zinc-100 font-bold tracking-tight text-base md:text-lg">{item.name}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className={`${selectedSkill.text} font-mono text-xs md:text-sm font-bold`}
                        >
                          {item.level}%
                        </motion.span>
                      </div>

                      <div className="relative h-2.5 md:h-3 w-full bg-zinc-800/50 rounded-full overflow-hidden border border-zinc-700/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: 0.1 + (i * 0.1), 
                            ease: [0.22, 1, 0.36, 1] 
                          }}
                          className={`h-full bg-gradient-to-r ${selectedSkill.barColor} relative`}
                        >
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2, 
                              ease: "linear" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${selectedSkill.color} blur-3xl opacity-30 md:opacity-50`} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
    </section>
  );
};

export default Skills2;