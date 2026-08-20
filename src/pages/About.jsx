import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: '01',
    title: 'Backend Systems',
    description: 'Designing APIs and backend systems that are structured to evolve — from data models and authentication to integrations, background workflows and deployment.',
    tags: ['FastAPI', 'PostgreSQL', 'REST', 'SQL', 'Docker'],
  },
  {
    id: '02',
    title: 'AI Engineering',
    description: 'Building practical AI systems around real products — LLM workflows, context, agents, APIs and automation rather than AI for the sake of AI.',
    tags: ['LLMs', 'AI Workflows', 'RAG', 'Python', 'APIs'],
  },
  {
    id: '03',
    title: 'Automation & Infrastructure',
    description: 'Turning repetitive or operational work into reliable systems, with the infrastructure needed to run them beyond the local machine.',
    tags: ['Python', 'Redis', 'Docker', 'CI/CD', 'AWS', 'GitHub Actions'],
  },
  {
    id: '04',
    title: 'Security-Minded Engineering',
    description: 'I bring a security lens into the systems I build — thinking about authentication, attack surfaces, permissions, failure modes and basic auditing from the start.',
    tags: ['Application Security', 'API Security', 'OWASP', 'Auditing', 'Threat Modeling'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            Engineering Capabilities
          </h2>
          <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
            What I <span className="text-transparent" style={{ WebkitTextStroke: '1px #ffffff60' }}>Build</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-black p-8 md:p-10 group relative overflow-hidden transition-all duration-500 hover:bg-[#080808]"
            >
              <div className="relative z-10">
                <span className="text-accent font-mono text-xs mb-6 block tracking-widest">
                  [{capability.id}]
                </span>
                
                <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
                  {capability.title}
                </h4>
                
                <p className="text-secondary text-sm leading-relaxed mb-8 opacity-60 max-w-sm">
                  {capability.description}
                </p>

                <ul className="flex flex-wrap gap-3">
                  {capability.tags.map((tag) => (
                    <li 
                      key={tag} 
                      className="text-[9px] uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full group-hover:border-accent/40 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <span className="text-accent font-mono text-[11px] tracking-[0.5em] uppercase">
            How I Think
          </span>
          <p className="mt-6 text-white text-sm md:text-base font-mono uppercase tracking-[0.18em]">
            Build <span className="text-accent">→</span> Test <span className="text-accent">→</span> Secure <span className="text-accent">→</span> Ship <span className="text-accent">→</span> Improve
          </p>
          <p className="mt-4 max-w-2xl text-secondary text-sm leading-relaxed opacity-60">
            I like working close to the problem — understanding what needs to exist, what could break, and what the system might become next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;