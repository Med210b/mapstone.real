import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const HERO_IMAGE = "https://i.postimg.cc/RZh2mKwh/eb98713e-662c-40bf-9a16-f715d1c09ce9.png";

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black p-0">
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${HERO_IMAGE})` }} />
      </motion.div>

      <motion.div style={{ opacity: opacityText }} className="relative z-10 text-center px-6 w-full max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
          {/* Updated Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-header text-white leading-[1.1] drop-shadow-2xl"
          >
            Dubai Homes Crafted with <br /> Timeless Elegance
          </motion.h1>
          
          {/* Updated Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="text-gray-200 text-base sm:text-lg md:text-xl font-body tracking-[0.2em] uppercase"
          >
            Guided by Trust Always.
          </motion.p>
          
          {/* Updated Link to #about */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="pt-4">
            <a 
              href="#about" 
              className="inline-block border border-[#D4AF37] px-8 py-3 md:px-12 md:py-4 bg-black/40 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-500 text-[#D4AF37] font-subtitle uppercase tracking-[0.2em] font-bold text-xs md:text-sm rounded-sm"
            >
              Discover more
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-[#D4AF37] font-subtitle tracking-[0.3em] uppercase opacity-60">Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;