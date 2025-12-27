import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('mapstone_lang');
    return saved || 'EN';
  });

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('mapstone_lang', lang);
  };

  const t = translations[language as keyof typeof translations] || translations.EN;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};