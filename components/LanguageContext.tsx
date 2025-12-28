import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * The "Safe Shield" Function
 * This prevents the 'reading property of undefined' error that caused the black screen.
 * If a translation key is missing, it returns the key path as a string.
 */
const createSafeT = (obj: any, path: string = ""): any => {
  return new Proxy(obj || {}, {
    get(target, prop) {
      // Ignore internal symbols
      if (typeof prop === 'symbol') return target[prop];
      
      const key = prop.toString();
      const newPath = path ? `${path}.${key}` : key;
      const value = target[key];

      // CRASH PROTECTION: If the value is missing, return the path itself
      if (value === undefined) {
        console.warn(`[i18n Warning] Missing translation key: ${newPath}`);
        return newPath; 
      }

      // If the value is another object, wrap it in a proxy to allow safe nesting
      if (typeof value === 'object' && value !== null) {
        return createSafeT(value, newPath);
      }

      return value;
    }
  });
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved language or default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('mapstone_lang') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('mapstone_lang', language);
    // Automatically handle Right-to-Left (RTL) for Arabic
    document.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  // Wrap the active translation object in our Safe Shield
  const t = createSafeT(translations[language] || translations['EN']);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};