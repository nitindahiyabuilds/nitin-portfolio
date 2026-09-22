import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Subtle vertical guideline (delicate, low opacity) */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-black/[0.04]"
        style={{ x: smoothX }}
      />

      {/* Subtle horizontal guideline (delicate, low opacity) */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-black/[0.04]"
        style={{ y: smoothY }}
      />

      {/* Central delicate scope */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Subtle crosshair */}
          <path
            d="M16 11V21M11 16H21"
            stroke="rgba(0, 0, 0, 0.28)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />

          {/* Tiny center dot */}
          <circle cx="16" cy="16" r="1" fill="rgba(0, 0, 0, 0.45)" />

          {/* Corner brackets */}
          <path
            d="M6 2H2V6"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 2H30V6"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 30H2V26"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 30H30V26"
            stroke="rgba(0, 0, 0, 0.3)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CustomCursor;