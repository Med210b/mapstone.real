import React, { useRef, useState, createContext, useContext, useEffect } from 'react';
import BackgroundEffect from './BackgroundEffect';
import { useLanguage } from './LanguageContext';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Globe, Award, ShieldCheck } from 'lucide-react';

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

// FORCE BUILD: Using 'any' type
const CardContainer = (props: any) => {
  const { children, className, containerClassName } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => { 
    if (!containerRef.current) return; 
    const { left, top, width, height } = containerRef.current.getBoundingClientRect(); 
    const x = (e.clientX - left - width / 2) / 25; 
    const y = (e.clientY - top - height / 2) / 25; 
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; 
  };
  const handleMouseEnter = () => { setIsMouseEntered(true); };
  const handleMouseLeave = () => { if (!containerRef.current) return; setIsMouseEntered(false); containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`; };
  return ( <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}> <div className={cn("flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}> <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)} style={{ transformStyle: "preserve-3d" }}> {children} </div> </div> </MouseEnterContext.Provider> );
};

const CardBody = (props: any) => { return <div className={cn("h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", props.className)}>{props.children}</div>; };

const CardItem = (props: any) => {
  const { as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext) || [false];
  useEffect(() => { if (!ref.current) return; if (isMouseEntered) { ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`; } else { ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px)`; } }, [isMouseEntered, translateX, translateY, translateZ]);
  return <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>{children}</Tag>;
};

const partnersList = [
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
  
  const pillarData = [
    { title: "Global Reach", desc: "Connecting Dubai's finest developments to global investors.", icon: <Globe className="w-10 h-10 text-[#D4AF37]" /> },
    { title: "Elite Standards", desc: "Rigorous criteria for quality and delivery.", icon: <Award className="w-10 h-10 text-[#D4AF37]" /> },
    { title: "Secure Investment", desc: "Ensuring long-term capital appreciation.", icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" /> }
  ];

  return (
    <section className="min-h-screen bg-black py-12 px-4 sm:py-16 sm:px-6 lg:px-8 border-b border-[#d49842]/30 overflow-hidden relative">
      <BackgroundEffect color="#8B2020" opacity={0.15} />
      <style>{`@keyframes orbit3d { 0% { transform: rotateY(0deg) translateZ(450px) rotateY(0deg); } 100% { transform: rotateY(360deg) translateZ(450px) rotateY(-360deg); } } @keyframes orbit3d-mobile { 0% { transform: rotateY(0deg) translateZ(250px) rotateY(0deg); } 100% { transform: rotateY(360deg) translateZ(250px) rotateY(-360deg); } } .carousel-3d { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; perspective: 1000px; } .carousel-item { position: absolute; top: 50%; left: 50%; transform-style: preserve-3d; animation: orbit3d-mobile 24s linear infinite; animation-delay: calc(var(--index) * -2.4s); } @media (min-width: 768px) { .carousel-item { animation: orbit3d 24s linear infinite; animation-delay: calc(var(--index) * -2.4s); } } .carousel-card { width: 140px; height: 100px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)); backdrop-filter: blur(12px); border: 1px solid rgba(212, 152, 66, 0.2); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); transform: translateX(-50%) translateY(-50%); transition: all 0.3s ease; } @media (min-width: 768px) { .carousel-card { width: 200px; height: 160px; } } .carousel-item:hover .carousel-card { border-color: rgba(212, 152, 66, 0.8); box-shadow: 0 0 30px rgba(212, 152, 66, 0.3); transform: translateX(-50%) translateY(-50%) scale(1.1); z-index: 10; }`}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest mb-4 sm:mb-6 text-[#d49842] font-subtitle uppercase">{t?.partners?.subtitle || "Our Network"}</h2>
          <div className="flex items-center justify-center mb-4 sm:mb-6"><div className="h-px w-12 sm:w-16 bg-[#d49842]" /></div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white font-header">{t?.partners?.title || "Strategic Partners"}</h1>
        </div>
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center my-8 sm:my-12 lg:my-16">
          <div className="carousel-3d">
            {partnersList.map((partner, index) => (
              <div key={index} className="carousel-item" style={{ "--index": index, "--total": partnersList.length } as React.CSSProperties}>
                <div className="carousel-card group"><img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-12"><h3 className="text-[#D4AF37] font-subtitle tracking-widest uppercase text-sm mb-2">Our Standards</h3><h2 className="text-3xl md:text-4xl text-white font-header">Why We Partner</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillarData.map((pillar, i) => (
              <CardContainer key={i} className="inter-var w-full">
                <CardBody className="bg-black/80 relative group/card border border-[#8B2020]/50 w-full h-auto rounded-xl p-8 hover:shadow-2xl hover:shadow-[#8B2020]/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B2020]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  <CardItem translateZ="50" className="w-full mb-6"><div className="w-16 h-16 rounded-full bg-[#8B2020]/20 border border-[#8B2020] flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,32,32,0.5)]">{pillar.icon}</div></CardItem>
                  <CardItem translateZ="40" className="text-xl font-bold text-white mb-3 group-hover/card:text-[#D4AF37] transition-colors">{pillar.title}</CardItem>
                  <CardItem translateZ="30" className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;