import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Brand & Status */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">
                NITIN DAHIYA
              </span>
            </div>
          </div>

          {/* Social Links (The "Coordinates") */}
          <div className="flex flex-wrap gap-8 ">
            {[
              { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/nitin-dahiya-9848b3258/' },
              { name: 'GITHUB', link: 'https://github.com/nitindahiyabuilds' },
              { name: 'X / TWITTER', link: 'https://x.com/nitin_builds?s=11' },
              { name: 'MEDIUM', link: 'https://medium.com/@nitin_dahiya' },
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors duration-300 ease-in-out relative group"
                whileHover={{scale:1.1}}
              >
                {social.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: System Data */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
          <div className="flex gap-6">
            {/* <span>© {currentYear} ALL_RIGHTS_RESERVED</span>
            <span className="hidden sm:block">EST_TIME: 22:42:16</span> */}
          </div>
{/*           
          <div className="flex gap-6">
            {/* <span className="hover:text-white/50 transition-colors">PRIVACY_POLICY</span>
            <span className="hover:text-white/50 transition-colors">TERMS_OF_SERVICE</span> */}
            {/* <motion.span 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent/40"
            > */}
              {/* V_4.2.1_STABLE */}
            {/* </motion.span> */}
          {/* </div> */} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;