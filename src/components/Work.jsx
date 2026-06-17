import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const works = [
  {
    imgSrc: "/images/p1.png",
    title: "Dr. Appointment",
    tags: ["React", "Node","MongoDB"],
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
    tags: ["HTML", "CSS"],
    projectLink: "https://spotify-seven-eta.vercel.app/",
  },
  {
    imgSrc: "/images/p5.png",
    title: "Admin Panel",
    tags: ["MERN", "Auth"],
    projectLink: "https://doctor-appointment-admin-six.vercel.app/",
  },
];

const Work = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleWheel = (e) => {
    if (scrollRef.current && e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden select-none" id="work">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent" />

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        {/* Clean Header Area */}
        <div className="flex flex-row items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500 mb-2">
              Selected Showcase
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              The <span className="text-zinc-600 font-light">Archive.</span>
            </h2>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-xl border border-zinc-900 bg-zinc-900/20 text-zinc-500 hover:text-white hover:border-zinc-800/80 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={10} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-xl border border-zinc-900 bg-zinc-900/20 text-zinc-500 hover:text-white hover:border-zinc-800/80 flex items-center justify-center transition-all duration-300"
              aria-label="Scroll Right"
            >
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>

        {/* Horizontal Card Rail Container */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {works.map((project, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: key * 0.05, type: "spring", stiffness: 100 }}
              className="relative w-[80vw] sm:w-[320px] shrink-0 snap-center flex flex-col gap-3"
            >
              <div className="flex items-center justify-between px-1 text-zinc-600 font-mono text-[10px] tracking-wider uppercase">
                <span> 0{key + 1}</span>
                {/* <span className="opacity-40">Deployment</span> */}
              </div>

              <ProjectCard
                imgScr={project.imgSrc}
                title={project.title}
                tags={project.tags}
                projectLink={project.projectLink}
              />
            </motion.div>
          ))}

          {/* Clean Call To Action Box */}
          <div className="w-[65vw] sm:w-[260px] shrink-0 flex flex-col justify-between snap-center p-6 border border-zinc-900 rounded-xl bg-zinc-900/10 backdrop-blur-sm mt-7">
            <div>
              <h3 className="text-zinc-500 text-lg font-medium leading-snug tracking-tight uppercase mb-2">
                Your project <br /> could be <br />
                <span className="text-white">next.</span>
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed">Let's coordinate to build clean digital platforms tailored to your operational ecosystem.</p>
            </div>
            
            <a
              href="mailto:jisangayen@gmail.com"
              className="text-zinc-400 font-medium text-xs tracking-wider uppercase flex items-center group mt-8 hover:text-white transition-colors duration-300"
            >
              Get in touch
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1.5 text-[10px]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Minimal Timeline Indicator Bar */}
        <div className="max-w-xs mx-auto mt-6">
          <div className="relative h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollXProgress }}
              className="absolute inset-0 bg-zinc-700 origin-left rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;