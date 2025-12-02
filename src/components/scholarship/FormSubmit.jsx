import React, { useState, useMemo } from 'react';
import { HiMapPin, HiPhone, HiSparkles, HiBookOpen, HiGlobeAsiaAustralia } from 'react-icons/hi2';

// Organized by উপজেলা (Upazila) - matching the image structure
const LOCATION_DATA = [
  {
    upazila: 'ফেঞ্চুগঞ্জ উপজেলা',
    color: 'blue',
    locations: [
      { name: 'মেসার্স জসীম এন্ড ব্রাদার্স', address: 'বিআইডিসি বাজার, ফেঞ্চুগঞ্জ, সিলেট' },
      { name: 'পপি লাইব্রেরী', address: 'থানা রোড, ফেঞ্চুগঞ্জ বাজার, সিলেট' },
    ],
    contacts: [
      { name: 'আশরাফুল ইসলাম তোহা', phone: '০১৬৩০-০১৭২৪৮' },
      { name: 'জাকির হোসেন সামি', phone: '০১৮৭৫-৪৫২৫১৫' },
      { name: 'সুলতান মাহমুদ', phone: '০১৭২৩-১৪৭৯৪৬' },
      { name: 'শাহাব উদ্দীন', phone: '০১৭৬২-৪৯৪৮৭১' },
    ]
  },
  {
    upazila: 'বিশ্বনাথ উপজেলা',
    color: 'cyan',
    locations: [
      { name: 'রায়হান স্টুডিও', address: 'লামাকাজী পয়েন্ট, রাগীব রাবেয়া হাই স্কুল এন্ড কলেজের সামনে' },
      { name: 'আইডিয়াল শপ এন্ড কম্পিউটার', address: 'কলাগঞ্জ বাজার, বিশ্বনাথ' },
      { name: 'বিসমিল্লাহ এন্টারপ্রাইজ', address: 'হাবড়া বাজার, বিশ্বনাথ, সিলেট' },
      { name: 'আল হাফিজ লাইব্রেরী', address: 'নতুন বাজার, বিশ্বনাথ, সিলেট' },
      { name: 'আল ইসলাম ট্রেড সেন্টার', address: 'নতুন বাজার, বিশ্বনাথ, সিলেট' },
    ],
    contacts: [
      { name: 'মতিউর রহমান ইমন', phone: '০১৭০৫-৬৩১০৫৬' },
      { name: 'রেদওয়ান আহমদ', phone: '০১৬১৪-৫৬৯৯৬৮' },
      { name: 'শাহ হোসাইন উদ্দীন', phone: '০১৭২৩-২১২৯৭৯' },
    ]
  },
  {
    upazila: 'দক্ষিণ সুরমা থানা',
    color: 'teal',
    locations: [
      { name: 'আধুনিক লাইব্রেরী', address: 'লালাবাজার, সিলেট' },
      { name: 'তানহা টেলিকম', address: 'কামাল বাজার, সিলেট' },
      { name: 'হায়দুল এন্টারপ্রাইজ', address: 'মাসুক বাজার, জালালাবাদ, সিলেট' },
    ],
    contacts: [
      { name: 'সুলতান মাহমুদ', phone: '০১৭২৩-১৪৭৯৪৬' },
      { name: 'শাহাব উদ্দীন', phone: '০১৭৬২-৪৯৪৮৭১' },
    ]
  },
  {
    upazila: 'মোগলাবাজার থানা',
    color: 'indigo',
    locations: [
      { name: 'ইত্যাদি লাইব্রেরী', address: 'মোগলাবাজার রোড, সিলেট' },
      { name: 'পি-০৭ লাইব্রেরী', address: 'রাখালগঞ্জ কে.সি. হাই স্কুল এন্ড কলেজের সামনে, রাখালগঞ্জ বাজার' },
      { name: 'মিলেনিয়াম লাইব্রেরী', address: 'জালালপুর বাজার পুলের পাশে, জালালপুর বাজার, সিলেট' },
      { name: 'মারওয়া ডিপার্টমেন্টাল স্টোর', address: 'শিশম, সিলেট' },
    ],
    contacts: [
      { name: 'আবু ছায়েদ রায়হান', phone: '০১৭২২-১৬৭৮২৫' },
      { name: 'তোফায়েল আহমদ', phone: '০১৭০৪-৩৭২৮৭৫' },
    ]
  },
  {
    upazila: 'ওসমানীনগর উপজেলা',
    color: 'emerald',
    locations: [
      { name: 'তাজ লাইব্রেরী', address: 'স্কুল রোড, তাজপুর বাজার, সিলেট' },
      { name: 'বহীর লাইব্রেরী', address: 'গোয়ালাবাজার, সিলেট' },
      { name: 'চাঁদলপাড় ইসলামিক পাঠাগার', address: 'সাদিপুর, সিলেট' },
    ],
    contacts: [
      { name: 'লতিফুর রহমান', phone: '০১৩১৭-৯৯৩১০৭' },
      { name: 'মাহফুজ আহমদ', phone: '০১৭৮০-৯১০৭৫১' },
    ]
  },
  {
    upazila: 'সদর উপজেলা',
    color: 'purple',
    locations: [
      { name: 'রাহমানিয়া লাইব্রেরী', address: 'ফতেহপুর বাজার, সিলেট' },
      { name: 'স্টুডেন্ট লাইব্রেরী', address: 'জাঙ্গাইল বাজার, জালালাবাদ, সিলেট' },
      { name: 'মা লাইব্রেরী', address: 'সালুটিকর বাজার, সিলেট' },
      { name: 'আল-আকসা লাইব্রেরী', address: 'শিরেবাজার, সিলেট' },
      { name: 'আয়ান লাইব্রেরী', address: 'শিরেবাজার, সিলেট' },
    ],
    contacts: [
      { name: 'কাউছার আহমদ লাহি', phone: '০১৮২০-৯৬৩৯১২' },
      { name: 'রাসেল আহমদ', phone: '০১৭৯৫-৫৮৯৫২৪' },
      { name: 'মুজাহিদুল ইসলাম', phone: '০১৭৬৪-২১৮৪৮৬' },
    ]
  },
  {
    upazila: 'বালাগঞ্জ উপজেলা',
    color: 'rose',
    locations: [
      { name: 'কারিয়া ডিজিটাল শপ এন্ড স্টেশনারী', address: 'মোরারবাজার, গহরপুর, বালাগঞ্জ, সিলেট' },
      { name: 'গোল্ডেন কর্নার', address: 'ডি.এন. মার্কেট, বালাগঞ্জ বাজার, সিলেট' },
      { name: 'লতিফ ফার্মেসি', address: 'বোয়ালজুর বাজার, বালাগঞ্জ, সিলেট' },
    ],
    contacts: [
      { name: 'আবেদ আলী', phone: '০১৭৫৮-৭০৬৩১৬' },
      { name: 'তাসিন আহমদ', phone: '০১৯০৮-০০৮৯১৬' },
    ]
  },
  {
    upazila: 'কোম্পানীগঞ্জ উপজেলা',
    color: 'amber',
    locations: [
      { name: 'মিতালী লাইব্রেরী', address: 'থানা সদর বাজার, কোম্পানীগঞ্জ' },
      { name: 'বর্ণমালা লাইব্রেরী', address: 'টুকেরবাজার, কোম্পানীগঞ্জ' },
    ],
    contacts: [
      { name: 'ময়নুল ইসলাম', phone: '০১৭৫৪-৬৮৮৭৪৬' },
    ]
  },
];

