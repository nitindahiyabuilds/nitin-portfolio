import React from 'react';
import { motion } from 'framer-motion';
import nitinBitmoji from '../assets/nitin-bitmoji.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-20 md:py-28">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-3xl text-center lg:text-left"
          >
            <span className="text-[#b9f2d4] text-[11px] tracking-[0.34em] uppercase mb-5 block font-medium">
              AI &amp; BACKEND ENGINEER
            </span>

            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] font-black tracking-[-0.07em] leading-[0.9] uppercase">
              BUILDING WITH INTENT.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-7 text-white/75 text-sm md:text-base max-w-xl lg:max-w-2xl leading-relaxed"
            >
              I work across AI, backend systems, automation, security and infrastructure - with a bias toward building things that can actually grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/15 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                VIEW MY WORK
              </a>

              <a
                href="https://github.com/NitinDahiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/15 rounded-full text-[10px] uppercase tracking-[0.22em] font-bold text-white hover:border-white/30 hover:bg-white/5 transition-colors duration-300"
              >
                GITHUB
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2 text-center lg:text-left">
              {['AI', 'BACKEND', 'AUTOMATION', 'SECURITY', 'DEVOPS'].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">CURRENTLY BUILDING</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#b9f2d4]">AI LIFESTYLE SYSTEM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4, scale: 1.02, rotate: -1 }}
            className="w-full max-w-[440px] lg:w-[38%] xl:w-[40%] flex justify-center lg:justify-end lg:pb-8"
          >
            <img
              src={nitinBitmoji}
              alt="Nitin Dahiya bitmoji illustration"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[390px] object-contain opacity-95"
              style={{ filter: 'contrast(1.05) saturate(0.9)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;