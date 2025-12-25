import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Landmark, Coins, Plane, LineChart } from 'lucide-react';

const InvestmentStrategy: React.FC = () => {
  return (
    <section id="investment" className="py-24 bg-luxury-darkRed text-white border-b border-gold-400/30 relative">
      
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold-400/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-gold-400/20" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Title & Intro */}
          <div className="lg:w-1/3">
            <SectionTitle title="Wealth Architecture" subtitle="Investment Strategy" align="left" light />
            <p className="font-body text-gray-200 text-lg leading-relaxed mb-8">
              Real estate in Dubai is more than acquisition; it is a vehicle for legacy creation. We provide bespoke investment frameworks tailored for the global elite.
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              className="h-[1px] bg-gradient-to-r from-gold-400 to-transparent mb-8"
            />
            <div className="flex gap-4 items-center mb-6">
                <div className="p-3 border border-gold-400 rounded-full">
                    <Coins size={24} className="text-gold-400" />
                </div>
                <div>
                    <h4 className="font-header text-xl">Crypto-Ready</h4>
                    <p className="font-body text-sm text-gray-400">Seamless transactions via digital assets.</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="p-3 border border-gold-400 rounded-full">
                    <Plane size={24} className="text-gold-400" />
                </div>
                <div>
                    <h4 className="font-header text-xl">Golden Visa</h4>
                    <p className="font-body text-sm text-gray-400">10-Year residency for property investors.</p>
                </div>
            </div>
          </div>

          {/* Right Column: The Strategy Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Strategy Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-luxury-black/30 backdrop-blur-md border border-white/5 p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Landmark size={80} />
              </div>
              <h3 className="font-header text-2xl text-gold-400 mb-4">Off-Plan Capital Growth</h3>
              <p className="font-body text-gray-300 mb-6">
                Secure assets at pre-launch prices. Our relationships with top-tier developers grant you priority access before the market opens, ensuring maximum appreciation upon handover.
              </p>
              <ul className="space-y-2 font-subtitle text-xs text-gray-400 uppercase tracking-wider">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-400 rounded-full"/> EMAAR Platinum Access</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-400 rounded-full"/> High-Yield Payment Plans</li>
              </ul>
            </motion.div>

            {/* Strategy Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-luxury-black/30 backdrop-blur-md border border-white/5 p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <LineChart size={80} />
              </div>
              <h3 className="font-header text-2xl text-gold-400 mb-4">Portfolio Diversification</h3>
              <p className="font-body text-gray-300 mb-6">
                Mitigate global inflation by anchoring wealth in Dubai's dollar-pegged economy. We structure diverse portfolios ranging from waterfront villas to commercial floors.
              </p>
              <ul className="space-y-2 font-subtitle text-xs text-gray-400 uppercase tracking-wider">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-400 rounded-full"/> Short-Term Rental Mgmt</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold-400 rounded-full"/> Corporate Structuring</li>
              </ul>
            </motion.div>
            
            {/* Visual CTA */}
            <div className="md:col-span-2 mt-4 bg-gold-400/10 border border-gold-400/50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="font-header text-2xl text-white">Private Client Advisory</h4>
                    <p className="font-body text-sm text-gray-300">Book a confidential consultation with our senior investment directors.</p>
                </div>
                <button className="px-8 py-3 bg-gold-400 text-luxury-black font-subtitle uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Schedule Briefing
                </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentStrategy;