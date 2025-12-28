import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const TermsConditions: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="min-h-screen bg-transparent pt-32 pb-20 px-6 relative z-10 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-subtitle">{t.terms_page.subtitle}</span>
          <h1 className="text-4xl md:text-5xl font-header mt-4">{t.terms_page.title}</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        <div className="space-y-10 text-gray-300 font-body leading-relaxed">
           {t.terms_page.sections.map((section: any, index: number) => (
            <div key={index}>
              <h3 className="text-2xl text-white font-header mb-4">{section.t}</h3>
              <p>{section.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;