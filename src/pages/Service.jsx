import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: IMAGE COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* The "Lens" Frame */}
            <div className="absolute -inset-4 border border-white/10 rounded-sm pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />
            
            <div className="aspect-[4/5] overflow-hidden bg-[#111]">
              <img 
                src="https://images.stockcake.com/public/9/5/b/95b8b1fa-bf3e-4a06-a06d-37d076aaaa4b_large/cyberpunk-anime-programmer-stockcake.jpg"
                alt="Sujal Garg"
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              
            </div>
            
            {/* Metadata overlay */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-3 border border-white/10">
              <p className="text-[9px] font-mono text-white/50 tracking-tighter uppercase">
                Subject_ID: SUJAL_01 <br />
                Status: ACTIVE_DEV <br />
                Focus: SAAS_VISUALS
              </p>
            </div>
            
          </motion.div>

          {/* RIGHT: CONTENT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 font-mono">
              // DECRYPTING_IDENTITY
            </h2>
            <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              The Mind Behind <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>The Machine</span>
            </h3>

            <div className="space-y-6 text-secondary text-sm md:text-base leading-relaxed opacity-70">
              <p>
                Based in Delhi, India, I operate at the intersection of 
                <span className="text-white"> rigorous engineering</span> and <span className="text-white">cinematic aesthetics</span>. 
                My workflow is built on the belief that a product shouldn't just function it should captivate.
              </p>
              <p>
                Whether I'm architecting the backend for Lumina or precision-cutting a brand film, 
                the goal remains the same: high-fidelity output. I specialize in turning complex 
                technical requirements into seamless user experiences.
              </p>
            </div>

            {/* Technical Specs List */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="border-l border-white/10 pl-4">
                <span className="block text-white font-bold text-lg">01+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Years Experience</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                {/* <span className="block text-white font-bold text-lg">In progress..</span> */}
                <div className="text-white/20 text-[15px] font-mono flex flex-col gap-1 uppercase tracking-widest ">
          <span className="text-accent/40 animate-pulse">IN PROGRESS..</span>
        </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">SaaS Deployed</span>
              </div>
            </div>

            <motion.div className="mt-12">
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                {/* Download_Full_CV.pdf */}
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;