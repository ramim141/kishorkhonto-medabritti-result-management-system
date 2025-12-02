import React, { useEffect, useState, useRef } from 'react';
import { 
  HiHeart, 
  HiLightBulb, 
  HiUserGroup, 
  HiShieldCheck,
  HiSparkles,
  HiAcademicCap
} from 'react-icons/hi2';

const CORE_VALUES = [
  {
    id: 1,
    title: 'সততা',
    description: 'প্রতিটি কাজে স্বচ্ছতা ও জবাবদিহিতা',
    icon: HiHeart,
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    hoverGradient: 'group-hover:from-rose-500 group-hover:to-pink-500',
    iconBg: 'from-rose-100 to-pink-100',
    borderHover: 'hover:border-rose-300',
    shadowHover: 'hover:shadow-rose-200/50'
  },
  {
    id: 2,
    title: 'মেধার মনন',
    description: 'মেধাবী শিক্ষার্থীদের বিকাশে প্রতিশ্রুতিবদ্ধ',
    icon: HiAcademicCap,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    hoverGradient: 'group-hover:from-emerald-500 group-hover:to-teal-500',
    iconBg: 'from-emerald-100 to-teal-100',
    borderHover: 'hover:border-emerald-300',
    shadowHover: 'hover:shadow-emerald-200/50'
  },
  {
    id: 3,
    title: 'উৎকর্ষতা',
    description: 'মান সম্মত সেবা প্রদানে প্রতিশ্রুতিবদ্ধ',
    icon: HiLightBulb,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    hoverGradient: 'group-hover:from-amber-500 group-hover:to-orange-500',
    iconBg: 'from-amber-100 to-orange-100',
    borderHover: 'hover:border-amber-300',
    shadowHover: 'hover:shadow-amber-200/50'
  },
  {
    id: 4,
    title: 'সমতা',
    description: 'সবার জন্য সমান সুযোগ নিশ্চিতকরণ',
    icon: HiUserGroup,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    hoverGradient: 'group-hover:from-blue-500 group-hover:to-indigo-500',
    iconBg: 'from-blue-100 to-indigo-100',
    borderHover: 'hover:border-blue-300',
    shadowHover: 'hover:shadow-blue-200/50'
  },
  {
    id: 5,
    title: 'বিশ্বস্ততা',
    description: 'প্রতিশ্রুতি রক্ষায় দায়বদ্ধতা',
    icon: HiShieldCheck,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    hoverGradient: 'group-hover:from-violet-500 group-hover:to-purple-500',
    iconBg: 'from-violet-100 to-purple-100',
    borderHover: 'hover:border-violet-300',
    shadowHover: 'hover:shadow-violet-200/50'
  }
];

const CoreValues = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the card animations
            CORE_VALUES.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150); // 150ms delay between each card
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-100/60 via-teal-50/40 via-cyan-50/30 to-blue-100/50"
    >
      
      {/* Full Section Background Decorations */}
      {/* Rose/Pink gradient - top left */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 rounded-full w-[500px] h-[500px] bg-gradient-to-br from-rose-200/40 to-pink-200/30 blur-3xl"></div>
      
      {/* Emerald/Teal gradient - top center */}
      <div className="absolute top-0 left-1/4 -translate-y-1/3 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-emerald-200/50 to-teal-200/40 blur-3xl"></div>
      
      {/* Amber/Orange gradient - center */}
      <div className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-amber-200/35 to-orange-200/25 blur-3xl"></div>
      
      {/* Blue/Indigo gradient - right side */}
      <div className="absolute top-1/4 right-0 translate-x-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-blue-200/40 to-indigo-200/30 blur-3xl"></div>
      
      {/* Violet/Purple gradient - bottom right */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rounded-full w-[500px] h-[500px] bg-gradient-to-br from-violet-200/40 to-purple-200/30 blur-3xl"></div>
      
      {/* Additional subtle gradients for depth */}
      <div className="absolute bottom-1/3 left-1/4 rounded-full w-[300px] h-[300px] bg-gradient-to-br from-cyan-200/25 to-teal-200/20 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 rounded-full w-[350px] h-[350px] bg-gradient-to-br from-pink-200/20 to-rose-200/15 blur-3xl"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Main Container - No background */}
        <div className="relative p-6 md:p-10 lg:p-12">
          
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700">
              <HiSparkles className="w-5 h-5" />
              আমাদের ভিত্তি
            </div>
            <h3 className="mb-4 text-3xl font-extrabold text-gray-800 md:text-4xl">
              আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">মূল্যবোধ</span>
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              যে মূলনীতিগুলো আমাদের প্রতিটি কাজে দিকনির্দেশনা দেয়
            </p>
            <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((value, index) => {
              const IconComponent = value.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={value.id}
                  className={`
                    group relative p-6 text-center 
                    transition-all duration-700 ease-out
                    bg-white rounded-2xl
                    border-2 border-gray-100 ${value.borderHover}
                    shadow-lg ${value.shadowHover}
                    hover:shadow-2xl hover:-translate-y-2
                    cursor-pointer overflow-hidden
                    ${isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95'
                    }
                  `}
                  style={{ 
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  
                  {/* Default Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-50 transition-opacity duration-500 group-hover:opacity-0`}></div>
                  
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-all duration-500 group-hover:opacity-100`}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 transition-transform duration-700 -translate-x-full opacity-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full group-hover:opacity-100"></div>
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    
                    {/* Icon Container */}
                    <div className="relative inline-flex items-center justify-center mb-5">
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110`}></div>
                      
                      {/* Icon Background */}
                      <div className={`
                        relative flex items-center justify-center
                        w-16 h-16 rounded-2xl
                        bg-gradient-to-br ${value.iconBg}
                        shadow-md
                        transition-all duration-500
                        group-hover:bg-white/20 group-hover:backdrop-blur-sm
                        group-hover:scale-110 group-hover:rotate-6
                        group-hover:shadow-xl
                      `}>
                        {/* Colored Icon (visible by default) */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                          <IconComponent className={`w-8 h-8`} style={{ 
                            color: value.gradient.includes('rose') ? '#e11d48' :
                                   value.gradient.includes('emerald') ? '#059669' :
                                   value.gradient.includes('amber') ? '#d97706' :
                                   value.gradient.includes('blue') ? '#2563eb' :
                                   '#7c3aed'
                          }} />
                        </div>
                        
                        {/* White Icon (visible on hover) */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                          <IconComponent className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-500 group-hover:text-white">
                      {value.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      {value.description}
                    </p>
                    
                    {/* Bottom Line */}
                    <div className={`w-0 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r ${value.gradient} group-hover:w-12 group-hover:bg-white transition-all duration-500`}></div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className="absolute w-12 h-12 transition-all duration-500 rounded-full opacity-0 -top-6 -right-6 bg-white/10 group-hover:opacity-100 group-hover:scale-150"></div>
                  <div className="absolute w-8 h-8 transition-all duration-500 delay-100 rounded-full opacity-0 -bottom-4 -left-4 bg-white/10 group-hover:opacity-100 group-hover:scale-150"></div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Decorative */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {CORE_VALUES.map((value, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.gradient} transition-all duration-500 ${
                  visibleCards.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;