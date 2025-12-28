import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, DollarSign, Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const CapsuleFlipStack = ({ folder, total }: { folder: string, total: number }) => {
  const [stack, setStack] = useState(Array.from({ length: total }, (_, i) => i + 1));
  const flipToBack = () => setStack(prev => [...prev.slice(1), prev[0]]);
  const flipToFront = () => setStack(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);

  return (
    <div className="relative w-full h-[450px] flex flex-col items-center justify-center perspective-[1200px]">
      <div className="relative w-full max-w-[380px] h-[520px]">
        <AnimatePresence mode="popLayout">
          {stack.slice(0, 3).reverse().map((imgNum, index) => {
            const isTop = index === 2;
            return (
              <motion.div key={`${folder}-${imgNum}`} style={{ zIndex: index, transformStyle: "preserve-3d" }} initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 0.92 + index * 0.04, y: (2 - index) * -25, rotateX: isTop ? 0 : -10, z: index * 40 }} exit={{ opacity: 0, y: -200, rotateX: -45, scale: 0.5, transition: { duration: 0.5 } }} className="absolute inset-0">
                <div className="w-full h-full rounded-[40px] overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#050505]">
                  <img src={`projects/${folder}/${imgNum}.jpg`} alt="View" className="w-full h-full object-cover pointer-events-none" onError={(e) => { (e.target as HTMLImageElement).src = 'https://i.postimg.cc/RZh2mKwh/eb98713e-662c-40bf-9a16-f715d1c09ce9.png'; }} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="absolute -bottom-16 flex items-center gap-8 z-[100]">
        <button onClick={flipToFront} className="flex items-center justify-center w-14 h-14 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"><ArrowLeft size={24} /></button>
        <button onClick={flipToBack} className="flex items-center justify-center w-14 h-14 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"><ArrowRight size={24} /></button>
      </div>
    </div>
  );
};

const FeaturedDevelopments: React.FC = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=971585928787&text&type=phone_number&app_absent=0";
  const projects = [
    { id: 1, key: 'p1', folder: 'Shahrukhz by Danube', total: 10, loc: "Sheikh Zayed Road", price: "$517,400", pay: "70/30", date: "Q2 2029" },
    { id: 2, key: 'p2', folder: 'Wedyan The Canal', total: 10, loc: "Business Bay", price: "$7,079,600", pay: "60/40", date: "Q1 2030" },
    { id: 3, key: 'p3', folder: 'Hilton Residences JLT by Emirates', total: 10, loc: "JLT", price: "$313,100", pay: "35/65", date: "Q3 2027" },
    { id: 4, key: 'p4', folder: 'Rabdan Gardens by Rabdan Developments', total: 10, loc: "Jumeirah Garden City", price: "$250,500", pay: "50/50", date: "Q4 2027" },
    { id: 5, key: 'p5', folder: 'Hado by BEYOND at Dubai Islands', total: 10, loc: "Dubai Islands", price: "$599,000", pay: "50/50", date: "Q3 2029" },
    { id: 6, key: 'p6', folder: 'FLU1D One by Object 1', total: 9, loc: "Dubai Islands", price: "$536,400", pay: "50/50", date: "Q4 2028" },
  ];

  return (
    <section id="featured-developments" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-40">
          <h4 className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase mb-4 opacity-70">{t.projects.subtitle}</h4>
          <h2 className="text-5xl md:text-7xl font-header font-bold text-white uppercase tracking-tighter">{t.projects.title}</h2>
        </div>
        <div className="flex flex-col gap-64 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div key={proj.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}><CapsuleFlipStack folder={proj.folder} total={proj.total} /></div>
              <div className={`space-y-10 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-4"><div className="h-px w-12 bg-[#D4AF37]" /><span className="text-[#D4AF37] font-bold uppercase tracking-widest text-[11px]">{proj.date}</span></div>
                <h3 className="text-5xl md:text-6xl font-header text-white uppercase tracking-tighter leading-[0.9]">{(t.projects.items as any)[proj.key].name}</h3>
                <p className="text-gray-400 font-body text-lg leading-relaxed max-w-lg">{(t.projects.items as any)[proj.key].desc}</p>
                <div className="grid grid-cols-2 gap-12 py-10 border-y border-white/10">
                  <div className="space-y-2"><p className="text-[#D4AF37] text-[10px] uppercase tracking-widest opacity-50 font-subtitle">{t.projects.label_location}</p><p className="text-white font-medium text-lg">{proj.loc}</p></div>
                  <div className="space-y-2"><p className="text-[#D4AF37] text-[10px] uppercase tracking-widest opacity-50 font-subtitle">{t.projects.label_price}</p><p className="text-white font-bold text-xl tracking-tight text-[#D4AF37]">{proj.price}</p></div>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full py-6 bg-white text-black font-bold uppercase tracking-[0.4em] transition-all hover:bg-[#D4AF37] rounded-sm">
                  <MessageCircle size={22} /><span className="relative z-10 text-xs">{t.projects.btn_brochure}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopments;