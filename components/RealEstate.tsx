import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import VideoBackground from './VideoBackground';

const RealEstate: React.FC = () => {
  // Keeping the architectural background video but darkening it for the quote
  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4";
  const posterUrl = "https://picsum.photos/1920/1080?random=10";
  // Restored FDR image
  const featuredImage = "https://res.cloudinary.com/dlyhuwdrw/image/upload/v1778592414/fn3uanxekyx6chajj2h4.png"; 

  return (
    <section id="real-estate" className="relative py-32 min-h-screen flex items-center bg-luxury-charcoal overflow-hidden border-b border-gold-400/30">
      
      {/* Styles for the new Font and Glowing Border Animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        
        .font-great-vibes {
          font-family: 'Great Vibes', cursive;
        }

        /* Continuous glowing animation for FDR image */
        @keyframes pulse-glow-fdr {
          0% { border: 2px solid rgba(212, 152, 66, 0.3); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); }
          100% { border: 3px solid #D49842; box-shadow: 0 0 25px rgba(212, 152, 66, 0.8); }
        }

        .fdr-glowing-card {
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          padding: 16px;
          transition: transform 0.3s ease;
          animation: pulse-glow-fdr 1.5s infinite alternate ease-in-out;
        }

        @media (hover: hover) and (pointer: fine) {
          .fdr-glowing-card:hover {
            transform: scale(1.05);
            border: 3px solid #D49842 !important;
            box-shadow: 0 0 35px rgba(212, 152, 66, 1) !important;
            animation-play-state: paused;
          }
        }
      `}</style>

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
            className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-12 perspective-1000"
          >
            {/* New Glowing Container */}
            <div className="fdr-glowing-card flex justify-center items-center">
              <img 
                src={featuredImage} 
                alt="Franklin D. Roosevelt" 
                className="w-full h-auto max-w-[450px] object-contain transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Quote Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-12"
          >
            <SectionTitle 
              title="The Safest Investment" 
              subtitle="Timeless Wisdom" 
              align="left" 
              light 
            />
            
            <figure className="relative mt-6">
              <blockquote className="font-great-vibes text-2xl md:text-3xl text-white leading-relaxed mb-8 relative z-10 tracking-wide">
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold-400 text-6xl font-serif absolute -left-8 -top-6 opacity-50 font-bold"
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