import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Building2, Train, Target, ShieldCheck, Banknote, Globe, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useLanguage } from './LanguageContext';

const MarketUpdate: React.FC = () => {
  const { t } = useLanguage(); // Get translations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // --- DATA SETS (Now using translations) ---
  const marketData = [
    { area: "Downtown Dubai", price2022: "1,800 AED", price2025: "2,600 AED", growth: "45", narrative: t.market.narrative_downtown },
    { area: "Dubai Marina", price2022: "1,500 AED", price2025: "2,200 AED", growth: "40", narrative: t.market.narrative_marina },
    { area: "JVC", price2022: "900 AED", price2025: "1,425 AED", growth: "55", narrative: t.market.narrative_jvc },
    { area: "Arjan", price2022: "800 AED", price2025: "1,275 AED", growth: "58", narrative: t.market.narrative_arjan },
    { area: "JLT", price2022: "1,100 AED", price2025: "1,700 AED", growth: "48", narrative: t.market.narrative_jlt },
    { area: "Dubailand", price2022: "700 AED", price2025: "1,075 AED", growth: "50", narrative: t.market.narrative_dubailand },
    { area: "JVT", price2022: "850 AED", price2025: "1,325 AED", growth: "52", narrative: t.market.narrative_jvt },
  ];

  const megaProjects = [
    { title: t.market.proj1_title, tag: t.market.tag_connectivity, desc: t.market.proj1_desc, icon: <Train className="w-6 h-6 text-[#D4AF37]" /> },
    { title: t.market.proj2_title, tag: t.market.tag_tourism, desc: t.market.proj2_desc, icon: <Building2 className="w-6 h-6 text-[#D4AF37]" /> },
    { title: t.market.proj3_title, tag: t.market.tag_masterplan, desc: t.market.proj3_desc, icon: <Target className="w-6 h-6 text-[#D4AF37]" /> }
  ];

  const boosters = [
    { title: t.market.boost1_title, desc: t.market.boost1_desc, icon: <Banknote className="w-5 h-5" /> },
    { title: t.market.boost2_title, desc: t.market.boost2_desc, icon: <Globe className="w-5 h-5" /> },
    { title: t.market.boost3_title, desc: t.market.boost3_desc, icon: <ShieldCheck className="w-5 h-5" /> },
    { title: t.market.boost4_title, desc: t.market.boost4_desc, icon: <TrendingUp className="w-5 h-5" /> },
  ];

  // --- PDF GENERATOR (Translated) ---
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
    doc.text(t.market.pdf_title, pageWidth / 2, 30, { align: "center" });

    // 2. Executive Summary
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(t.market.pdf_exec_title, 14, 55);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize(t.market.pdf_exec_desc, pageWidth - 28);
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
      head: [[t.projects.label_location, 'Avg Price (2022)', 'Avg Price (2025)', t.market.stat2]],
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
    doc.text(t.market.pdf_future_title, 14, finalY);
    
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

    // 5. Conclusion
    finalY += 10;
    doc.setFillColor(240, 240, 240);
    doc.rect(10, finalY, pageWidth - 20, 30, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(t.market.pdf_concl_title, pageWidth / 2, finalY + 10, { align: "center" });
    doc.setFontSize(10);
    doc.text(t.market.pdf_concl_desc, pageWidth / 2, finalY + 18, { align: "center" });

    doc.save("Dubai_Market_Outlook_Q4_2025.pdf");
  };

  return (
    <section ref={ref} id="market-update" className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden border-t border-[#D4AF37]/30">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,32,32,0.1),_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-subtitle">{t.market.subtitle}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-header font-bold mb-6">{t.market.title}</motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="bg-white/5 border border-white/10 p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl text-[#D4AF37] mb-2 font-bold">{t.market.exec_title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t.market.exec_desc}</p>
          </motion.div>
        </div>

        {/* --- PRICE MATRIX --- */}
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

        {/* --- MEGA PROJECTS --- */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-header text-white flex items-center gap-3"><Building2 className="text-[#D4AF37]" /> {t.market.section_mega}</h3>
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
            <h3 className="text-xl font-header text-[#D4AF37] mb-6">{t.market.section_boost}</h3>
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

        {/* --- DOWNLOAD CTA --- */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="text-center bg-gradient-to-r from-[#8B2020]/20 to-black border border-[#8B2020]/30 p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">{t.market.cta_title}</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t.market.cta_desc}</p>
          <button onClick={generatePDF} className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
            <Download className="w-5 h-5 group-hover:animate-bounce" /><span>{t.market.btn_download}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketUpdate;