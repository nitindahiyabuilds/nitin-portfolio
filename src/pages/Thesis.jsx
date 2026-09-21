import React from 'react';
import { motion } from 'framer-motion';

const thesisBlocks = [
  {
    id: '01',
    text: "I don't take tickets well. I want to understand the problem, own the system, and ship something that works in production — not hand it off at the PR boundary. That's why I build end-to-end: AI layer, backend, infra, security. It's how I'm proving I can run the full stack of a startup engineer before I actually run a startup.",
  },
  {
    id: '02',
    text: "Forward Deployed means working close to real, messy problems — not abstracted ones. I did that at the National Cyber Forensics Lab writing tools used in active investigations, and I do it now building AI Coach where I am the user, the engineer, and the product manager simultaneously.",
  },
  {
    id: '03',
    text: "Right now I am solo-founding AI Coach and open to FDE / AI engineering roles at startups where I can do the same kind of work at higher leverage — shipping AI-integrated systems close to the customer, not maintaining internal tooling three layers from the problem.",
  },
];

const Thesis = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <span className="text-[#b9f2d4] text-[10px] tracking-[0.5em] uppercase font-medium mb-4 block">
            WHY I BUILD
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1px #ffffff60' }}>Thesis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {thesisBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="bg-black p-8 md:p-10 group relative overflow-hidden transition-all duration-500 hover:bg-[#080808]"
            >
              <div className="relative z-10">
                <span className="text-[#b9f2d4] font-mono text-xs mb-6 block tracking-widest">
                  [{block.id}]
                </span>
                <p className="text-white/70 text-sm leading-relaxed">
                  {block.text}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#b9f2d4] transition-all duration-500 group-hover:h-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Thesis;
