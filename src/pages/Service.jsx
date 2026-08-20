import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-white/10 rounded-sm pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />
            
            <div className="aspect-[4/5] overflow-hidden bg-[#111]">
              <img 
                src="https://images.stockcake.com/public/9/5/b/95b8b1fa-bf3e-4a06-a06d-37d076aaaa4b_large/cyberpunk-anime-programmer-stockcake.jpg"
                alt="Developer illustration"
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              
            </div>
            
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 font-mono">
              DECRYPTING_IDENTITY
            </h2>
            <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              THE THINKING <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>BEHIND THE SYSTEMS.</span>
            </h3>

            <div className="space-y-6 text-secondary text-sm md:text-base leading-relaxed opacity-70">
              <p>
                I don't particularly enjoy working inside a narrow box. I like understanding the whole problem - what we're building, why it matters, how the pieces fit together, and what could go wrong once people actually start using it.
              </p>
              <p>
                My work usually sits somewhere between backend systems, AI, automation, infrastructure and security. I'm especially drawn to early-stage problems where there's more figuring things out than following a predefined path.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="border-l border-white/10 pl-4">
                <span className="block text-[10px] uppercase tracking-widest text-[#b9f2d4]/70 font-mono">SECURITY BY DEFAULT</span>
                <span className="mt-2 block text-sm leading-relaxed text-white/70">I bring an additional security lens to the systems I build.</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-[10px] uppercase tracking-widest text-[#b9f2d4]/70 font-mono">FOUNDER MINDSET</span>
                <span className="mt-2 block text-sm leading-relaxed text-white/70">I think beyond implementation — product, users, scale and what comes next.</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-[10px] uppercase tracking-widest text-[#b9f2d4]/70 font-mono">REMOTE / WORLDWIDE</span>
                <span className="mt-2 block text-sm leading-relaxed text-white/70">Open to working remotely with people and teams anywhere.</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-[10px] uppercase tracking-widest text-[#b9f2d4]/70 font-mono">STARTUP ENERGY</span>
                <span className="mt-2 block text-sm leading-relaxed text-white/70">I enjoy turning rough ideas into things that actually exist.</span>
              </div>
            </div>

            <p className="mt-10 text-[10px] uppercase tracking-[0.18em] text-white/60 font-mono">
              Always open to interesting conversations, ideas and people building things.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;