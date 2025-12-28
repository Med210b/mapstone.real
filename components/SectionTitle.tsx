import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}
    >
      <h3 className={`font-subtitle text-lg tracking-[0.3em] uppercase mb-3 ${light ? 'text-gold-400' : 'text-luxury-darkRed'}`}>
        {subtitle}
      </h3>
      <h2 className={`font-header text-4xl md:text-5xl ${light ? 'text-white' : 'text-luxury-black'}`}>
        {title}
      </h2>
      <div className={`w-20 h-0.5 mt-6 ${align === 'center' ? 'mx-auto' : ''} bg-gold-400`} />
    </motion.div>
  );
};

export default SectionTitle;