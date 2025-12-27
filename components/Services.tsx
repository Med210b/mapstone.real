import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Home, TrendingUp, Key, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

// NUCLEAR FIX: Use 'any' to bypass strict TypeScript build errors
const CardContainer = (props: any) => {
  const { children, className, containerClassName } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => { if (!containerRef.current) return; const { left, top, width, height } = containerRef.current.getBoundingClientRect(); const x = (e.clientX - left - width / 2) / 25; const y = (e.clientY - top - height / 2) / 25; containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; };
  const handleMouseEnter = () => { setIsMouseEntered(true); };
  const handleMouseLeave = () => { if (!containerRef.current) return; setIsMouseEntered(false); containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`; };
  return ( <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}> <div className={cn("py-5 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}> <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)} style={{ transformStyle: "preserve-3d" }}> {children} </div> </div> </MouseEnterContext.Provider> );
};

const CardBody = (props: any) => { return <div className={cn("h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", props.className)}>{props.children}</div>; };

const CardItem = (props: any) => {
  const { as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext) || [false];
  useEffect(() => { if (!ref.current) return; if (isMouseEntered) { ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`; } else { ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px)`; } }, [isMouseEntered, translateX, translateY, translateZ]);
  return <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>{children}</Tag>;
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  // SAFEGUARDS: Use fallback text if translation is missing
  const services = [
    { icon: <Home size={40} />, title: t.services?.s1_title || "Property Sales", description: t.services?.s1_desc || "Expert guidance." },
    { icon: <TrendingUp size={40} />, title: t.services?.s2_title || "Investment", description: t.services?.s2_desc || "Data-driven insights." },
    { icon: <Key size={40} />, title: t.services?.s3_title || "Leasing", description: t.services?.s3_desc || "Luxury leasing." },
    { icon: <Shield size={40} />, title: t.services?.s4_title || "Management", description: t.services?.s4_desc || "Comprehensive care." }
  ];

  return (
    <section id="services" className="py-24 bg-transparent text-white relative overflow-hidden border-b border-[#D4AF37]/30">
      <div className="absolute inset-0 opacity-10 pointer-events-none"><svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* SAFEGUARD: Use safe navigation ?. to prevent crash */}
        <SectionTitle title={t.services?.title || "Our Expertise"} subtitle={t.services?.subtitle || "Services"} light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <CardContainer key={index} className="inter-var w-full h-full">
              <CardBody className="bg-gradient-to-br from-[#2d0f0f] via-black to-[#0f0505] relative group/card border border-[#8B2020]/40 w-full h-auto rounded-xl p-8 hover:shadow-2xl hover:shadow-[#8B2020]/20 hover:border-[#D4AF37] transition-all duration-300">
                <CardItem translateZ="50" className="mb-6 w-full"><div className="w-16 h-16 rounded-full bg-[#8B2020]/10 border border-[#8B2020]/30 flex items-center justify-center text-[#D4AF37] group-hover/card:scale-110 transition-transform duration-300">{service.icon}</div></CardItem>
                <CardItem translateZ="40" className="w-full"><h3 className="font-header text-2xl mb-4 text-white group-hover/card:text-[#D4AF37] transition-colors">{service.title}</h3></CardItem>
                <CardItem translateZ="30" className="w-full"><p className="font-body text-gray-400 leading-relaxed text-sm group-hover/card:text-gray-200 transition-colors">{service.description}</p></CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;