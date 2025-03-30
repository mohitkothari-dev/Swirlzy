import React from 'react';
import { ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, Float } from './animations/AnimatedComponents';

const SchoolCard = () => {
  return (
    <motion.div 
      className="bg-[#A7D1E9] rounded-3xl p-6 relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FadeIn delay={0.2}>
        <h2 className="text-4xl font-bold mb-2 text-black">SCHOOL</h2>
      </FadeIn>
      
      <FadeIn delay={0.4}>
        <p className="text-lg mb-4 text-[#2B5741]">Learn to bake deliciously</p>
      </FadeIn>
      
      <Float>
        <motion.img 
          src="https://images.unsplash.com/photo-1556911073-38141963c9e0?w=300&h=300&fit=crop"
          alt="Chef"
          className="w-48 h-48 object-cover mx-auto rounded-2xl"
          whileHover={{ scale: 1.05 }}
        />
      </Float>
      
      <motion.div 
        className="absolute top-4 right-4"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="bg-white rounded-full px-4 py-1 rotate-12 text-sm font-bold">
          JOIN NOW
        </div>
      </motion.div>
      
      <motion.button 
        className="bg-black text-white rounded-full px-8 py-3 mt-4 flex items-center font-bold"
        whileHover={{ scale: 1.05, backgroundColor: "#2B5741" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        EXPLORE
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <ChefHat className="w-5 h-5 ml-2" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default SchoolCard;