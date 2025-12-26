import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { MapPin, DollarSign, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const getImgPath = (folder: string, index: number) => `/mapstone.real/projects/${folder}/${index}.jpg`;
const projects = [
  { id: 1, name: "Shahrukhz by Danube", location: "Sheikh Zayed Road", description: "A premier commercial opportunity located directly on Sheikh Zayed Road.", price: "From $517,400 (AED 1.9M)", type: "Offices", payment: "70/30", handover: "Q2 2029", images: Array.from({ length: 10 }, (_, i) => getImgPath('Shahrukhz by Danube', i + 1)) },
  { id: 2, name: "Wedyan The Canal", location: "Business Bay", description: "Exclusive waterfront living situated right on the Dubai Canal.", price: "From $7,079,600 (AED 26M)", type: "3BR Units", payment: "60/40", handover: "Q1 2030", images: Array.from({ length: 10 }, (_, i) => getImgPath('Wedyan The Canal by Al Ghurair Collection', i + 1)) },
];

const AnimatedStack = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState(0);
  const handleNext = () => setActive((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="relative w-full"><div className="relative h-[400px] w-full"><AnimatePresence>{images.map((src, index) => (<motion.div key={src} initial={{ opacity: 0, scale: 0.9, z: -100 }} animate={{ opacity: index === active ? 1 : 0.7, scale: index === active ? 1 : 0.95, z: index === active ? 0 : -100, zIndex: index === active ? 999 : 0 }} className="absolute inset-0 origin-bottom"><img src={src} className="h-full w-full rounded-3xl object-cover shadow-2xl border border-white/10" /></motion.div>))}</AnimatePresence></div><div className="flex justify-center gap-6 mt-8"><button onClick={handlePrev} className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37]"><ArrowLeft className="h-5 w-5 text-white group-hover:text-black" /></button><button onClick={handleNext} className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37]"><ArrowRight className="h-5 w-5 text-white group-hover:text-black" /></button></div></div>
  );
};

const FeaturedDevelopments: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="featured-developments" className="min-h-screen bg-[#050505] text-white py-24 border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} light={true} />
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20 -mt-8 font-body">{t.projects.intro}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <div className={`contents ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}><AnimatedStack images={project.images} /></div>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div><div className="flex items-center justify-between mb-4"><span className="text-[#D4AF37] font-mono text-xs tracking-widest border border-[#D4AF37]/30 px-3 py-1 rounded">{project.handover}</span></div><h3 className="text-4xl font-header text-white mb-2">{project.name}</h3></div>
                  <p className="text-gray-300 font-body leading-relaxed text-lg border-l-2 border-[#D4AF37] pl-6">{project.description}</p>
                  <div className="grid grid-cols-2 gap-6 py-6 border-t border-white/10 border-b">
                    <div><div className="flex items-center gap-2 text-[#D4AF37] mb-1"><MapPin size={18} /><span className="text-xs uppercase tracking-wider">{t.projects.label_location}</span></div><p className="text-white font-medium">{project.location}</p></div>
                    <div><div className="flex items-center gap-2 text-[#D4AF37] mb-1"><DollarSign size={18} /><span className="text-xs uppercase tracking-wider">{t.projects.label_price}</span></div><p className="text-white font-medium">{project.price}</p></div>
                    <div><div className="flex items-center gap-2 text-[#D4AF37] mb-1"><Calendar size={18} /><span className="text-xs uppercase tracking-wider">{t.projects.label_payment}</span></div><p className="text-white font-medium">{project.payment}</p></div>
                    <div><div className="flex items-center gap-2 text-[#D4AF37] mb-1"><MapPin size={18} /><span className="text-xs uppercase tracking-wider">{t.projects.label_type}</span></div><p className="text-white font-medium">{project.type}</p></div>
                  </div>
                  <a href="#contact" className="group relative block w-full bg-white text-black py-4 font-bold uppercase tracking-widest overflow-hidden text-center"><span className="relative z-10 group-hover:text-white transition-colors duration-300">{t.projects.btn_brochure}</span><div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" /></a>
                </div>
              </div>
              {index !== projects.length - 1 && (<div className="col-span-1 lg:col-span-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedDevelopments;