import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FAQ: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    { q: "Can foreigners buy property in Dubai?", a: "Yes, foreigners can buy property in designated freehold areas in Dubai. This grants you full ownership rights, allowing you to sell, lease, or occupy the property." },
    { q: "What is the Golden Visa?", a: "The UAE Golden Visa is a long-term residence visa (5 or 10 years) granted to investors who purchase property worth AED 2 million or more. It enables you to live, work, and study in the UAE." },
    { q: "What are the upfront costs of buying?", a: "Typically, you should budget for the Dubai Land Department (DLD) fee (4% of property value), Trustee Office fees (approx. AED 4,000), and agency fees (2%)." },
    { q: "Can I pay with Cryptocurrency?", a: "Yes, MAPSTONE facilitates seamless transactions using major cryptocurrencies. We handle the conversion and compliance to ensure a smooth acquisition process." },
    { q: "Do you offer property management?", a: "Absolutely. Our Wealth Architecture service includes comprehensive property management, including tenant screening, maintenance, and rental yield optimization." },
  ];

  return (
    <section className="min-h-screen bg-transparent pt-32 pb-20 px-6 relative z-10 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-12 text-center"
        >
          <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-subtitle">Support</span>
          <h1 className="text-4xl md:text-5xl font-header mt-4">Frequently Asked Questions</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        <div className="grid gap-6">
          {faqs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg hover:border-[#D4AF37]/50 transition-colors"
            >
              <h3 className="text-xl text-[#D4AF37] font-header mb-3">{item.q}</h3>
              <p className="text-gray-300 font-body leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;