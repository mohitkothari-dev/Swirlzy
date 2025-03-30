import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './animations/AnimatedComponents';

const EverydayCard = () => {
  return (
    <motion.div 
      className="bg-[#F4A460] rounded-3xl p-6 relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FadeIn delay={0.2}>
        <h2 className="text-4xl font-bold mb-2 text-black">EVERYDAY</h2>
      </FadeIn>
      
      <motion.div 
        className="bg-[#2B5741] text-white rounded-full px-4 py-2 inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl font-bold">$10</span>
      </motion.div>
      
      <ScaleIn delay={0.4}>
        <motion.img 
          src="https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=300&h=300&fit=crop"
          alt="Fresh Tart"
          className="w-48 h-48 object-cover mx-auto my-4 rounded-2xl"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" 
          }}
        />
      </ScaleIn>
      
      <FadeIn delay={0.6}>
        <motion.p 
          className="text-center text-lg text-[#2B5741]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Freshly baked, delivered daily
          <br />
          right to your door!
        </motion.p>
      </FadeIn>
    </motion.div>
  );
}

export default EverydayCard;