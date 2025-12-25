import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoBackground from './VideoBackground';
import TextReveal from './TextReveal';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Updated to the direct embed URL from the provided iframe
  const videoUrl = "https://www.youtube.com/embed/EKWZYT8HBbA";
  
  // ✅ FIXED: Updated to use your local Dubai.jpg as the fallback/loading image
  const posterUrl = "/mapstone.real/Dubai.jpg";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black border-b border-[#D4AF37]/30">
      
      {/* Video Background */}
      <VideoBackground 
        videoUrl={videoUrl} 
        posterUrl={posterUrl} 
        overlayOpacity={0.65}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y: yContent }}
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
      >
        <div className="perspective-1000">
          
          <div className="flex flex-col items-center justify-center mb-8">
            {/* MAPSTONE - Significantly Larger */}
            <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-header text-white leading-none drop-shadow-2xl flex flex-col items-center tracking-tight">
              <TextReveal text="MAPSTONE" delay={0.2} />
            </h1>
            
            {/* REAL ESTATE - Smaller & Elegant */}
            <div className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7CE] via-white to-[#F7E7CE] font-subtitle tracking-[0.5em] uppercase mt-4 md:mt-6">
               <TextReveal text="REAL ESTATE" delay={0.6} />
            </div>
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
            className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-10 shadow-[0_0_15px_rgba(212,175,55,0.8)]" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-gray-200 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
          >
            Redefining luxury living with exclusive properties and unparalleled market expertise.
          </motion.p>
          
          <div className="flex justify-center items-center">
             {/* Glowing Gold Button */}
             <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.8 }}
              href="#about"
              className="border border-[#D4AF37] group px-12 py-4 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37] transition-colors duration-500" />
              <span className="relative z-10 text-[#D4AF37] font-subtitle uppercase tracking-widest font-bold group-hover:text-black transition-colors text-sm">
                Discover MAPSTONE
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-xs text-[#D4AF37] font-subtitle tracking-widest uppercase">Scroll</span>
           <div className="w-0.5 h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;