import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const countries = [
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "Tunisia", code: "TN", dial_code: "+216", flag: "🇹🇳" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" }
].sort((a, b) => a.name.localeCompare(b.name));

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "AE") || countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.dial_code.includes(searchQuery));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={containerRef} className="relative py-24 md:py-32 bg-black border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <h4 className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase mb-4">{t.contact.subtitle}</h4>
             <h2 className="font-header text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">{t.contact.title}</h2>
             <div className="w-24 h-px bg-[#D4AF37] mx-auto shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
           </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-sm">
           <form onSubmit={handleSubmit} className="space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="group"><label className="block text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.contact.label_first}</label><input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" /></div>
               <div className="group"><label className="block text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.contact.label_last}</label><input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" /></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="group"><label className="block text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.contact.label_email}</label><input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" /></div>
               <div className="group relative">
                 <label className="block text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.contact.label_phone}</label>
                 <div className="flex items-end gap-4 border-b border-white/20 focus-within:border-[#D4AF37] transition-colors">
                   <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 py-3 text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap"><span className="text-xl leading-none">{selectedCountry.flag}</span><span className="font-mono text-sm">{selectedCountry.dial_code}</span><ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} /></button>
                   <input required type="tel" placeholder="Phone number" className="w-full bg-transparent py-3 text-white focus:outline-none" />
                 </div>
                 <AnimatePresence>
                   {isDropdownOpen && (
                     <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-4 w-72 bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-sm shadow-2xl z-[100] max-h-72 overflow-hidden flex flex-col">
                       <div className="p-3 border-b border-white/5 bg-white/[0.02]"><div className="flex items-center gap-2 bg-black px-3 py-2 rounded-sm border border-white/10"><Search size={14} className="text-gray-500" /><input type="text" placeholder="Search..." className="w-full bg-transparent border-none text-white text-xs focus:ring-0 outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div></div>
                       <div className="overflow-y-auto py-2 custom-scrollbar">
                         {filteredCountries.map((country) => (<button key={country.code} type="button" className="w-full text-left px-4 py-3 text-xs text-gray-300 hover:bg-[#D4AF37] hover:text-black flex items-center justify-between transition-all" onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}><div className="flex items-center gap-3"><span>{country.flag}</span><span>{country.name}</span></div><span className="font-mono opacity-50">{country.dial_code}</span></button>))}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             </div>
             <div className="group"><label className="block text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.contact.label_msg}</label><textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" /></div>
             <div className="flex justify-center pt-10"><button type="submit" className="group relative bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:text-black px-16 py-5 font-bold tracking-[0.4em] uppercase transition-all duration-500 overflow-hidden rounded-sm"><span className="relative z-10">{t.contact.btn_submit}</span><div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" /></button></div>
           </form>
        </motion.div>
      </div>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/40 p-12 rounded-sm max-w-md text-center shadow-2xl">
              <CheckCircle size={64} className="text-[#D4AF37] mx-auto mb-6" />
              <h3 className="text-3xl text-white font-header mb-4 uppercase tracking-tighter">{t.contact.success_title}</h3>
              <p className="text-gray-400 mb-8 font-body tracking-wide">{t.contact.success_msg}</p>
              <button onClick={() => setIsSubmitted(false)} className="px-10 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">{t.contact.btn_close}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;