import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#F5F3E8] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop" 
            alt="Swirlzy Logo" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-[#2B5741]">SWIRLZY</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-[#2B5741] hover:opacity-80">Life & News</a>
          <a href="#" className="text-[#2B5741] hover:opacity-80">About</a>
          <a href="#" className="text-[#2B5741] hover:opacity-80">Store</a>
          <a href="#" className="text-[#2B5741] hover:opacity-80">Recipes</a>
          <button className="bg-[#2B5741] text-white px-6 py-2 rounded-full flex items-center">
            <span className="uppercase">Cart</span>
            <span className="ml-2 bg-[#F4A460] rounded-full w-5 h-5 flex items-center justify-center text-sm">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;