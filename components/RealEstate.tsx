import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import VideoBackground from './VideoBackground';

const RealEstate: React.FC = () => {
  // Keeping the architectural background video but darkening it for the quote
  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4";
  const posterUrl = "https://picsum.photos/1920/1080?random=10";
  // Restored FDR image
  const featuredImage = "https://i.postimg.cc/Y9p87xNx/A-respectful-histor.png"; 

  return (
    <section id="real-estate" className="relative py-32 min-h-screen flex items-center bg-luxury-charcoal overflow-hidden border-b border-gold-400/30">
       {/* Background Video Layer */}
       <VideoBackground 
         videoUrl={videoUrl} 
         posterUrl={posterUrl} 
         overlayOpacity={0.9} 
         className="absolute inset-0 h-full w-full"
       />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Featured Image (FDR) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-12 perspective-1000"
          >
            <div className="relative p-2 border border-gold-400/30 bg-black/50 backdrop-blur-sm group hover:border-gold-400 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-400 transition-all duration-300 group-hover:w-full group-hover:h-full" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-400 transition-all duration-300 group-hover:w-full group-hover:h-full" />
              
              <img 
                src={featuredImage} 
                alt="Franklin D. Roosevelt" 
                className="w-full h-auto max-w-[300px] sepia-[.3] grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Quote Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-2/3 text-center md:text-left pl-0 md:pl-12"
          >
            <SectionTitle 
              title="The Safest Investment" 
              subtitle="Timeless Wisdom" 
              align="left" 
              light 
            />
            
            <figure className="relative">
              <blockquote className="font-['Georgia_Pro','Georgia',serif] text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 italic relative z-10">
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold-400 text-8xl font-serif absolute -left-8 -top-8 opacity-50 font-bold"
                >"</motion.span>
                Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.
              </blockquote>
              <figcaption className="border-l-4 border-gold-400 pl-6 mt-8 flex flex-col items-center md:items-start">
                <div className="font-header text-xl text-gold-400">Franklin D. Roosevelt</div>
                <div className="font-subtitle text-gray-400 text-sm tracking-widest uppercase mt-1">32nd U.S. President</div>
              </figcaption>
            </figure>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default RealEstate;