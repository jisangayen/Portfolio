import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Zap, Layers, Code2, Cpu } from "lucide-react";
import { tabs, skillProficiencies } from "./heroData";

const HeroTerminalCard = () => {
  const [activeTab, setActiveTab] = useState("config");
  const [copied, setCopied] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleCardMouseMove = (e) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 14;
    const rotateY = (x / rect.width) * 14;
    setTilt({ rotateX, rotateY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`const developer = {
  name: "Jisan Hoque Gayen",
  role: "Full-Stack Engineer",
  stack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  status: "Ready to Deploy 🚀"
};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center [perspective:1000px]">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-PrimaryColor/20 blur-[80px] rounded-full pointer-events-none" />

      {/* 3D Tilt Terminal Card */}
      <motion.div
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-md bg-white/95 dark:bg-zinc-900/85 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-shadow"
      >
        {/* Terminal Window Header & Tabs */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">

          {/* macOS Window Dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 transition-opacity cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800/70 p-1 rounded-xl">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all ${
                    isActive
                      ? "text-zinc-950 dark:text-white bg-white dark:bg-zinc-700/80 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                  }`}
                >
                  <TabIcon size={11} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Copy Code Action */}
          <button
            onClick={handleCopyCode}
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
            title="Copy code snippet"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Dynamic Tab Content Panel */}
        <div className="min-h-[160px] flex flex-col justify-center">
          <AnimatePresence mode="wait">

            {/* TAB 1: Config TypeScript View */}
            {activeTab === "config" && (
              <motion.div
                key="config-tab"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs leading-relaxed space-y-1.5 text-zinc-700 dark:text-zinc-300"
              >
                <p className="text-zinc-400 dark:text-zinc-500">// Full-Stack Architect</p>
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Jisan Hoque Gayen"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">role:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack Engineer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">stack:</span> [
                  <span className="text-amber-600 dark:text-amber-400">"React"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"Node.js"</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">"MongoDB"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">status:</span>{" "}
                  <span className="text-PrimaryColor dark:text-PrimaryColor2 font-bold">"Ready to Deploy 🚀"</span>
                </p>
                <p>&#125;;</p>
              </motion.div>
            )}

            {/* TAB 2: Live Skill Proficiency Bars */}
            {activeTab === "skills" && (
              <motion.div
                key="skills-tab"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5 font-mono text-xs text-zinc-700 dark:text-zinc-300 py-1"
              >
                {skillProficiencies.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span>{item.skill}</span>
                      <span className="font-semibold text-PrimaryColor dark:text-PrimaryColor2">{item.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.level }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: Simulated Live Terminal Output */}
            {activeTab === "terminal" && (
              <motion.div
                key="terminal-tab"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 font-mono text-xs text-zinc-800 dark:text-zinc-200 py-1"
              >
                <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="text-zinc-400">$</span> npm run build:production
                </p>
                <p className="text-zinc-500 text-[11px] pl-3">✓ 2134 modules transformed.</p>
                <p className="text-zinc-500 text-[11px] pl-3">✓ build completed in 1.2s (0 errors)</p>
                <p className="text-PrimaryColor dark:text-PrimaryColor2 flex items-center gap-1.5 pt-1">
                  <span className="text-zinc-400">$</span> portfolio --status
                </p>
                <p className="text-[11px] pl-3 text-emerald-600 dark:text-emerald-400">
                  ⚡ System active • Latency 18ms • Ready for contracts
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Metric Badges inside card */}
        <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60">
            <Zap size={16} className="text-amber-500" />
            <div>
              <p className="text-[10px] text-zinc-500">Performance</p>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">100% Score</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60">
            <Layers size={16} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <div>
              <p className="text-[10px] text-zinc-500">Architecture</p>
              <p className="text-xs font-bold text-zinc-900 dark:text-white">Clean & Scalable</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting Floating Tech Badges */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -top-5 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 pointer-events-none"
      >
        <Code2 size={14} />
        <span>React 19</span>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 pointer-events-none"
      >
        <Cpu size={14} />
        <span>Full-Stack</span>
      </motion.div>

    </div>
  );
};

export default HeroTerminalCard;
