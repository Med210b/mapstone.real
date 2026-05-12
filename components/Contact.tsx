import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  { name: "Belize", code: "BZ", dial_code: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", dial_code: "+229", flag: "🇧🇯" },
  { name: "Bhutan", code: "BT", dial_code: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", dial_code: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "BW", dial_code: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", dial_code: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", dial_code: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "BF", dial_code: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", dial_code: "+257", flag: "🇧🇮" },

  { name: "Cambodia", code: "KH", dial_code: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", dial_code: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "Chad", code: "TD", dial_code: "+235", flag: "🇹🇩" },
  { name: "Chile", code: "CL", dial_code: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dial_code: "+57", flag: "🇨🇴" },
  { name: "Comoros", code: "KM", dial_code: "+269", flag: "🇰🇲" },
  { name: "Costa Rica", code: "CR", dial_code: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", dial_code: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", dial_code: "+53", flag: "🇨🇺" },
  { name: "Cyprus", code: "CY", dial_code: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", dial_code: "+420", flag: "🇨🇿" },

  { name: "Denmark", code: "DK", dial_code: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", dial_code: "+253", flag: "🇩🇯" },
  { name: "Dominican Republic", code: "DO", dial_code: "+1", flag: "🇩🇴" },

  { name: "Ecuador", code: "EC", dial_code: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", dial_code: "+503", flag: "🇸🇻" },
  { name: "Estonia", code: "EE", dial_code: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", dial_code: "+251", flag: "🇪🇹" },

  { name: "Finland", code: "FI", dial_code: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },

  { name: "Gabon", code: "GA", dial_code: "+241", flag: "🇬🇦" },
  { name: "Georgia", code: "GE", dial_code: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial_code: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", dial_code: "+30", flag: "🇬🇷" },
  { name: "Guatemala", code: "GT", dial_code: "+502", flag: "🇬🇹" },

  { name: "Haiti", code: "HT", dial_code: "+509", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", dial_code: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", code: "HK", dial_code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "HU", dial_code: "+36", flag: "🇭🇺" },

  { name: "Iceland", code: "IS", dial_code: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial_code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial_code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial_code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial_code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dial_code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },

  { name: "Jamaica", code: "JM", dial_code: "+1", flag: "🇯🇲" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dial_code: "+962", flag: "🇯🇴" },

  { name: "Kazakhstan", code: "KZ", dial_code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", dial_code: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", dial_code: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", dial_code: "+996", flag: "🇰🇬" },

  { name: "Laos", code: "LA", dial_code: "+856", flag: "🇱🇦" },
  { name: "Latvia", code: "LV", dial_code: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", dial_code: "+961", flag: "🇱🇧" },
  { name: "Libya", code: "LY", dial_code: "+218", flag: "🇱🇾" },
  { name: "Lithuania", code: "LT", dial_code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", dial_code: "+352", flag: "🇱🇺" },

  { name: "Madagascar", code: "MG", dial_code: "+261", flag: "🇲🇬" },
  { name: "Malaysia", code: "MY", dial_code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", dial_code: "+960", flag: "🇲🇻" },
  { name: "Mali", code: "ML", dial_code: "+223", flag: "🇲🇱" },
  { name: "Malta", code: "MT", dial_code: "+356", flag: "🇲🇹" },
  { name: "Mauritania", code: "MR", dial_code: "+222", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", dial_code: "+230", flag: "🇲🇺" },
  { name: "Mexico", code: "MX", dial_code: "+52", flag: "🇲🇽" },
  { name: "Moldova", code: "MD", dial_code: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", dial_code: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", dial_code: "+976", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", dial_code: "+382", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", dial_code: "+258", flag: "🇲🇿" },

  { name: "Namibia", code: "NA", dial_code: "+264", flag: "🇳🇦" },
  { name: "Nepal", code: "NP", dial_code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", dial_code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dial_code: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", dial_code: "+505", flag: "🇳🇮" },
  { name: "Nigeria", code: "NG", dial_code: "+234", flag: "🇳🇬" },
  { name: "North Korea", code: "KP", dial_code: "+850", flag: "🇰🇵" },
  { name: "Norway", code: "NO", dial_code: "+47", flag: "🇳🇴" },

  { name: "Oman", code: "OM", dial_code: "+968", flag: "🇴🇲" },

  { name: "Pakistan", code: "PK", dial_code: "+92", flag: "🇵🇰" },
  { name: "Palestine", code: "PS", dial_code: "+970", flag: "🇵🇸" },
  { name: "Panama", code: "PA", dial_code: "+507", flag: "🇵🇦" },
  { name: "Paraguay", code: "PY", dial_code: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "PE", dial_code: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", dial_code: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dial_code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial_code: "+351", flag: "🇵🇹" },

  { name: "Qatar", code: "QA", dial_code: "+974", flag: "🇶🇦" },

  { name: "Romania", code: "RO", dial_code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },

  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", dial_code: "+221", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", dial_code: "+381", flag: "🇷🇸" },
  { name: "Singapore", code: "SG", dial_code: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", dial_code: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", dial_code: "+386", flag: "🇸🇮" },
  { name: "Somalia", code: "SO", dial_code: "+252", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dial_code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", dial_code: "+249", flag: "🇸🇩" },
  { name: "Sweden", code: "SE", dial_code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial_code: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "SY", dial_code: "+963", flag: "🇸🇾" },

  { name: "Taiwan", code: "TW", dial_code: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", code: "TJ", dial_code: "+992", flag: "🇹🇯" },
  { name: "Tanzania", code: "TZ", dial_code: "+255", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", dial_code: "+66", flag: "🇹🇭" },
  { name: "Tunisia", code: "TN", dial_code: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", code: "TM", dial_code: "+993", flag: "🇹🇲" },

  { name: "Uganda", code: "UG", dial_code: "+256", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", dial_code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", dial_code: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", dial_code: "+998", flag: "🇺🇿" },

  { name: "Venezuela", code: "VE", dial_code: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", dial_code: "+84", flag: "🇻🇳" },

  { name: "Yemen", code: "YE", dial_code: "+967", flag: "🇾🇪" },

  { name: "Zambia", code: "ZM", dial_code: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", dial_code: "+263", flag: "🇿🇼" }
].sort((a, b) => a.name.localeCompare(b.name));

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); 
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });
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