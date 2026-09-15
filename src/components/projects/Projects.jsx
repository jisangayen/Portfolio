import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectCtaBanner from "./ProjectCtaBanner";
import { categories, projectsData } from "./projectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const scrollRef = useRef(null);

  const filteredProjects = activeCategory === "All Projects"
    ? projectsData
    : projectsData.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-8 sm:py-10 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden select-none transition-colors duration-300"
      id="work"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-PrimaryColor/15 dark:bg-PrimaryColor/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-PrimaryColor2/15 dark:bg-PrimaryColor2/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent" />

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">

        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm mb-4"
            >
              <FolderGit2 size={12} className="text-PrimaryColor dark:text-PrimaryColor2" />
              <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                Portfolio Showcase • Selected Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight"
            >
              Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-PrimaryColor via-PrimaryColor2 to-emerald-500">Creations.</span>
            </motion.h2>
          </div>

          {/* Filter Subcomponent & Scroll Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleCategoryChange}
            />

            {/* Scroll Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-1 bg-white/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Horizontal Scroll Strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 -mx-6 px-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[320px] md:w-[350px] shrink-0 snap-start h-full"
            >
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                category={project.category}
                featured={project.featured}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner Subcomponent */}
        <ProjectCtaBanner />

      </div>
    </section>
  );
};

export default Projects;
