import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp, Float, ScaleIn } from './animations/AnimatedComponents';

const HeroSection = () => {
  return (
    <div className="bg-[#FFD699] rounded-3xl p-6 md:p-8 relative overflow-hidden">
      <div className="relative z-10 w-full md:max-w-[60%]">
        <FadeIn>
          <motion.h1 
            className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            SWEEE
            <br />
            EET!
          </motion.h1>
        </FadeIn>
        
        <SlideUp delay={0.3}>
          <div className="bg-[#2B5741] text-white rounded-full px-4 py-2 inline-block mt-4">
            <span className="uppercase text-sm">From</span>
            <span className="text-2xl font-bold ml-2">$12</span>
          </div>
        </SlideUp>
        
        <SlideUp delay={0.5}>
          <p className="mt-4 text-lg text-[#2B5741]">
            Freshly crafted treats,
            <br />
            made just for you
          </p>
        </SlideUp>
        
        <SlideUp delay={0.7}>
          <div className="mt-8 flex items-center space-x-6">
            <motion.div 
              className="bg-white bg-opacity-20 rounded-full px-6 py-2 text-[#2B5741]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold">4.8</span>
              <br />
              <span className="text-sm">since 1985</span>
            </motion.div>
            <div className="flex -space-x-2">
              <ScaleIn delay={0.8}>
                <img 
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=50&h=50&fit=crop" 
                  alt="Cookie" 
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </ScaleIn>
              <ScaleIn delay={0.9}>
                <img 
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=50&h=50&fit=crop" 
                  alt="Pastry" 
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </ScaleIn>
              <ScaleIn delay={1.0}>
                <img 
                  src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=50&h=50&fit=crop" 
                  alt="Chocolate" 
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </ScaleIn>
            </div>
          </div>
        </SlideUp>
      </div>
      
      {/* Mobile image - shown below content on small screens */}
      <motion.div 
        className="mt-8 w-full block md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Float>
          <motion.img 
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop"
            alt="Stacked Cookies"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Float>
      </motion.div>
      
      {/* Desktop image - positioned absolutely on the right */}
      <motion.div 
        className="absolute right-0 top-0 h-full w-[45%] hidden md:flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Float>
          <motion.img 
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=500&fit=crop"
            alt="Stacked Cookies"
            className="h-[90%] object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Float>
      </motion.div>
    </div>
  );
}

export default HeroSection;