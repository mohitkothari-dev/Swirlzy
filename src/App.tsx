import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SchoolCard from './components/SchoolCard';
import EverydayCard from './components/EverydayCard';
import TopPicks from './components/TopPicks';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F3E8]">
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
    </div>
  );
}

export default App;