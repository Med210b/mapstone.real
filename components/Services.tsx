import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Home, TrendingUp, Key, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const MouseEnterContext = createContext<any>(undefined);

const CardContainer = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const handleMouseMove = (e: any) => { 
    if (!containerRef.current) return; 
    const { left, top, width, height } = containerRef.current.getBoundingClientRect(); 
    const x = (e.clientX - left - width / 2) / 25; 
    const y = (e.clientY - top - height / 2) / 25; 
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; 
  };
  return ( 
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}> 
      <div className="py-5 flex items-center justify-center" style={{ perspective: "1000px" }}> 
        <div ref={containerRef} onMouseEnter={() => setIsMouseEntered(true)} onMouseMove={handleMouseMove} onMouseLeave={() => { setIsMouseEntered(false); if(containerRef.current) containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`; }} className="relative transition-all duration-200 ease-linear" style={{ transformStyle: "preserve-3d" }}> 
          {props.children} 
        </div> 
      </div> 
    </MouseEnterContext.Provider> 
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  // SAFETY: Fallback data
  const servicesData = [
    { icon: <Home />, title: t?.services?.s1_title || "Sales", desc: t?.services?.s1_desc || "Guidance." },
    { icon: <TrendingUp />, title: t?.services?.s2_title || "Investment", desc: t?.services?.s2_desc || "Advisory." },
    { icon: <Key />, title: t?.services?.s3_title || "Leasing", desc: t?.services?.s3_desc || "Exclusive." },
    { icon: <Shield />, title: t?.services?.s4_title || "Management", desc: t?.services?.s4_desc || "Care." }
  ];

  return (
    <section id="services" className="py-24 bg-black text-white border-b border-[#D4AF37]/30">
      <div className="container mx-auto px-6">
        <SectionTitle title={t?.services?.title || "Our Expertise"} subtitle={t?.services?.subtitle || "Services"} light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((s, i) => (
            <CardContainer key={i}>
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-[#D4AF37] transition-all">
                <div className="mb-6 text-[#D4AF37]">{s.icon}</div>
                <h3 className="text-2xl font-header mb-4">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;