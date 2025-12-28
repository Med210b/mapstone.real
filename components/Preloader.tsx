import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleComplete = () => {
    setIsExiting(true);
    // Brief delay to allow the fade-out animation to finish
    setTimeout(onComplete, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleComplete}
        onError={handleComplete} // Skips if video fails to load
        className="w-full h-full object-cover"
      >
        {/* FIX: Removed the dot. Now points to root public folder */}
        <source src="/preloader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default Preloader;