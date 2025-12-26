import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoControl from './components/VideoControl';
import { VideoProvider } from './components/VideoContext';
import BackgroundEffect from './components/BackgroundEffect';
import { LanguageProvider } from './components/LanguageContext';

// Content Components
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

// New Legal Pages
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import FAQ from './components/FAQ';

// Helper Component for the "Home" Page
const Home = () => (
  <>
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
  </>
);

function App() {
  return (
    <VideoProvider>
      <LanguageProvider>
        <Router>
          <div className="bg-black font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative w-full min-h-screen flex flex-col">
            
            <Navbar />

            {/* GLOBAL BACKGROUND FRAME */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <BackgroundEffect color="#D4AF37" opacity={0.05} />
            </div>
            
            {/* ROUTING CONTENT */}
            <main className="relative z-10 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
            
            <Footer />
            <VideoControl />
          </div>
        </Router>
      </LanguageProvider>
    </VideoProvider>
  );
}

export default App;