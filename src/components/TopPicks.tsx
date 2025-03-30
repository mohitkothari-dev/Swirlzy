import React from 'react';
import { Plus } from 'lucide-react';

const TopPicks = () => {
  const picks = [
    {
      name: 'Honey Bun',
      description: 'Fluffy bun with sweet honey glaze',
      price: '$4.99 each',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=100&h=100&fit=crop'
    },
    {
      name: 'Melon Buns',
      description: 'Light bun with smooth melon filling',
      price: '$5.50 each',
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="mt-8 bg-white rounded-3xl p-6">
      <h2 className="text-4xl font-bold mb-6 text-black">TOP-5 PICKS</h2>
      <div className="space-y-4">
        {picks.map((pick, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={pick.image}
                alt={pick.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-black">{pick.name}</h3>
                <p className="text-gray-600">{pick.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-black">{pick.price}</span>
              <button className="bg-[#2B5741] text-white p-2 rounded-full hover:bg-opacity-90">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPicks;