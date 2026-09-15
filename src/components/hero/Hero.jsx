import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroSidebars from "./HeroSidebars";
import HeroContent from "./HeroContent";
import HeroTerminalCard from "./HeroTerminalCard";
import { roles } from "./heroData";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-24 pb-6 lg:pt-28 lg:pb-8 overflow-hidden bg-zinc-50 dark:bg-[#070709] transition-colors duration-300 select-none"
    >
      {/* Background Lighting & Kinetic Matrix */}
      <HeroBackground />

      {/* Fixed Desktop Sidebars */}
      <HeroSidebars />

      {/* Main Hero Container */}
      <motion.div style={{ opacity }} className="container px-6 relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <HeroContent roleIndex={roleIndex} />
          <HeroTerminalCard />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
