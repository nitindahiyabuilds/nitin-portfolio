import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Resumefax from './Resumefax';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsResumeOpen(true);
    window.addEventListener('open-resume', handleOpen);
    return () => window.removeEventListener('open-resume', handleOpen);
  }, []);

  const navLinks = [
    { name: 'WORK', to: '/projects', hash: '#projects' },
    { name: 'ABOUT', to: '/about', hash: '#about' },
    { name: 'THINKING', to: '/', hash: '#thinking' },
    { name: 'RESUME', isAction: true },
    { name: 'CONTACT', to: '/contact', hash: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col items-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500 border pointer-events-auto ${
          isScrolled
            ? 'w-full max-w-4xl bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
            : 'w-full max-w-5xl bg-transparent border-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
          <span className="text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
            NITIN DAHIYA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => {
            if (link.isAction) {
              return (
                <button
                  key={link.name}
                  onClick={() => setIsResumeOpen(!isResumeOpen)}
                  className="relative text-[10px] cursor-pointer text-white/80 uppercase tracking-[0.24em] font-medium hover:text-white transition-colors duration-300 group bg-transparent border-none outline-none"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              );
            }

            return (
              <Link
                key={link.name}
                to={pathname === '/' ? link.hash : link.to}
                className="relative text-[10px] cursor-pointer text-white/80 uppercase tracking-[0.24em] font-medium hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to={pathname === '/' ? '#contact' : '/contact'}
            className="hidden sm:inline-block text-[10px] px-5 py-2 border border-white/15 rounded-full text-white uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black z-10 transition-colors duration-300 text-center"
          >
            LET&apos;S TALK
          </Link>
        </motion.div>

        <button
          onClick={() => setIsResumeOpen(!isResumeOpen)}
          className="md:hidden flex flex-col gap-1.5 items-end bg-transparent border-none outline-none cursor-pointer"
        >
          <div className="w-5 h-[1px] bg-white" />
          <div className="w-3 h-[1px] bg-white" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isResumeOpen && (
          <Resumefax onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

const Hamburger = () => {
  return <div className="" />;
};

export default Navbar;