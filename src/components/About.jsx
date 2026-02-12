import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

const aboutItems = [
  { label: "Projects", number: 10, suffix: "+" },
  { label: "Experience", number: 1, suffix: "yr" },
  { label: "Tech Stack", number: 12, suffix: "" },
];

const Counter = ({ to }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, { duration: 1.5, ease: "circOut", onUpdate: (v) => { nodeRef.current.textContent = v.toFixed(0); } });
      return () => controls.stop();
    }
  }, [isInView, to]);
  return <span ref={nodeRef}>0</span>;
};

const About = () => {
  return (
    <section id="about" className="py-0 sm:py-20 bg-zinc-950 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4">
          
          {/* --- MAIN BIO: Compact & Punchy --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 md:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-xl relative"
          >
            <div className="relative z-10">
              <span className="text-PrimaryColor font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">// The Developer</span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                Logic meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 italic">Precision.</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                I am <span className="text-zinc-100 font-bold">Jisan Hoque Gayen</span> I build complete MERN applications, designing fast React interfaces on the front and robust Node-Express architectures on the back. My work blends clean logic, optimized APIs, scalable MongoDB structures and smooth UI interactions. Every project is engineered end-to-end for performance, clarity and long-term reliability.
              </p>
            </div>
          </motion.div>

          {/* --- STATS: Adaptive Mobile UI --- 
              On Mobile: Displays as a tight 3-column row
              On Desktop: Displays as a vertical stack
          */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {aboutItems.map(({ label, number, suffix }, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: key * 0.1 }}
                viewport={{ once: true }}
                className="p-4 md:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col items-center lg:items-start justify-center"
              >
                <div className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                  <Counter to={number} /><span className="text-PrimaryColor text-xl ml-0.5">{suffix}</span>
                </div>
                <p className="text-zinc-600 font-bold uppercase tracking-widest text-[8px] md:text-[10px] mt-1 text-center lg:text-left">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;