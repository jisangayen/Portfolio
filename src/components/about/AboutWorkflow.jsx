import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

const AboutWorkflow = ({ steps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white/95 to-zinc-50/90 dark:from-zinc-900/80 dark:to-zinc-950/80 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-2xl shadow-sm overflow-hidden"
    >
      {/* Ambient Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-PrimaryColor dark:text-PrimaryColor2" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Engineering Lifecycle • From Idea to Production
            </h4>
          </div>
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
            End-to-End Execution Standard
          </span>
        </div>

        {/* 4 Steps Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ step, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-700/50 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-lg bg-PrimaryColor/10 dark:bg-PrimaryColor/20 text-PrimaryColor dark:text-PrimaryColor2 text-[10px] font-mono font-bold">
                  PHASE {step}
                </span>
                {i < 3 && (
                  <ArrowRight size={12} className="text-zinc-300 dark:text-zinc-600 hidden lg:block" />
                )}
              </div>

              <div>
                <h5 className="text-sm font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">
                  {title}
                </h5>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

AboutWorkflow.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutWorkflow;
