import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gold-400/30 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo - Adjusted for mobile fit */}
        <a href="#home" className="relative group">
           <img 
            src={LOGO_URL} 
            alt="MAPSTONE REAL ESTATE" 
            className="h-16 xs:h-20 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
           />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-subtitle uppercase text-sm tracking-widest hover:text-gold-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-gold-400 text-gold-400 font-subtitle uppercase text-sm tracking-widest hover:bg-gold-400 hover:text-black transition-all duration-300"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-gold-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Fixed for phone use */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center"
          >
            {/* Background "Crop" Safety */}
            <div className="flex flex-col items-center justify-center space-y-10 w-full px-10">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-white font-header tracking-[0.2em] uppercase hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-10 py-4 border border-gold-400 text-gold-400 font-subtitle uppercase text-xs tracking-[0.3em]"
              >
                Book Briefing
              </motion.a>
            </div>

            {/* Close Button - Easy to reach */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gold-400 p-2"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;