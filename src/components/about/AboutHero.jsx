import React from 'react';
import { HiSparkles } from 'react-icons/hi2';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 mx-auto overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 -top-20 -left-20 bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute rounded-full w-96 h-96 -bottom-20 -right-20 bg-teal-200/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700 animate-fade-in">
            <HiSparkles className="w-5 h-5" />
            আমাদের পরিচয়
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-800 md:text-6xl lg:text-7xl animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              কিশোরকণ্ঠ মেধাবৃত্তি
            </span>
            <br />
            সম্পর্কে জানুন
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 md:text-xl animate-fade-in">
            সিলেট অঞ্চলের মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণের সাথী। ১৯৯৩ সাল থেকে শিক্ষা বিস্তারে নিরলস কাজ করে যাচ্ছে কিশোরকণ্ঠ সাহিত্য-সাংস্কৃতিক সংগঠন।
          </p>

          {/* Stats Row */}
          <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto mt-12 md:grid-cols-4">
            <div className="p-6 transition-all transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
        ৮০০+
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-600">
                পুরষ্কারপ্রাপ্ত শিক্ষার্থী
              </div>
            </div>

            <div className="p-6 transition-all transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                ৩৬০০০+
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-600">
                অঙ্গগ্রহণকারী মেধাবী শিক্ষার্থী
              </div>
            </div>

            <div className="p-6 transition-all transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                ৭০+
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-600">
                বার্ষিক আয়োজন
              </div>
            </div>

            <div className="p-6 transition-all transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                ১০০%
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-600">
                স্বচ্ছতা ও জবাবদিহিতা
              </div>
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
