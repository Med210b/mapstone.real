import React from 'react';
import { LOGO_URL } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="MAPSTONE REAL ESTATE" className="h-28 mb-6 opacity-90" />
            <p className="font-body text-gray-400 leading-relaxed text-sm">
              MAPSTONE REAL ESTATE BROKERAGE L.L.C is a premier luxury real estate agency dedicated to providing exceptional service and expertise in the high-end property market.
            </p>
          </div>

          <div>
            <h4 className="font-subtitle text-gold-400 text-lg mb-6">Navigation</h4>
            <ul className="space-y-3 font-body text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#real-estate" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-subtitle text-gold-400 text-lg mb-6">Contact</h4>
            <ul className="space-y-3 font-body text-gray-400">
              <li>The Opus by Omniyat</li>
              <li>Business Bay, Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>info@mapstone.ae</li>
            </ul>
          </div>

          <div>
            <h4 className="font-subtitle text-gold-400 text-lg mb-6">Follow Us</h4>
            <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all">
                 <Facebook size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all">
                 <Twitter size={18} />
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} MAPSTONE REAL ESTATE BROKERAGE L.L.C. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold-400 transition-colors">Terms & Conditions</a>
             <a href="#" className="hover:text-gold-400 transition-colors">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;