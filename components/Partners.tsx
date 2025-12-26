import React from 'react';
import BackgroundEffect from './BackgroundEffect';
import { useLanguage } from './LanguageContext';

const partners = [
  { name: "DAMAC Properties", logo: "https://i.postimg.cc/DJ7MW0zK/Damac-logo-svg.png" },
  { name: "Danube Properties", logo: "https://i.postimg.cc/ZBjD6m9Z/Danube-Properties.png" },
  { name: "Ellington Properties", logo: "https://i.postimg.cc/sQ3NBx2z/Ellington-properties-Logo.png" },
  { name: "Emaar Properties", logo: "https://i.postimg.cc/zbpPTNy4/Emaar-logo-svg.png" },
  { name: "Imtiaz Developments", logo: "https://i.postimg.cc/KkmHKjYm/Imtiaz-Logo.png" },
  { name: "Partner", logo: "https://i.postimg.cc/xJgFLQXW/logo-main.png" },
  { name: "Meraas", logo: "https://i.postimg.cc/ft5gYs3Q/Meraas-logo-svg.png" },
  { name: "Nakheel", logo: "https://i.postimg.cc/5Ypk8JHf/nakheel-og-1724163932.webp" },
  { name: "Omniyat", logo: "https://i.postimg.cc/0MZH7v6j/ommnyatt.png" },
  { name: "Sobha Realty", logo: "https://i.postimg.cc/TLQHnxyd/sobha-realty-eng-logo-02-copy.webp" },
];

const Partners: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen bg-black py-12 px-4 sm:py-16 sm:px-6 lg:px-8 border-b border-[#d49842]/30 overflow-hidden relative">
      <BackgroundEffect color="#8B2020" opacity={0.12} />
      <style>{`@keyframes orbit3d { 0% { transform: rotateY(0deg) translateZ(450px) rotateY(0deg); } 100% { transform: rotateY(360deg) translateZ(450px) rotateY(-360deg); } } @keyframes orbit3d-mobile { 0% { transform: rotateY(0deg) translateZ(250px) rotateY(0deg); } 100% { transform: rotateY(360deg) translateZ(250px) rotateY(-360deg); } } .carousel-3d { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; perspective: 1000px; } .carousel-item { position: absolute; top: 50%; left: 50%; transform-style: preserve-3d; animation: orbit3d-mobile 24s linear infinite; animation-delay: calc(var(--index) * -2.4s); } @media (min-width: 768px) { .carousel-item { animation: orbit3d 24s linear infinite; animation-delay: calc(var(--index) * -2.4s); } } .carousel-card { width: 140px; height: 100px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)); backdrop-filter: blur(12px); border: 1px solid rgba(212, 152, 66, 0.2); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); transform: translateX(-50%) translateY(-50%); transition: all 0.3s ease; } @media (min-width: 768px) { .carousel-card { width: 200px; height: 160px; } } .carousel-item:hover .carousel-card { border-color: rgba(212, 152, 66, 0.8); box-shadow: 0 0 30px rgba(212, 152, 66, 0.3); transform: translateX(-50%) translateY(-50%) scale(1.1); z-index: 10; }`}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest mb-4 sm:mb-6 text-[#d49842] font-subtitle uppercase">{t.partners.subtitle}</h2>
          <div className="flex items-center justify-center mb-4 sm:mb-6"><div className="h-px w-12 sm:w-16 bg-[#d49842]" /></div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white font-header">{t.partners.title}</h1>
        </div>
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center my-8 sm:my-12 lg:my-16">
          <div className="carousel-3d">
            {partners.map((partner, index) => (
              <div key={index} className="carousel-item" style={{ "--index": index, "--total": partners.length } as React.CSSProperties}>
                <div className="carousel-card group"><img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;