import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck, FiCopy, FiArrowUpRight } from 'react-icons/fi';

const ContactTerminal = () => {
  const [copied, setCopied] = useState(false);
  const email = 'nitindahiya131@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Open to Opportunities · Delhi &amp; Remote
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight mb-3">
            Let's connect.
          </h2>

          <p className="text-base text-[#555] leading-relaxed max-w-lg mb-8">
            Always open to discussing engineering roles, interesting problems, or what you're building. Feel free to reach out directly.
          </p>

          {/* Email card */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#f1ede6] flex items-center justify-center text-[#111]">
                <FiMail className="text-lg" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#777]">Direct Inbox</p>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-bold text-[#111] hover:underline underline-offset-4"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#111] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black/80 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Compose</span>
                <FiArrowUpRight className="text-sm" />
              </a>

              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="px-3 py-2 rounded-lg border border-black/15 bg-white text-[#333] hover:border-black/40 hover:bg-black/5 transition-all text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <FiCheck className="text-emerald-600 text-sm" /> : <FiCopy className="text-sm" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactTerminal;
