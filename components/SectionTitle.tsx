import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h4 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-3 font-subtitle">{subtitle}</h4>
      <h2 className="text-3xl md:text-5xl font-header font-bold text-white">{title}</h2>
      <div className={`w-20 h-1 bg-[#D4AF37] mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;