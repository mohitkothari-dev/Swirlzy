import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      className="bg-[#F5F3E8] py-4 relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop" 
            alt="Swirlzy Logo" 
            className="w-10 h-10 rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <span className="text-xl font-bold text-[#2B5741]">SWIRLZY</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Life & News', 'About', 'Store', 'Recipes'].map((item, index) => (
            <motion.a 
              key={index}
              href="#" 
              className="text-[#2B5741] hover:opacity-80"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.button 
            className="bg-[#2B5741] text-white px-6 py-2 rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="uppercase">Cart</span>
            <motion.span 
              className="ml-2 bg-[#F4A460] rounded-full w-5 h-5 flex items-center justify-center text-sm"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.8, times: [0, 0.5, 1] }}
            >
              3
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <motion.button 
            className="bg-[#2B5741] text-white p-2 rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-5 h-5" />
            <motion.span 
              className="ml-1 bg-[#F4A460] rounded-full w-5 h-5 flex items-center justify-center text-sm"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.8, times: [0, 0.5, 1] }}
            >
              3
            </motion.span>
          </motion.button>
          
          <motion.button
            onClick={toggleMenu}
            className="text-[#2B5741] p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-[#F5F3E8] shadow-lg md:hidden z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Life & News', 'About', 'Store', 'Recipes'].map((item, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-[#2B5741] py-2 border-b border-gray-200 hover:opacity-80"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;