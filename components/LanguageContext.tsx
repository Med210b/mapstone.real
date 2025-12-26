import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

// Define the shape of our context
type Language = keyof typeof translations;
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['EN']; // Type helper for autocomplete
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  
  // Calculate direction (Arabic is RTL)
  const dir = language === 'AR' ? 'rtl' : 'ltr';

  // Current translation object
  const t = translations[language];

  // Effect: Update the HTML document direction automatically
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language.toLowerCase();
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language in any component
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};