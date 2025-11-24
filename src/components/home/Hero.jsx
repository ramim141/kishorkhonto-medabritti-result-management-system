import React from 'react';
import heroBanner from '../../assets/images/hero-banner.jpg';

const Hero = () => {
  return (
    <div className="relative w-full mb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container px-4 py-16 mx-auto md:py-24">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <span className="px-4 py-1.5 mb-6 text-sm font-bold text-emerald-800 bg-emerald-100 rounded-full animate-fade-in-up">
            কিশোরকণ্ঠ মেধাবৃত্তি - ২০২৫
          </span>

          {/* Main Title */}
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl bg-gradient-to-r from-emerald-700 to-teal-600 animate-fade-in-up" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
            কিশোরকণ্ঠ পাঠক ফোরাম
          </h1>
          
          {/* Subtitle */}
          <h2 className="mb-8 text-2xl font-semibold delay-100 text-amber-600 md:text-3xl animate-fade-in-up">
            সিলেট মহানগর
          </h2>

          {/* Description */}
          <p className="max-w-2xl mb-10 text-lg text-gray-600 delay-200 md:text-xl animate-fade-in-up">
            নৈতিকতা ও মেধার সমন্বয়ে এক নতুন প্রজন্ম গড়ার প্রত্যয়ে আমাদের পথচলা।
          </p>

          {/* Image Container with Glass Effect */}
          <div className="relative w-full p-2 mx-auto mt-8 delay-300 bg-white shadow-2xl max-w-7xl rounded-2xl animate-fade-in-up ring-1 ring-gray-200/50">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img 
                src={heroBanner} 
                alt="Award Ceremony" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Bottom Text on Image */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left text-white">
                <p className="text-lg font-medium md:text-xl">মেধাবীদের সংবর্ধনা ও পুরস্কার বিতরণী অনুষ্ঠান</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-teal-200/30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </div>
  );
};

export default Hero;