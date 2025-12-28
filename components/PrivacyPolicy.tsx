import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-header text-white mb-4 uppercase tracking-tighter">Privacy & Policy</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mb-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
            <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm">
              <h2 className="text-[#D4AF37] font-header text-lg uppercase">1. Information We Collect</h2>
              <p className="text-sm">We may collect your name, phone number, and email address when you inquire about off-plan projects or subscribe to updates.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm">
              <h2 className="text-[#D4AF37] font-header text-lg uppercase">2. Data Use</h2>
              <p className="text-sm">Your data is used to provide investment opportunities and respond to inquiries.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm">
              <h2 className="text-[#D4AF37] font-header text-lg uppercase">3. Protection</h2>
              <p className="text-sm">We do not sell or share your data with unauthorized third parties.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-sm">
              <h2 className="text-[#D4AF37] font-header text-lg uppercase">4. Your Rights</h2>
              <p className="text-sm">You may request access to or deletion of your data at any time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;