const COLOR_CLASSES = {
  blue: {
    headerBg: 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500',
    cardBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    dotBg: 'bg-blue-400',
  },
  cyan: {
    headerBg: 'bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500',
    cardBg: 'bg-gradient-to-br from-cyan-50 to-teal-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    dotBg: 'bg-cyan-400',
  },
  teal: {
    headerBg: 'bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500',
    cardBg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    dotBg: 'bg-teal-400',
  },
  indigo: {
    headerBg: 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500',
    cardBg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    dotBg: 'bg-indigo-400',
  },
  emerald: {
    headerBg: 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500',
    cardBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    dotBg: 'bg-emerald-400',
  },
  purple: {
    headerBg: 'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500',
    cardBg: 'bg-gradient-to-br from-purple-50 to-pink-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    dotBg: 'bg-purple-400',
  },
  rose: {
    headerBg: 'bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500',
    cardBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    dotBg: 'bg-rose-400',
  },
  amber: {
    headerBg: 'bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500',
    cardBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    dotBg: 'bg-amber-400',
  },
};

const RegistrationCTA = () => (
  <div className="relative p-8 mb-12 overflow-hidden text-center rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="registration-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#registration-pattern)" />
      </svg>
    </div>
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-white/20 text-white/90">
        <HiSparkles className="w-5 h-5" />
        সীমিত সময়
      </div>
      <h2 className="mb-4 text-3xl font-bold text-white">এখনই রেজিস্ট্রেশন করুন</h2>
      <button className="px-8 py-3 font-semibold transition-all transform bg-white rounded-lg text-emerald-700 hover:scale-105 hover:shadow-lg">
        অনলাইন রেজিস্ট্রেশন
      </button>
      <p className="mt-4 text-white/90">অথবা আপনার স্কুল প্রতিনিধির সাথে যোগাযোগ করুন</p>
    </div>
  </div>
);

