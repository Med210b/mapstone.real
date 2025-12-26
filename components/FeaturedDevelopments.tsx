import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { MapPin, DollarSign, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// --- IMAGE HANDLING ---
const getImgPath = (folder: string, index: number) => `/mapstone.real/projects/${folder}/${index}.jpg`;
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop";

const projects = [
  { 
    id: 1, 
    name: "Shahrukhz by Danube", 
    location: "Sheikh Zayed Road", 
    description: "A premier commercial opportunity located directly on Sheikh Zayed Road.", 
    price: "From $517,400 (AED 1.9M)", 
    type: "Offices", 
    payment: "70/30", 
    handover: "Q2 2029", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('Shahrukhz by Danube', i + 1)) 
  },
  { 
    id: 2, 
    name: "Wedyan The Canal", 
    location: "Business Bay", 
    description: "Exclusive waterfront living situated right on the Dubai Canal.", 
    price: "From $7,079,600 (AED 26M)", 
    type: "3BR Units", 
    payment: "60/40", 
    handover: "Q1 2030", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('Wedyan The Canal by Al Ghurair Collection', i + 1)) 
  },
  { 
    id: 3, 
    name: "Hilton Residences JLT", 
    location: "JLT", 
    description: "Branded waterfront living offering the prestige of the Hilton name.", 
    price: "From $313,100 (AED 1.15M)", 
    type: "Studios", 
    payment: "35/65", 
    handover: "Q3 2027", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('Hilton Residences JLT by Emirates', i + 1)) 
  },
  { 
    id: 4, 
    name: "Rabdan Gardens", 
    location: "Jumeirah Garden City", 
    description: "Ideally located near the vibrant City Walk and DIFC districts.", 
    price: "From $250,500 (AED 920K)", 
    type: "Studios", 
    payment: "50/50", 
    handover: "Q4 2027", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('Rabdan Gardens by Rabdan Developments', i + 1)) 
  },
  { 
    id: 5, 
    name: "Hado by BEYOND", 
    location: "Dubai Islands", 
    description: "A fresh launch in Dubai's newest waterfront destination.", 
    price: "From $599,000 (AED 2.2M)", 
    type: "1BR Units", 
    payment: "50/50", 
    handover: "Q3 2029", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('Hado by BEYOND at Dubai Islands', i + 1)) 
  },
  { 
    id: 6, 
    name: "FLU1D One", 
    location: "Dubai Islands", 
    description: "Boutique living experience offering exclusivity with only 64 units available.", 
    price: "From $536,400 (AED 1.97M)", 
    type: "1BR Units", 
    payment: "50/50", 
    handover: "Q4 2028", 
    images: Array.from({ length: 5 }, (_, i) => getImgPath('FLU1D One by Object 1', i + 1)) 
  }
];

// --- ENHANCED ANIMATED STACK ---
const AnimatedStack = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  
  // Motion values for swipe effect
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]); // Rotate while dragging
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const handleNext = () => setActive((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + images.length) % images.length);

  const onDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* CARD STACK CONTAINER */}
      <div className="relative w-full aspect-[4/3] md:aspect-[3/2] max-w-lg cursor-grab active:cursor-grabbing perspective-1000">
        <AnimatePresence mode='popLayout'>
          {images.map((src, index) => {
            // Logic to show only current, previous, and next cards for performance
            if (index < active - 1 || index > active + 1) return null;
            
            const isActive = index === active;
            
            return (
              <motion.div
                key={`${src}-${index}`}
                style={{
                  zIndex: isActive ? 10 : 5,
                  x: isActive ? x : 0, // Only active card moves with drag
                  rotate: isActive ? rotate : (index % 2 === 0 ? 2 : -2), // Subtle tilt for background cards
                  opacity: isActive ? opacity : 0.6,
                  scale: isActive ? 1 : 0.95,
                }}
                initial={{ opacity: 0, scale: 0.9, z: -50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4, 
                  scale: isActive ? 1 : 0.9, 
                  z: isActive ? 0 : -50,
                  y: isActive ? 0 : 15, // Push background cards down slightly
                }}
                exit={{ opacity: 0, scale: 0.8, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                drag={isActive ? "x" : false} // Enable drag only for active card
                dragConstraints={{ left: 0, right: 0 }} // Snap back to center
                dragElastic={0.6}
                onDragEnd={isActive ? onDragEnd : undefined}
                className="absolute inset-0 w-full h-full"
              >
                <div className={`relative w-full h-full rounded-2xl overflow-hidden border ${isActive ? 'border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-white/10'} bg-[#1a1a1a]`}>
                  <img 
                    src={src} 
                    alt="Project" 
                    className="w-full h-full object-cover"
                    draggable="false" // Prevent browser image drag
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  />
                  {/* Subtle Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Swipe Hint (Only visible on active card) */}
                  {isActive && (
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/70 md:hidden pointer-events-none">
                      Swipe ↔
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* CONTROLS (Larger for Mobile) */}
      <div className="flex justify-center gap-8 mt-8 relative z-20">
        <button 
          onClick={handlePrev} 
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all active:scale-95"
          aria-label="Previous Image"
        >
          <ArrowLeft className="h-5 w-5 text-white group-hover:text-black" />
        </button>
        <button 
          onClick={handleNext} 
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all active:scale-95"
          aria-label="Next Image"
        >
          <ArrowRight className="h-5 w-5 text-white group-hover:text-black" />
        </button>
      </div>
    </div>
  );
};

const FeaturedDevelopments: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="featured-developments" className="bg-[#050505] text-white py-16 md:py-24 border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6">
        
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} light={true} />
        
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 -mt-8 font-body text-sm md:text-base">
          {t.projects.intro}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              
              <div className={`contents ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* 1. Image Stack (Swipeable) */}
                <div className={`w-full ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <AnimatedStack images={project.images} />
                </div>

                {/* 2. Details */}
                <div className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#D4AF37] font-mono text-xs tracking-widest border border-[#D4AF37]/30 px-3 py-1 rounded">
                          {project.handover}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-header text-white mb-2">{project.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 font-body leading-relaxed text-sm md:text-base border-l-2 border-[#D4AF37] pl-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 py-6 border-t border-white/10 border-b">
                    <div>
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <MapPin size={16} />
                        <span className="text-[10px] md:text-xs uppercase tracking-wider">{t.projects.label_location}</span>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{project.location}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <DollarSign size={16} />
                        <span className="text-[10px] md:text-xs uppercase tracking-wider">{t.projects.label_price}</span>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{project.price}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <Calendar size={16} />
                        <span className="text-[10px] md:text-xs uppercase tracking-wider">{t.projects.label_payment}</span>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{project.payment}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <MapPin size={16} /> 
                        <span className="text-[10px] md:text-xs uppercase tracking-wider">{t.projects.label_type}</span>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{project.type}</p>
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    className="group relative block w-full bg-white text-black py-4 font-bold uppercase tracking-widest overflow-hidden text-center text-sm md:text-base rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t.projects.btn_brochure}</span>
                    <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </div>

              </div>
              
              {/* Divider Line */}
              {index !== projects.length - 1 && (
                <div className="col-span-1 lg:col-span-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopments;