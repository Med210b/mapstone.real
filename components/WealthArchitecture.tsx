import React from 'react';
import { motion } from "framer-motion";
import { Building2, TrendingUp, Bitcoin, Plane } from "lucide-react";
import { useLanguage } from './LanguageContext';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({ id: i, d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`, width: 0.5 + i * 0.03 }));
  return ( <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 696 316" fill="none"> {paths.map((path) => ( <motion.path key={path.id} d={path.d} stroke="#8B2020" strokeWidth={path.width} strokeOpacity={0.1 + path.id * 0.03} initial={{ pathLength: 0.3, opacity: 0.6 }} animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }} transition={{ duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} /> ))} </svg> );
}

const WealthArchitecture: React.FC = () => {
  const { t } = useLanguage();

  return (
    // Reduced padding
    <section id="investment-strategy" className="relative min-h-screen bg-black text-white overflow-hidden py-16 md:py-24 border-t border-[#D4AF37]/30">
      <div className="absolute inset-0"> <FloatingPaths position={1} /> <FloatingPaths position={-1} /> </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] mb-4 font-subtitle">{t.wealth.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-header text-white mb-2">{t.wealth.title}</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mb-8" />
          <p className="text-white text-lg leading-relaxed max-w-2xl font-body">{t.wealth.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start justify-between mb-6"><h2 className="text-2xl font-header text-[#D4AF37]">Off-Plan Capital Growth</h2><Building2 className="w-12 h-12 text-[#D4AF37] opacity-50" /></div>
            <p className="text-white mb-6 leading-relaxed font-body">Secure assets at pre-launch prices with priority access.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-start justify-between mb-6"><h2 className="text-2xl font-header text-[#D4AF37]">Portfolio Diversification</h2><TrendingUp className="w-12 h-12 text-[#D4AF37] opacity-50" /></div>
            <p className="text-white mb-6 leading-relaxed font-body">Anchor wealth in Dubai's dollar-pegged economy.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 group"><div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors"><Bitcoin className="w-6 h-6 text-[#D4AF37]" /></div><div><h3 className="text-[#D4AF37] font-semibold mb-1 font-header">{t.wealth.crypto_title}</h3><p className="text-gray-300 text-sm font-body">{t.wealth.crypto_desc}</p></div></div>
            <div className="flex items-start gap-4 group"><div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors"><Plane className="w-6 h-6 text-[#D4AF37]" /></div><div><h3 className="text-[#D4AF37] font-semibold mb-1 font-header">{t.wealth.visa_title}</h3><p className="text-gray-300 text-sm font-body">{t.wealth.visa_desc}</p></div></div>
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-[#2d1818] to-[#1a0f0f] border border-[#4a2020] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div><h2 className="text-2xl font-header text-[#D4AF37] mb-2">Private Client Advisory</h2><p className="text-white text-sm font-body opacity-80">Book a confidential consultation.</p></div>
            <a href="#contact" className="bg-[#D4AF37] text-black hover:bg-[#f0c860] hover:scale-105 transition-all duration-300 font-bold px-8 py-4 text-sm tracking-wider rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] uppercase text-center cursor-pointer">{t.wealth.btn_schedule}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WealthArchitecture;