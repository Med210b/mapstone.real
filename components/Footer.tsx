import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/30 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={LOGO_URL} alt="Mapstone Real Estate" className="h-24 w-auto object-contain" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining luxury real estate in Dubai. We curate exclusive investment opportunities for the world's most discerning clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    onClick={() => {
                       // Small hack to handle hash scrolling on Home
                       if(window.location.hash) {
                         const id = item.toLowerCase() === 'projects' ? 'featured-developments' : item.toLowerCase();
                         const element = document.getElementById(id);
                         element?.scrollIntoView({ behavior: "smooth" });
                       }
                    }}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages Links (UPDATED) */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-header text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <span className="text-sm">Emaar Business Park, Building 4<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm">+971 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span className="text-sm">info@mapstone.real</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2024 MAPSTONE Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Facebook size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Instagram size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Twitter size={20} className="text-gray-500 hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;