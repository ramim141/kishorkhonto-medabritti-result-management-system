import React, { useEffect, useState } from 'react';
import { 
  HiSparkles, 
  HiAcademicCap, 
  HiBookOpen, 
  HiUserGroup, 
  HiTrophy,
  HiCheckBadge,
  HiClock,
  HiDocumentText,
  HiStar,
  HiGift,
  HiArrowRight
} from 'react-icons/hi2';

const SCHOLARSHIP_INFO = {
  examDetails: [
    { label: 'পরীক্ষার ধরন', value: 'লিখিত পরীক্ষা (বহুনির্বাচনী ও সৃজনশীল)', icon: HiDocumentText },
    { label: 'বিষয়সমূহ', value: 'বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান', icon: HiBookOpen },
    { label: 'মোট নম্বর', value: '১০০ নম্বর (প্রতি বিষয় ২৫ নম্বর)', icon: HiStar },
    { label: 'পরীক্ষার সময়', value: '২ ঘণ্টা', icon: HiClock }
  ],
  eligibility: [
    { label: 'শ্রেণি', value: '৫ম থেকে ১০ম শ্রেণির শিক্ষার্থী', icon: HiAcademicCap },
    { label: 'এলাকা', value: 'সিলেট মহানগর এবং আশেপাশের এলাকা', icon: HiUserGroup },
    { label: 'নূন্যতম যোগ্যতা', value: 'পূর্ববর্তী ক্লাসে ৬০% নম্বর প্রয়োজন', icon: HiCheckBadge },
    { label: 'নিয়মিত শিক্ষার্থী', value: 'স্বীকৃত শিক্ষা প্রতিষ্ঠানে অধ্যয়নরত', icon: HiDocumentText }
  ],
  rewards: [
    { label: 'মেধাবৃত্তি', value: '১ম, ২য়, ৩য় স্থান অধিকারীদের বিশেষ পুরস্কার', icon: HiTrophy },
    { label: 'ক্রেস্ট ও সার্টিফিকেট', value: 'সকল অংশগ্রহণকারীদের জন্য সার্টিফিকেট', icon: HiCheckBadge },
    { label: 'শিক্ষা উপকরণ', value: 'বই, খাতা, কলম সহ শিক্ষা উপকরণ', icon: HiGift },
    { label: 'বিশেষ সংবর্ধনা', value: 'প্রতিভাবান শিক্ষার্থীদের সংবর্ধনা অনুষ্ঠান', icon: HiStar }
  ]
};

const CARD_CONFIGS = [
  {
    key: 'examDetails',
    icon: HiBookOpen,
    title: 'পরীক্ষার তথ্য',
    gradient: 'from-emerald-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    shadowColor: 'hover:shadow-emerald-200/50',
    dotColor: 'bg-emerald-500',
    lightBg: 'bg-emerald-50'
  },
  {
    key: 'eligibility',
    icon: HiUserGroup,
    title: 'অংশগ্রহণের যোগ্যতা',
    gradient: 'from-blue-500 via-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-200/50',
    dotColor: 'bg-blue-500',
    lightBg: 'bg-blue-50'
  },
  {
    key: 'rewards',
    icon: HiTrophy,
    title: 'পুরস্কার ও সম্মাননা',
    gradient: 'from-amber-500 via-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
    shadowColor: 'hover:shadow-amber-200/50',
    dotColor: 'bg-amber-500',
    lightBg: 'bg-amber-50'
  }
];

