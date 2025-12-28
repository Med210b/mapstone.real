import React, { createContext, useContext, useState } from 'react';

type VideoContextType = {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <VideoContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};