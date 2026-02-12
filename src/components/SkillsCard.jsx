import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import PropTypes from 'prop-types'

const SkillsCard = ({
    imgSrc,
    label, 
    desc,
    classes
}) => {
    // 1. Mouse Tracking for the Spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className={`group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 ${classes}`}
            onMouseMove={handleMouseMove}
        >
            {/* --- 2. THE SPOTLIGHT BORDER (Next Level Detail) --- */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            150px circle at ${mouseX}px ${mouseY}px,
                            rgba(45, 212, 191, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* --- 3. ICON WITH HOVER ANIMATION --- */}
            <figure className="relative bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50 rounded-xl overflow-hidden w-14 h-14 p-3 shrink-0 transition-all duration-500 group-hover:bg-zinc-950 group-hover:ring-PrimaryColor/50 group-hover:scale-110">
                <img 
                    src={imgSrc}
                    alt={label}
                    width={32}
                    height={32}
                    className="w-full h-full transition-transform duration-500 group-hover:rotate-[10deg]"
                />
            </figure>

            {/* --- 4. TEXT CONTENT --- */}
            <div className="z-10">
                <h3 className="text-zinc-100 font-bold group-hover:text-PrimaryColor transition-colors tracking-tight">
                    {label}
                </h3>
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-0.5">
                    {desc}
                </p>
            </div>

            {/* Background Glow (Invisible until hover) */}
            <div className="absolute inset-0 bg-gradient-to-br from-PrimaryColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />
        </div>
    )
}

SkillsCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillsCard