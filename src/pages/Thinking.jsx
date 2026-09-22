import React from 'react';
import { motion } from 'framer-motion';

const Thinking = () => {
  return (
    <section id="thinking" className="py-20 px-6 bg-[#efece5] border-t border-black/8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#14161a] mb-6">The thinking behind the systems</h2>
            <div className="space-y-4 text-sm text-[#454851] leading-relaxed">
              <p>
                I don't enjoy working inside a narrow box. I like understanding the whole problem — what we're building, why it matters, how the pieces fit together, and what could go wrong once people actually start using it.
              </p>
              <p>
                My work sits between backend systems, AI, automation, infrastructure and security. I'm drawn to early-stage problems where there's more figuring things out than following a predefined path.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              { label: 'Security by default', body: 'I bring a security lens to the systems I build — not as a checklist, but as a way of thinking about what could go wrong.' },
              { label: 'Founder mindset', body: 'I think beyond implementation — product, users, scale and what comes next.' },
              { label: 'Startup energy', body: 'I enjoy turning rough ideas into things that actually exist and work in production.' },
            ].map(({ label, body }) => (
              <div key={label} className="border-l-2 border-black/10 pl-4">
                <p className="text-xs font-semibold text-[#14161a] mb-1">{label}</p>
                <p className="text-sm text-[#454851] leading-relaxed">{body}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Thinking;
