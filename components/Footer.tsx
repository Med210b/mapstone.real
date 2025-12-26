import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { LOGO_URL } from '../constants';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-[#D4AF37]/30 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={LOGO_URL} alt="Mapstone Real Estate" className="h-24 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.desc}</p>
          </div>

          {/* Navigation - Correctly Linked to Sections */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">{t.footer.col_explore}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  {t.about.subtitle}
                </a>
              </li>
              <li>
                <a href="/#featured-developments" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  {t.services.subtitle}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Pages Links - More Professional Text */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">{t.footer.col_support}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  Privacy Policy Statement
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  Terms & Conditions of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">{t.footer.col_contact}</h3>
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

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">{t.footer.rights}</p>
          <div className="flex gap-6">
            <Facebook size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer" />
            <Instagram size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer" />
            <Linkedin size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer" />
            <Twitter size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;