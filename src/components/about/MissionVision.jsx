import React from 'react';
import { HiRocketLaunch, HiEye } from 'react-icons/hi2';

const MissionVision = () => {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">মিশন ও ভিশন</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            শিক্ষা বিস্তার ও মেধা বিকাশের মাধ্যমে একটি সমৃদ্ধ সমাজ গড়ার স্বপ্ন
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Mission Card */}
          <div className="relative p-8 overflow-hidden transition-all transform bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 group">
            <div className="absolute top-0 right-0 w-40 h-40 transition-transform transform rounded-full bg-emerald-200/30 blur-2xl group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500">
                <HiRocketLaunch className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                আমাদের মিশন
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                সিলেট অঞ্চলের প্রতিটি মেধাবী শিক্ষার্থীকে তাদের প্রকৃত সম্ভাবনা উপলব্ধি করতে সাহায্য করা এবং শিক্ষার মাধ্যমে একটি আলোকিত সমাজ গড়ে তোলা।
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-emerald-500">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">দেশের জন্য যোগ্য নাগরিক তৈরি করা।</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-emerald-500">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">ছাত্র সমাজকে জ্ঞান, দক্ষতা ও মূল্যবোধে সমৃদ্ধ করা।</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-emerald-500">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">মেধা ও মননের বিকাশ ঘটানো, দেশপ্রেম ও চারিত্রিক মূল্যবোধ সৃষ্টি করা, এবং শৃঙ্খলা ও কর্তব্যবোধে উজ্জীবিত করা। </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative p-8 overflow-hidden transition-all transform bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 group">
            <div className="absolute top-0 right-0 w-40 h-40 transition-transform transform rounded-full bg-teal-200/30 blur-2xl group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500">
                <HiEye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="mb-4 text-3xl font-bold text-gray-800">
                আমাদের ভিশন
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                সিলেট অঞ্চলের সবচেয়ে বিশ্বস্ত ও কার্যকর শিক্ষা সহায়তা প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া এবং হাজার হাজার মেধাবী শিক্ষার্থীর জীবন পরিবর্তনে অবদান রাখা।
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-teal-500 rounded-full">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">শিক্ষা ও সংস্কৃতির উন্নয়ন ঘটানো।</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-teal-500 rounded-full">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">এ সকল উদ্দেশ্য পূরণের মাধ্যমে দেশের সামগ্রিক উন্নয়ন অবদান রাখা।</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-teal-500 rounded-full">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">জাতীয় পর্যায়ে মান সম্মত মেধাবৃত্তির মডেল তৈরি</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
