import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'Work', hash: '#projects' },
  { name: 'About', hash: '#about' },
  { name: 'Writing', hash: '#writing' },
  { name: 'Contact', hash: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleNavClick = (hash) => {
    setMenuOpen(false);
    const id = hash.replace('#', '');
    if (pathname === '/') {
      setTimeout(() => scrollToId(id), 60);
    } else {
      navigate('/' + hash);
    }
  };

  const handleLetsTalk = () => {
    setMenuOpen(false);
    if (pathname === '/') {
      setTimeout(() => scrollToId('contact'), 60);
    } else {
      navigate('/#contact');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-[#f9f7f3]/95 backdrop-blur-sm border-b border-black/8' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-[#111] font-semibold text-sm tracking-tight hover:opacity-60 transition-opacity">
          Nitin Dahiya
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.hash)}
              className="text-sm text-[#888] hover:text-[#111] transition-colors bg-transparent border-none outline-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/resume/NitinDahiya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888] hover:text-[#111] transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={handleLetsTalk}
          className="hidden md:block text-sm font-medium text-[#111] border border-black/20 rounded-full px-4 py-1.5 hover:bg-[#111] hover:text-[#f9f7f3] transition-all bg-transparent cursor-pointer"
        >
          Let's talk
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 items-end bg-transparent border-none outline-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <motion.div animate={menuOpen ? { rotate: 45, y: 5, width: 20 } : { rotate: 0, y: 0, width: 20 }} className="h-[1.5px] bg-[#14161a] origin-center" style={{ width: 20 }} />
          <motion.div animate={menuOpen ? { rotate: -45, y: -3, width: 20 } : { rotate: 0, y: 0, width: 13 }} className="h-[1.5px] bg-[#14161a] origin-center" style={{ width: 13 }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[#f9f7f3] border-b border-black/8 px-6 pb-5 pt-2 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.hash)}
                className="text-left text-sm text-[#888] hover:text-[#111] transition-colors py-2.5 border-b border-black/5 bg-transparent border-x-0 border-t-0 outline-none cursor-pointer last:border-b-0"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume/NitinDahiya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#888] hover:text-[#111] transition-colors py-2.5 border-b border-black/5"
            >
              Resume
            </a>
            <button
              onClick={handleLetsTalk}
              className="mt-3 text-sm font-medium text-[#111] border border-black/20 rounded-full px-4 py-2 hover:bg-[#111] hover:text-[#f9f7f3] transition-all bg-transparent cursor-pointer self-start"
            >
              Let's talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
