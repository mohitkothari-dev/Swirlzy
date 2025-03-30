import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem, HoverScale } from './animations/AnimatedComponents';

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
    <motion.div 
      className="mt-8 bg-white rounded-3xl p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-6 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        TOP-5 PICKS
      </motion.h2>
      
      <StaggerContainer>
        {picks.map((pick, index) => (
          <StaggerItem key={index}>
            <HoverScale>
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <motion.img 
                    src={pick.image}
                    alt={pick.name}
                    className="w-16 h-16 rounded-full object-cover"
                    whileHover={{ rotate: 10 }}
                  />
                  <div>
                    <h3 className="font-bold text-black">{pick.name}</h3>
                    <p className="text-gray-600">{pick.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-black">{pick.price}</span>
                  <motion.button 
                    className="bg-[#2B5741] text-white p-2 rounded-full hover:bg-opacity-90"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </HoverScale>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </motion.div>
  );
}

export default TopPicks;