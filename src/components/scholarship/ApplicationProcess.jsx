import React from 'react';
import { 
  HiDocumentText, 
  HiClipboardDocumentList, 
  HiPaperAirplane, 
  HiTicket,
  HiArrowLongRight,
  HiCheckCircle
} from 'react-icons/hi2';

const APPLICATION_PROCESS = [
  { 
    step: '১', 
    label: 'ফর্ম সংগ্রহ', 
    value: 'আমাদের অফিস থেকে আবেদন ফর্ম সংগ্রহ করুন',
    icon: HiDocumentText,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    hoverBg: 'hover:from-emerald-500 hover:to-teal-500',
    shadowColor: 'shadow-emerald-200',
    hoverShadow: 'hover:shadow-emerald-300/50'
  },
  { 
    step: '২', 
    label: 'প্রয়োজনীয় কাগজপত্র', 
    value: 'সত্যায়িত মার্কশিট, জন্ম নিবন্ধন, ছবি',
    icon: HiClipboardDocumentList,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    hoverBg: 'hover:from-blue-500 hover:to-indigo-500',
    shadowColor: 'shadow-blue-200',
    hoverShadow: 'hover:shadow-blue-300/50'
  },
  { 
    step: '৩', 
    label: 'ফর্ম জমা', 
    value: 'নির্ধারিত সময়ের মধ্যে ফর্ম জমা দিন',
    icon: HiPaperAirplane,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    hoverBg: 'hover:from-violet-500 hover:to-purple-500',
    shadowColor: 'shadow-violet-200',
    hoverShadow: 'hover:shadow-violet-300/50'
  },
  { 
    step: '৪', 
    label: 'প্রবেশপত্র', 
    value: 'পরীক্ষার আগে প্রবেশপত্র সংগ্রহ করুন',
    icon: HiTicket,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    hoverBg: 'hover:from-amber-500 hover:to-orange-500',
    shadowColor: 'shadow-amber-200',
    hoverShadow: 'hover:shadow-amber-300/50'
  }
];

const ApplicationProcess = () => {
  return (
    <div className="relative p-8 mb-12 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg md:p-10 rounded-3xl hover:shadow-xl">
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-100/50 to-blue-100/50 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-br from-purple-100/50 to-pink-100/50 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-cyan-100 text-cyan-700">
          <HiClipboardDocumentList className="w-5 h-5" />
          ধাপে ধাপে গাইড
        </div>
        <h2 className="text-3xl font-extrabold text-center text-transparent md:text-4xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text">
          আবেদন প্রক্রিয়া
        </h2>
        <p className="mt-3 text-gray-500">সহজ ৪ টি ধাপে আবেদন সম্পন্ন করুন</p>
        <div className="w-24 h-1.5 mt-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      </div>
      
      {/* Process Steps */}
      <div className="relative z-10">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-stretch lg:justify-center lg:gap-4">
          {APPLICATION_PROCESS.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <React.Fragment key={index}>
                {/* Step Card Container */}
                <div className="relative flex-1 max-w-[280px] group">
                  
                  {/* Step Number Badge */}
                  <div className="absolute z-20 px-3 py-1 text-xs font-bold text-white -translate-x-1/2 rounded-full shadow-md -top-3 left-1/2 bg-gradient-to-r from-gray-700 to-gray-900">
                    ধাপ {item.step}
                  </div>
                  
                  {/* Step Card */}
                  <div className={`
                    relative flex flex-col items-center h-full p-6 pt-8 text-center 
                    transition-all duration-500 ease-out
                    bg-gradient-to-br ${item.bgGradient}
                    rounded-2xl border-2 border-white/50
                    shadow-lg ${item.shadowColor}
                    group-hover:shadow-2xl ${item.hoverShadow}
                    group-hover:-translate-y-2
                    group-hover:bg-gradient-to-br ${item.hoverBg}
                    overflow-hidden
                  `}>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 transition-transform duration-700 -translate-x-full opacity-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full group-hover:opacity-100"></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-5">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110`}></div>
                      
                      <div className={`
                        relative flex items-center justify-center 
                        w-20 h-20 rounded-2xl
                        bg-gradient-to-br ${item.gradient}
                        shadow-lg
                        transition-all duration-500
                        group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl
                      `}>
                        <IconComponent className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    
                    {/* Step Label */}
                    <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="flex-grow text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                      {item.value}
                    </p>
                    
                    {/* Bottom Decorative Line */}
                    <div className={`w-0 h-1 mt-4 rounded-full bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
                
                {/* Arrow Connector between cards */}
                {index < APPLICATION_PROCESS.length - 1 && (
                  <div className="flex items-center justify-center flex-shrink-0 w-12">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                      <div className="flex items-center justify-center w-8 h-8 ml-1 bg-white border-2 border-gray-100 rounded-full shadow-md">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Mobile/Tablet Layout */}
        <div className="grid grid-cols-1 gap-4 lg:hidden md:grid-cols-2">
          {APPLICATION_PROCESS.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div key={index} className="relative pt-4 group">
                
                {/* Step Number Badge */}
                <div className="absolute z-20 px-3 py-1 text-xs font-bold text-white -translate-x-1/2 rounded-full shadow-md -top-0 left-1/2 bg-gradient-to-r from-gray-700 to-gray-900">
                  ধাপ {item.step}
                </div>
                
                {/* Step Card */}
                <div className={`
                  relative flex flex-col items-center p-6 pt-8 text-center 
                  transition-all duration-500 ease-out
                  bg-gradient-to-br ${item.bgGradient}
                  rounded-2xl border-2 border-white/50
                  shadow-lg ${item.shadowColor}
                  group-hover:shadow-2xl ${item.hoverShadow}
                  group-hover:-translate-y-2
                  group-hover:bg-gradient-to-br ${item.hoverBg}
                  overflow-hidden
                `}>
                  
                  {/* Icon Container */}
                  <div className="relative mb-5">
                    <div className={`
                      relative flex items-center justify-center 
                      w-20 h-20 rounded-2xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                    `}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Step Label */}
                  <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
    </div>
  );
};

export default ApplicationProcess;