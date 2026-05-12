import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Building2, Train, Target, ShieldCheck, Banknote, Globe, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const MarketUpdate: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const marketData = [
    { area: "Downtown Dubai", price2022: "1,800 AED", price2025: "2,600 AED", growth: "45", narrative: "Downtown continues to outperform due to its global brand value, proximity to DIFC, and limited new supply. Investors benefit from strong rental demand and premium resale liquidity." },
    { area: "Dubai Marina", price2022: "1,500 AED", price2025: "2,200 AED", growth: "40", narrative: "Marina remains one of Dubai’s most resilient waterfront districts, driven by tourism, expat demand, and consistent short‑term rental performance." },
    { area: "JVC", price2022: "900 AED", price2025: "1,425 AED", growth: "55", narrative: "JVC’s rapid appreciation is fueled by affordability, strong yields, and continuous community upgrades, making it a top performer for mid‑market investors." },
    { area: "Arjan", price2022: "800 AED", price2025: "1,275 AED", growth: "58", narrative: "Arjan leads the growth curve with new schools, hospitals, and lifestyle developments, attracting families and long‑term tenants." },
    { area: "JLT", price2022: "1,100 AED", price2025: "1,700 AED", growth: "48", narrative: "JLT benefits from its business‑centric location, metro connectivity, and strong corporate rental demand." },
    { area: "Dubailand", price2022: "700 AED", price2025: "1,075 AED", growth: "50", narrative: "Dubailand’s master‑planned communities and competitive pricing continue to attract first‑time buyers and long‑term investors." },
    { area: "JVT", price2022: "850 AED", price2025: "1,325 AED", growth: "52", narrative: "JVT’s villa‑driven demand and family‑oriented planning make it one of Dubai’s most stable appreciation zones." },
  ];

  const megaProjects = [
    { title: "Dubai Urban Expansion", tag: "Connectivity", desc: "A citywide mobility upgrade linking new districts, improving commute times, and elevating long‑term property values.", icon: <Train className="w-6 h-6 text-[#D4AF37]" /> },
    { title: "Tourism 2.0 Vision", tag: "Tourism", desc: "Dubai’s tourism strategy boosts short‑term rental yields and strengthens demand across waterfront and leisure‑centric communities.", icon: <Building2 className="w-6 h-6 text-[#D4AF37]" /> },
    { title: "Masterplan 2040", tag: "Masterplan", desc: "A long‑term blueprint shaping sustainable districts, green corridors, and balanced residential density — securing future appreciation.", icon: <Target className="w-6 h-6 text-[#D4AF37]" /> }
  ];

  const boosters = [
    { title: "Population Growth", desc: "Dubai’s population surge continues to drive rental demand and long‑term occupancy stability.", icon: <Banknote className="w-5 h-5" /> },
    { title: "Global Capital Inflow", desc: "International investors view Dubai as a safe, tax‑efficient wealth hub, accelerating market momentum.", icon: <Globe className="w-5 h-5" /> },
    { title: "Infrastructure Expansion", desc: "New roads, metro lines, and community upgrades directly enhance property values.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Regulatory Confidence", desc: "Transparent laws, investor protections, and digital land systems strengthen market trust.", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(212, 175, 55);
    doc.setFontSize(22);
    doc.text("MAPSTONE REAL ESTATE", pageWidth / 2, 20, { align: "center" });
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text("Dubai Market Outlook Q4 2025", pageWidth / 2, 30, { align: "center" });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text("Summary", 14, 55);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize("Dubai’s residential market has delivered 20%+ sustained growth, driven by population expansion, global capital inflows, and a maturing luxury segment.", pageWidth - 28);
    doc.text(summaryLines, 14, 65);

    const tableBody = marketData.map(row => [row.area, row.price2022, row.price2025, `+${row.growth}%`]);
    autoTable(doc, {
      startY: 85,
      head: [['Location', 'Avg Price (2022)', 'Avg Price (2025)', 'Growth']],
      body: tableBody,
      headStyles: { fillColor: [0, 0, 0], textColor: [212, 175, 55] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      styles: { fontSize: 10 },
    });

    // @ts-ignore
    let finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Future Projects", 14, finalY);
    
    finalY += 10;
    megaProjects.forEach(proj => {
      doc.setFontSize(11);
      doc.setTextColor(139, 32, 32); 
      doc.text(`• ${proj.title} (${proj.tag})`, 14, finalY);
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(proj.desc, 14, finalY + 5);
      finalY += 12;
    });

    doc.save("Dubai_Market_Outlook_Q4_2025.pdf");
  };

  return (
    <section ref={ref} id="market-update" className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden border-t border-[#D4AF37]/30">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,32,32,0.1),_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-subtitle">INTELLIGENCE</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-header font-bold mb-6">Growth Story</motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="bg-white/5 border border-white/10 p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl text-[#D4AF37] mb-2 font-bold">Summary</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Dubai’s residential market has delivered 20%+ sustained growth, driven by population expansion, global capital inflows, and a maturing luxury segment.</p>
          </motion.div>
        </div>

        <div className="mb-8">
           <h3 className="text-xl font-header text-white uppercase tracking-widest border-b border-[#8B2020]/30 pb-4 mb-8">MARKET PERFORMANCE (2022 → 2025)</h3>
           <p className="text-gray-400 text-sm mb-8">Premium districts rewritten with strong narrative lines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {marketData.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0px 10px 30px rgba(139,32,32,0.2)" }} className="bg-[#111] border border-white/10 p-6 rounded-xl relative group perspective-1000">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8B2020] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">{item.area}</h3>
                <div className="flex items-center gap-1 text-[#8B2020] font-bold font-mono"><ArrowUpRight size={16} />{item.growth}%</div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm"><span className="text-gray-500">2022 Avg:</span><span className="text-gray-400 font-mono">{item.price2022}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#D4AF37]">2025 Avg:</span><span className="text-white font-bold font-mono">{item.price2025}</span></div>
              </div>
              <p className="text-xs text-gray-500 italic border-t border-white/5 pt-3">"{item.narrative}"</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-header text-white flex items-center gap-3"><Building2 className="text-[#D4AF37]" /> MEGA PROJECTS</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {megaProjects.map((proj, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="mb-3">{proj.icon}</div>
                  <h4 className="font-bold text-white mb-1">{proj.title}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B2020] bg-[#8B2020]/10 px-2 py-1 rounded mb-2 inline-block">{proj.tag}</span>
                  <p className="text-xs text-gray-400 leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 rounded-xl">
            <h3 className="text-xl font-header text-[#D4AF37] mb-6">MARKET BOOSTERS</h3>
            <div className="space-y-6">
              {boosters.map((boost, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-[#D4AF37]/10 rounded text-[#D4AF37] shrink-0">{boost.icon}</div>
                  <div><h5 className="text-white font-bold text-sm">{boost.title}</h5><p className="text-gray-500 text-xs">{boost.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="text-center bg-gradient-to-r from-[#8B2020]/20 to-black border border-[#8B2020]/30 p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">MARKET REPORT</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Your strategic briefing on Dubai’s performance, trends, and future outlook.</p>
          <button onClick={generatePDF} className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
            <Download className="w-5 h-5 group-hover:animate-bounce" /><span>Download</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketUpdate;