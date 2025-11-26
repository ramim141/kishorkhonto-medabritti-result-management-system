import React, { useState, useEffect } from 'react';
import { 
  HiAcademicCap, 
  HiMusicalNote, 
  HiUserGroup, 
  HiTrophy, 
  HiRocketLaunch, 
  HiBookOpen,
  HiChevronLeft,
  HiChevronRight,
  HiSparkles,
  HiXMark // ক্লোজ আইকন
} from 'react-icons/hi2';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // মডালের জন্য স্টেট
  const [selectedActivity, setSelectedActivity] = useState(null);

  const items = [
    
    {
      title: "মেধাবৃত্তি কার্যক্রম",
      content: "বার্ষিক মেধাবৃত্তি পরীক্ষা আয়োজন এবং কৃতী শিক্ষার্থীদের পুরস্কৃত করা।",
      details: "শিক্ষার্থীদের সুপ্ত প্রতিভা অন্বেষণে প্রতি বছর আমরা আয়োজন করি বিশাল মেধাবৃত্তি পরীক্ষা। পরীক্ষার মাধ্যমে কৃতী শিক্ষার্থীদের চিহ্নিত করে তাদেরকে বিভিন্ন পুরস্কার ও বৃত্তি প্রদান করা হয়। এই কার্যক্রমের মাধ্যমে আমরা শিক্ষার্থীদের মধ্যে পড়াশোনার প্রতি উৎসাহ বৃদ্ধি এবং মেধার বিকাশে সহায়তা করি।",
      icon: HiAcademicCap,
      gradient: "from-lime-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500",
      iconBg: "bg-blue-100",
      badge: "মেধাবৃত্তি"
    },
    { 
      title: "শিক্ষা কার্যক্রম", 
      content: "মেধাবৃত্তি পরীক্ষা আয়োজন, কুইজ প্রতিযোগিতা, এবং শিক্ষা সফর। শিক্ষার্থীদের মেধা বিকাশে আমরা নিয়মিত বিভিন্ন শিক্ষামূলক কর্মসূচী পালন করি।",
      details: "আমাদের শিক্ষা কার্যক্রমের মূল লক্ষ্য হলো শিক্ষার্থীদের পুঁথিগত বিদ্যার পাশাপাশি সৃজনশীল মেধার বিকাশ ঘটানো। আমরা প্রতি বছর বিশাল পরিসরে মেধাবৃত্তি পরীক্ষার আয়োজন করি যেখানে হাজার হাজার শিক্ষার্থী অংশগ্রহণ করে। এছাড়াও কুইজ প্রতিযোগিতা, বিতর্ক প্রতিযোগিতা এবং বিজ্ঞান মেলার মাধ্যমে আমরা তাদের সুপ্ত প্রতিভা বিকাশে সহায়তা করি। কৃতী শিক্ষার্থীদের জন্য আমরা বিশেষ শিক্ষা সফরের ব্যবস্থাও করে থাকি।",
      icon: HiAcademicCap,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500",
      iconBg: "bg-yellow-100",
      badge: "শিক্ষা"
    },
    { 
      title: "সাংস্কৃতিক কার্যক্রম", 
      content: "হামদ-নাত, ক্বিরাত প্রতিযোগিতা, এবং সাহিত্য আসর। সুস্থ সংস্কৃতির চর্চা ও বিকাশে আমরা বদ্ধপরিকর।",
      details: "সুস্থ সংস্কৃতি মানুষকে সুন্দর মনের অধিকারী করে। আমরা নিয়মিত হামদ-নাত, ক্বিরাত, এবং দেশাত্মবোধক গানের প্রতিযোগিতার আয়োজন করি। আমাদের সাহিত্য আসরে উদীয়মান লেখকরা তাদের লেখা পাঠ করার সুযোগ পায়। এছাড়াও আবৃত্তি, অভিনয় এবং দেয়ালিকা প্রকাশের মাধ্যমে আমরা সাহিত্য ও সংস্কৃতির চর্চা অব্যাহত রাখি। অপসংস্কৃতির সয়লাব থেকে যুবসমাজকে রক্ষা করাই আমাদের উদ্দেশ্য।",
      icon: HiMusicalNote,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500",
      iconBg: "bg-purple-100",
      badge: "সংস্কৃতি"
    },
    { 
      title: "সামাজিক কার্যক্রম", 
      content: "শীতবস্ত্র বিতরণ, রক্তদান কর্মসূচি, এবং বৃক্ষরোপণ অভিযান। সমাজের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো আমাদের নৈতিক দায়িত্ব।",
      details: "মানুষ মানুষের জন্য। আমরা সমাজের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে সর্বদা প্রস্তুত। প্রতি শীতে আমরা গরিব ও অসহায়দের মাঝে শীতবস্ত্র বিতরণ করি। আমাদের নিজস্ব ব্লাড ডোনার গ্রুপের মাধ্যমে মুমূর্ষু রোগীদের রক্তদান করা হয়। পরিবেশ রক্ষায় আমরা নিয়মিত বৃক্ষরোপণ অভিযান পরিচালনা করি। এছাড়াও বন্যা বা প্রাকৃতিক দুর্যোগে আমরা ত্রাণ সহায়তা নিয়ে মানুষের পাশে দাঁড়াই।",
      icon: HiUserGroup,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500",
      iconBg: "bg-emerald-100",
      badge: "সামাজিক"
    },
    { 
      title: "পুরস্কার বিতরণী", 
      content: "কৃতী শিক্ষার্থীদের সংবর্ধনা ও পুরস্কার প্রদান। মেধার স্বীকৃতি প্রদানে আমরা প্রতি বছর বর্ণাঢ্য অনুষ্ঠানের আয়োজন করি।",
      details: "মেধাবীদের মূল্যায়ন করা আমাদের অন্যতম প্রধান কাজ। যারা আমাদের বিভিন্ন প্রতিযোগিতায় ভালো ফলাফল করে, তাদের আমরা জাঁকজমকপূর্ণ অনুষ্ঠানের মাধ্যমে পুরস্কৃত করি। ক্রেস্ট, সার্টিফিকেট, বই এবং নগদ অর্থ বৃত্তির মাধ্যমে তাদের উৎসাহিত করা হয়। এই স্বীকৃতি তাদের ভবিষ্যতে আরও ভালো কিছু করার অনুপ্রেরণা যোগায়।",
      icon: HiTrophy,
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500",
      iconBg: "bg-amber-100",
      badge: "পুরস্কার"
    },
    { 
      title: "ক্যারিয়ার গাইডলাইন", 
      content: "শিক্ষার্থীদের ভবিষ্যৎ গঠনে সঠিক দিকনির্দেশনা প্রদান। উচ্চশিক্ষা ও পেশা নির্বাচনে আমরা পরামর্শ দিয়ে থাকি।",
      details: "সঠিক সময়ে সঠিক সিদ্ধান্ত নেওয়া সফলতার চাবিকাঠি। আমরা এসএসসি ও এইচএসসি পরবর্তী শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডলাইন সেমিনারের আয়োজন করি। দেশসেরা বিশ্ববিদ্যালয় ও বিভিন্ন পেশার অভিজ্ঞ মেন্টররা এখানে শিক্ষার্থীদের দিকনির্দেশনা দেন। কোন বিষয়ে পড়লে ভবিষ্যতে ভালো করা যাবে এবং নিজের দক্ষতা কীভাবে বাড়ানো যায়, সে বিষয়ে আমরা পরামর্শ দেই।",
      icon: HiRocketLaunch,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-500",
      iconBg: "bg-cyan-100",
      badge: "ক্যারিয়ার"
    },
    { 
      title: "পাঠাগার কার্যক্রম", 
      content: "বই পড়ার অভ্যাস গড়ে তোলা ও জ্ঞান চর্চায় উৎসাহিত করা। আমাদের সমৃদ্ধ পাঠাগার সকলের জন্য উন্মুক্ত।",
      details: "বই মানুষের অকৃত্রিম বন্ধু। আমরা বিশ্বাস করি একটি শিক্ষিত জাতি গঠনে পাঠাগারের বিকল্প নেই। আমাদের পাঠাগারে সাহিত্য, ইতিহাস, বিজ্ঞান, ধর্ম এবং সমসাময়িক বিশ্বের নানা ধরনের বই রয়েছে। সদস্যরা বিনামূল্যে বই বাসায় নিয়ে পড়ার সুযোগ পান। আমরা নিয়মিত পাঠচক্রের আয়োজন করি যেখানে নির্দিষ্ট বইয়ের ওপর আলোচনা হয়।",
      icon: HiBookOpen,
      gradient: "from-rose-500 to-red-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      hoverBg: "group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-red-500",
      iconBg: "bg-rose-100",
      badge: "পাঠাগার"
    }
  ];

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Modal Scroll Lock
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedActivity]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (items.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  // Auto play
  useEffect(() => {
    if (selectedActivity) return; // মডাল ওপেন থাকলে অটো প্লে বন্ধ থাকবে
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 > items.length - itemsToShow) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsToShow, items.length, selectedActivity]);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-emerald-200 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 w-64 h-64 bg-pink-200 rounded-full left-1/2 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative px-4 mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700">
            <HiSparkles className="w-5 h-5" />
            আমাদের কার্যক্রম
          </div>
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
            যা আমরা <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">করে থাকি</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            শিক্ষা, সংস্কৃতি ও সমাজ উন্নয়নে আমাদের বিভিন্ন কার্যক্রম
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl">
          {/* Slider Container */}
          <div className="pt-5 pb-10 overflow-hidden"> {/* Added padding to prevent shadow cut-off */}
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {items.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsToShow}%` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedActivity(item)} // ক্লিক ইভেন্ট যোগ করা হয়েছে
                  >
                    <div className={`
                      relative h-full p-8 overflow-hidden transition-all duration-500 bg-white shadow-lg rounded-2xl 
                      group cursor-pointer border-2 border-transparent
                      hover:border-white
                      hover:shadow-2xl hover:shadow-emerald-500/20
                      ${item.hoverBg}
                      hover:-translate-y-3
                    `}>
                      
                      {/* Gradient Overlay */}
                      <div className={`
                        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-br ${item.gradient}
                      `}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        
                        {/* Badge */}
                        <div className={`
                          inline-block px-3 py-1 mb-4 text-xs font-bold rounded-full
                          ${item.bgColor} ${item.textColor}
                          group-hover:bg-white/20 group-hover:text-white
                          transition-all duration-300
                        `}>
                          {item.badge}
                        </div>

                        {/* Icon Container */}
                        <div className="relative mb-6">
                          <div className={`
                            inline-flex items-center justify-center w-20 h-20 rounded-2xl
                            ${item.iconBg} ${item.textColor}
                            group-hover:bg-white/20 group-hover:text-white
                            group-hover:scale-110 group-hover:rotate-6
                            transition-all duration-500
                            shadow-lg
                          `}>
                            <Icon className="w-10 h-10" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`
                          mb-4 text-2xl font-bold
                          ${item.textColor}
                          group-hover:text-white
                          transition-colors duration-300
                        `}>
                          {item.title}
                        </h3>

                        {/* Content */}
                        <p className={`
                          leading-relaxed text-gray-600
                          group-hover:text-white/90
                          transition-colors duration-300
                          line-clamp-3
                        `}>
                          {item.content}
                        </p>

                        {/* Hover Arrow */}
                        <div className={`
                          flex items-center gap-2 mt-6 font-semibold
                          ${item.textColor}
                          group-hover:text-white
                          opacity-0 group-hover:opacity-100
                          transform translate-x-0 group-hover:translate-x-2
                          transition-all duration-300
                        `}>
                          <span>আরও জানুন</span>
                          <HiChevronRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-700 rounded-full bg-white/10 group-hover:scale-150"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 transition-transform duration-700 rounded-full bg-white/10 group-hover:scale-150"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`
              hidden md:block
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
              p-4 rounded-full shadow-xl
              bg-gradient-to-br from-emerald-500 to-teal-500
              text-white
              hover:from-emerald-600 hover:to-teal-600
              hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
              z-10
              border-4 border-white
            `}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= items.length - itemsToShow}
            className={`
              hidden md:block
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
              p-4 rounded-full shadow-xl
              bg-gradient-to-br from-emerald-500 to-teal-500
              text-white
              hover:from-emerald-600 hover:to-teal-600
              hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
              z-10
              border-4 border-white
            `}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: items.length - itemsToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  h-3 rounded-full transition-all duration-500
                  ${currentIndex === idx 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-12 shadow-lg shadow-emerald-500/50' 
                    : 'bg-emerald-200 hover:bg-emerald-300 w-3'
                  }
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ============ MODAL (বিস্তারিত তথ্য) ============ */}
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            {/* Modal Overlay to Close */}
            <div className="absolute inset-0" onClick={() => setSelectedActivity(null)}></div>
            
            {/* Modal Content */}
            <div className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl rounded-2xl animate-scale-up">
              
              {/* Header with Gradient */}
              <div className={`p-6 text-white bg-gradient-to-r ${selectedActivity.gradient}`}>
                <button 
                  onClick={() => setSelectedActivity(null)}
                  className="absolute p-2 text-white transition rounded-full bg-white/20 top-4 right-4 hover:bg-white/40"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 text-white bg-white/20 rounded-xl backdrop-blur-sm">
                    {React.createElement(selectedActivity.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className="px-2 py-1 text-xs font-bold text-black bg-white rounded-full bg-opacity-90">
                      {selectedActivity.badge}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold">{selectedActivity.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <h4 className="mb-3 text-lg font-semibold text-gray-800">কার্যক্রমের বিবরণ:</h4>
                <p className="leading-relaxed text-gray-600 whitespace-pre-line text-md">
                  {selectedActivity.details}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-end p-4 border-t border-gray-100 bg-gray-50">
                {/*<button 
                  onClick={() => setSelectedActivity(null)}
                  className="px-6 py-2 text-sm font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-900"
                >
                  বন্ধ করুন
                </button>
                */}
              </div>
            </div>
          </div>
        )}
        {/* ============================================== */}

      </div>
    </section>
  );
};

export default Activities;