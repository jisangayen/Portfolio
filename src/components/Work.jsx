import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import ProjectCard from './ProjectCard';

const works = [
  { imgSrc: '/images/p3.png', title: 'Dr. Appointment', tags: ['React', 'Full Stack'], projectLink: '#' },
  { imgSrc: '/images/p2.png', title: 'Book Finder', tags: ['Responsive', 'Tailwind'], projectLink: '#' },
  { imgSrc: '/images/p4.png', title: 'Music App', tags: ['UI/UX', 'Development'], projectLink: '#' },
  { imgSrc: '/images/p5.png', title: 'Admin Panel', tags: ['Next.js', 'Auth'], projectLink: '#' },
];

const Work = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Desktop Horizontal Logic
  const xRaw = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const x = useSpring(xRaw, { stiffness: 50, damping: 20 });

  // Velocity Effects
  const xVelocity = useVelocity(scrollYProgress);
  const skewX = useSpring(useTransform(xVelocity, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  
  // Parallax Background Text
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    /* h-auto on mobile for natural scrolling, 400vh on desktop for horizontal effect */
    <section ref={targetRef} className="relative h-auto lg:h-[400vh] bg-zinc-950 py-20 lg:py-0" id="work">
      
      {/* 1. STICKY WRAPPER: Only acts as sticky on large screens */}
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        
        {/* PARALLAX BG TEXT (Hidden on Mobile for Performance) */}
        <div className="hidden lg:block absolute inset-0 flex items-center pointer-events-none overflow-hidden">
            <motion.h2 
                style={{ x: textX }}
                className="text-[20vw] font-black text-white/[0.01] uppercase whitespace-nowrap"
            >
                Curated Digital Craft • Creative Engineering •
            </motion.h2>
        </div>

        <div className="container px-6 relative z-10 w-full">
          {/* Header */}
          <div className="mb-12 lg:mb-20">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                className="h-[2px] bg-PrimaryColor mb-4"
              />
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                THE <span className="text-zinc-700">ARCHIVE.</span>
              </h2>
          </div>

          {/* 2. RESPONSIVE CONTAINER: 
              Flex-col (stack) on mobile 
              Flex-row (slider) on desktop */}
          <motion.div 
            style={{ 
                x: typeof window !== 'undefined' && window.innerWidth > 1024 ? x : 0, 
                skewX: typeof window !== 'undefined' && window.innerWidth > 1024 ? skewX : 0 
            }} 
            className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:items-center"
          >
            {works.map((project, key) => (
              <motion.div 
                key={key} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: key * 0.1 }}
                className="relative w-full lg:w-[550px] shrink-0"
              >
                {/* PROJECT INDEX */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-PrimaryColor font-mono text-[10px] font-bold tracking-widest">PRJ_0{key + 1}</span>
                    <div className="h-[1px] flex-1 lg:w-8 bg-zinc-900" />
                </div>

                <ProjectCard
                  imgScr={project.imgSrc}
                  title={project.title}
                  tags={project.tags}
                  projectLink={project.projectLink}
                />
              </motion.div>
            ))}
            
            {/* FINAL CTA (Only visible at end of slider or stack) */}
            <div className="w-full lg:w-[300px] shrink-0 py-10 lg:py-0">
                <h3 className="text-zinc-600 text-3xl font-black leading-none uppercase tracking-tighter">
                    Your project <br /> could be <br /> <span className="text-white">next.</span>
                </h3>
            </div>
          </motion.div>
        </div>

        {/* 3. PROGRESS BAR (Hidden on Mobile - Mobile has natural scrollbar) */}
        <div className="hidden lg:flex absolute bottom-12 left-20 right-20 items-center gap-6">
            <span className="text-zinc-700 font-mono text-[10px]">01</span>
            <div className="relative h-[1px] flex-1 bg-zinc-900 overflow-hidden">
                <motion.div 
                    style={{ scaleX: scrollYProgress }} 
                    className="absolute inset-0 bg-PrimaryColor origin-left"
                />
            </div>
            <span className="text-zinc-700 font-mono text-[10px]">0{works.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Work;