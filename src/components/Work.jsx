import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const works = [
  {
    imgSrc: "/images/p1.png",
    title: "Dr. Appointment",
    tags: ["React", "Full Stack"],
    projectLink: "https://doctor-appointment-frontend-six.vercel.app/",
  },
  {
    imgSrc: "/images/p2.png",
    title: "Book Finder",
    tags: ["Responsive", "Tailwind"],
    projectLink: "https://book-finder-dun-xi.vercel.app/",
  },
  {
    imgSrc: "/images/p4.png",
    title: "Music App",
    tags: ["UI/UX", "Development"],
    projectLink: "https://spotify-seven-eta.vercel.app/",
  },
  {
    imgSrc: "/images/p5.png",
    title: "Admin Panel",
    tags: ["Next.js", "Auth"],
    projectLink: "https://doctor-appointment-admin-six.vercel.app/",
  },
];

const Work = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  // Navigation Logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleWheel = (e) => {
    if (scrollRef.current) {
      if (e.deltaY !== 0) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <section
      className="py-12 md:py-24 bg-zinc-950 relative overflow-hidden"
      id="work"
    >
      {/* Background Parallax Text */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden select-none">
        <h2 className="text-[20vw] font-black text-white/[0.02] uppercase whitespace-nowrap">
          The Archive • The Archive • The Archive
        </h2>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="text-left">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              className="h-[2px] bg-PrimaryColor mb-4"
            />
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              THE <span className="text-zinc-700">ARCHIVE.</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs uppercase tracking-widest">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaChevronRight className="text-PrimaryColor" />
              </motion.div>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:flex items-center gap-2 mt-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
                aria-label="Scroll Left"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
                aria-label="Scroll Right"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex flex-row gap-6 md:gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
        >
          {works.map((project, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: key * 0.1 }}
              className="relative w-[85vw] sm:w-[450px] md:w-[500px] shrink-0 snap-center"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-PrimaryColor font-mono text-xs font-bold tracking-widest">
                  0{key + 1}
                </span>
                <div className="h-[1px] flex-1 bg-zinc-800/50" />
                <span className="text-zinc-600 font-mono text-[10px] uppercase">
                  Case Study
                </span>
              </div>

              <ProjectCard
                imgScr={project.imgSrc}
                title={project.title}
                tags={project.tags}
                projectLink={project.projectLink}
              />
            </motion.div>
          ))}

          <div className="w-[60vw] md:w-[300px] shrink-0 flex flex-col justify-center snap-center p-8 border border-zinc-900 rounded-[2rem] bg-zinc-900/20 backdrop-blur-sm">
            <h3 className="text-zinc-600 text-3xl font-black leading-none uppercase tracking-tighter mb-4">
              Your project <br /> could be <br />{" "}
              <span className="text-white">next.</span>
            </h3>
            <a
              href="mailto:jisangayen@gmail.com"
              className="text-PrimaryColor font-mono text-xs uppercase tracking-widest text-left hover:underline flex items-center group"
            >
              Get in touch
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-4">
          <div className="relative h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollXProgress }}
              className="absolute inset-0 bg-PrimaryColor origin-left"
            />
          </div>
        </div>
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

export default Work;
