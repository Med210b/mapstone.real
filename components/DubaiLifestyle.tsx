import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from './SectionTitle';

// Helper: Staggered Text Reveal
const StaggeredText: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FeatureProps {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  index: number;
}

const FeatureSection: React.FC<FeatureProps> = ({ title, subtitle, description, img, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center mb-32 last:mb-0 relative z-10`}>
      {/* Text Content */}
      <div className="lg:w-1/2">
        <StaggeredText>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold-400 font-subtitle text-sm tracking-widest uppercase">0{index + 1}</span>
            <div className="h-[1px] w-12 bg-gold-400/50" />
            <span className="text-gray-400 font-subtitle text-xs tracking-widest uppercase">{subtitle}</span>
          </div>
        </StaggeredText>
        
        <StaggeredText delay={0.1}>
          <h3 className="font-header text-4xl md:text-5xl text-white mb-8 leading-tight">{title}</h3>
        </StaggeredText>
        
        <StaggeredText delay={0.2}>
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-8">
            {description}
          </p>
        </StaggeredText>
        
        <StaggeredText delay={0.3}>
          <button className="text-gold-400 font-subtitle text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
            Discover More 
            <span className="transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </StaggeredText>
      </div>

      {/* Image Content */}
      <div className="lg:w-1/2 w-full">
         <div className="relative overflow-hidden group">
            <motion.div
               initial={{ scale: 1.2, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="aspect-[4/5] w-full"
            >
              <img 
                src={img} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              />
            </motion.div>
            
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none transition-all duration-700 group-hover:inset-8 group-hover:border-gold-400/30" />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
         </div>
      </div>
    </div>
  );
};

const DubaiLifestyle: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for background elements
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const features = [
    {
      title: "Global Connectivity",
      subtitle: "Strategic Hub",
      description: "Dubai stands at the crossroads of the world. With one-third of the global population within a 4-hour flight, it serves as the ultimate bridge between East and West, offering unparalleled access to emerging markets and global capitals.",
      img: "https://i.postimg.cc/1tdrYJjz/4.jpg"
    },
    {
      title: "Economic Freedom",
      subtitle: "Tax-Free Living",
      description: "Experience the liberation of true wealth retention. With 0% income tax, 0% capital gains tax, and 0% property tax, Dubai provides a fiscal environment designed for prosperity, allowing your investments to compound without friction.",
      img: "https://images.unsplash.com/photo-1512453979798-5ea904f18431?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Architectural Excellence",
      subtitle: "World-Class Design",
      description: "From the tallest towers to underwater villas, Dubai pushes the boundaries of possibility. It is a canvas where the world's leading architects redefine luxury, creating residential masterpieces that are as functional as they are breathtaking.",
      img: "https://i.postimg.cc/d0BWnRYz/luxury-architecture-exterior-design.jpg"
    }
  ];

  return (
    <section id="dubai" ref={containerRef} className="py-32 bg-luxury-black text-white relative border-b border-gold-400/30 overflow-hidden">
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
       
       {/* Parallax Background Elements */}
       <motion.div style={{ y: yBackground }} className="absolute right-0 top-20 w-1/3 h-[80%] bg-gradient-to-b from-gold-400/5 to-transparent pointer-events-none" />
       <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />

       <div className="container mx-auto px-6 relative z-10">
          <div className="mb-32 text-center max-w-4xl mx-auto">
             <SectionTitle title="The City of Future" subtitle="Destination Dubai" light />
             <StaggeredText delay={0.2}>
               <p className="font-body text-xl text-gray-400 leading-relaxed">
                 Dubai is not merely a city; it is a testament to human ambition. A sanctuary for innovation, luxury, and security, it offers a lifestyle that is unmatched anywhere else on the globe.
               </p>
             </StaggeredText>
          </div>

          <div>
             {features.map((feature, index) => (
                <FeatureSection key={index} {...feature} index={index} />
             ))}
          </div>
       </div>
    </section>
  );
};

export default DubaiLifestyle;