import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTimes } from "react-icons/fa";

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

  return (
    <section className="py-24 bg-zinc-950 relative min-h-screen overflow-hidden">
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 -z-10" />

      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Technical <span className="text-zinc-500">Expertise.</span>
          </motion.h2>
          <p className="text-zinc-400 mt-4 font-mono text-sm uppercase tracking-widest">
            Click a card to view proficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layoutId={`card-${skill.id}`}
              onClick={() => setSelectedSkill(skill)}
              className="group relative p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 ${skill.text}`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-zinc-500 text-sm">View Details →</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- POPUP MODAL --- */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
              {/* Backdrop with Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
              />

              {/* Modal Content */}
              <motion.div
                layoutId={`card-${selectedSkill.id}`}
                className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-20"
                >
                  <FaTimes size={24} />
                </button>

                {/* Header inside Modal */}
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className={`text-4xl ${selectedSkill.text}`}>{selectedSkill.icon}</div>
                  <h3 className="text-4xl font-black text-white">{selectedSkill.title}</h3>
                </div>

                {/* Skills Mapping with Fill Animation */}
                <div className="space-y-8 relative z-10">
                  {selectedSkill.desc.map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-zinc-100 font-bold tracking-tight text-lg">{item.name}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className={`${selectedSkill.text} font-mono text-sm font-bold`}
                        >
                          {item.level}%
                        </motion.span>
                      </div>

                      <div className="relative h-3 w-full bg-zinc-800/50 rounded-full overflow-hidden border border-zinc-700/30">
                        {/* The Animated Filling Bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.2 + (i * 0.1), 
                            ease: [0.22, 1, 0.36, 1] 
                          }}
                          className={`h-full bg-gradient-to-r ${selectedSkill.barColor} relative`}
                        >
                          {/* Glossy Moving Shimmer */}
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2, 
                              ease: "linear" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Bottom Glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${selectedSkill.color} blur-3xl opacity-50`} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills2;