import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsConditions: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="min-h-screen bg-transparent pt-32 pb-20 px-6 relative z-10 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-12 text-center"
        >
          <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase font-subtitle">Legal</span>
          <h1 className="text-4xl md:text-5xl font-header mt-4">Terms & Conditions</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        <div className="space-y-10 text-gray-300 font-body leading-relaxed">
          <div>
            <h3 className="text-2xl text-white font-header mb-4">1. Acceptance of Terms</h3>
            <p>By accessing and using the MAPSTONE Real Estate website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">2. Property Information</h3>
            <p>All property descriptions, prices, and availability provided on this site are for informational purposes only. While we strive for accuracy, MAPSTONE Real Estate does not guarantee the completeness or correctness of the information and shall not be held liable for any errors or omissions.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">3. Intellectual Property</h3>
            <p>The content, layout, design, data, databases, and graphics on this website are protected by United Arab Emirates and other international intellectual property laws and are owned by MAPSTONE Real Estate.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">4. Limitation of Liability</h3>
            <p>In no event shall MAPSTONE Real Estate be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;