import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// --- COMPONENTS ---

// 1. The Popup Video Player (Modal)
const VideoModal: React.FC<{ url: string; onClose: () => void }> = ({ url, onClose }) => {
  // Helper to convert YouTube Shorts/Watch links to Embed format
  const getEmbedUrl = (videoUrl: string) => {
    try {
      let videoId = "";
      if (videoUrl.includes("/shorts/")) {
        videoId = videoUrl.split("/shorts/")[1].split("?")[0];
      } else if (videoUrl.includes("v=")) {
        videoId = videoUrl.split("v=")[1].split("&")[0];
      } else if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    } catch (e) {
      return videoUrl;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
      onClick={onClose} // Close when clicking background
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
      >
        <X size={40} />
      </button>

      {/* Video Container (Vertical aspect ratio for Shorts) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/30"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
      >
        <iframe
          src={getEmbedUrl(url)}
          title="Video Player"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  );
};

// 2. The Button (Now accepts an onClick action instead of a link)
const GlowButton: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative group px-10 py-4 rounded-full bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-[#D4AF37] cursor-pointer"
  >
    <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-10" />
    <div className="relative flex items-center gap-4 z-10">
      {text}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </motion.button>
);

// --- MAIN SECTION ---

const DubaiLifestyle: React.FC = () => {
  // State to track which video is open
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const features = [
    { 
      id: 1, 
      subtitle: "Strategic Connectivity", 
      title: "Where the world meets.", 
      description: "Dubai offers unmatched global access, linking investors to Europe, Asia, and the Americas within hours. A city built for mobility, business, and limitless expansion.", 
      btnText: "Discover Connectivity",
      image: "https://i.postimg.cc/1trhgtbr/4c9b0eceaa0bdf1cb31220cef95c81ca.jpg",
      videoUrl: "https://youtube.com/shorts/0Og57xUNmuQ?si=6hlAcpyazHu9s8oH"
    },
    { 
      id: 2, 
      subtitle: "Tax-Free Prosperity", 
      title: "A financial environment designed for growth.", 
      description: "With zero income tax and investor‑friendly regulations, Dubai empowers individuals and businesses to build wealth efficiently and securely.", 
      btnText: "Discover Tax-Free Living",
      image: "https://i.postimg.cc/nzGbszNq/e7cb459dd24231da6c2bb82db27e78e1.jpg",
      videoUrl: "https://youtube.com/shorts/33eoZgak3P4?si=HG7mAX3fnppA3Gvu"
    },
    { 
      id: 3, 
      subtitle: "Unmatched Stability", 
      title: "A safe, resilient, future‑focused nation.", 
      description: "Dubai’s political stability, strong governance, and long-term vision create one of the world’s most secure environments for living and investing.", 
      btnText: "Discover Stability",
      image: "https://i.postimg.cc/Y9zK49TN/5dea051ac81c7db32a7b813db7631fca.jpg",
      videoUrl: "https://youtube.com/shorts/E_re8P7kthk?si=BO8AoZm61fyfmg2c"
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-[#050505] text-white overflow-hidden relative border-t border-[#D4AF37]/20">
      
      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal url={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-40 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold block mb-6">
              The Dubai Advantage
            </span>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Global Standard
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              A world-class destination defining the future of wealth, lifestyle, and opportunity.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 lg:gap-32`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 space-y-8 md:space-y-10"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] font-mono text-xl opacity-60">0{feature.id}</span>
                  <div className="h-[1px] w-16 bg-[#D4AF37]/50" />
                  <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">{feature.subtitle}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-loose font-light border-l-2 border-[#D4AF37]/20 pl-6">
                  {feature.description}
                </p>
                
                <div className="pt-6">
                  {/* Clicking this button now opens the Modal instead of a new tab */}
                  <GlowButton text={feature.btnText} onClick={() => setActiveVideo(feature.videoUrl)} />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className="relative group w-full aspect-[4/5] md:aspect-[3/4]">
                  <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-sm scale-95 group-hover:scale-100 transition-transform duration-700 ease-out" />
                  <div className="relative h-full w-full overflow-hidden rounded-sm bg-zinc-900">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <motion.img 
                      src={feature.image} 
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4AF37]/5 backdrop-blur-md border border-[#D4AF37]/20 rounded-full hidden md:block group-hover:scale-110 transition-transform duration-500" />
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