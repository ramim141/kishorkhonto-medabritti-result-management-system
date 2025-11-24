import React from 'react';
import heroBanner from '../../assets/images/hero-banner.jpg';

const Hero = () => {
  return (
    <div className="mb-12 text-center">
      {/* Title Section */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#1a5d45] mb-2 font-serif">
        কিশোরকণ্ঠ পাঠক ফোরাম
      </h1>
      <h2 className="text-xl md:text-2xl text-[#d97706] font-medium mb-8">
        সিলেট মহানগর
      </h2>

      {/* Banner Image Area */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden shadow-lg rounded-xl group">
        {/* Placeholder Image - Replace '/banner.jpg' with your actual image */}
        <img 
        // assets/images/hero-banner.jpg
          src={heroBanner} 
          alt="Award Ceremony" 
          className="object-cover w-full h-64 transition duration-500 transform md:h-96 group-hover:scale-105"
        />
        {/* Overlay Badge */}
        <div className="absolute bottom-5 left-5 bg-[#1a5d45] bg-opacity-90 text-white px-6 py-2 rounded-full shadow-md">
          <p className="text-lg font-bold">কিশোরকণ্ঠ মেধাবৃত্তি - ২০২৪</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;