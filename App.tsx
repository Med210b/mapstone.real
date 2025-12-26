// ... existing imports ...
// NEW IMPORT
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <VideoProvider>
      {/* WRAP EVERYTHING IN LanguageProvider */}
      <LanguageProvider> 
        <Router>
          <div className="bg-black font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative w-full min-h-screen flex flex-col">
             {/* ... (Keep all your existing code inside here) ... */}
             <Navbar />
             <div className="fixed inset-0 z-0 pointer-events-none">
                <BackgroundEffect color="#D4AF37" opacity={0.05} />
             </div>
             {/* ... rest of the app ... */}
          </div>
        </Router>
      </LanguageProvider>
    </VideoProvider>
  );
}
export default App;