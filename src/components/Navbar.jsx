import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/images/Logo.png';
import logo from '../assets/images/logo4.png';
// import logo from '../assets/images/Logo.png';

const Navbar = () => {
  // মোবাইল মেনু খোলা বা বন্ধ রাখার স্টেট
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // মেনু টগল করার ফাংশন
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // মোবাইলে লিংকে ক্লিক করলে পেজ চেঞ্জ হবে এবং মেনু বন্ধ হবে
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // একটিভ লিংক স্টাইল করার হেল্পার ফাংশন
  const getLinkClass = ({ isActive }) => 
    `cursor-pointer transition-all duration-200 text-[19px] font-bold hover:scale-110 ${isActive 
      ? 'text-white font-bold drop-shadow-md' // একটিভ হলে সাদা এবং বোল্ড
      : 'text-white/90 hover:text-white hover:drop-shadow-md'}`; // সাধারণ অবস্থায় সাদা

  const getMobileLinkClass = ({ isActive }) => 
    `block px-6 py-3 border-b border-gray-50 font-medium ${isActive ? 'text-[#1a5d45] bg-green-50' : 'text-gray-700'}`;

  return (
    <nav className="sticky top-0 z-50 font-sans shadow-md bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 print:hidden">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto max-w-7xl">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center flex-shrink-0 gap-2 cursor-pointer">
           <img 
             src={logo} 
             alt="Logo" 
             className="object-contain w-auto h-14" 
           />
        </Link>

        {/* DESKTOP MENU (বড় স্ক্রিনে দেখাবে) */}
        <ul className="items-center hidden gap-8 md:flex">
          
          {/* ১. হোম বাটন */}
          <li>
            <NavLink to="/home" className={getLinkClass}>
              হোম
            </NavLink>
          </li>
          
          {/* ২. আমাদের সম্পর্কে */}
          <li>
            <NavLink to="/about" className={getLinkClass}>
              আমাদের সম্পর্কে
            </NavLink>
          </li>
          
          {/* ৩. রোল নাম্বার লিস্ট পেজ */}
          <li>
            <NavLink to="/list" className={getLinkClass}>
               মেধাবৃত্তি - ২০২৫
            </NavLink>
          </li>
          
          {/* ৪. রেজাল্ট সার্চ বাটন (Special Design) */}
          <li>
            <NavLink 
              to="/search"
              className={({ isActive }) => `px-5 py-2.5 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 font-semibold text-base block ${
                isActive 
                ? 'bg-white text-emerald-700 hover:bg-gray-100' // একটিভ থাকলে
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30' // সাধারণ অবস্থায়
              }`}
            >
              ফলাফল 
            </NavLink>
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
          
          <NavLink 
            to="/home" 
            onClick={closeMobileMenu}
            className={getMobileLinkClass}
          >
            হোম
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={closeMobileMenu}
            className={getMobileLinkClass}
          >
            আমাদের সম্পর্কে
          </NavLink>

          <NavLink 
            to="/details" 
            onClick={closeMobileMenu}
            className={getMobileLinkClass}
          >
            মেধাবৃত্তির বিস্তারিত
          </NavLink>

          <NavLink 
            to="/list" 
            onClick={closeMobileMenu}
            className={getMobileLinkClass}
          >
            মেধাবৃত্তি - ২০২৫
          </NavLink>

          <NavLink 
            to="/search" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `block px-6 py-3 border-b border-gray-50 font-bold ${isActive ? 'text-[#1a5d45] bg-green-50' : 'text-[#2e8b57]'}`}
          >
            ফলাফল (২০২৪)
          </NavLink>

          <div className="px-6 py-3 font-medium text-gray-700 hover:text-[#1a5d45]">
            যোগাযোগ
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;