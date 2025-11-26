import React from 'react';
import { HiRocketLaunch, HiEye, HiHeart, HiLightBulb } from 'react-icons/hi2';

const MissionVision = () => {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Core Values */}
        <div className="p-8 mb-16 border-2 border-gray-100 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-3xl font-bold text-gray-800">
              আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">মূল্যবোধ</span>
            </h3>
            <p className="text-gray-600">যে মূলনীতিগুলো আমাদের প্রতিটি কাজে দিকনির্দেশনা দেয়</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Value 1 */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100">
                <HiHeart className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">সততা</h4>
              <p className="text-sm text-gray-600">প্রতিটি কাজে স্বচ্ছতা ও জবাবদিহিতা</p>
            </div>

            {/* Value 2 */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-teal-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100">
                <HiLightBulb className="text-teal-600 w-7 h-7" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">উৎকর্ষতা</h4>
              <p className="text-sm text-gray-600">মান সম্মত সেবা প্রদানে প্রতিশ্রুতিবদ্ধ</p>
            </div>

            {/* Value 3 */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">সমতা</h4>
              <p className="text-sm text-gray-600">সবার জন্য সমান সুযোগ নিশ্চিতকরণ</p>
            </div>

            {/* Value 4 */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100">
                <svg className="text-blue-600 w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">বিশ্বস্ততা</h4>
              <p className="text-sm text-gray-600">প্রতিশ্রুতি রক্ষায় দায়বদ্ধতা</p>
            </div>
          </div>
        </div>

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
                  <span className="text-gray-700">মেধাবী শিক্ষার্থীদের চিহ্নিত করা এবং তাদের উৎসাহিত করা</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-emerald-500">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">শিক্ষার মান উন্নয়নে ভূমিকা রাখা</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-emerald-500">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">মেধা বিকাশের সুযোগ সৃষ্টি করা</span>
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
                ২০৩০ সালের মধ্যে সিলেট অঞ্চলের সবচেয়ে বিশ্বস্ত ও কার্যকর শিক্ষা সহায়তা প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া এবং হাজার হাজার মেধাবী শিক্ষার্থীর জীবন পরিবর্তনে অবদান রাখা।
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-teal-500 rounded-full">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">সিলেটের প্রতিটি এলাকায় মেধা অন্বেষণ কার্যক্রম সম্প্রসারণ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-teal-500 rounded-full">
                    <span className="text-xs text-white">✓</span>
                  </span>
                  <span className="text-gray-700">ডিজিটাল শিক্ষা প্ল্যাটফর্ম নির্মাণ</span>
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
