import React, { useRef, createContext, useState, useContext, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from './LanguageContext'; 

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

const CardContainer = ({ children, className, containerClassName }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };
  const handleMouseEnter = () => setIsMouseEntered(true);
  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return ( <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}> <div className={cn("py-5 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}> <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)} style={{ transformStyle: "preserve-3d" }}> {children} </div> </div> </MouseEnterContext.Provider> );
};
const CardBody = ({ children, className }: any) => <div className={cn("h-auto w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>{children}</div>;
const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, ...rest }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext) || [false];
  useEffect(() => { if (!ref.current) return; if (isMouseEntered) { ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`; } else { ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px)`; } }, [isMouseEntered, translateX, translateY, translateZ]);
  return <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>{children}</Tag>;
};

const StaggeredText: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
);

const StickySection: React.FC<{ title: string; number: string; children: React.ReactNode }> = ({ title, number, children }) => (
  <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 md:mb-48 relative z-10">
    <div className="md:w-1/3">
      <div className="sticky top-32">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex items-baseline gap-4 border-b border-[#D4AF37]/30 pb-4">
          <span className="font-subtitle text-[#D4AF37] text-sm tracking-widest">{number}</span>
          <h2 className="font-header text-3xl md:text-5xl text-white uppercase tracking-tight">{title}</h2>
        </motion.div>
      </div>
    </div>
    <div className="md:w-2/3 pt-4 md:pt-20">{children}</div>
  </div>
);

const About: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yLines = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section id="about" ref={containerRef} className="relative bg-transparent text-white py-16 md:py-32 overflow-hidden min-h-screen border-b border-[#D4AF37]/30">
      <motion.div style={{ y: yBackground }} className="absolute top-[-10%] right-0 w-3/4 h-[120%] opacity-[0.04] pointer-events-none z-0"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover grayscale" /><div className="absolute inset-0 bg-gradient-to-l from-transparent to-black" /></motion.div>
      <motion.div style={{ y: yLines }} className="absolute left-10 top-[-20%] w-[1px] h-[150%] bg-white/5 z-0" />
      <motion.div style={{ y: yLines, x: 20 }} className="absolute left-10 top-[-10%] w-[1px] h-[150%] bg-[#D4AF37]/10 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-40 md:pl-20 max-w-5xl">
          <StaggeredText className="font-subtitle text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-8">{t.about.subtitle}</StaggeredText>
          <h1 className="font-header text-4xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
            <StaggeredText delay={0.1}>{t.about.t1}</StaggeredText>
            <StaggeredText delay={0.2} className="text-gray-500">{t.about.t2}</StaggeredText>
            <StaggeredText delay={0.3}>{t.about.t3}</StaggeredText>
            <StaggeredText delay={0.4} className="text-[#D4AF37] italic font-serif">{t.about.t4}</StaggeredText>
          </h1>
        </div>

        <StickySection title="Vision" number="01">
          <CardContainer className="inter-var mb-8">
            <CardBody className="bg-black/40 relative group/card border-white/10 w-full h-auto rounded-xl p-6 border hover:border-[#D4AF37]/50">
              <CardItem translateZ="50" className="w-full mb-6">
                <img src="https://kadibusiness.com/wp-content/uploads/2024/02/Dubai-Economy-and-Tourism.jpg" className="h-60 w-full object-cover rounded-xl" />
              </CardItem>
              <CardItem translateZ="60" className="text-xl font-bold text-white mb-2">Redefining the Meaning of Luxury</CardItem>
              <CardItem as="p" translateZ="40" className="text-gray-300 text-sm max-w-sm">
                MAPSTONE was founded with a singular belief: luxury is not a price point — it is a philosophy. Our vision is to transform real estate from a simple transaction into a journey of legacy building. We guide visionaries, investors, and families toward assets that become symbols of achievement, generational wealth, and architectural distinction.
              </CardItem>
            </CardBody>
          </CardContainer>
        </StickySection>

        <StickySection title="Methodology" number="02">
          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card border-white/10 w-full h-auto rounded-xl p-6 border hover:border-[#D4AF37]/50">
              <CardItem translateZ="80" className="w-full mt-4">
                <img src="https://i.postimg.cc/76ctw2Kg/66.jpg" className="h-60 w-full object-cover rounded-xl grayscale group-hover/card:grayscale-0" />
              </CardItem>
              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div>
                  <CardItem translateZ="50" className="text-xl font-header text-[#D4AF37] mb-2">Precision as a Discipline</CardItem>
                  <CardItem translateZ="40" className="text-gray-400 text-sm">
                    At MAPSTONE, precision is not a practice — it is our identity. We read the market before the market speaks, leveraging proprietary intelligence, early developer access, and deep analytical frameworks.
                  </CardItem>
                </div>
                <div>
                  <CardItem translateZ="50" className="text-xl font-header text-[#D4AF37] mb-2">Intentionality</CardItem>
                  <CardItem translateZ="40" className="text-gray-400 text-sm">
                    Every recommendation is intentional, data‑driven, and tailored to maximize long‑term value in Dubai’s fast‑evolving landscape.
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </StickySection>

        <StickySection title="The Standard" number="03">
          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card border-white/10 w-full h-auto rounded-xl p-6 border hover:border-[#D4AF37]/50">
              <CardItem translateZ="50" className="w-full mb-6">
                <img src="https://i.postimg.cc/nVW3NT4R/Whats-App-Image-2025-09-04-at-01-18-25-e24c3ba8.jpg" className="h-60 w-full object-cover rounded-xl" />
              </CardItem>
              <CardItem translateZ="60" className="font-header text-xl md:text-2xl text-white leading-relaxed text-center mt-4 px-4">
                "MAPSTONE does not follow the market; we set the benchmark. Our clients expect the exceptional, and we deliver nothing less. From discreet off‑market acquisitions to curated investment strategies, our standard is defined by integrity, exclusivity, and an unwavering commitment to world‑class service."
              </CardItem>
            </CardBody>
          </CardContainer>
        </StickySection>

        <StickySection title="Connectivity" number="04">
          <CardContainer className="inter-var">
            <CardBody className="bg-black/40 relative group/card border-white/10 w-full h-auto rounded-xl p-6 border hover:border-[#D4AF37]/50">
              <CardItem translateZ="100" className="w-full"><img src="https://www.caterermiddleeast.com/cloud/2022/02/26/dubai-tourism-news-2021.jpg" className="h-60 w-full object-cover rounded-xl opacity-80" /></CardItem>
              <CardItem translateZ="50" className="text-2xl font-header text-white mt-8 mb-2">At the Center of Global Opportunity</CardItem>
              <CardItem translateZ="30" className="text-gray-400">
                Operating from Dubai — the world’s crossroads — MAPSTONE connects clients to a global ecosystem of opportunity. Through international investor networks, platinum developer partnerships, and seamless cross-border processes, we bridge continents, cultures, and capital. Our connectivity ensures that every client benefits from Dubai’s position as a sanctuary of innovation, security, and prosperity.
              </CardItem>
            </CardBody>
          </CardContainer>
        </StickySection>
      </div>
    </section>
  );
};
export default About;