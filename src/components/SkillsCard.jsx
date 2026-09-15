import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillsCard = ({
    imgSrc,
    label, 
    desc,
    tag = "Core Stack",
    classes = ""
}) => {
    // Mouse Tracking for the dynamic Spotlight border effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className={`group relative flex items-center justify-between rounded-2xl p-4 transition-all duration-300 border border-zinc-200/90 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/60 backdrop-blur-xl hover:border-PrimaryColor/50 dark:hover:border-PrimaryColor2/50 shadow-sm hover:shadow-md ${classes}`}
            onMouseMove={handleMouseMove}
        >
            {/* --- SPOTLIGHT BORDER --- */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            180px circle at ${mouseX}px ${mouseY}px,
                            rgba(107, 144, 113, 0.25),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="flex items-center gap-3.5 z-10 min-w-0">
                {/* ICON CONTAINER */}
                <figure className="relative bg-zinc-100 dark:bg-zinc-800/80 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700/60 rounded-xl overflow-hidden w-12 h-12 p-2.5 shrink-0 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-zinc-950 group-hover:ring-PrimaryColor/50 group-hover:scale-105 shadow-sm">
                    <img 
                        src={imgSrc}
                        alt={label}
                        width={28}
                        height={28}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
                    />
                </figure>

                {/* TEXT CONTENT */}
                <div className="min-w-0">
                    <h3 className="text-zinc-900 dark:text-white font-bold text-sm group-hover:text-PrimaryColor dark:group-hover:text-PrimaryColor2 transition-colors tracking-tight truncate">
                        {label}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-medium tracking-wide mt-0.5 truncate">
                        {desc}
                    </p>
                </div>
            </div>

            {/* Micro Tag Badge */}
            <span className="hidden sm:inline-block z-10 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/70 text-[9px] font-mono font-medium text-zinc-500 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-700/40">
                {tag}
            </span>

            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-PrimaryColor/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 pointer-events-none" />
        </div>
    );
};

SkillsCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.string,
    classes: PropTypes.string
};

export default SkillsCard;