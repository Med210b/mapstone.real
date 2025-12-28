import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
  { code: 'AR', label: 'العربية' },
  { code: 'ES', label: 'Español' },
  { code: 'IT', label: 'Italiano' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'RU', label: 'Русский' },
  { code: 'TR', label: 'Türkçe' },
  { code: 'ZH', label: '中文' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors uppercase text-xs font-bold tracking-widest px-3 py-2"
      >
        <Globe size={16} />
        <span>{language}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-0 mt-2 w-40 bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden z-[60] shadow-xl max-h-80 overflow-y-auto custom-scrollbar"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider transition-colors border-b border-white/5 last:border-0 hover:bg-[#D4AF37] hover:text-black ${
                  language === lang.code ? 'text-[#D4AF37] font-bold bg-white/5' : 'text-gray-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{lang.label}</span>
                  {language === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;