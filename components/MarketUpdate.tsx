import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Building2, Train, Target, ShieldCheck, Banknote, Globe, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// --- 1. NEW DATA SETS (Q4 2025) ---

const marketData = [
  { 
    area: "Downtown Dubai", 
    price2022: "1,800 AED", 
    price2025: "2,600 AED", 
    growth: "45", 
    narrative: "The 'Manhattan of the ME'. Limited land means prices skyrocket." 
  },
  { 
    area: "Dubai Marina", 
    price2022: "1,500 AED", 
    price2025: "2,200 AED", 
    growth: "40", 
    narrative: "Scarcity of new plots is driving resale value up." 
  },
  { 
    area: "JVC", 
    price2022: "900 AED", 
    price2025: "1,425 AED", 
    growth: "55", 
    narrative: "Top Performer. The #1 choice for ROI seekers." 
  },
  { 
    area: "Arjan", 
    price2022: "800 AED", 
    price2025: "1,275 AED", 
    growth: "58", 
    narrative: "The 'New JVC'. Massive infrastructure driving growth." 
  },
  { 
    area: "JLT", 
    price2022: "1,100 AED", 
    price2025: "1,700 AED", 
    growth: "48", 
    narrative: "Benefiting from 'Uptown Dubai' expansion." 
  },
  { 
    area: "Dubailand", 
    price2022: "700 AED", 
    price2025: "1,075 AED", 
    growth: "50", 
    narrative: "The rise of master communities for families." 
  },
  { 
    area: "JVT", 
    price2022: "850 AED", 
    price2025: "1,325 AED", 
    growth: "52", 
    narrative: "Riding the wave of JVC's success." 
  },
];

const megaProjects = [
  {
    title: "The Blue Line Metro",
    tag: "Connectivity",
    desc: "Connects Creek Harbour & Silicon Oasis. Properties near stations expected to appreciate +25%.",
    icon: <Train className="w-6 h-6 text-[#D4AF37]" />
  },
  {
    title: "Dubai Creek Tower",
    tag: "Tourism",
    desc: "Redesigned architectural masterpiece. Shifts the city's center of gravity creating a 'New Downtown'.",
    icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />
  },
  {
    title: "Vision 2040",
    tag: "Master Plan",
    desc: "Population target: 5.8M. The '20-Minute City' strategy will drive premiums for walkable communities.",
    icon: <Target className="w-6 h-6 text-[#D4AF37]" />
  }
];

