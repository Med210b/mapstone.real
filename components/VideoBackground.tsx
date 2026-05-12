import React from 'react';

interface Props {
  videoUrl: string;
  posterUrl?: string;
  overlayOpacity?: number;
  className?: string;
}

const VideoBackground: React.FC<Props> = ({ videoUrl, overlayOpacity = 0.5, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <iframe
        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src={`${videoUrl}?autoplay=1&mute=1&controls=0&loop=1&rel=0&background=1`}
        allow="autoplay; encrypted-media"
        frameBorder="0"
      />
    </div>
  );
};

export default VideoBackground;