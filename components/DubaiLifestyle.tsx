import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Wallet } from 'lucide-react';
import ReactPlayer from 'react-player';

const GlowButton: React.FC<{ text: string }> = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="relative group px-8 py-3 rounded-full bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] text-sm tracking-widest uppercase overflow-hidden transition-all duration-300"
  >
    <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
    <div className="relative flex items-center gap-3">
      {text}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.button>
);

const DubaiLifestyle: React.FC = () => {
  const features = [
    { 
      id: 1, 
      subtitle: "Strategic Connectivity", 
      title: "Where the world meets.", 
      description: "Dubai offers unmatched global access, linking investors to Europe, Asia, and the Americas within hours.", 
      btnText: "Discover Connectivity",
      videoUrl: "https://www.youtube.com/watch?v=gCYk9PQ_hVY" 
    },
    { 
      id: 2, 
      subtitle: "Tax-Free Prosperity", 
      title: "A financial environment designed for growth.", 
      description: "With zero income tax and investor‑friendly regulations, Dubai empowers businesses to build wealth securely.", 
      btnText: "Discover Tax-Free Living",
      videoUrl: "https://www.youtube.com/watch?v=33eoZgak3P4" 
    },
    { 
      id: 3, 
      subtitle: "Unmatched Stability", 
      title: "A safe, resilient, future‑focused nation.", 
      description: "Dubai’s political stability and strong governance create a secure environment for long-term investing.", 
      btnText: "Discover Stability",
      videoUrl: "https://www.youtube.com/watch?v=E_re8P7kthk" 
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-black text-white overflow-hidden relative border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-subtitle">
            ADVANTAGES
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-6xl font-header font-bold mb-6">
            Global Standard
          </motion.h2>
        </div>

        <div className="space-y-16 md:space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24`}>
              <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#D4AF37] font-mono text-sm">0{feature.id}</span>
                  <div className="h-[1px] w-12 bg-[#D4AF37]" />
                  <span className="text-gray-400 text-xs tracking-[0.2em] uppercase">{feature.subtitle}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-header text-white">{feature.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed text-lg">{feature.description}</p>
                <div className="pt-4">
                  <GlowButton text={feature.btnText} />
                </div>
              </motion.div>
              
              <div className="flex-1 relative group w-full aspect-[9/16] md:aspect-[4/5] overflow-hidden bg-zinc-900 rounded-sm">
                <div className="absolute inset-0 pointer-events-none scale-[1.2] md:scale-[1.5]">
                   <ReactPlayer
                    url={feature.videoUrl}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    config={{ youtube: { playerVars: { showinfo: 0, controls: 0, modestbranding: 1, rel: 0, autoplay: 1 } } }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiLifestyle;