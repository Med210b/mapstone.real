import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const InputField: React.FC<{ label: string; type: string; placeholder: string }> = ({ label, type, placeholder }) => (
  <div className="relative group">
    <label className="font-subtitle text-xs uppercase tracking-widest text-gold-400 mb-2 block">{label}</label>
    <input 
      type={type} 
      className="w-full bg-transparent border-b border-gray-700 focus:border-transparent outline-none py-3 font-body text-lg text-luxury-black transition-colors relative z-10"
      placeholder={placeholder}
    />
    {/* Animated Bottom Border */}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-darkRed transition-all duration-300 group-focus-within:w-full" />
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-darkRed relative border-b border-gold-400/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Begin Your Journey" subtitle="Contact Us" light={true} />
        
        <div className="bg-luxury-offWhite p-10 md:p-16 shadow-2xl relative overflow-hidden">
           {/* Decorative Border Top */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-black via-gold-400 to-luxury-black" />
           
           <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

           <form className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <InputField label="First Name" type="text" placeholder="John" />
                 <InputField label="Last Name" type="text" placeholder="Doe" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <InputField label="Email Address" type="email" placeholder="john@example.com" />
                 <InputField label="Phone Number" type="tel" placeholder="+971 50 000 0000" />
              </div>

              <div className="relative group">
                  <label className="font-subtitle text-xs uppercase tracking-widest text-gold-400 mb-2 block">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-transparent outline-none py-3 font-body text-lg text-luxury-black transition-colors resize-none relative z-10"
                    placeholder="I am interested in..."
                  />
                  <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-luxury-darkRed transition-all duration-300 group-focus-within:w-full" />
              </div>

              <div className="flex justify-center pt-8">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="gold-border-btn px-16 py-4 cursor-pointer"
                 >
                   <span className="text-gold-400 font-subtitle uppercase tracking-widest font-bold text-sm">Send Inquiry</span>
                 </motion.button>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;