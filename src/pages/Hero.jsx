import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      
      
      {/* 1. Subtle Background Grid (Matches the "Scope" aesthetic) */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 2. Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 block font-medium">
            Full Stack Developer
          </span>
          
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-tight">
            SUJAL <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>GARG</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide opacity-70"
        >
          {/* Building high-performance SaaS */}
          {/* <span className="text-white font-semibold">Lumina</span> and 
          <span className="text-white font-semibold"> IPOVault</span>.  */}
           {/* Bridging the gap between technical architecture and cinematic design. */}
        </motion.p>

        {/* 3. CTA Buttons with "Scope" hover logic */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-resume"));
            }}
            className="group relative px-8 py-3 overflow-hidden border border-white/20 rounded-sm bg-transparent cursor-none"
          >
            <span className="relative z-10 text-white text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-black transition-colors duration-300">
             Resume
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
          
          <button className="text-white/40 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-all duration-300">
            Scroll to Explore
          </button>
        </motion.div>
      </div>

      {/* 4. Coordinate Display (Bottom Right) */}
      
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="text-white/20 text-[9px] font-mono flex flex-col gap-1 uppercase tracking-widest ">
          <span className="text-accent/40 animate-pulse">SYSTEM: ONLINE</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;