import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const createSafeT = (obj: any, path: string = ""): any => {
  return new Proxy(obj || {}, {
    get(target, prop) {
      if (typeof prop === 'symbol') return target[prop];
      const key = prop.toString();
      const newPath = path ? `${path}.${key}` : key;
      const value = target[key];

      if (value === undefined) {
        console.warn(`Missing key: ${newPath}`);
        return newPath; 
      }

      if (typeof value === 'object' && value !== null) {
        return createSafeT(value, newPath);
      }
      return value;
    }
  });
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('mapstone_lang') || 'EN');

  useEffect(() => {
    localStorage.setItem('mapstone_lang', language);
    document.dir = language === 'AR' ? 'rtl' : 'ltr';
  }, [language]);

  const t = createSafeT(translations[language] || translations['EN']);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};