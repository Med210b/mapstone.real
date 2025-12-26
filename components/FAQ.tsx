import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="min-h-screen bg-transparent pt-32 pb-20 px-6 relative z-10 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-subtitle">{t.faq_page.subtitle}</span>
          <h1 className="text-4xl md:text-5xl font-header mt-4">{t.faq_page.title}</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        <div className="grid gap-6">
          {t.faq_page.items.map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-[#D4AF37]/50 transition-colors"
            >
              <h3 className="text-xl text-[#D4AF37] font-header mb-3">{item.q}</h3>
              <p className="text-gray-300 font-body leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;