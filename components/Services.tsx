import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Home, TrendingUp, Key, Shield } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} />,
    title: "Property Sales",
    description: "Expert guidance in buying and selling prestigious properties with market-leading strategies."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Investment Advisory",
    description: "Data-driven insights to maximize your real estate portfolio's growth and stability."
  },
  {
    icon: <Key size={40} />,
    title: "Luxury Leasing",
    description: "Connecting discerning tenants with the world's most exclusive residences."
  },
  {
    icon: <Shield size={40} />,
    title: "Property Management",
    description: "Comprehensive care for your assets, ensuring pristine condition and tenant satisfaction."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-luxury-charcoal text-white relative overflow-hidden border-b border-gold-400/30">
      
      {/* Animated Geometric Background (Holographic Grid Effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e9b14f" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Moving Highlight Line */}
          <motion.line 
             x1="0" y1="0" x2="100%" y2="100%" 
             stroke="#e9b14f" 
             strokeWidth="1"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
             cx="50%" cy="50%" r="200" 
             fill="radial-gradient(circle, rgba(233,177,79,0.1) 0%, rgba(0,0,0,0) 70%)"
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Our Expertise" subtitle="Services" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-luxury-black/50 backdrop-blur-sm p-8 border border-white/5 hover:border-gold-400 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-gold-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="font-header text-2xl mb-4 text-white group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;