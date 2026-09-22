import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaMedium } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

const platforms = [
  {
    id: 'x',
    name: 'X',
    icon: FaXTwitter,
    url: 'https://x.com/nitin_builds',
    focus: 'Real-time Build Log & Architecture',
    description:
      'Live engineering updates, architecture decisions, system tradeoffs, shipping milestones, and technical lessons figured out while building products.',
    cta: 'Follow on X',
  },
  {
    id: 'medium',
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com/@nitin_dahiya',
    focus: 'Deep Dives & Systems Security',
    description:
      'Long-form essays on systems engineering, desktop and OS security mechanics, vulnerability research, and architectural patterns. Technical depth with zero fluff.',
    cta: 'Read Articles',
  },
];

const SocialPresence = () => {
  return (
    <section className="py-20 px-6 bg-[#f9f7f3] border-t border-black/7">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Online Presence</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
            Where I share my work &amp; thinking
          </h2>
          <p className="text-sm text-[#666] mt-2">
            No vanity metrics. Pure build logs, architecture explorations, and deep-dive technical writing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group border border-black/8 bg-[#fff] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-black/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#f1ede6] flex items-center justify-center text-[#111] group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
                      <Icon className="text-xl" />
                    </div>
                    <span className="p-2 text-[#888] group-hover:text-[#111] transition-colors">
                      <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  <p className="text-xs uppercase font-mono tracking-wider text-[#777] mb-1">
                    {platform.focus}
                  </p>
                  <h3 className="text-lg font-bold text-[#111] mb-3">
                    {platform.name}
                  </h3>

                  <p className="text-sm text-[#555] leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111] group-hover:underline underline-offset-4">
                    {platform.cta}
                  </span>
                  <Icon className="text-sm text-[#888]" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialPresence;
