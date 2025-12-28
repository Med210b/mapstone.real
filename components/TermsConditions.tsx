import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsConditions: React.FC = () => {
  // Ensure the page starts at the top when opened
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 text-white font-body">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-header text-white mb-4 uppercase tracking-tighter">Terms & Conditions</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mb-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg italic border-l-2 border-[#D4AF37] pl-6">
              Welcome to MAPSTONE Real Estate Brokerage L.L.C. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <section className="space-y-4">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase tracking-widest">1. General Use</h2>
              <p>By using this website, you confirm that you are at least 18 years of age and possess the legal authority to enter into this agreement. The content on this site is for general information regarding Dubai real estate and is subject to change without notice.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase tracking-widest">2. Off-Plan Specialist Services</h2>
              <p>MAPSTONE Real Estate Brokerage L.L.C specializes in Off-Plan property investments. We provide information on new launches and developments. We act as an intermediary between the developer and the investor. While we facilitate the process, the final sales agreement is between the buyer and the developer.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase tracking-widest">3. Project Information & Availability</h2>
              <p>All project details, floor plans, and completion dates are provided by the developers. MAPSTONE does not guarantee the accuracy of developer timelines or project modifications. Availability is subject to the developer's inventory at the time of booking.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase tracking-widest">4. Intellectual Property</h2>
              <p>All content, logos, and designs on this website are the property of MAPSTONE Real Estate Brokerage L.L.C. Unauthorized use is strictly prohibited.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase tracking-widest">5. Limitation of Liability</h2>
              <p>MAPSTONE Real Estate Brokerage L.L.C is not liable for changes made by developers regarding project specifications or delays in completion. Use of information on this website is at your own risk.</p>
            </section>

            <section className="pt-8 border-t border-white/10">
              <h2 className="text-[#D4AF37] font-header text-xl uppercase mb-4">6. Contact Information</h2>
              <p className="text-sm">Phone: +971-58-592-8787</p>
              <p className="text-sm">Email: admin@mapstonerealestate.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;