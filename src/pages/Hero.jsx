import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[color:var(--color-bg)]">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[color:var(--color-accent)] text-[10px] tracking-[0.45em] uppercase mb-5 block font-medium">
            BUILDER · STARTUP ENGINEER
          </span>

          <h1 className="text-[color:var(--color-text)] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-[-0.06em] leading-[0.9]">
            I BUILD SOFTWARE
            <span className="mt-2 block text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.75)' }}>
              THAT SOLVES PROBLEMS.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-7 text-[color:var(--color-text-secondary)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-[0.01em]"
        >
          I build backend systems, AI-powered software and automations. I like working on ambiguous problems, learning fast, and turning ideas into things people can actually use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden border border-white/15 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            VIEW MY WORK
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/15 rounded-full text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--color-text)] hover:border-white/30 hover:bg-white/5 transition-colors duration-300"
          >
            GITHUB
          </a>
        </motion.div>

        <div className="mt-12 text-center">
          <div className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--color-text-muted)]">
            CURRENTLY BUILDING
          </div>
          <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-text-secondary)]">
            AI · BACKEND · AUTOMATION
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;