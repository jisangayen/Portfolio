import React from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { backgroundGlyphs } from "./heroData";

const HeroBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <>
      {/* 1. Radiant Horizon Top Prism Light Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[380px] pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[220px] bg-gradient-to-b from-PrimaryColor/25 via-PrimaryColor2/10 to-transparent blur-[110px] rounded-full" />
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-PrimaryColor/60 to-transparent" />
      </div>

      {/* 2. Cybernetic Dot Matrix & Crosshair Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_50%,transparent_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(#71717a_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#52525b_1.2px,transparent_1.2px)] [background-size:28px_28px]" />
      </div>

      {/* 3. Fluid Organic Holographic Ambient Orbs */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-gradient-to-br from-PrimaryColor/35 via-PrimaryColor2/25 to-transparent blur-[130px] rounded-full -z-10 pointer-events-none"
      />

      <motion.div
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.18, 1],
          x: [0, -25, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-5%] right-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-gradient-to-tl from-PrimaryColor2/30 via-emerald-500/20 to-transparent blur-[140px] rounded-full -z-10 pointer-events-none"
      />

      {/* 4. Floating Kinetic Code Glyphs in Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {backgroundGlyphs.map((glyph, i) => (
          <motion.div
            key={i}
            style={{ left: glyph.x, top: glyph.y }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.08, 0.22, 0.08],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 7 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: glyph.delay,
            }}
            className={`absolute font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-600 ${glyph.size}`}
          >
            {glyph.text}
          </motion.div>
        ))}
      </div>

      {/* 5. Background Watermark Text */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] dark:opacity-[0.02] overflow-hidden whitespace-nowrap">
        <h2 className="text-[20vw] font-black leading-none translate-y-1/2 text-zinc-900 dark:text-white">
          DEVELOPER
        </h2>
      </div>
    </>
  );
};

export default HeroBackground;
