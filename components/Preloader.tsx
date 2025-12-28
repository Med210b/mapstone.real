import React, { useEffect, useState } from 'react';
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
        onError={handleComplete} // SKIPS PRELOADER IF VIDEO FAILS
        className="w-full h-full object-cover"
      >
        {/* Use process.env.PUBLIC_URL or a relative path for GitHub Pages compatibility */}
        <source src="./preloader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default Preloader;