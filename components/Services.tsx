"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll, type MotionValue } from "framer-motion"

// ==================== ANIMATED BACKGROUND ====================
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="services-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8B4513", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#d4af37", stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="services-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#A0522D", stopOpacity: 0.25 }} />
            <stop offset="100%" style={{ stopColor: "#6B3410", stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
        <path d="M-100,200 Q200,100 500,300 T1100,400" stroke="url(#services-grad1)" strokeWidth="2" fill="none" className="services-animate-flow-1" />
        <path d="M-50,400 Q300,250 700,500 T1300,600" stroke="url(#services-grad2)" strokeWidth="1.5" fill="none" className="services-animate-flow-2" />
        <path d="M1500,100 Q1200,300 800,200 T100,400" stroke="url(#services-grad1)" strokeWidth="2" fill="none" className="services-animate-flow-3" />
        <path d="M-200,600 Q100,450 600,700 T1200,800" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.2" className="services-animate-flow-4" />
      </svg>
    </div>
  )
}

// ==================== CONTAINER SCROLL (FIXED FOR MOBILE) ====================
const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    // FIX: Changed from 0.7 to 1.0 (No shrinking on mobile)
    return isMobile ? [1, 1] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    // FIX: Changed h-[60rem] to h-auto / min-h-screen for mobile so it fits naturally
    <div className="h-auto min-h-screen md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  )
}

const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

const Card = ({
  rotate,
  scale,
  children,
  isMobile
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
  isMobile: boolean
}) => {
  return (
    <motion.div
      style={{
        rotateX: isMobile ? 0 : rotate, // Disable 3D rotation on mobile for clarity
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      // FIX: Increased mobile height to [40rem] and reduced border/padding
      className="max-w-7xl -mt-12 mx-auto h-[45rem] md:h-[40rem] w-full border border-white/10 md:border-4 md:border-[#d4af37]/30 p-1 md:p-6 bg-zinc-950 rounded-[20px] md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl bg-black md:rounded-2xl p-2 md:p-4">{children}</div>
    </motion.div>
  )
}

// ==================== SERVICES DATA ====================
const services = [
  { title: "Strategies engineered for long-term wealth", description: "Enhance returns, accelerate performance, and encourage progress by creating investment plans aligned with your objectives." },
  { title: "Exclusive opportunities beyond public market", description: "Through private investments opportunities, we access M&A transactions, pre-launch equity, and institutional-only offerings." },
  { title: "Banking more than your cash", description: "We facilitate real estate portfolios that balance luxury, performance, and legacy across multiple asset generations." },
  { title: "A seamless transition into Dubai living", description: "From visas to residence to investments and relocation, we support clients navigating a lifestyle and relocation experience." },
  { title: "Priority entry into elite branches", description: "Our relationships with top tier private banks wealth services, at boutique firms and exclusive family offices." },
  { title: "Roadmaps pathways for global investors", description: "Tax-efficiency, the right structure between high-growth, security, liquidity needs and tax optimization." },
  { title: "Your asset, fully managed", description: "From strategy to execution, transactions, diversification, and monitoring — we facilitate legacy-level opportunities." },
  { title: "Insights that drive smarter decisions", description: "Regular briefing and real-time intel built for proactive, security-forward asset allocation." },
  { title: "Estate, immigration, compliance", description: "Our trusted advisors deliver end-to-end estate, immigration, and regulatory support services." },
  { title: "Maximizing value when it's time to sell", description: "Our specialized trade execution services — financial timing, buyer selection, and sophisticated negotiation." },
  { title: "Tailored solutions for global teams", description: "Streamline administration to deliver advanced administrative infrastructure for comprehensive administration." },
  { title: "Storytelling for generational impact", description: "From philanthropy to businesses to trust portfolio building, we engage stories and personal branding." },
]

// ==================== TILT CARD ====================
function TiltCard({ title, description, index }: { title: string; description: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Simplified for mobile performance
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950/95 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/50 hover:bg-zinc-900/95">
        <h3 className="mb-3 text-pretty text-base font-medium leading-snug text-[#d4af37]">
          {title}
        </h3>
        <p className="text-pretty text-xs md:text-sm leading-relaxed text-zinc-300">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

// ==================== MAIN COMPONENT ====================
export default function Services() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0f0808] to-black overflow-hidden">
      <AnimatedBackground />
      <ContainerScroll
        titleComponent={
          <div className="mb-10 md:mb-16 text-center px-4">
            <p className="mb-3 text-xs md:text-sm font-medium tracking-[0.2em] text-[#d4af37]">
              TAILORED SERVICES
            </p>
            <h1 className="text-balance text-4xl md:text-6xl font-light text-white">Bespoke Solutions</h1>
            <div className="mx-auto mt-4 h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>
        }
      >
        <div className="w-full h-full bg-black p-4 md:p-8 overflow-y-auto">
          {/* FIX: Increased gap and made it 1 column for mobile */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 pb-20">
            {services.map((service, index) => (
              <TiltCard key={index} title={service.title} description={service.description} index={index} />
            ))}
          </div>
        </div>
      </ContainerScroll>

      <style jsx>{`
        @keyframes services-flow-1 { 0%, 100% { opacity: 0.3; transform: translate(0,0); } 50% { opacity: 0.5; transform: translate(30px, -20px); } }
        .services-animate-flow-1 { animation: services-flow-1 25s ease-in-out infinite; }
      `}</style>
    </section>
  )
}