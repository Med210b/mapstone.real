import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners'; 
import About from './components/About';
import DubaiLifestyle from './components/DubaiLifestyle';
import Services from './components/Services';
import WealthArchitecture from './components/WealthArchitecture';
import RealEstate from './components/RealEstate';
import FeaturedDevelopments from './components/FeaturedDevelopments';
import MarketUpdate from './components/MarketUpdate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { VideoProvider } from './components/VideoContext';
import VideoControl from './components/VideoControl';

// --- IMPORT THE GLOBAL BACKGROUND EFFECT ---
import BackgroundEffect from './components/BackgroundEffect';

function App() {
  return (
    <VideoProvider>
      {/* Main Wrapper: 
          'overflow-x-hidden' crops the page for mobile.
          'bg-black' provides the luxury dark base.
      */}
      <div className="bg-black font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative w-full">
        
        <Navbar />

        {/* UNIFIED GLOBAL BACKGROUND:
            'fixed' keeps the lines visible as you scroll through all pages.
            'z-0' puts it behind all content.
            'pointer-events-none' ensures it doesn't block clicks.
        */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BackgroundEffect color="#D4AF37" opacity={0.05} />
        </div>
        
        {/* CONTENT WRAPPER:
            'relative z-10' ensures all your sections sit ON TOP of the background lines.
        */}
        <main className="relative z-10">
          <Hero />
          <Partners /> 
          <About />
          <DubaiLifestyle />
          <Services />
          <WealthArchitecture />
          <RealEstate />
          <FeaturedDevelopments />
          <MarketUpdate />
          <Contact />
        </main>
        
        <Footer />
        <VideoControl />
      </div>
    </VideoProvider>
  );
}

export default App;