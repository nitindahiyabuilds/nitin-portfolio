import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/nitindahiyabuilds' },
    { name: 'X', icon: FaXTwitter, href: 'https://x.com/nitin_builds' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nitin-dahiya-9848b3258/' },
    { name: 'Medium', icon: FaMedium, href: 'https://medium.com/@nitin_dahiya' },
  ];

  return (
    <footer className="bg-[#f9f7f3] border-t border-black/7 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-sm font-semibold text-[#111]">Nitin Dahiya</span>
          <p className="text-xs text-[#777] mt-0.5">AI Systems &amp; Backend Engineering</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                aria-label={s.name}
                className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#444] hover:text-black hover:border-black hover:shadow-sm transition-all"
              >
                <Icon className="text-sm" />
              </a>
            );
          })}
        </div>

        <span className="text-xs text-[#888]">© {currentYear} · Building with intent.</span>
      </div>
    </footer>
  );
};

export default Footer;
