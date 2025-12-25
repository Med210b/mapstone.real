import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const MarketUpdate: React.FC = () => {
  return (
    <section id="market-update" className="py-24 bg-luxury-black text-white border-b border-gold-400/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Market Intelligence" subtitle="Trends & Analysis" light />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <h3 className="font-header text-3xl mb-6 text-gold-400">
              Dubai Luxury Property Index
            </h3>
            <p className="font-body text-gray-400 mb-6 leading-relaxed">
              The luxury real estate market continues to demonstrate resilience and growth. Our data indicates a sustained upward trajectory in prime areas, driven by high demand from international investors.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-luxury-darkRed rounded-full" />
                <span className="font-subtitle text-gray-300">Prime Villa Capital Value: <span className="text-white">+15.4%</span></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-luxury-darkRed rounded-full" />
                <span className="font-subtitle text-gray-300">Off-Plan Transactions: <span className="text-white">+24.1%</span></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-luxury-darkRed rounded-full" />
                <span className="font-subtitle text-gray-300">Rental Yield Avg: <span className="text-white">6.2%</span></span>
              </li>
            </ul>
             <button className="px-8 py-3 border border-gold-400 text-gold-400 font-subtitle uppercase tracking-widest text-sm hover:bg-gold-400 hover:text-luxury-black transition-colors">
               Download Full Report
             </button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full lg:w-2/3 h-[400px] bg-white/5 p-6 rounded-lg border border-white/10"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e9b14f" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#e9b14f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" fontFamily='"Times New Roman", serif' />
                <YAxis stroke="#888" fontFamily='"Times New Roman", serif' />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', borderColor: '#e9b14f', color: '#fff' }}
                  itemStyle={{ color: '#e9b14f' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#e9b14f" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketUpdate;