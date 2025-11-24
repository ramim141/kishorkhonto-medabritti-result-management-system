import React, { useState } from 'react';

const Navbar = ({ onNavigate, currentView }) => {
  // মোবাইল মেনু ওপেন আছে কিনা তা চেক করার স্টেট
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // মেনু টগল করার ফাংশন
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // মেনু আইটেমে ক্লিক করলে পেজ চেঞ্জ হবে এবং মেনু বন্ধ হবে
  const handleMobileNavigate = (view) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 print:hidden">
      <div className="container flex items-center justify-between h-20 max-w-6xl px-4 mx-auto">
        
        {/* Logo Section */}
        <div onClick={() => onNavigate('home')} className="flex-shrink-0 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="object-contain w-auto h-16" 
            onError={(e) => {e.target.style.display='none';}} 
          />
          <span className="hidden text-xl font-bold text-red-800">কিশোর কণ্ঠ</span> 
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-[15px]">
          <li 
            onClick={() => onNavigate('home')} 
            className={`cursor-pointer transition ${currentView === 'home' ? 'text-green-700 font-bold' : 'hover:text-green-700'}`}
          >
            Home
          </li>
          <li className="transition cursor-pointer hover:text-green-700">About</li>
          <li className="transition cursor-pointer hover:text-green-700">মেধাবৃত্তি - ২০২৫</li>
          <li>
            <button 
              onClick={() => onNavigate('search')}
              className="bg-[#2e8b57] hover:bg-[#246e45] text-white px-6 py-2.5 rounded shadow-sm cursor-pointer transition font-semibold"
            >
              ফলাফল (২০২৪)
            </button>
          </li>
          <li className="transition cursor-pointer hover:text-green-700">Contact</li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) - Click Event Added */}
        <div className="p-2 text-gray-600 cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu (Visible only when isOpen is true) */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 flex flex-col w-full gap-4 px-6 py-4 bg-white border-t border-gray-100 shadow-lg md:hidden top-20">
          <div 
            onClick={() => handleMobileNavigate('home')}
            className="py-2 font-medium text-gray-700 border-b border-gray-100 hover:text-green-700"
          >
            Home
          </div>
          <div className="py-2 font-medium text-gray-700 border-b border-gray-100 hover:text-green-700">
            About
          </div>
          <div className="py-2 font-medium text-gray-700 border-b border-gray-100 hover:text-green-700">
            মেধাবৃত্তি - ২০২৫
          </div>
          <div 
            onClick={() => handleMobileNavigate('search')}
            className="text-[#2e8b57] font-bold py-2 border-b border-gray-100"
          >
            ফলাফল (২০২৪)
          </div>
          <div className="py-2 font-medium text-gray-700 hover:text-green-700">
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;