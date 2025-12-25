import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper component for Staggered Text Reveal
const StaggeredText: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "heavy/luxurious" feel
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Helper for Sticky Section Layout
const StickySection: React.FC<{ title: string; number: string; children: React.ReactNode }> = ({ title, number, children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 md:mb-48 relative z-10">
      {/* Sticky Header */}
      <div className="md:w-1/3">
        <div className="sticky top-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-baseline gap-4 border-b border-gold-400/30 pb-4"
          >
            <span className="font-subtitle text-gold-400 text-sm tracking-widest">{number}</span>
            <h2 className="font-header text-4xl md:text-5xl text-white uppercase tracking-tight">{title}</h2>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling Content */}
      <div className="md:w-2/3 pt-4 md:pt-20">
        {children}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced Parallax transforms
  // Background moves slightly slower than scroll (translateY positive opposes scroll Up)
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  // Lines move faster/counter direction for depth
  const yLines = useTransform(scrollYProgress, [0, 1], [0, -250]);
  
  // New: Floating abstract shape/text parallax that floats upwards
  const yFloating = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative bg-luxury-black text-white py-32 overflow-hidden min-h-screen border-b border-gold-400/30"
    >
      {/* Background Image Layer - Subtle Movement */}
      <motion.div 
        style={{ y: yBackground }} 
        className="absolute top-[-10%] right-0 w-3/4 h-[120%] opacity-[0.04] pointer-events-none z-0"
      >
         <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
            alt="Architecture Background" 
            className="w-full h-full object-cover grayscale" 
         />
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-luxury-black" />
      </motion.div>
      
      {/* Moving Structural Lines (Enhanced Parallax) */}
      <motion.div style={{ y: yLines }} className="absolute left-10 top-[-20%] w-[1px] h-[150%] bg-white/5 z-0" />
      <motion.div style={{ y: yLines, x: 20 }} className="absolute left-10 top-[-10%] w-[1px] h-[150%] bg-gold-400/10 z-0" />
      
      {/* Floating Abstract Element */}
      <motion.div 
        style={{ y: yFloating }} 
        className="absolute bottom-20 right-10 text-[20rem] font-header text-white pointer-events-none z-0 leading-none select-none opacity-[0.02] hidden lg:block"
      >
        M
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro Statement - Large & Impactful */}
        <div className="mb-40 md:pl-20 max-w-5xl">
          <StaggeredText className="font-subtitle text-gold-400 text-sm tracking-[0.3em] uppercase mb-8">
            Who We Are
          </StaggeredText>
          <h1 className="font-header text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
            <StaggeredText delay={0.1}>Architects of</StaggeredText>
            <StaggeredText delay={0.2} className="text-gray-500">Lifestyle.</StaggeredText>
            <StaggeredText delay={0.3}>Curators of</StaggeredText>
            <StaggeredText delay={0.4} className="text-gold-400 italic font-serif">Legacy.</StaggeredText>
          </h1>
        </div>

        {/* Section 1: The Vision */}
        <StickySection title="The Vision" number="01">
          <StaggeredText className="mb-8">
            <p className="font-body text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              We do not merely sell properties; we facilitate the acquisition of trophies. 
              In a city defined by the impossible, MAPSTONE stands as the bridge between 
              aspiration and reality.
            </p>
          </StaggeredText>
          <StaggeredText delay={0.1}>
            <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl mb-12">
              Our philosophy is rooted in the belief that true luxury is silent. 
              It is found in the precision of a transaction, the exclusivity of access, 
              and the discretion of our service. We serve a clientele that understands 
              value beyond price tags.
            </p>
          </StaggeredText>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-[1px] bg-white/10 mb-12 origin-left"
          />
        </StickySection>

        {/* Section 2: The Methodology */}
        <StickySection title="Methodology" number="02">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <StaggeredText>
                <h3 className="font-header text-2xl text-gold-400 mb-4">Precision</h3>
                <p className="font-body text-gray-400">
                  Data is our currency. We utilize proprietary market intelligence to 
                  identify shifts before they occur, ensuring your portfolio is always 
                  positioned for maximum yield.
                </p>
              </StaggeredText>
              <StaggeredText delay={0.2}>
                <h3 className="font-header text-2xl text-gold-400 mb-4">Discretion</h3>
                <p className="font-body text-gray-400">
                  Privacy is the ultimate luxury. Our off-market division handles 
                  sensitive acquisitions for high-profile individuals with 
                  absolute confidentiality.
                </p>
              </StaggeredText>
           </div>
           
           <StaggeredText delay={0.4} className="mt-16">
              <img 
                src="https://i.postimg.cc/76ctw2Kg/66.jpg" 
                alt="Luxury Exterior Design" 
                className="w-full aspect-[16/9] object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              <p className="mt-4 text-xs font-subtitle text-gray-500 tracking-widest text-right">THE ART OF LIVING</p>
           </StaggeredText>
        </StickySection>

        {/* Section 3: The Standard */}
        <StickySection title="The Standard" number="03">
           <StaggeredText>
             <div className="border-l border-gold-400 pl-8 md:pl-12 py-2">
               <blockquote className="font-header text-3xl md:text-4xl text-white leading-tight">
                 "MAPSTONE is not for everyone. It is for those who demand the exceptional 
                 as a baseline, not a bonus."
               </blockquote>
             </div>
           </StaggeredText>
        </StickySection>

      </div>
    </section>
  );
};

export default About;