// উপজেলা Card Component - matching image style with equal height
const UpazilaCard = ({ upazila, locations, contacts, color }) => {
  const colors = COLOR_CLASSES[color];
  
  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:scale-[1.02]`}>
      {/* Header - Upazila Name */}
      <div className={`${colors.headerBg} px-5 py-4 text-center flex-shrink-0 relative overflow-hidden`}>
        <div className="absolute inset-0 transition-transform duration-700 transform -translate-x-full -skew-x-12 bg-white/10 group-hover:translate-x-full"></div>
        <h3 className="relative flex items-center justify-center gap-2 text-xl font-bold text-white">
          <HiMapPin className="w-5 h-5" />
          {upazila}
        </h3>
      </div>
      
      {/* Content */}
      <div className={`${colors.cardBg} p-5 flex-1 flex flex-col`}>
        {/* Libraries/Shops */}
        <div className="flex-1 mb-4 space-y-3">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex items-start gap-3 group/item">
              <HiMapPin className={`flex-shrink-0 w-4 h-4 mt-1 ${colors.text} group-hover/item:scale-125 transition-transform duration-300`} />
              <div className="flex-1">
                <p className={`font-bold ${colors.text}`}>
                  {loc.name}
                </p>
                {loc.address && (
                  <p className="text-sm text-gray-600">{loc.address}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contacts */}
        {contacts && contacts.length > 0 && (
          <div className="pt-4 mt-auto border-t border-gray-200">
            <div className="space-y-2">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2">
                  <span className={`font-semibold ${colors.text} text-xs sm:text-sm`}>{contact.name}</span>
                  <a 
                    href={`tel:${contact.phone.replace(/-/g, '')}`}
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white transition-all rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-md active:scale-95"
                  >
                    <HiPhone className="w-3 h-3" />
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FormSubmit = () => {
  const [selectedUpazila, setSelectedUpazila] = useState('all');

  // উপজেলা ক্যাটাগরি লিস্ট
  const upazilaCategories = useMemo(() => {
    return [
      { id: 'all', name: 'সকল উপজেলা', color: 'emerald', count: LOCATION_DATA.length },
      ...LOCATION_DATA.map(data => ({
        id: data.upazila,
        name: data.upazila.replace(' উপজেলা', '').replace(' থানা', ''),
        color: data.color,
        count: data.locations.length
      }))
    ];
  }, []);

  // Filter data based on selection
  const filteredData = useMemo(() => {
    if (selectedUpazila === 'all') {
      return LOCATION_DATA;
    }
    return LOCATION_DATA.filter(item => item.upazila === selectedUpazila);
  }, [selectedUpazila]);

  // Color classes for category buttons
  const getCategoryColors = (color, isActive) => {
    const colorMap = {
      emerald: isActive 
        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200' 
        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200',
      blue: isActive 
        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-200' 
        : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200',
      cyan: isActive 
        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-200' 
        : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200',
      teal: isActive 
        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-200' 
        : 'bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200',
      indigo: isActive 
        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200' 
        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200',
      purple: isActive 
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200' 
        : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200',
      rose: isActive 
        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200' 
        : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200',
      amber: isActive 
        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200' 
        : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-cyan-100/60 via-blue-50/40 via-sky-50/30 to-teal-100/50 md:py-20">
      
      {/* Full Section Background Decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 rounded-full w-[500px] h-[500px] bg-gradient-to-br from-blue-200/50 to-cyan-200/40 blur-3xl"></div>
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-teal-200/40 to-emerald-200/30 blur-3xl"></div>
      <div className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-sky-200/35 to-blue-200/25 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 translate-y-1/4 rounded-full w-[350px] h-[350px] bg-gradient-to-br from-cyan-200/30 to-teal-200/25 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-blue-200/30 to-indigo-200/25 blur-3xl"></div>
      
      <div className="container relative px-4 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            <HiMapPin className="w-5 h-5" />
            ফর্ম সংগ্রহ কেন্দ্র
          </div>
          <h2 className="text-2xl font-extrabold text-center text-transparent md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text">
            উপজেলা ভিত্তিক রেজিস্ট্রেশন ফরম প্রাপ্তি ও জমাদানের ঠিকানা
          </h2>
          <p className="mt-2 text-lg text-gray-600">এবং স্থানীয় প্রতিনিধিদের যোগাযোগের নাম্বার সমূহ:</p>
          <div className="w-24 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
        </div>
        
        {/* রেজিস্ট্রেশন CTA */}
        <RegistrationCTA />

        {/* উপজেলা Category Filter - FAQ Style */}
        <div className="p-4 mb-10 bg-white border shadow-xl sm:p-6 backdrop-blur-md rounded-2xl sm:rounded-3xl border-blue-100/50">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-2 mb-5 sm:flex-row sm:gap-3 sm:mb-6">
            <div className="flex items-center justify-center w-10 h-10 shadow-lg sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <HiGlobeAsiaAustralia className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-transparent sm:text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">উপজেলা নির্বাচন করুন</h3>
              <p className="text-xs text-gray-500 sm:text-sm">আপনার নিকটস্থ এলাকা খুঁজুন</p>
            </div>
          </div>
          
          {/* Category Buttons - Mobile Optimized Grid */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
            {upazilaCategories.map((category) => {
              const isActive = selectedUpazila === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedUpazila(category.id)}
                  className={`
                    flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm
                    transition-all duration-300 transform active:scale-95 sm:hover:scale-105
                    ${category.id === 'all' ? 'col-span-2 sm:col-span-1' : ''}
                    ${getCategoryColors(category.color, isActive)}
                  `}
                >
                  <HiMapPin className="flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="truncate">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Results Count Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white shadow-lg rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600">
            <span className="flex items-center justify-center font-bold text-blue-600 bg-white rounded-full w-7 h-7">
              {filteredData.length}
            </span>
            টি উপজেলার তথ্য দেখানো হচ্ছে
          </div>
        </div>

        {/* উপজেলা Cards Grid - 3 per row */}
        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((data, index) => (
            <UpazilaCard 
              key={index}
              upazila={data.upazila}
              locations={data.locations}
              contacts={data.contacts}
              color={data.color}
            />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="relative z-10 p-6 mt-10 overflow-hidden text-center bg-white border-2 border-blue-200 border-dashed rounded-2xl backdrop-blur-sm">
          <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-50 via-transparent to-cyan-50"></div>
          <div className="relative flex items-center justify-center gap-2 mb-2 text-blue-700">
            <HiBookOpen className="w-5 h-5" />
            <span className="font-bold">বিশেষ দ্রষ্টব্য</span>
          </div>
          <p className="relative text-gray-700">
            এছাড়াও স্কুল প্রতিনিধিদের মাধ্যমে ফরম সংগ্রহ করতে পারবেন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormSubmit;