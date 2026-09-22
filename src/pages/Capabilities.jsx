import React from 'react';
import { motion } from 'framer-motion';

const approachPillars = [
  {
    title: 'Product & User-First Thinking',
    description:
      'I prefer understanding the actual user problem and business context before jumping into code. Asking what genuinely moves the needle saves weeks of building the wrong thing.',
    tag: 'Product Sense',
  },
  {
    title: 'Bias for Shipping & Fast Iteration',
    description:
      'I love turning ideas into functional software quickly. Breaking ambiguous goals into small, shippable milestones makes progress visible and feedback immediate.',
    tag: 'Execution',
  },
  {
    title: 'Direct Communication & Teamwork',
    description:
      'Clear writing, active listening, and open discussions around technical tradeoffs. No ego - just collaboration toward making the team and product succeed.',
    tag: 'Collaboration',
  },
  {
    title: 'Customer-Facing Empathy',
    description:
      'Comfortable talking directly with users and clients. Unpacking messy real-world feedback and translating it into clean engineering specifications.',
    tag: 'FDE Mindset',
  },
  {
    title: 'Security & Systems Craftsmanship',
    description:
      'Sensible defaults from day one: clean data boundaries, thoughtful authentication, and understanding potential failure modes before they reach production.',
    tag: 'Engineering Rigor',
  },
];

const Capabilities = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#f1ede6] border-t border-black/7 scroll-mt-16">
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Approach &amp; Mindset</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight mb-4">
            How I think and work
          </h2>
          <p className="text-sm sm:text-base text-[#444] leading-relaxed max-w-xl">
            Technical skills matter, but how you approach problems matters just as much. I bring a founder-like curiosity, a habit of shipping fast, and a genuine hunger to learn and create real impact.
          </p>
        </motion.div>

        {/* Pillars list */}
        <div className="divide-y divide-black/7 border-t border-black/7">
          {approachPillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
            >
              <div className="max-w-lg">
                <h3 className="text-base font-semibold text-[#111] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <span className="self-start sm:self-auto shrink-0 px-2.5 py-1 text-[10px] font-mono rounded bg-white/70 border border-black/6 text-[#555]">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
