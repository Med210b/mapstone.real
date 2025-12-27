import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: any) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved language or default to English
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('mapstone_lang') || 'EN';
  });

  const setLanguage = (lang: any) => {
    // 1. Update State
    setLanguageState(lang);
    // 2. Save choice immediately - Fixed Line 24
    localStorage.setItem('mapstone_lang', String(lang)); 
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