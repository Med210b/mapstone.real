import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Search, ChevronDown, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const countries = [
  { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", dial_code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dial_code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", dial_code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", dial_code: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial_code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", dial_code: "+994", flag: "🇦🇿" },
  { name: "Bahrain", code: "BH", dial_code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dial_code: "+880", flag: "🇧🇩" },
  { name: "Belarus", code: "BY", dial_code: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", dial_code: "+32", flag: "🇧🇪" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Qatar", code: "QA", dial_code: "+974", flag: "🇶🇦" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
].sort((a, b) => a.name.localeCompare(b.name));

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "AE") || countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.dial_code.includes(searchQuery));

  // --- 3D Hover Interaction Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the spring animation for the 3D tilt
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to the center of the element (-0.5 to 0.5)
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={containerRef} className="relative py-24 md:py-32 bg-black border-t border-[#D4AF37]/20 overflow-hidden">
      
      <style>{`
        /* Continuous glowing border for the form */
        @keyframes pulse-glow-form {
          0% { box-shadow: 0 0 15px rgba(212, 175, 55, 0.1); border-color: rgba(212, 175, 55, 0.3); }
          100% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.5); border-color: #D4AF37; }
        }
        
        .form-glass-container {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 16px;
          animation: pulse-glow-form 2s infinite alternate ease-in-out;
          transform-style: preserve-3d;
        }

        /* Upgraded Input Styles */
        .input-glass {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .input-glass:focus-within {
          background: rgba(212, 175, 55, 0.05);
          border-color: #D4AF37;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        /* Custom scrollbar for dropdown */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10" style={{ perspective: "1200px" }}>
        
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
           <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <h4 className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4">{t?.contact?.subtitle || "Get in Touch"}</h4>
             <h2 className="font-header text-4xl sm:text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">{t?.contact?.title || "Contact Us"}</h2>
             <div className="w-24 h-px bg-[#D4AF37] mx-auto shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
           </motion.div>
        </div>

        {/* 3D Motion Container */}
        <motion.div 
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          className="max-w-4xl mx-auto"
        >
          <div className="form-glass-container p-6 sm:p-10 md:p-16 relative">
             
             {/* 3D floating elements inside the card */}
             <form onSubmit={handleSubmit} className="space-y-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="group">
                   <label className="block text-[#D4AF37] text-xs font-bold tracking-[0.15em] uppercase mb-3 ml-1">{t?.contact?.label_first || "First Name"}</label>
                   <div className="input-glass">
                     <input required type="text" className="w-full bg-transparent px-4 py-4 text-white text-base focus:outline-none" />
                   </div>
                 </div>
                 <div className="group">
                   <label className="block text-[#D4AF37] text-xs font-bold tracking-[0.15em] uppercase mb-3 ml-1">{t?.contact?.label_last || "Last Name"}</label>
                   <div className="input-glass">
                     <input required type="text" className="w-full bg-transparent px-4 py-4 text-white text-base focus:outline-none" />
                   </div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="group">
                   <label className="block text-[#D4AF37] text-xs font-bold tracking-[0.15em] uppercase mb-3 ml-1">{t?.contact?.label_email || "Email Address"}</label>
                   <div className="input-glass">
                     <input required type="email" className="w-full bg-transparent px-4 py-4 text-white text-base focus:outline-none" />
                   </div>
                 </div>
                 
                 <div className="group relative z-50">
                   <label className="block text-[#D4AF37] text-xs font-bold tracking-[0.15em] uppercase mb-3 ml-1">{t?.contact?.label_phone || "Phone Number"}</label>
                   <div className="input-glass flex items-center px-2">
                     <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 py-4 pl-2 pr-3 text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap border-r border-white/10">
                       <span className="text-xl leading-none">{selectedCountry.flag}</span>
                       <span className="font-mono text-sm">{selectedCountry.dial_code}</span>
                       <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                     </button>
                     <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-transparent px-4 py-4 text-white text-base focus:outline-none placeholder-gray-600" />
                   </div>
                   
                   <AnimatePresence>
                     {isDropdownOpen && (
                       <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-[105%] left-0 w-full sm:w-80 bg-[#0a0a0a] border border-[#D4AF37]/50 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-[100] overflow-hidden flex flex-col">
                         <div className="p-3 border-b border-white/10 bg-[#141414]">
                           <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-md border border-white/10 focus-within:border-[#D4AF37] transition-colors">
                             <Search size={16} className="text-[#D4AF37]" />
                             <input type="text" placeholder="Search country..." className="w-full bg-transparent border-none text-white text-sm focus:ring-0 outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                           </div>
                         </div>
                         <div className="overflow-y-auto max-h-64 py-2 custom-scrollbar bg-[#0a0a0a]">
                           {filteredCountries.map((country) => (
                             <button key={country.code} type="button" className="w-full text-left px-5 py-3 text-sm text-gray-300 hover:bg-[#D4AF37]/10 hover:text-white flex items-center justify-between transition-colors" onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}>
                               <div className="flex items-center gap-3"><span className="text-xl">{country.flag}</span><span className="font-medium">{country.name}</span></div>
                               <span className="font-mono text-[#D4AF37] opacity-80">{country.dial_code}</span>
                             </button>
                           ))}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               </div>

               <div className="group">
                 <label className="block text-[#D4AF37] text-xs font-bold tracking-[0.15em] uppercase mb-3 ml-1">{t?.contact?.label_msg || "Your Message"}</label>
                 <div className="input-glass">
                   <textarea rows={5} placeholder="How can we assist you?" className="w-full bg-transparent px-4 py-4 text-white text-base focus:outline-none resize-none placeholder-gray-600" />
                 </div>
               </div>

               <div className="flex justify-center pt-6 pb-2" style={{ transform: "translateZ(40px)" }}>
                 <button type="submit" className="group relative bg-black border-2 border-[#D4AF37] text-[#D4AF37] px-12 sm:px-20 py-5 font-bold tracking-[0.3em] text-sm uppercase transition-all duration-300 overflow-hidden rounded-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                   <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{t?.contact?.btn_submit || "Send Message"}</span>
                   <div className="absolute inset-0 bg-[#D4AF37] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                 </button>
               </div>
             </form>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#0a0a0a] border-2 border-[#D4AF37] p-10 sm:p-14 rounded-xl max-w-lg text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                <CheckCircle size={80} className="text-[#D4AF37] mx-auto mb-6" />
              </motion.div>
              <h3 className="text-3xl sm:text-4xl text-white font-header mb-4 uppercase tracking-tight">{t?.contact?.success_title || "Message Sent"}</h3>
              <p className="text-gray-400 mb-10 font-body text-lg leading-relaxed">{t?.contact?.success_msg || "Thank you for reaching out. A dedicated advisor will contact you shortly."}</p>
              <button onClick={() => setIsSubmitted(false)} className="px-12 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all rounded-md">
                {t?.contact?.btn_close || "Close"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;