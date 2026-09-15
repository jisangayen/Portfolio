import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTimes, FaArrowRight } from "react-icons/fa";
import { Layers } from "lucide-react";

const skills = [
  {
    id: 1,
    title: "Frontend Architecture",
    category: "Client-Side Engineering",
    desc: [
      { name: "React 19 & Next.js", level: 95 },
      { name: "JavaScript (ES6+) & TypeScript", level: 90 },
      { name: "Tailwind CSS & Modern UI", level: 98 },
      { name: "Framer Motion & GSAP", level: 88 },
    ],
    icon: <FaCode />,
    color: "from-cyan-500/15 via-blue-500/5 to-transparent",
    barColor: "from-cyan-500 to-blue-500",
    text: "text-zinc-700 dark:text-zinc-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
    activeText: "text-cyan-500 dark:text-cyan-400"
  },
  {
    id: 2,
    title: "Backend & Systems",
    category: "Server-Side Logic",
    desc: [
      { name: "Node.js Runtime", level: 92 },
      { name: "Express.js Framework", level: 94 },
      { name: "RESTful API Design", level: 95 },
      { name: "Authentication & Security", level: 88 },
    ],
    icon: <FaServer />,
    color: "from-emerald-500/15 via-teal-500/5 to-transparent",
    barColor: "from-emerald-500 to-teal-500",
    text: "text-zinc-700 dark:text-zinc-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
    activeText: "text-emerald-500 dark:text-emerald-400"
  },
  {
    id: 3,
    title: "Database & Storage",
    category: "Data Modeling",
    desc: [
      { name: "MongoDB & Mongoose", level: 92 },
      { name: "PostgreSQL & Relational DBs", level: 84 },
      { name: "Schema Optimization & Indexing", level: 88 },
      { name: "Cloud Database Clusters", level: 90 },
    ],
    icon: <FaDatabase />,
    color: "from-purple-500/15 via-pink-500/5 to-transparent",
    barColor: "from-purple-500 to-pink-500",
    text: "text-zinc-700 dark:text-zinc-200 group-hover:text-purple-500 dark:group-hover:text-purple-400",
    activeText: "text-purple-500 dark:text-purple-400"
  },
  {
    id: 4,
    title: "DevOps & Tooling",
    category: "Deployment & CI/CD",
    desc: [
      { name: "Git, GitHub & Workflows", level: 94 },
      { name: "Vercel, Render & Cloud Hosting", level: 95 },
      { name: "Postman & API Testing", level: 92 },
      { name: "Performance Profiling", level: 90 },
    ],
    icon: <FaCloud />,
    color: "from-amber-500/15 via-orange-500/5 to-transparent",
    barColor: "from-amber-500 to-orange-500",
    text: "text-zinc-700 dark:text-zinc-200 group-hover:text-amber-500 dark:group-hover:text-amber-400",
    activeText: "text-amber-500 dark:text-amber-400"
  },
];

const Skills2 = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedSkill ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedSkill]);

  return (
    <section className="py-8 sm:py-10 bg-zinc-100/60 dark:bg-[#070709] relative min-h-fit overflow-hidden select-none transition-colors duration-300">
      
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-PrimaryColor/10 dark:bg-PrimaryColor/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />

      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* Header Space */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm mb-4">
            <Layers size={12} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              System Quadrants • Deep Dive
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500">Expertise.</span>
          </h2>
          
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-mono uppercase tracking-widest">
            <span className="sm:hidden">Swipe horizontally to explore • </span>Click any quadrant to view metrics
          </p>
        </div>

        {/* 4 System Quadrant Cards: Horizontal scroll on mobile, responsive grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {skills.map((skill) => {
            const avgScore = Math.round(
              skill.desc.reduce((acc, item) => acc + item.level, 0) / skill.desc.length
            );

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-PrimaryColor/50 dark:hover:border-PrimaryColor2/50 cursor-pointer overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-colors w-[82vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className={`w-12 h-12 p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-lg mb-4 ${skill.text}`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono">
                      {skill.category}
                    </p>
                  </div>
                  
                  {/* Metric Summary Preview */}
                  <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                    <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500">
                      <span>Proficiency Score</span>
                      <span className="font-bold text-zinc-900 dark:text-white">
                        {avgScore}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.barColor} rounded-full`}
                        style={{ width: `${avgScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-PrimaryColor dark:group-hover:text-PrimaryColor2 transition-colors font-bold">
                    View Breakdown <FaArrowRight size={10} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden z-10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  aria-label="Close skill modal"
                >
                  <FaTimes size={13} />
                </button>

                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className={`text-2xl w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center ${selectedSkill.activeText}`}>
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {selectedSkill.title}
                    </h3>
                    <p className="text-zinc-500 font-mono text-xs mt-0.5">
                      {selectedSkill.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {selectedSkill.desc.map((item, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                          {item.name}
                        </span>
                        <span className={`${selectedSkill.activeText} font-mono text-xs font-bold`}>
                          {item.level}%
                        </span>
                      </div>

                      {/* Clean Metric Bar */}
                      <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${selectedSkill.barColor} rounded-full`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills2;