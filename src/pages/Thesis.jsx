import React from 'react';
import { motion } from 'framer-motion';
import { thesis } from '../constant';

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
          {thesis.map((block, index) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="bg-black p-8 md:p-10 group relative overflow-hidden transition-all duration-500 hover:bg-[#080808] flex flex-col"
            >
              <div className="relative z-10 flex flex-col flex-1">
                <span className="text-[#b9f2d4] font-mono text-xs mb-4 block tracking-widest">
                  [{block.number}]
                </span>
                <h3 className="text-white text-base font-bold uppercase tracking-tight mb-3">
                  {block.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed flex-1">
                  {block.blurb}
                </p>
                {block.link?.url && (
                  <a
                    href={block.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-[10px] uppercase tracking-[0.28em] text-[#b9f2d4] hover:text-white transition-colors self-start"
                  >
                    {block.link.label}
                  </a>
                )}
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
