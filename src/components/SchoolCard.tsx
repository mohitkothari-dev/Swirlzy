import React from 'react';
import { ChefHat } from 'lucide-react';

const SchoolCard = () => {
  return (
    <div className="bg-[#A7D1E9] rounded-3xl p-6 relative">
      <h2 className="text-4xl font-bold mb-2 text-black">SCHOOL</h2>
      <p className="text-lg mb-4 text-[#2B5741]">Learn to bake deliciously</p>
      <img 
        src="https://images.unsplash.com/photo-1556911073-38141963c9e0?w=300&h=300&fit=crop"
        alt="Chef"
        className="w-48 h-48 object-cover mx-auto rounded-2xl"
      />
      <div className="absolute top-4 right-4">
        <div className="bg-white rounded-full px-4 py-1 rotate-12 text-sm font-bold">
          JOIN NOW
        </div>
      </div>
      <button className="bg-black text-white rounded-full px-8 py-3 mt-4 flex items-center font-bold">
        EXPLORE
        <ChefHat className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}

export default SchoolCard;