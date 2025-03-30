import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#FFD699] rounded-3xl p-8 relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-8xl font-bold text-white leading-none tracking-tight">
          SWEEE
          <br />
          EET!
        </h1>
        <div className="bg-[#2B5741] text-white rounded-full px-4 py-2 inline-block mt-4">
          <span className="uppercase text-sm">From</span>
          <span className="text-2xl font-bold ml-2">$12</span>
        </div>
        <p className="mt-4 text-lg text-[#2B5741]">
          Freshly crafted treats,
          <br />
          made just for you
        </p>
        <div className="mt-8 flex items-center space-x-6">
          <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 text-[#2B5741]">
            <span className="text-3xl font-bold">4.8</span>
            <br />
            <span className="text-sm">since 1985</span>
          </div>
          <div className="flex -space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=50&h=50&fit=crop" 
              alt="Cookie" 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img 
              src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=50&h=50&fit=crop" 
              alt="Pastry" 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img 
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=50&h=50&fit=crop" 
              alt="Chocolate" 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop"
        alt="Stacked Cookies"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[90%] object-cover"
      />
    </div>
  );
}

export default HeroSection;