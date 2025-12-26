import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  // Scroll to top on load
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
          <h1 className="text-4xl md:text-5xl font-header mt-4">Privacy Policy</h1>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        <div className="space-y-10 text-gray-300 font-body leading-relaxed">
          <div>
            <h3 className="text-2xl text-white font-header mb-4">1. Information Collection</h3>
            <p>At MAPSTONE Real Estate, we collect personal information you provide directly to us, such as when you create an account, subscribe to our newsletter, request client services, or contact us for support. This information may include your name, email address, phone number, and investment preferences.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">2. Use of Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about property opportunities, market updates, and administrative notifications.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">3. Data Protection</h3>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information. We do not sell or rent your personal data to third parties for marketing purposes.</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-header mb-4">4. Cookies</h3>
            <p>Our website uses cookies to enhance your browsing experience and analyze site traffic. By using our website, you consent to our use of cookies in accordance with this policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;