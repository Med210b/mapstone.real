import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoBackground from './VideoBackground';
import { useLanguage } from './LanguageContext'; // 1. Import Hook

const Hero: React.FC = () => {
  const { t } = useLanguage(); // 2. Get Translations

  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const videoUrl = "https://www.youtube.com/embed/EKWZYT8HBbA";
  const posterUrl = "/mapstone.real/Dubai.jpg";

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${posterUrl})` }}
      />
      <VideoBackground videoUrl={videoUrl} posterUrl={posterUrl} overlayOpacity={0.5} />

      <motion.div style={{ opacity, y: yContent }} className="relative z-20 text-center px-6 w-full mt-20 md:mt-0">
        <div className="flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <a href="#about" className="inline-block border border-[#D4AF37] px-10 py-4 bg-black/20 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[#D4AF37] font-subtitle uppercase tracking-[0.2em] font-bold text-sm rounded-sm">
              {t.hero.discover}
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ delay: 1.2, repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden xs:flex flex-col items-center gap-3">
        <span className="text-[10px] text-[#D4AF37] font-subtitle tracking-[0.3em] uppercase opacity-70">{t.hero.explore}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;