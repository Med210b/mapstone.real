import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // ----------------------------------------------------
    // SETTING: How long to show the video (in milliseconds)
    // 5000 = 5 seconds. Change this if your video is shorter/longer.
    // ----------------------------------------------------
    const VIDEO_DURATION = 5000;

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); // Wait for fade-out animation
    }, VIDEO_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full pointer-events-none select-none">
        {/* pointer-events-none prevents clicking on the video */}
        <iframe
          className="w-full h-full object-cover scale-110" // scale-110 zooms in slightly to hide edges
          src="https://www.youtube.com/embed/c25azKgBa70?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=c25azKgBa70&modestbranding=1&disablekb=1"
          title="Preloader"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Preloader;