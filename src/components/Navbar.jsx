import React, { useState } from 'react';
// import logo from '../assets/images/Logo.png';
import logo from '../assets/images/logo4.png';
// import logo from '../assets/images/Logo.png';

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
    `cursor-pointer transition-all duration-200 text-[19px] font-bold hover:scale-110 ${currentView === viewName 
      ? 'text-white font-bold drop-shadow-md' // একটিভ হলে সাদা এবং বোল্ড
      : 'text-white/90 hover:text-white hover:drop-shadow-md'}`; // সাধারণ অবস্থায় সাদা

  return (
    <nav className="sticky top-0 z-50 font-sans shadow-md bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 print:hidden">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto max-w-7xl">
        
        {/* LOGO SECTION */}
        <div onClick={() => onNavigate('home')} className="flex items-center flex-shrink-0 gap-2 cursor-pointer">
           <img 
             src={logo} 
             alt="Logo" 
             className="object-contain w-auto h-14" 
           />
        </div>

        {/* DESKTOP MENU (বড় স্ক্রিনে দেখাবে) */}
        <ul className="items-center hidden gap-8 md:flex">
          
          {/* ১. হোম বাটন */}
          <li onClick={() => onNavigate('home')} className={getLinkClass('home')}>
            হোম
          </li>
          
          {/* ২. আমাদের সম্পর্কে */}
          <li onClick={() => onNavigate('about')} className={getLinkClass('about')}>
            আমাদের সম্পর্কে
          </li>
          
          {/* ৩. রোল নাম্বার লিস্ট পেজ */}
          <li onClick={() => onNavigate('list')} className={getLinkClass('list')}>
             মেধাবৃত্তি - ২০২৫
          </li>
          
          {/* ৪. রেজাল্ট সার্চ বাটন (Special Design) */}
          <li>
            <button 
              onClick={() => onNavigate('search')}
              className={`px-5 py-2.5 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 font-semibold text-base ${
                currentView === 'search' 
                ? 'bg-white text-emerald-700 hover:bg-gray-100' // একটিভ থাকলে
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30' // সাধারণ অবস্থায়
              }`}
            >
              ফলাফল 
            </button>
          </li>
          
          {/* ৫. Contact (আপাতত ডামি) */}
          <li className="text-white/90 hover:text-white hover:drop-shadow-md hover:scale-110 cursor-pointer font-bold text-[19px] transition-all duration-200">
            যোগাযোগ
          </li>
        </ul>

        {/* MOBILE MENU ICON (হ্যামবার্গার আইকন) */}
        <div className="p-2 text-white transition rounded cursor-pointer md:hidden hover:bg-white/20" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon (Bars)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
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
            হোম
          </div>

          <div 
            onClick={() => handleMobileNavigate('about')} 
            className={`px-6 py-3 border-b border-gray-50 font-medium ${currentView === 'about' ? 'text-[#1a5d45] bg-green-50' : 'text-gray-700'}`}
          >
            আমাদের সম্পর্কে
          </div>

          <div 
            onClick={() => handleMobileNavigate('details')} 
            className={`px-6 py-3 border-b border-gray-50 font-medium ${currentView === 'details' ? 'text-[#1a5d45] bg-green-50' : 'text-gray-700'}`}
          >
            মেধাবৃত্তির বিস্তারিত
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
            যোগাযোগ
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;