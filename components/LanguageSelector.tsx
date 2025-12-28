import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Mapping languages to their corresponding country flags
const languages = [
  { code: 'EN', name: 'English', flag: 'US' },
  { code: 'AR', name: 'العربية', flag: 'AE' },
  { code: 'FR', name: 'Français', flag: 'FR' },
  { code: 'ES', name: 'Español', flag: 'ES' },
  { code: 'RU', name: 'Русский', flag: 'RU' }
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find current language details
  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-[#D4AF37]/30 rounded-sm bg-black/50 hover:border-[#D4AF37] transition-all group"
      >
        <img 
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${currentLang.flag}.svg`}
          alt={currentLang.name}
          className="w-4 h-auto shadow-sm"
        />
        <span className="text-white text-[10px] font-bold tracking-widest uppercase hidden md:inline">
          {currentLang.code}
        </span>
        <ChevronDown 
          size={14} 
          className={`text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-sm shadow-2xl z-[100] overflow-hidden"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#D4AF37] group ${
                    language === lang.code ? 'bg-white/5' : ''
                  }`}
                >
                  <img 
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${lang.flag}.svg`}
                    alt={lang.name}
                    className="w-5 h-auto"
                  />
                  <span className={`text-[11px] font-bold tracking-wider uppercase transition-colors group-hover:text-black ${
                    language === lang.code ? 'text-[#D4AF37]' : 'text-gray-300'
                  }`}>
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;