const ScholarshipHero = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Stagger card animations
    CARD_CONFIGS.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 md:py-20">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 blur-3xl"></div>
        <div className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold border rounded-full shadow-md bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200/50">
            <HiAcademicCap className="w-5 h-5" />
            <span>মেধাবৃত্তি পরীক্ষা ২০২৫</span>
            <HiSparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
          
          {/* Title */}
          <h1 className="mb-4 text-3xl font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
            কিশোরকণ্ঠ{' '}
            <span className="text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
              মেধাবৃত্তি
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
            শিক্ষার্থীদের মেধা ও প্রতিভা বিকাশে কিশোরকণ্ঠ পাঠক ফোরাম প্রতি বছর আয়োজন করে মেধাবৃত্তি পরীক্ষা।
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
        </div>

        {/* Content Grid - Three Columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          
          {CARD_CONFIGS.map((config, index) => {
            const Icon = config.icon;
            const items = SCHOLARSHIP_INFO[config.key];
            const isVisible = visibleCards.includes(index);
            const isActive = activeCard === index;
            
            return (
              <div
                key={config.key}
                className={`
                  group relative overflow-hidden
                  bg-white rounded-2xl sm:rounded-3xl
                  border-2 ${config.borderColor} ${config.hoverBorder}
                  shadow-lg ${config.shadowColor}
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:-translate-y-2
                  cursor-pointer
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                
                {/* Top Gradient Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${config.gradient}`}></div>
                
                {/* Card Header */}
                <div className={`relative p-5 sm:p-6 bg-gradient-to-br ${config.bgGradient}`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
                  
                  {/* Floating Decoration */}
                  <div className={`
                    absolute -top-8 -right-8 w-24 h-24 rounded-full
                    bg-gradient-to-br ${config.gradient} opacity-10
                    group-hover:opacity-20 group-hover:scale-150
                    transition-all duration-500
                  `}></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon Container */}
                    <div className="relative">
                      <div className={`
                        absolute inset-0 rounded-xl sm:rounded-2xl
                        bg-gradient-to-br ${config.gradient} blur-lg opacity-0
                        group-hover:opacity-50 transition-opacity duration-500
                      `}></div>
                      <div className={`
                        relative flex items-center justify-center
                        w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl
                        ${config.iconBg} ${config.iconColor}
                        shadow-md
                        transition-all duration-500
                        group-hover:scale-110 group-hover:rotate-6
                        group-hover:shadow-xl
                      `}>
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                        {config.title}
                      </h3>
                      <p className={`text-sm font-medium ${config.iconColor} mt-1`}>
                        {items.length === 4 ? '৪' : items.length === 3 ? '৩' : items.length === 2 ? '২' : items.length === 1 ? '১' : items.length === 5 ? '৫' : items.length} টি তথ্য
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card Body - Items List */}
                <div className="p-5 space-y-3 sm:p-6">
                  {items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={itemIndex}
                        className={`
                          group/item relative flex gap-3 p-3 sm:p-4
                          rounded-xl sm:rounded-2xl
                          bg-gray-50/80 border border-gray-100
                          transition-all duration-300
                          hover:bg-gradient-to-r ${config.key === 'examDetails' ? 'hover:from-emerald-100 hover:to-teal-100' : config.key === 'eligibility' ? 'hover:from-blue-100 hover:to-indigo-100' : 'hover:from-amber-100 hover:to-orange-100'}
                          hover:border-transparent hover:shadow-md hover:scale-[1.02]
                        `}
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        {/* Item Icon */}
                        <div className={`
                          flex-shrink-0 flex items-center justify-center
                          w-12 h-12 rounded-xl
                          ${config.lightBg} ${config.iconColor}
                          transition-all duration-300
                          group-hover/item:scale-110 group-hover/item:shadow-md
                        `}>
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        
                        {/* Item Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-800 sm:text-base group-hover/item:text-gray-900">
                            {item.label}
                          </h4>
                          <p className="mt-1 text-xs text-gray-600 sm:text-sm group-hover/item:text-gray-700">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Card Footer */}
                
                
                {/* Shine Effect */}
                <div className="absolute inset-0 transition-transform duration-700 -translate-x-full opacity-0 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
      <div className="grid max-w-4xl grid-cols-2 gap-3 mx-auto mt-10 md:grid-cols-4 md:gap-4">
        {[
          { number: '৫০০+', label: 'বৃত্তিপ্রাপ্ত শিক্ষার্থী', icon: HiTrophy, color: 'amber' },
          { number: '১০,০০০+', label: 'অংশগ্রহণকারী', icon: HiUserGroup, color: 'emerald' },
          { number: '৪০+', label: 'বছরের অভিজ্ঞতা', icon: HiAcademicCap, color: 'blue' },
          { number: '১০০%', label: 'স্বচ্ছ প্রক্রিয়া', icon: HiCheckBadge, color: 'violet' }
        ].map((stat, index) => {
          const StatIcon = stat.icon;
          const colorClasses = {
            amber: { gradient: 'from-amber-500 to-orange-500', bgGradient: 'from-amber-50 to-orange-50', bg: 'bg-amber-100', text: 'text-amber-600' },
            emerald: { gradient: 'from-emerald-500 to-teal-500', bgGradient: 'from-emerald-50 to-teal-50', bg: 'bg-emerald-100', text: 'text-emerald-600' },
            blue: { gradient: 'from-blue-500 to-indigo-500', bgGradient: 'from-blue-50 to-indigo-50', bg: 'bg-blue-100', text: 'text-blue-600' },
            violet: { gradient: 'from-violet-500 to-purple-500', bgGradient: 'from-violet-50 to-purple-50', bg: 'bg-violet-100', text: 'text-violet-600' }
          };
          const colors = colorClasses[stat.color];
          
          return (
            <div
              key={index}
              className={`
                relative p-3 sm:p-4 overflow-hidden text-center 
                transition-all duration-500 
                bg-gradient-to-br ${colors.bgGradient} 
                border border-white/50 shadow-md 
                group rounded-xl 
                hover:shadow-lg hover:-translate-y-1
              `}
            >
              {/* Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon - FIXED SIZE */}
                <div className={`
                  inline-flex items-center justify-center
                  w-10 h-10 sm:w-12 sm:h-12 mb-2 rounded-xl
                  ${colors.bg} ${colors.text}
                  transition-all duration-500
                  group-hover:bg-white/20 group-hover:text-white
                  group-hover:scale-110
                `}>
                  <StatIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                {/* Number */}
                <div className={`
                  text-lg sm:text-xl md:text-2xl font-extrabold mb-0.5
                  text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}
                  transition-all duration-500
                  group-hover:text-white group-hover:bg-none
                `}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <p className="text-[10px] sm:text-xs font-medium text-gray-600 transition-colors duration-500 group-hover:text-white/90 leading-tight">
                  {stat.label}
                </p>
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute w-10 h-10 transition-all duration-500 rounded-full opacity-0 -top-5 -right-5 bg-white/20 group-hover:opacity-100 group-hover:scale-150"></div>
            </div>
          );
        })}
      </div>

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ScholarshipHero;