import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const ContactTerminal = () => {

  return (
    <section id="contact" className="py-24 px-6 bg-[#f1ede6] border-t border-black/8 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/8 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#444]">
              Open to Opportunities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight mb-3">
            Let's connect.
          </h2>

          <p className="text-base text-[#555] leading-relaxed max-w-lg mb-8">
            Always open to discussing engineering roles, interesting problems, or what you're building. Feel free to reach out directly.
          </p>

          {/* Social Links Card */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
            <div className="flex flex-col gap-1 md:max-w-xs">
              <p className="text-base font-bold text-[#111]">Open to Talk</p>
              <p className="text-sm text-[#777]">Reach out on your preferred platform.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
              <a
                href="https://x.com/nitin_builds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-black/15 bg-white text-[#111] hover:border-black/40 hover:bg-black/5 transition-all text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <FaXTwitter className="text-lg" />
                <span>X (Twitter)</span>
                <FiArrowUpRight className="text-[#888]" />
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-dahiya-9848b3258/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-[#0077b5]/30 bg-[#0077b5]/5 text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 transition-all text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <FaLinkedinIn className="text-lg" />
                <span>LinkedIn</span>
                <FiArrowUpRight className="opacity-70" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactTerminal;
