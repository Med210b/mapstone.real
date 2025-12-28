import React, { Suspense, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';
import Preloader from './components/Preloader';

// Components
import Hero from './components/Hero';
import Partners from './components/Partners'; 
import About from './components/About';
import DubaiLifestyle from './components/DubaiLifestyle';
import Services from './components/Services';
import WealthArchitecture from './components/WealthArchitecture';
import ClientReviews from './components/ClientReviews'; // ADDED THIS
import RealEstate from './components/RealEstate';
import FeaturedDevelopments from './components/FeaturedDevelopments';
import MarketUpdate from './components/MarketUpdate';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import FAQ from './components/FAQ';

const GoldBorder = () => <div className="h-px w-full bg-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.2)]" />;

const Home = () => (
  <div className="flex flex-col bg-black">
    <Hero />
    <GoldBorder />
    <Partners />
    <GoldBorder />
    <About />
    <GoldBorder />
    <DubaiLifestyle />
    <GoldBorder />
    <Services />
    <GoldBorder />
    <WealthArchitecture />
    <GoldBorder />
    <ClientReviews /> {/* ADDED THIS */}
    <GoldBorder />
    <RealEstate />
    <GoldBorder />
    <FeaturedDevelopments />
    <GoldBorder />
    <MarketUpdate />
    <GoldBorder />
    <Contact />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className="bg-black">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        
        <div style={{ visibility: isLoading ? 'hidden' : 'visible', height: isLoading ? '100vh' : 'auto', overflow: isLoading ? 'hidden' : 'visible' }}>
          <Router>
            <div className="bg-black font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden w-full min-h-screen">
              <Navbar />
              <main>
                <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center text-[#D4AF37]">Loading MAPSTONE...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;