import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    { q: "What is MAPSTONE Real Estate Brokerage L.L.C?", a: "We are a licensed brokerage in Dubai specializing in off-plan investment opportunities from the region's top developers." },
    { q: "What are the costs involved in buying off-plan?", a: "Standard government costs include the 4% Dubai Land Department (DLD) fee and administrative fees. Specific payment plans are provided by the developer." },
    { q: "Why invest in off-plan projects?", a: "Off-plan properties offer lower entry prices, flexible payment plans, and high potential for capital appreciation upon completion." },
    { q: "How do I start an investment?", a: "Contact us at +971-58-592-8787 or admin@mapstonerealestate.com. Our specialists will provide you with the latest brochures, payment plans, and availability." }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl md:text-6xl font-header mb-16 uppercase tracking-tighter">FAQs</motion.h1>
        
        <div className="space-y-6 text-left">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="p-8 bg-white/[0.03] border border-white/10 rounded-sm">
              <h3 className="text-[#D4AF37] font-header text-lg mb-4">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;