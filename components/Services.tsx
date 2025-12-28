import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  TrendingUp, Key, Layout, MapPin, Award, Landmark, 
  Briefcase, BarChart3, Gavel, LogOut, Users, Shield, ArrowRight 
} from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ServiceBookProps {
  service: {
    icon: React.ReactNode;
    title: string;
    headline: string;
    desc: string;
  };
}

const ServiceBook: React.FC<ServiceBookProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Tracking for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation values for the parallax tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isOpen) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[320px] w-full perspective-[1500px] group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: isOpen ? 0 : rotateX,
          rotateY: isOpen ? -145 : rotateY,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
      >
        {/* --- BOOK SPINE (Adds 3D depth to the edge) --- */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[40px] bg-[#631717] origin-left"
          style={{ 
            transform: "rotateY(-90deg) translateX(-20px)",
            backfaceVisibility: "hidden"
          }} 
        />

        {/* --- BOOK COVER (FRONT) --- */}
        <div 
          className="absolute inset-0 z-20 backface-hidden rounded-r-lg shadow-[20px_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between p-6 border-l-4 border-black/30"
          style={{ 
            backgroundColor: "#8B2020", 
            backfaceVisibility: "hidden",
          }}
        >
          <div className="text-white/90">
            {React.cloneElement(service.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
            <h4 className="mt-4 text-[9px] tracking-[0.3em] uppercase text-white/40 font-sans">Bespoke Advisory</h4>
          </div>
          
          <div>
            <h3 className="text-xl font-header text-white leading-tight drop-shadow-md">{service.title}</h3>
            <div className="mt-4 flex items-center gap-2 text-white/40 text-[9px] uppercase tracking-[0.2em] group-hover:text-white/80 transition-colors">
              <span>View Briefing</span>
              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* --- INSIDE LEFT PAGE (Back of Cover) --- */}
        <div 
          className="absolute inset-0 z-10 rounded-l-lg p-8 flex flex-col justify-center border border-white/5"
          style={{ 
            backgroundColor: "#1a1a1a",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden"
          }}
        >
          <div className="h-full w-full border border-[#D4AF37]/20 p-4 rounded flex flex-col justify-between">
             <div className="w-10 h-1 bg-[#8B2020]" />
             <div className="space-y-2">
                <p className="text-[#D4AF37] text-[8px] tracking-[0.3em] uppercase opacity-50">Mapstone Intelligence</p>
                <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
             </div>
          </div>
        </div>
      </motion.div>

      {/* --- PAGE STACK (The Thickness) --- */}
      <div 
        className="absolute inset-y-2 right-[-4px] w-2 bg-zinc-300 rounded-sm opacity-20"
        style={{ transform: "translateZ(-1px)" }}
      />

      {/* --- INSIDE RIGHT PAGE (The Content) --- */}
      <div className="absolute inset-0 z-0 bg-[#0f0f0f] rounded-r-lg shadow-inner p-8 flex flex-col justify-center border border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B2020]/5 blur-3xl rounded-full -mr-16 -mt-16" />
        <h3 className="text-[#D4AF37] text-base font-header mb-4 leading-tight relative z-10">
          {service.headline}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed font-body relative z-10">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const bespokeServices = [
    { icon: <TrendingUp />, title: "Investment Advisory", headline: "Strategies engineered for long-term wealth", desc: "We analyze market cycles, developer performance, and emerging districts to curate investment paths aligned with your financial goals." },
    { icon: <Key />, title: "Off‑Market Access", headline: "Exclusive opportunities beyond the public market", desc: "Through private developer relationships, we secure VIP allocations, pre‑launch pricing, and confidential acquisitions." },
    { icon: <Layout />, title: "Portfolio Architecture", headline: "Building assets that grow with you", desc: "We design real estate portfolios that balance luxury, performance, and legacy across Dubai’s most promising districts." },
    { icon: <MapPin />, title: "Relocation & Lifestyle", headline: "A seamless transition into Dubai living", desc: "From Golden Visa guidance to community selection, we support clients in creating a lifestyle that reflects their ambitions." },
    { icon: <Award />, title: "Developer Relations", headline: "Priority entry into elite launches", desc: "Our partnerships with top developers unlock early access to premium units and exclusive investment windows." },
    { icon: <Landmark />, title: "Golden Visa Facilitation", headline: "Residency pathways for global investors", desc: "We streamline the entire Golden Visa process, ensuring a smooth transition into long-term residency." },
    { icon: <Briefcase />, title: "Property Management", headline: "Your asset, fully managed", desc: "From tenant screening to short‑term rental optimization, we maximize returns while maintaining MAPSTONE‑level standards." },
    { icon: <BarChart3 />, title: "Market Intelligence", headline: "Insights that drive smarter decisions", desc: "We deliver bespoke reports covering price trends, ROI forecasts, and district performance." },
    { icon: <Gavel />, title: "Legal & Transaction Support", headline: "Secure, transparent, compliant", desc: "Our legal partners handle contracts, due diligence, and regulatory requirements with precision." },
    { icon: <LogOut />, title: "Asset Exit Strategy", headline: "Maximizing value when it’s time to sell", desc: "We craft resale strategies based on market timing, buyer demand, and appreciation cycles." },
    { icon: <Users />, title: "Corporate Relocation", headline: "Tailored solutions for global teams", desc: "We source premium residences and manage onboarding for executives relocating to Dubai." },
    { icon: <Shield />, title: "Wealth & Legacy Planning", headline: "Structuring assets for generational impact", desc: "We align your real estate portfolio with long-term family and wealth objectives." }
  ];

  return (
    <section id="services" className="bg-black text-white py-24 overflow-hidden border-b border-[#D4AF37]/30">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Bespoke Solutions" 
          subtitle="Tailored services crafted for discerning investors." 
          light 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20 mt-20">
          {bespokeServices.map((service, i) => (
            <ServiceBook key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;