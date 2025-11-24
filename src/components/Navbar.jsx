import React, { useState } from 'react';

const Navbar = ({ onNavigate, currentView }) => {
  // মোবাইল মেনু খোলা বা বন্ধ রাখার স্টেট
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // মেনু টগল করার ফাংশন
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // মোবাইলে লিংকে ক্লিক করলে পেজ চেঞ্জ হবে এবং মেনু বন্ধ হবে
  const handleMobileNavigate = (view) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  // একটিভ লিংক স্টাইল করার হেল্পার ফাংশন
  const getLinkClass = (viewName) => 
    `cursor-pointer transition text-[15px] font-medium ${currentView === viewName 
      ? 'text-[#1a5d45] font-bold' // একটিভ হলে গাঢ় সবুজ এবং বোল্ড
      : 'text-gray-600 hover:text-[#1a5d45]'}`; // সাধারণ অবস্থায় ধূসর

  return (
    <nav className="sticky top-0 z-50 font-sans bg-white border-b border-gray-200 print:hidden">
      <div className="container flex items-center justify-between h-20 max-w-6xl px-4 mx-auto">
        
        {/* LOGO SECTION */}
        <div onClick={() => onNavigate('home')} className="flex items-center flex-shrink-0 gap-2 cursor-pointer">
           {/* লোগো ইমেজ - লোগো না থাকলে হাইড হয়ে যাবে */}
           <img 
             src="/logo.png" 
             alt="Logo" 
             className="object-contain w-auto h-14" 
             onError={(e) => {e.target.style.display='none';}} 
           />
           {/* লোগো টেক্সট (মোবাইলে বা লোগো না থাকলে দেখাবে) */}
           <div className="flex flex-col">
             <span className="text-xl md:text-2xl font-bold text-[#800000] leading-none">কিশোর কণ্ঠ</span>
             <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">পাঠক ফোরাম</span>
           </div>
        </div>

        {/* DESKTOP MENU (বড় স্ক্রিনে দেখাবে) */}
        <ul className="items-center hidden gap-8 md:flex">
          
          {/* ১. হোম বাটন */}
          <li onClick={() => onNavigate('home')} className={getLinkClass('home')}>
            Home
          </li>
          
          {/* ২. About (আপাতত ডামি) */}
          <li className="text-gray-600 hover:text-[#1a5d45] cursor-pointer font-medium text-[15px] transition">
            About
          </li>
          
          {/* ৩. রোল নাম্বার লিস্ট পেজ */}
          <li onClick={() => onNavigate('list')} className={getLinkClass('list')}>
             মেধাবৃত্তি - ২০২৫
          </li>
          
          {/* ৪. রেজাল্ট সার্চ বাটন (Special Design) */}
          <li>
            <button 
              onClick={() => onNavigate('search')}
              className={`px-5 py-2.5 rounded shadow-sm transition font-semibold text-sm ${
                currentView === 'search' 
                ? 'bg-[#1a5d45] text-white hover:bg-[#144533]' // একটিভ থাকলে
                : 'bg-[#2e8b57] text-white hover:bg-[#246e45]' // সাধারণ অবস্থায়
              }`}
            >
              ফলাফল (২০২৪)
            </button>
          </li>
          
          {/* ৫. Contact (আপাতত ডামি) */}
          <li className="text-gray-600 hover:text-[#1a5d45] cursor-pointer font-medium text-[15px] transition">
            Contact
          </li>
        </ul>

        {/* MOBILE MENU ICON (হ্যামবার্গার আইকন) */}
        <div className="p-2 text-gray-600 transition rounded cursor-pointer md:hidden hover:bg-gray-100" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon (Bars)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1a5d45]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (মোবাইলে ক্লিক করলে বের হবে) */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 flex flex-col w-full bg-white border-t border-gray-100 shadow-xl md:hidden top-20 animate-fade-in-down">
          
          <div 
            onClick={() => handleMobileNavigate('home')} 
            className={`px-6 py-3 border-b border-gray-50 font-medium ${currentView === 'home' ? 'text-[#1a5d45] bg-green-50' : 'text-gray-700'}`}
          >
            Home
          </div>

          <div className="px-6 py-3 border-b border-gray-50 font-medium text-gray-700 hover:text-[#1a5d45]">
            About
          </div>

          <div 
            onClick={() => handleMobileNavigate('list')} 
            className={`px-6 py-3 border-b border-gray-50 font-medium ${currentView === 'list' ? 'text-[#1a5d45] bg-green-50' : 'text-gray-700'}`}
          >
            মেধাবৃত্তি - ২০২৫
          </div>

          <div 
            onClick={() => handleMobileNavigate('search')} 
            className={`px-6 py-3 border-b border-gray-50 font-bold ${currentView === 'search' ? 'text-[#1a5d45] bg-green-50' : 'text-[#2e8b57]'}`}
          >
            ফলাফল (২০২৪)
          </div>

          <div className="px-6 py-3 font-medium text-gray-700 hover:text-[#1a5d45]">
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;