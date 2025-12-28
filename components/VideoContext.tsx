import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface VideoContextType {
  isEnabled: boolean;
  toggleVideo: () => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to true, or check localStorage/prefers-reduced-motion if desired
  const [isEnabled, setIsEnabled] = useState(true);

  // Optional: Load preference from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mapstone_video_enabled');
    if (saved !== null) {
      setIsEnabled(saved === 'true');
    }
  }, []);

  const toggleVideo = () => {
    setIsEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem('mapstone_video_enabled', String(newValue));
      return newValue;
    });
  };

  return (
    <VideoContext.Provider value={{ isEnabled, toggleVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};