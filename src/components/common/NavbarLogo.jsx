import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AppRoutes from '../../Router/AppRoutes'
import { div } from 'framer-motion/client'


 const NavbarLogo= () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Track scroll to change appearance
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   
    
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link  to={pathname == '/'} className="flex items-center gap-2 group">
        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
        <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">
          Sujal <span className="opacity-50 font-light">Garg</span>
        </span>
      </Link>
    </motion.div>
  )
}
export default NavbarLogo;

