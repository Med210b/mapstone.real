import React from 'react';
import { motion } from "framer-motion";
// Added ShieldCheck to the imports below
import { Quote, Star, UserCheck, ShieldCheck } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({ id: i, d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`, width: 0.5 + i * 0.03 }));
  return ( <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 696 316" fill="none"> {paths.map((path) => ( <motion.path key={path.id} d={path.d} stroke="#8B2020" strokeWidth={path.width} strokeOpacity={0.1 + path.id * 0.03} initial={{ pathLength: 0.3, opacity: 0.6 }} animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }} transition={{ duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} /> ))} </svg> );
}

const ClientReviews: React.FC = () => {
  const reviews = [
    {
      name: "Alexandre Moreau",
      location: "France",
      text: "Investing in Dubai felt overwhelming until I met MAPSTONE. Mohamed’s clarity, precision, and deep market understanding gave me complete confidence. He secured an off‑plan unit in a project I would never have accessed alone. The experience was smooth, elegant, and far beyond the service level I’m used to in Europe.",
      icon: <Star className="w-8 h-8 text-[#D4AF37]" />
    },
    {
      name: "Natalia Sokolova",
      location: "Russia",
      text: "MAPSTONE operates with a level of professionalism and discretion that is rare in the real estate world. Every detail was handled with care — from market analysis to legal coordination. Mohamed helped me build a long‑term investment strategy that aligns perfectly with my family’s goals. I trust them completely.",
      icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
    },
    {
      name: "Khalid Al‑Thani",
      location: "Qatar",
      text: "What impressed me most was MAPSTONE’s honesty and strategic approach. Mohamed presented opportunities that matched my portfolio, not just what was available. The priority access to premium launches was exceptional. This is the kind of advisory every serious investor needs when entering Dubai’s market.",
      icon: <UserCheck className="w-8 h-8 text-[#D4AF37]" />
    }
  ];

  return (
    <section id="reviews" className="relative min-h-screen bg-black text-white overflow-hidden py-24 border-t border-[#D4AF37]/30">
      <div className="absolute inset-0"> <FloatingPaths position={1} /> <FloatingPaths position={-1} /> </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <p className="text-[#D4AF37] text-sm tracking-[0.4em] mb-4 font-subtitle uppercase">TESTIMONIALS</p>
          <h1 className="text-5xl md:text-7xl font-header text-white mb-6 uppercase tracking-tighter">Client Reviews</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mb-8" />
          <p className="text-gray-400 text-xl leading-relaxed font-body">
            Excellence as witnessed by our global clientele.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-10 h-10 text-[#8B2020] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                <p className="text-white text-lg leading-relaxed italic font-body mb-8">
                  "{review.text}"
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-header text-[#D4AF37]">{review.name}</h3>
                <p className="text-[#D4AF37]/60 text-sm tracking-widest uppercase mt-1">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;