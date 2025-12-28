import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61581174180550",
    instagram: "https://www.instagram.com/mapstone_dxb/",
    linkedin: "https://www.linkedin.com/in/mapstone-real-estate-brokerage-2b7ba6385/",
    x: "https://x.com/Mapstone_DXB"
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!t) return null;

  return (
    <footer className="bg-black border-t border-[#D4AF37]/30 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <img src="https://i.postimg.cc/FKRvrYXF/wwwwwwwwww.png" alt="Mapstone Real Estate" className="h-24 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t?.footer?.desc || "Redefining luxury real estate in Dubai."}
            </p>
          </div>

          <div>
            <h3 className="text-white font-header text-lg mb-6">{t?.footer?.col_explore || "Explore"}</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">{t?.nav?.home || "Home"}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">{t?.about?.subtitle || "About"}</button></li>
              <li><button onClick={() => scrollToSection('featured-developments')} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">{t?.nav?.projects || "Projects"}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">{t?.services?.subtitle || "Services"}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-header text-lg mb-6">{t?.footer?.col_support || "Support"}</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">Privacy & Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-header text-lg mb-6">{t?.footer?.col_contact || "Contact"}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <span className="text-sm">Al Barsha Business Center, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm">+971 58 592 8787</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm">Admin@mapstonerealestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">{t?.footer?.rights || "© 2025 MAPSTONE Real Estate."}</p>
          <div className="flex gap-6">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20} className="text-gray-500 hover:text-[#D4AF37]" /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} className="text-gray-500 hover:text-[#D4AF37]" /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-gray-500 hover:text-[#D4AF37]" /></a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer"><Twitter size={20} className="text-gray-500 hover:text-[#D4AF37]" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;