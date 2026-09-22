import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa6';
import nitinBitmoji from '../assets/nitin-bitmoji.png';

const Hero = () => {
  const socialSigns = [
    {
      id: 'x',
      label: 'X (Twitter)',
      icon: FaXTwitter,
      url: 'https://x.com/nitin_builds',
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/nitindahiyabuilds',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/nitin-dahiya-9848b3258/',
    },
    {
      id: 'medium',
      label: 'Medium',
      icon: FaMedium,
      url: 'https://medium.com/@nitin_dahiya',
    },
  ];

  return (
    <section className="w-full min-h-[90vh] flex items-center bg-[#f9f7f3] pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Left: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-xl text-left"
          >
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f1ede6] border border-black/8 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#444]">
                Engineer · Builder · Problem Solver
              </span>
            </div>

            {/* Biggest highlighted heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-[-0.04em] leading-[0.96] uppercase text-[#111]">
              BUILDING WITH INTENT.
            </h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-[#444] text-base sm:text-lg leading-[1.7] max-w-lg"
            >
              I build AI-integrated products and resilient backends - combining deep systems engineering with customer-facing agility and a security-first approach. High passion to build, learn fast, and ship things that matter.
            </motion.p>

            {/* CTAs & Social Signs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* Primary action */}
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-full bg-[#111] text-[#f9f7f3] text-xs uppercase tracking-widest font-semibold hover:bg-black/80 transition-all cursor-pointer shadow-sm"
              >
                View Work ↓
              </button>

              <button
                onClick={() => document.getElementById('currently-building')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-3 rounded-full border border-black/15 text-[#222] text-xs uppercase tracking-widest font-medium hover:border-black/40 hover:bg-black/5 transition-all cursor-pointer bg-transparent"
              >
                What I'm Building
              </button>

              {/* Direct Social Signs / Logos (no usernames or URLs visible) */}
              <div className="flex items-center gap-2 pl-2 border-l border-black/10">
                {socialSigns.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      aria-label={item.label}
                      className="w-10 h-10 rounded-full border border-black/12 bg-white flex items-center justify-center text-[#222] hover:text-black hover:border-black hover:shadow-sm hover:-translate-y-0.5 transition-all"
                    >
                      <Icon className="text-base" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Nitin's Bitmoji Cartoon Illustration in its place */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-auto flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Ambient backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-black/5 via-amber-500/10 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card framing for Bitmoji */}
              <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-[#0d0f12] shadow-xl max-w-[310px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]">
                <img
                  src={nitinBitmoji}
                  alt="Nitin Dahiya cartoon developer illustration"
                  className="w-full h-auto object-cover block select-none transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle overlay status bar */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-medium tracking-wide text-white/90">
                      Deep Work Mode
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">
                    Active Session
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
