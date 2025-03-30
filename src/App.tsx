import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SchoolCard from './components/SchoolCard';
import EverydayCard from './components/EverydayCard';
import TopPicks from './components/TopPicks';

function App() {
  // Add a scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animate-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-[#F5F3E8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HeroSection />
            <TopPicks />
          </div>
          <div className="space-y-6">
            <SchoolCard />
            <EverydayCard />
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;