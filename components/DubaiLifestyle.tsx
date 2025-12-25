import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Shield, Wallet } from 'lucide-react';

const features = [
  {
    id: 1,
    subtitle: "Strategic Hub",
    title: "Global Connectivity",
    description: "Dubai stands at the crossroads of the world. With one-third of the global population within a 4-hour flight, it serves as the ultimate bridge between East and West.",
    icon: <Globe className="w-6 h-6 text-[#D4AF37]" />,
    image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVAZGGf0" 
  },
  {
    id: 2,
    subtitle: "Economic Freedom",
    title: "Tax-Free Living",
    description: "Experience the liberation of true wealth retention. With 0% income tax, 0% capital gains tax, and 0% property tax, Dubai provides a fiscal environment designed for prosperity, allowing your investments to compound without friction.",
    icon: <Wallet className="w-6 h-6 text-[#D4AF37]" />,
    image: "https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
  },
  {
    id: 3,
    subtitle: "Secure Environment",
    title: "Safety & Stability",
    description: "Consistently ranked as one of the safest cities globally, Dubai offers a secure environment for families and investors alike, backed by a stable currency pegged to the USD.",
    icon: <Shield className="w-6 h-6 text-[#D4AF37]" />,
    // --- UPDATED IMAGE (Ain Dubai) ---
    image: "https://www.aindubai.com/sites/default/files/Homepage%20Banner%202%20-%20Mobile.webp"
  }
];

const DubaiLifestyle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-32 bg-black text-white overflow-hidden relative border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-subtitle"
          >
            Why Dubai?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-header font-bold mb-6"
          >
            The Center of the World
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-body text-lg leading-relaxed"
          >
            Dubai is not merely a city; it is a testament to human ambition. A sanctuary for innovation, luxury, and security, it offers a lifestyle that is unmatched anywhere else on the globe.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#D4AF37] font-mono text-sm">0{feature.id}</span>
                  <div className="h-[1px] w-12 bg-[#D4AF37]" />
                  <span className="text-gray-400 text-xs tracking-[0.2em] uppercase">{feature.subtitle}</span>
                </div>
                
                <h3 className="text-4xl font-header text-white">{feature.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed text-lg">{feature.description}</p>
                
                <button className="group flex items-center gap-2 text-[#D4AF37] text-sm tracking-widest uppercase hover:text-white transition-colors pt-4">
                  Discover More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative group"
              >
                <div className="absolute inset-0 bg-[#D4AF37] transform translate-x-2 translate-y-2 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DubaiLifestyle;