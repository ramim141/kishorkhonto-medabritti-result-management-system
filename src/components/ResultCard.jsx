import React from 'react';

const ResultCard = ({ data, onReset, onPrint }) => {
  // Convert English numbers to Bengali numbers
  const toBengaliNumber = (num) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).split('').map(digit => bengaliDigits[digit] || digit).join('');
  };

  return (
    <div className="w-full max-w-3xl">
      {/* Card with gradient background matching SearchForm */}
      <div className="relative p-4 border-2 shadow-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 md:p-6 rounded-2xl border-emerald-200/50 backdrop-blur-sm print:shadow-none print:bg-white print:border-none print:p-4 print:rounded-none">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl -z-10 print:hidden"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 blur-3xl -z-10 print:hidden"></div>
      
      {/* Result Header with gradient and icon */}
      <div className="p-4 mb-4 text-center text-white shadow-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl print:bg-white print:text-black print:border-b-2 print:border-black print:rounded-none print:p-4 print:mb-4">
        <div className="flex items-center justify-center gap-2 mb-1 print:mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 print:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <h2 className="text-xl font-extrabold tracking-wide uppercase md:text-2xl print:text-xl">ফলাফল কার্ড</h2>
        </div>
        <p className="text-xs opacity-90 print:text-black print:text-xs">কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষা - ২০২৫</p>
      </div>

      {/* Print View - Traditional Table */}
      <div className="hidden print:block">
        <table className="w-full border-2 border-collapse border-black">
          <tbody>
            <tr className="border-b-2 border-black">
              <th className="w-1/3 p-3 font-bold text-left bg-gray-100 border-r-2 border-black">শিক্ষার্থীর নাম</th>
              <td className="p-3 text-lg font-bold">{data.name}</td>
            </tr>
            <tr className="border-b-2 border-black">
              <th className="w-1/3 p-3 font-bold text-left bg-gray-100 border-r-2 border-black">রোল নম্বর</th>
              <td className="p-3">{data.roll}</td>
            </tr>
            <tr className="border-b-2 border-black">
              <th className="w-1/3 p-3 font-bold text-left bg-gray-100 border-r-2 border-black">পিতার নাম</th>
              <td className="p-3">{data.father}</td>
            </tr>
            <tr className="border-b-2 border-black">
              <th className="w-1/3 p-3 font-bold text-left bg-gray-100 border-r-2 border-black">শ্রেণি</th>
              <td className="p-3">{data.class}</td>
            </tr>
            <tr className="border-b-2 border-black">
              <th className="w-1/3 p-3 font-bold text-left bg-gray-100 border-r-2 border-black">শিক্ষা প্রতিষ্ঠান</th>
              <td className="p-3">{data.school}</td>
            </tr>
            <tr className="border-b-2 border-black bg-green-50">
              <th className="w-1/3 p-3 text-lg font-bold text-left border-r-2 border-black">মোট নম্বর</th>
              <td className="p-3 text-xl font-bold">{toBengaliNumber(data.total_marks)}</td>
            </tr>
            <tr>
              <th className="w-1/3 p-3 text-lg font-bold text-left bg-gray-100 border-r-2 border-black">ফলাফল</th>
              <td className="p-3 text-xl font-extrabold uppercase">{data.category}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Screen View - Modern Cards */}
      <div className="space-y-3 print:hidden">
        
        {/* Student Info Cards - Modern Design */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Name Card */}
          <div className="p-4 transition-all border shadow-sm border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-3 rounded-xl bg-emerald-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block mb-1 text-xs font-medium text-gray-600">শিক্ষার্থীর নাম</span>
                <p className="text-lg font-bold text-gray-900 break-words">{data.name}</p>
              </div>
            </div>
          </div>

          {/* Roll Card */}
          <div className="p-4 transition-all border border-teal-200 shadow-sm bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-3 rounded-xl bg-teal-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block mb-1 text-xs font-medium text-gray-600">কিশোরকন্ঠ রোল</span>
                <p className="text-lg font-bold text-gray-900 break-words">{data.roll}</p>
              </div>
            </div>
          </div>

          {/* Father's Name Card */}
          <div className="p-4 transition-all border shadow-sm border-cyan-200 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-3 rounded-xl bg-cyan-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block mb-1 text-xs font-medium text-gray-600">পিতার নাম</span>
                <p className="text-lg font-bold text-gray-900 break-words">{data.father}</p>
              </div>
            </div>
          </div>

          {/* Class Card */}
          <div className="p-4 transition-all border shadow-sm border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-3 rounded-xl bg-emerald-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block mb-1 text-xs font-medium text-gray-600">শ্রেণি</span>
                <p className="text-lg font-bold text-gray-900 break-words">{data.class}</p>
              </div>
            </div>
          </div>
        </div>

        {/* School Name - Full Width */}
        <div className="p-4 transition-all border border-teal-200 shadow-sm bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-md">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 p-3 rounded-xl bg-teal-200/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="block mb-1 text-xs font-medium text-gray-600">শিক্ষা প্রতিষ্ঠান</span>
              <p className="text-lg font-bold text-gray-900 break-words">{data.school}</p>
            </div>
          </div>
        </div>

        {/* Marks & Category Display - Highlighted */}
        <div className="p-4 mb-16 border-2 shadow-lg bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl border-emerald-300">
          <div className="grid grid-cols-2 gap-3">
            {/* Total Marks */}
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-xs font-bold text-emerald-800">মোট নম্বর</span>
              </div>
              <p className="text-3xl font-extrabold text-emerald-700 md:text-4xl">{toBengaliNumber(data.total_marks)}</p>
            </div>

            {/* Category/Status */}
            <div className="text-center">
              <div className="flex flex-col items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-xs font-bold text-teal-800">ফলাফল</span>
              </div>
              <p className="text-2xl font-extrabold text-teal-700 uppercase md:text-3xl">{data.category}</p>
            </div>
          </div>
        </div>
      </div>

        {/* Action Buttons (Hidden on Print) */}
        <div className="flex flex-col justify-center gap-3 pt-2 mt-8 mb-8 sm:flex-row print:hidden">
          <button 
            onClick={onPrint}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl hover:from-gray-800 hover:to-black hover:shadow-2xl hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            প্রিন্ট করুন
          </button>
          <button 
            onClick={onReset}
            className="flex items-center justify-center gap-2 px-6 py-3 text-base font-bold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            আবার রেজাল্ট চেক করুন
          </button>
        </div>

        {/* Print Only Footer */}
        <div className="hidden pt-4 mt-6 text-sm text-center text-gray-600 border-t-2 border-gray-300 print:block">
          <p className="font-semibold">এই ফলাফলটি কম্পিউটার দ্বারা তৈরি।</p>
          <p className="mt-1 text-xs">কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর</p>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;