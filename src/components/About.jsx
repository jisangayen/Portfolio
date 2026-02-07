import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const aboutItems = [
  { label: "Projects Completed", number: 10, suffix: "+" },
  { label: "Year of Experience", number: 1, suffix: "+" },
  { label: "Technologies Mastered", number: 12, suffix: "" },
];

// Next Level: A simple count-up component
const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      if (start === end) return;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-PrimaryColor/10 blur-[120px] rounded-full -z-10" />

      <div className="container px-6">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* --- LEFT: MAIN BIO (Bento Big Card) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative group p-8 md:p-14 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md overflow-hidden"
          >
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-PrimaryColor/10 text-PrimaryColor text-[10px] font-bold uppercase tracking-widest mb-6"
              >
                The Developer
              </motion.span>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
                I turn <span className="text-zinc-500">complex problems</span> into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor to-PrimaryColor2 italic">
                  elegant solutions.
                </span>
              </h2>

              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-[55ch]">
                I&apos;m <span className="text-zinc-100 font-semibold">Jisan Hoque Gayen</span>, a software developer 
                obsessed with pixel-perfection and high-performance code. I don’t just build websites; 
                I craft digital experiences that are scalable, maintainable, and built to last.
              </p>
            </div>
            
            {/* Artistic Grid Background for the card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </motion.div>

          {/* --- RIGHT: STATS (Bento Small Cards) --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {aboutItems.map(({ label, number, suffix }, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: key * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md flex flex-col justify-center items-center text-center group"
              >
                <div className="flex items-center text-5xl md:text-6xl font-black text-white group-hover:text-PrimaryColor transition-colors tracking-tighter">
                  <Counter from={0} to={number} />
                  <span className="text-PrimaryColor2">{suffix}</span>
                </div>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mt-2">
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