import React from 'react';
import { Link } from 'react-router-dom';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';
import Hero from './home/Hero';
import About from './home/About';
import Activities from './home/Activities';
import Committee from './home/Committee';
import CallToAction from './home/CallToAction';
import ContactInfo from './home/ContactInfo';
import FAQ from './home/FAQ';

const Home = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Hero />
      
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
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 shadow-2xl w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl animate-pulse">
                    <HiSparkles className="w-8 h-8 text-yellow-300 md:w-10 md:h-10" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase border rounded-full bg-white/20 backdrop-blur-sm border-white/30">
                      <span>নতুন ঘোষণা</span>
                    </div>
                    <h3 className="text-xl font-bold text-white md:text-2xl drop-shadow-lg">
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