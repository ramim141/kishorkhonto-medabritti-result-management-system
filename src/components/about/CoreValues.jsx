import React from 'react';
import { HiHeart, HiLightBulb } from 'react-icons/hi2';

const CoreValues = () => {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Core Values */}
        <div className="p-8 mb-16 border-2 border-gray-100 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-3xl font-bold text-gray-800">
              আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">মূল্যবোধ</span>
            </h3>
            <p className="text-gray-600">যে মূলনীতিগুলো আমাদের প্রতিটি কাজে দিকনির্দেশনা দেয়</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            
            {/* Value 1 - সততা */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100">
                <HiHeart className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">সততা</h4>
              <p className="text-sm text-gray-600">প্রতিটি কাজে স্বচ্ছতা ও জবাবদিহিতা</p>
            </div>
            
            {/* Value 2 - মেধার মনন */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">মেধার মনন</h4>
              <p className="text-sm text-gray-600">মেধাবী শিক্ষার্থীদের বিকাশে প্রতিশ্রুতিবদ্ধ</p>
            </div>

            {/* Value 3 - উৎকর্ষতা */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-teal-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100">
                <HiLightBulb className="text-teal-600 w-7 h-7" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">উৎকর্ষতা</h4>
              <p className="text-sm text-gray-600">মান সম্মত সেবা প্রদানে প্রতিশ্রুতিবদ্ধ</p>
            </div>

            {/* Value 4 - সমতা */}
            <div className="p-6 text-center transition-all transform bg-white border-2 border-gray-100 shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200">
              <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-800">সমতা</h4>
              <p className="text-sm text-gray-600">সবার জন্য সমান সুযোগ নিশ্চিতকরণ</p>
            </div>

            {/* Value 5 - বিশ্বস্ততা */}
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
      </div>
    </section>
  );
};

export default CoreValues;