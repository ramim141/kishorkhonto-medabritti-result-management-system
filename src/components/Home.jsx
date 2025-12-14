import React from 'react';
import { Link } from 'react-router-dom';
import { HiSparkles, HiArrowRight, HiBell } from 'react-icons/hi2';
import Hero from './home/Hero';
import About from './home/About';
import Activities from './home/Activities';
import Committee from './home/Committee';
import CallToAction from './home/CallToAction';
import ContactInfo from './home/ContactInfo';
import FAQ from './home/FAQ';

const Home = () => {
  // Latest notices for marquee
  const latestNotices = [
    {
      id: 1,
      title: "কিশোরকন্ঠ মেধাবৃত্তি - ২০২৫ এর ফলাফল প্রকাশিত হয়েছে",
      type: "result"
    },
    {
      id: 2,
      title: "মেধাবৃত্তি পুরস্কার বিতরণী অনুষ্ঠান আগামী ২০২৫ সালের জানুয়ারী মাসের প্রথমার্ধে অনুষ্ঠিত হবে",
      type: "event"
    }
  ];

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Hero />
      
      {/* Scrolling Notices Marquee */}
      <div className="py-2 border-b border-yellow-200 shadow-sm sm:py-3 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="flex items-center gap-2 px-3 mx-auto sm:gap-4 sm:px-4 max-w-7xl">
          <div className="flex items-center gap-1.5 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2 font-bold border-2 border-yellow-500 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 whitespace-nowrap flex-shrink-0 shadow-lg">
            <HiBell className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            <span className="text-xs sm:text-sm md:text-base">সর্বশেষ</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="inline-block animate-marquee whitespace-nowrap">
              {latestNotices.map((notice, index) => (
                <Link 
                  key={notice.id} 
                  to="/notice"
                  className="inline-flex items-center gap-2 px-3 py-1 mx-2 transition-colors duration-200 sm:px-6 sm:mx-4 hover:text-emerald-600"
                >
                  <span className="text-xs font-semibold text-gray-800 sm:text-sm md:text-base">
                    {notice.title}
                  </span>
                  {index < latestNotices.length - 1 && (
                    <span className="text-lg text-yellow-500 sm:text-2xl">★</span>
                  )}
                </Link>
              ))}
              {/* Duplicate for seamless loop */}
              {latestNotices.map((notice, index) => (
                <Link 
                  key={`dup-${notice.id}`} 
                  to="/notice"
                  className="inline-flex items-center gap-2 px-3 py-1 mx-2 transition-colors duration-200 sm:px-6 sm:mx-4 hover:text-emerald-600"
                >
                  <span className="text-xs font-semibold text-gray-800 sm:text-sm md:text-base">
                    {notice.title}
                  </span>
                  {index < latestNotices.length - 1 && (
                    <span className="text-lg text-yellow-500 sm:text-2xl">★</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Box for Results */}
      <div className="px-4 py-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/search" 
            className="block overflow-hidden transition-all duration-300 border-2 shadow-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl border-emerald-500 hover:shadow-2xl hover:scale-105 group"
          >
            <div className="relative p-6 md:p-8">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col items-center w-full gap-4 md:flex-row md:w-auto">
                  <div className="flex items-center justify-center flex-shrink-0 shadow-2xl w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl animate-pulse">
                    <HiSparkles className="w-8 h-8 text-yellow-300 md:w-10 md:h-10" />
                  </div>
                  <div className="w-full text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase border rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                      <span>নতুন ঘোষণা</span>
                    </div>
                    <h3 className="text-lg font-bold text-white md:text-2xl drop-shadow-lg sm:text-xl">
                      কিশোরকন্ঠ মেধাবৃত্তি - ২০২৫ এর ফলাফল দেখুন
                    </h3>
                    <p className="mt-1 text-sm font-medium md:text-base text-white/90">আপনার রোল নম্বর দিয়ে সার্চ করুন এবং ফলাফল জানুন</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 bg-white shadow-lg text-emerald-700 rounded-xl group-hover:bg-yellow-300 group-hover:text-emerald-800">
                  <span>দেখুন</span>
                  <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      <About />
      <Activities />
      <CallToAction />
      <Committee />
      <FAQ />
      {/* <ContactInfo /> */}
    </div>
  );
};

export default Home;