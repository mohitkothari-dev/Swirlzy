import React from 'react';

const EverydayCard = () => {
  return (
    <div className="bg-[#F4A460] rounded-3xl p-6 relative">
      <h2 className="text-4xl font-bold mb-2 text-black">EVERYDAY</h2>
      <div className="bg-[#2B5741] text-white rounded-full px-4 py-2 inline-block">
        <span className="text-2xl font-bold">$10</span>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=300&h=300&fit=crop"
        alt="Fresh Tart"
        className="w-48 h-48 object-cover mx-auto my-4 rounded-2xl"
      />
      <p className="text-center text-lg text-[#2B5741]">
        Freshly baked, delivered daily
        <br />
        right to your door!
      </p>
    </div>
  );
}

export default EverydayCard;