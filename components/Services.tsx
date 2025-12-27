import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Home, TrendingUp, Key, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const MouseEnterContext = createContext<any>(undefined);

const CardContainer = (props: any) => {
  const { children, className, containerClassName } = props;
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
      <div className={cn("py-5 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}> 
        <div ref={containerRef} onMouseEnter={() => setIsMouseEntered(true)} onMouseMove={handleMouseMove} onMouseLeave={() => { setIsMouseEntered(false); if(containerRef.current) containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`; }} className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)} style={{ transformStyle: "preserve-3d" }}> 
          {children} 
        </div> 
      </div> 
    </MouseEnterContext.Provider> 
  );
};

const CardBody = (props: any) => { return <div className={cn("h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", props.className)}>{props.children}</div>; };

const CardItem = (props: any) => {
  const { as: Tag = "div", children, className, translateZ = 0, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext) || [false];
  useEffect(() => { if (!ref.current) return; ref.current.style.transform = isMouseEntered ? `translateZ(${translateZ}px)` : `translateZ(0px)`; }, [isMouseEntered, translateZ]);
  return <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>{children}</Tag>;
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  const servicesData = [
    { icon: <Home size={40} />, title: t?.services?.s1_title || "Property Sales", desc: t?.services?.s1_desc || "Expert guidance." },
    { icon: <TrendingUp size={40} />, title: t?.services?.s2_title || "Investment Advisory", desc: t?.services?.s2_desc || "Insights." },
    { icon: <Key size={40} />, title: t?.services?.s3_title || "Luxury Leasing", desc: t?.services?.s3_desc || "Residences." },
    { icon: <Shield size={40} />, title: t?.services?.s4_title || "Property Management", desc: t?.services?.s4_desc || "Care." }
  ];

  return (
    <section id="services" className="py-24 bg-transparent text-white relative border-b border-[#D4AF37]/30">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title={t?.services?.title || "Our Expertise"} subtitle={t?.services?.subtitle || "Services"} light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <CardContainer key={index} className="inter-var w-full h-full">
              <CardBody className="bg-zinc-900/80 border border-white/10 w-full h-auto rounded-xl p-8 hover:border-[#D4AF37] transition-all">
                <CardItem translateZ="50" className="mb-6 w-full text-[#D4AF37]">{service.icon}</CardItem>
                <CardItem translateZ="40" className="w-full text-2xl font-header mb-4">{service.title}</CardItem>
                <CardItem translateZ="30" className="w-full text-gray-400 text-sm leading-relaxed">{service.desc}</CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;