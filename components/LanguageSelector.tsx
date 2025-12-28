import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  // REMOVED: TR, ZH, DE, IT, etc.
  const availableLangs = ['EN', 'AR', 'FR', 'ES', 'RU'];

  return (
    <div className="flex gap-2">
      {availableLangs.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-[10px] font-bold border transition-all duration-300 rounded-sm ${
            language === lang 
              ? 'bg-[#D4AF37] text-black border-[#D4AF37]' 
              : 'text-white border-white/20 hover:border-[#D4AF37]'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;