const boosters = [
  { title: "Tax Efficiency", desc: "0% Income Tax, 0% Capital Gains.", icon: <Banknote className="w-5 h-5" /> },
  { title: "Golden Visa", desc: "10-Year residency for AED 2M+ investors.", icon: <Globe className="w-5 h-5" /> },
  { title: "Safety & Stability", desc: "Top 3 safest cities globally.", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Currency Peg", desc: "AED pegged to USD, removing FX risk.", icon: <TrendingUp className="w-5 h-5" /> },
];

const MarketUpdate: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // --- PDF GENERATOR (UPDATED) ---
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // 1. Branding Header
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(212, 175, 55);
    doc.setFontSize(22);
    doc.text("MAPSTONE REAL ESTATE", pageWidth / 2, 20, { align: "center" });
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text("Q4 2025 MARKET INTELLIGENCE REPORT", pageWidth / 2, 30, { align: "center" });

    // 2. Executive Summary
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text("Executive Summary: The Golden Era", 14, 55);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize(
      "As of late 2025, Dubai has crossed the 4 Million population mark. Demand is outstripping supply. Off-plan properties now account for 65%+ of transactions. Since 2022, prime projects have seen 35-60% capital appreciation.", 
      pageWidth - 28
    );
    doc.text(summaryLines, 14, 65);

    // 3. Price Matrix Table
    const tableBody = marketData.map(row => [
      row.area, 
      row.price2022, 
      row.price2025, 
      `+${row.growth}%`
    ]);

    autoTable(doc, {
      startY: 85,
      head: [['Location', 'Avg Price (2022)', 'Avg Price (Q4 2025)', 'Growth']],
      body: tableBody,
      headStyles: { fillColor: [0, 0, 0], textColor: [212, 175, 55] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      styles: { fontSize: 10 },
    });

    // 4. Future Projects
    // @ts-ignore
    let finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Future Mega-Projects & Impact", 14, finalY);
    
    finalY += 10;
    megaProjects.forEach(proj => {
      doc.setFontSize(11);
      doc.setTextColor(139, 32, 32); // Dark Red
      doc.text(`• ${proj.title} (${proj.tag})`, 14, finalY);
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(proj.desc, 14, finalY + 5);
      finalY += 12;
    });

    // 5. Conclusion
    finalY += 10;
    doc.setFillColor(240, 240, 240);
    doc.rect(10, finalY, pageWidth - 20, 30, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Analyst Conclusion: The Window of Opportunity", pageWidth / 2, finalY + 10, { align: "center" });
    doc.setFontSize(10);
    doc.text("With interest rates stabilizing and the Blue Line Metro approved, Q4 2025 represents", pageWidth / 2, finalY + 18, { align: "center" });
    doc.text("a pivot point before the next wave of infrastructure is fully priced in.", pageWidth / 2, finalY + 23, { align: "center" });

    // Save
    doc.save("Dubai_Market_Outlook_Q4_2025.pdf");
  };

  return (
    <section ref={ref} id="market-update" className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden border-t border-[#D4AF37]/30">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,32,32,0.1),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-subtitle"
          >
            Q4 2025 Outlook
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-header font-bold mb-6"
          >
            Dubai Real Estate Update
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-6 rounded-lg max-w-3xl mx-auto"
          >
            <h3 className="text-xl text-[#D4AF37] mb-2 font-bold">Executive Summary: The "Golden Era"</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dubai has crossed the <span className="text-white font-bold">4 Million Population Mark</span>. 
              The market has shifted from recovery to sustained global hub growth. 
              <span className="text-[#8B2020] font-bold"> Off-plan properties now account for 65%+ of transactions</span>, 
              driven by capital appreciation of 35–60% since 2022.
            </p>
          </motion.div>
        </div>

        {/* --- PRICE MATRIX (3D CARDS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: "0px 10px 30px rgba(139,32,32,0.2)" 
              }}
              className="bg-[#111] border border-white/10 p-6 rounded-xl relative group perspective-1000"
            >
              {/* Dark Red Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8B2020] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">{item.area}</h3>
                <div className="flex items-center gap-1 text-[#8B2020] font-bold font-mono">
                  <ArrowUpRight size={16} />
                  {item.growth}%
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">2022 Avg:</span>
                  <span className="text-gray-400 font-mono">{item.price2022}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#D4AF37]">2025 Avg:</span>
                  <span className="text-white font-bold font-mono">{item.price2025}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 italic border-t border-white/5 pt-3">
                "{item.narrative}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- MEGA PROJECTS & BOOSTERS --- */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          
          {/* Projects Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-header text-white flex items-center gap-3">
              <Building2 className="text-[#D4AF37]" /> Future Mega-Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {megaProjects.map((proj, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="mb-3">{proj.icon}</div>
                  <h4 className="font-bold text-white mb-1">{proj.title}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8B2020] bg-[#8B2020]/10 px-2 py-1 rounded mb-2 inline-block">
                    {proj.tag}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Power Boosters Column */}
          <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 rounded-xl">
            <h3 className="text-xl font-header text-[#D4AF37] mb-6">"Dubai Power" Boosters</h3>
            <div className="space-y-6">
              {boosters.map((boost, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-[#D4AF37]/10 rounded text-[#D4AF37] shrink-0">
                    {boost.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">{boost.title}</h5>
                    <p className="text-gray-500 text-xs">{boost.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- DOWNLOAD CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-[#8B2020]/20 to-black border border-[#8B2020]/30 p-10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-2">The Window of Opportunity is Open</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Q4 2025 represents a pivot point before the next wave of infrastructure (Blue Line/Creek Tower) is fully priced in.
          </p>
          <button 
            onClick={generatePDF}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Q4 2025 Report</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketUpdate;