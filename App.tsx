import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DubaiLifestyle from './components/DubaiLifestyle';
import Services from './components/Services';
import WealthArchitecture from './components/WealthArchitecture';
import RealEstate from './components/RealEstate';
import FeaturedDevelopments from './components/FeaturedDevelopments'; // <--- NEW IMPORT
import MarketUpdate from './components/MarketUpdate';
import Partners from './components/Partners'; // <--- NEW IMPORT
import Contact from './components/Contact';
import Footer from './components/Footer';
import { VideoProvider } from './components/VideoContext';
import VideoControl from './components/VideoControl';

function App() {
  return (
    <VideoProvider>
      <div className="bg-gray-50 font-sans selection:bg-gold-400 selection:text-black">
        <Navbar />
        <Hero />
        <About />
        <DubaiLifestyle />
        <Services />
        <WealthArchitecture />
        <RealEstate />
        
        {/* Added Featured Developments here */}
        <FeaturedDevelopments />
        
        <MarketUpdate />
        
        {/* Added Partners section here (before Contact) */}
        <Partners />
        
        <Contact />
        <Footer />
        <VideoControl />
      </div>
    </VideoProvider>
  );
}

export default App;