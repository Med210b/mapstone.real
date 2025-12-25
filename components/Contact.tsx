import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, CheckCircle, X } from 'lucide-react';

// --- COUNTRY DATA ---
const countries = [
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
  { name: "Qatar", code: "QA", dial_code: "+974" },
  { name: "Kuwait", code: "KW", dial_code: "+965" },
  { name: "Bahrain", code: "BH", dial_code: "+973" },
  { name: "Oman", code: "OM", dial_code: "+968" },
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  // Add more as needed...
];

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const BG_IMAGE = "https://i.postimg.cc/qBhBnzNh/MAPSTONE66.png";

  // --- FORM STATE ---
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default UAE
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter countries based on search
  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.dial_code.includes(searchQuery)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setIsSubmitted(true);
      // Reset form after 5 seconds (optional)
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.country-dropdown')) return;
      setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="contact" ref={containerRef} className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden border-t border-gold-400/30 bg-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <img src={BG_IMAGE} alt="Contact Background" className="w-full h-full object-cover scale-110 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
           <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
             <h4 className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-subtitle">CONTACT US</h4>
             <h2 className="font-header text-4xl md:text-6xl text-white mb-6">Begin Your Journey</h2>
             <div className="w-24 h-0.5 bg-gold-400 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
           </motion.div>
        </div>

        {/* --- SUCCESS MESSAGE MODAL --- */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <div className="bg-[#1a1a1a] border border-[#D4AF37] p-8 rounded-xl max-w-md text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-2xl text-white font-header mb-2">Welcome, {formData.firstName}!</h3>
                <p className="text-gray-400 mb-6">We have received your inquiry. One of our senior advisors will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="px-6 py-2 bg-[#D4AF37] text-black font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors">
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- FORM --- */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-gold-400/20 p-8 md:p-12 shadow-2xl rounded-sm">
           <form onSubmit={handleSubmit} className="space-y-10">
             
             {/* Name Fields */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="group">
                  <label className="block text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">First Name</label>
                  <input required type="text" placeholder="John" onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors font-body" />
               </div>
               <div className="group">
                  <label className="block text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Last Name</label>
                  <input required type="text" placeholder="Doe" onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors font-body" />
               </div>
             </div>

             {/* Contact Info (Email + Phone with Dropdown) */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="group">
                  <label className="block text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors font-body" />
               </div>
               
               {/* --- CUSTOM COUNTRY DROPDOWN + PHONE --- */}
               <div className="group relative country-dropdown">
                  <label className="block text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Phone Number</label>
                  <div className="flex items-end gap-3">
                    {/* Dropdown Button */}
                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 border-b border-gray-600 py-2 min-w-[100px] text-white hover:border-gold-400 transition-colors">
                      <span className="text-sm font-mono">{selectedCountry.dial_code}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    
                    {/* Phone Input */}
                    <input required type="tel" placeholder="50 000 0000" onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors font-body" />
                  </div>

                  {/* Dropdown List */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] border border-[#333] rounded-lg shadow-xl z-50 max-h-60 flex flex-col">
                      <div className="p-2 border-b border-[#333]">
                        <div className="flex items-center bg-[#000] px-2 rounded border border-[#333]">
                          <Search className="w-4 h-4 text-gray-500" />
                          <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full bg-transparent border-none text-white text-sm p-2 focus:ring-0 focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="overflow-y-auto flex-1">
                        {filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#D4AF37] hover:text-black flex justify-between items-center transition-colors"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsDropdownOpen(false);
                            }}
                          >
                            <span>{country.name}</span>
                            <span className="font-mono opacity-60">{country.dial_code}</span>
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="p-4 text-xs text-gray-500 text-center">No countries found</div>
                        )}
                      </div>
                    </div>
                  )}
               </div>
             </div>

             {/* Message */}
             <div className="group">
                <label className="block text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Message</label>
                <textarea rows={4} placeholder="I am interested in..." onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors font-body resize-none"></textarea>
             </div>

             {/* Submit Button */}
             <div className="flex justify-center pt-8">
                 <button type="submit" className="bg-black border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-12 py-4 font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                     Submit
                 </button>
             </div>

           </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;