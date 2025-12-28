import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t?.nav?.home || "Home", id: "home" },
    { label: t?.nav?.projects || "Projects", id: "featured-developments" },
    { label: t?.nav?.investment || "Investment", id: "investment-strategy" },
    { label: t?.nav?.market || "Market Data", id: "market-update" },
    { label: t?.nav?.contact || "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#D4AF37]/30 ${scrolled ? 'bg-black/95 backdrop-blur-md py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative group">
           <img src="https://i.postimg.cc/FKRvrYXF/wwwwwwwwww.png" alt="MAPSTONE" className="h-16 xs:h-20 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.id)} className="text-white font-subtitle uppercase text-sm tracking-widest hover:text-[#D4AF37] transition-colors relative group">
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <LanguageSelector />
          <a href="https://wa.me/971585928787" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] font-subtitle uppercase text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            {t?.nav?.inquire || "Inquire"}
          </a>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <LanguageSelector />
          <button className="text-white p-2 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="md:hidden fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-10 w-full px-10">
              {navItems.map((item, index) => (
                <motion.button key={item.label} onClick={() => handleNavClick(item.id)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-xl text-white font-header tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors">
                  {item.label}
                </motion.button>
              ))}
              {/* FIXED: Removed broken translation code, now says "Inquiry" directly */}
              <motion.a href="https://wa.me/971585928787" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-4 px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-subtitle uppercase text-xs tracking-[0.3em]">
                Inquiry
              </motion.a>
            </div>
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#D4AF37] p-2"><X size={28} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;