import React from 'react';
import { useVideo } from './VideoContext';
import { Play, Pause, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoControl: React.FC = () => {
  const { isEnabled, toggleVideo } = useVideo();

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onClick={toggleVideo}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2 bg-luxury-black/80 backdrop-blur-md border border-gold-400/30 rounded-full text-gold-400 hover:bg-gold-400 hover:text-luxury-black transition-all duration-300 shadow-2xl group"
      title={isEnabled ? "Disable Background Video" : "Enable Background Video"}
    >
      <span className="text-xs font-subtitle uppercase tracking-widest hidden md:block">
        {isEnabled ? 'Live View' : 'Static View'}
      </span>
      <div className="relative">
        {isEnabled ? <Pause size={16} /> : <Play size={16} />}
      </div>
    </motion.button>
  );
};

export default VideoControl;