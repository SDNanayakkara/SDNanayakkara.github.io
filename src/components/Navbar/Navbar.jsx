import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Research', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Custom Engineering Theme Logo */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-11 h-11 bg-[#0a0a0a] rounded-lg border border-white/20 group-hover:border-[#00e5ff] transition-all overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/10 to-[#ff5722]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* SVG Logo: Hexagon (Automation) + Waveform (Instrumentation) */}
            <svg className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 12h3.5l1.5-4 3 8 1.5-4h3.5" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#ff5722" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <span className="text-lg font-bold text-white tracking-wider group-hover:text-[#00e5ff] transition-colors">
            Dilshan Sanjaya
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#e0e0e0]">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#ff5722] transition-colors">
              {link}
            </a>
          ))}
          <a 
            href="/dilshan_cv.pdf" 
            download
            className="px-5 py-2 bg-white/5 border border-white/10 hover:border-[#ff5722] text-white rounded-md transition-all hover:shadow-[0_0_15px_rgba(255,87,34,0.3)]"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-300 hover:text-[#ff5722]"
                >
                  {link}
                </a>
              ))}
              <a href="/dilshan_cv.pdf" download className="text-[#00e5ff] font-medium pt-2 border-t border-white/10">
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}