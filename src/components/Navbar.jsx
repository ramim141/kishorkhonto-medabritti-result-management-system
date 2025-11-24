import React from 'react';

const Navbar = ({ onNavigate, currentView }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 print:hidden py-2">
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center h-20">
        
        {/* Logo - Click to go Home */}
        <div onClick={() => onNavigate('home')} className="flex-shrink-0 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-16 w-auto object-contain" 
            onError={(e) => {e.target.style.display='none';}} 
          />
          <span className="hidden text-xl font-bold text-red-800">কিশোর কণ্ঠ</span> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-[15px]">
          <li onClick={() => onNavigate('home')} className={`cursor-pointer transition ${currentView === 'home' ? 'text-green-700 font-bold' : 'hover:text-green-700'}`}>Home</li>
          <li className="hover:text-green-700 cursor-pointer transition">About</li>
          
          {/* Result Button - Goes to Search View */}
          <li>
            <button 
              onClick={() => onNavigate('search')}
              className="bg-[#2e8b57] hover:bg-[#246e45] text-white px-6 py-2.5 rounded shadow-sm cursor-pointer transition font-semibold"
            >
              ফলাফল (২০২৪)
            </button>
          </li>
          
          <li className="hover:text-green-700 cursor-pointer transition">Contact</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-600">
           {/* Mobile menu logic can be added here if needed */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;