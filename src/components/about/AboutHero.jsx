import React from 'react';
import { 
  HiSparkles, 
  HiTrophy, 
  HiUserGroup, 
  HiCalendarDays, 
  HiShieldCheck 
} from 'react-icons/hi2';

const AboutHero = () => {
  const stats = [
    {
      icon: HiTrophy,
      number: '৮০০+',
      label: 'পুরষ্কারপ্রাপ্ত শিক্ষার্থী',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      hoverShadow: 'hover:shadow-emerald-500/50',
      hoverIconColor: 'group-hover:text-white',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: HiUserGroup,
      number: '৩৬০০০+',
      label: 'অংশগ্রহণকারী মেধাবী শিক্ষার্থী',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      hoverShadow: 'hover:shadow-teal-500/50',
      hoverIconColor: 'group-hover:text-white',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: HiCalendarDays,
      number: '৭০+',
      label: 'বার্ষিক আয়োজন',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      hoverShadow: 'hover:shadow-cyan-500/50',
      hoverIconColor: 'group-hover:text-white',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: HiShieldCheck,
      number: '১০০%',
      label: 'স্বচ্ছতা ও জবাবদিহিতা',
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-500 to-purple-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverShadow: 'hover:shadow-blue-500/50',
      hoverIconColor: 'group-hover:text-white',
      hoverTextColor: 'group-hover:text-white'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 mx-auto overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 -top-20 -left-20 bg-emerald-200/40 blur-3xl animate-pulse"></div>
        <div className="absolute rounded-full w-96 h-96 -bottom-20 -right-20 bg-teal-200/40 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="absolute w-2 h-2 rounded-full bg-emerald-400 top-20 left-20 animate-bounce"></div>
        <div className="absolute w-3 h-3 bg-teal-400 rounded-full top-40 right-32 animate-bounce animation-delay-1000"></div>
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 bottom-32 left-40 animate-bounce animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-bold rounded-full bg-white/80 backdrop-blur-sm text-emerald-700 shadow-lg border border-emerald-200/50 animate-fade-in hover:scale-105 transition-transform duration-300">
            <HiSparkles className="w-5 h-5 animate-pulse" />
            আমাদের পরিচয়
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-800 md:text-6xl lg:text-7xl animate-fade-in drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-200% animate-gradient">
              কিশোরকণ্ঠ পাঠক ফোরাম
            </span>
            <br />
            সম্পর্কে জানুন
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-700 md:text-xl animate-fade-in">
            সিলেট অঞ্চলের মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণের সাথী। ১৯৮৪ সাল থেকে শিক্ষা বিস্তারে নিরলস কাজ করে যাচ্ছে কিশোরকণ্ঠ সাহিত্য-সাংস্কৃতিক সংগঠন।
          </p>

          {/* Stats Row */}
          <div className="grid max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`
                    group relative p-4 md:p-6 overflow-hidden
                    bg-white backdrop-blur-sm
                    border-2 border-gray-100
                    shadow-lg rounded-2xl 
                    transition-all duration-500 transform 
                    hover:shadow-2xl ${stat.hoverShadow}
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-transparent
                    cursor-pointer
                  `}
                >
                  {/* Gradient Background on Hover - Now Full Opacity */}
                  <div className={`
                    absolute inset-0 
                    bg-gradient-to-br ${stat.bgGradient}
                    opacity-0 group-hover:opacity-100
                    transition-all duration-500
                  `}></div>

                  {/* Animated Border Glow */}
                  <div className={`
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-r ${stat.gradient}
                    opacity-0 group-hover:opacity-30
                    blur-xl
                    transition-opacity duration-500
                  `}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center
                      w-10 h-10 md:w-14 md:h-14 mb-3 md:mb-4 rounded-xl
                      ${stat.iconBg} ${stat.iconColor}
                      ${stat.hoverIconColor}
                      group-hover:bg-white/20
                      group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-500
                      shadow-md group-hover:shadow-lg
                    `}>
                      <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>

                    {/* Animated Ring Around Icon */}
                    <div className={`
                      absolute top-0 left-1/2 -translate-x-1/2
                      w-10 h-10 md:w-14 md:h-14 rounded-xl
                      bg-white/30
                      opacity-0 group-hover:opacity-50
                      scale-100 group-hover:scale-150
                      transition-all duration-500
                      blur-md
                    `}></div>

                    {/* Number */}
                    <div className={`
                      text-2xl md:text-4xl font-bold mb-1 md:mb-2
                      text-transparent bg-clip-text 
                      bg-gradient-to-r ${stat.gradient}
                      group-hover:text-white
                      group-hover:bg-none
                      group-hover:scale-110
                      transition-all duration-300
                    `}>
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className={`
                      text-xs md:text-sm font-semibold text-gray-600 
                      ${stat.hoverTextColor}
                      transition-colors duration-300
                    `}>
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-500 rounded-bl-full opacity-0 bg-gradient-to-br from-white/30 to-transparent group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 transition-opacity duration-500 rounded-tr-full opacity-0 bg-gradient-to-tr from-white/30 to-transparent group-hover:opacity-100"></div>

                  {/* Floating Sparkle Effect */}
                  <div className="absolute transition-opacity duration-500 opacity-0 top-2 right-2 group-hover:opacity-100">
                    <HiSparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            <div className="px-4 py-2 text-sm font-semibold transition-all duration-300 border rounded-full shadow-md text-emerald-700 bg-white/80 backdrop-blur-sm border-emerald-200/50 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent">
              ✨ প্রতিষ্ঠিত ১৯৮৪
            </div>
            <div className="px-4 py-2 text-sm font-semibold text-teal-700 transition-all duration-300 border rounded-full shadow-md bg-white/80 backdrop-blur-sm border-teal-200/50 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:border-transparent">
              🎓 শিক্ষায় উৎকর্ষ
            </div>
            <div className="px-4 py-2 text-sm font-semibold transition-all duration-300 border rounded-full shadow-md text-cyan-700 bg-white/80 backdrop-blur-sm border-cyan-200/50 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent">
              🏆 স্বীকৃত সংগঠন
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;