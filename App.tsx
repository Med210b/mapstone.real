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

function App() {
  return (
    <VideoProvider>
      {/* FIXED: Added 'overflow-x-hidden' to crop the page perfectly for mobile.
          Added 'relative w-full' to ensure proper alignment on small screens.
      */}
      <div className="bg-black font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative w-full">
        <Navbar />
        
        {/* Main Content Sections */}
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
        
        <Footer />
        <VideoControl />
      </div>
    </VideoProvider>
  );
}

export default App;