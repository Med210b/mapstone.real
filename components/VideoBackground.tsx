import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideo } from './VideoContext';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl: string;
  overlayOpacity?: number; // 0 to 1
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  posterUrl, 
  overlayOpacity = 0.5,
  className = "" 
}) => {
  const { isEnabled } = useVideo();
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  // Check types of embed
  const isYoutube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isCanva = videoUrl.includes('canva.site');
  const isExternalEmbed = isYoutube || isCanva;

  let finalEmbedUrl = videoUrl;

  // Process YouTube URL to create an autoplay/loop/mute embed URL
  if (isYoutube && origin) {
    // Robust Regex for YouTube ID extraction (supports embed, watch, share links)
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    if (videoId) {
      // Construction params for background video behavior
      const params = new URLSearchParams({
        autoplay: '1',
        mute: '1',
        controls: '0',
        loop: '1',
        playlist: videoId, // Required for loop to work
        playsinline: '1',
        showinfo: '0',
        rel: '0',
        iv_load_policy: '3',
        disablekb: '1',
        fs: '0',
        modestbranding: '1',
        enablejsapi: '1',
        origin: origin, // Critical for avoiding Error 150
        widgetid: '1'
      });
      finalEmbedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }
  }

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Background Color Base */}
      <div className="absolute inset-0 bg-luxury-black" />

      <AnimatePresence mode="wait">
        {isEnabled ? (
          isExternalEmbed ? (
            <motion.div
              key="iframe-embed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <iframe
                src={finalEmbedUrl}
                className={`w-full h-full border-0 object-cover ${isYoutube ? 'scale-[1.5]' : ''}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                tabIndex={-1}
                title="Background Video"
              />
            </motion.div>
          ) : (
            <motion.video
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoUrl}
              poster={posterUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          )
        ) : (
          <motion.img
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            src={posterUrl}
            alt="Background"
          />
        )}
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0 bg-luxury-black transition-opacity duration-700"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Texture/Noise overlay (optional, for cinematic feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
    </div>
  );
};

export default VideoBackground;