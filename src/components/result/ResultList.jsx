import React, { useState, useEffect } from 'react';
import bannerImage from '../../assets/images/result-list-banner2.jpg';

const ResultList = () => {
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [openClass, setOpenClass] = useState(null);

  useEffect(() => {
    fetch('/results.json')
      .then((res) => res.json())
      .then((data) => {
        const groups = {};
        
        data.forEach((student) => {
          const className = `শ্রেণি ${student.class}`;
          
          if (!groups[className]) {
            groups[className] = { count: 0, categories: {} };
          }
          
          let categoryName = student.category;
          if(categoryName.toLowerCase().includes('talent')) categoryName = 'ট্যালেন্টপুল';
          else if(categoryName.toLowerCase().includes('genral') || categoryName.toLowerCase().includes('general')) categoryName = 'সাধারণ';
          else if(categoryName.toLowerCase().includes('normal')) categoryName = 'সাধারণ';

          if (!groups[className].categories[categoryName]) {
            groups[className].categories[categoryName] = [];
          }

          groups[className].categories[categoryName].push(student.roll);
          groups[className].count += 1;
        });

        setGroupedData(groups);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load list", err));
  }, []);

  const toggleAccordion = (className) => {
    setOpenClass(openClass === className ? null : className);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-emerald-600 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-xl font-semibold text-emerald-700">লোডিং হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl md:py-12">
      {/* Header Section with gradient and icon */}
      <div 
        className="relative p-8 mb-10 overflow-hidden text-center border-2 shadow-xl md:p-12 rounded-2xl border-emerald-200/50 group"
      >
        {/* Background Image as absolutely positioned <img> (no negative z-index) */}
        <img 
          src={bannerImage} 
          alt="Result List Banner" 
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/55 "></div>
        
          {/* Content wrapper to ensure text sits above overlay */}
          <div className="relative z-10">
        
        
        <h1 className="mb-4 text-3xl font-extrabold text-green-700 md:text-4xl lg:text-5xl">
          কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষার ফলাফল - ২০২৫
        </h1>
        <p className="text-lg font-medium text-teal-700 md:text-xl">শ্রেণি ভিত্তিক উত্তীর্ণ শিক্ষার্থীদের তালিকা</p>
        
        {/* Total count badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 mt-6 font-bold text-white shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-lg">মোট শিক্ষার্থী: {Object.values(groupedData).reduce((sum, cls) => sum + cls.count, 0)} জন</span>
        </div>
          </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-5">
        {Object.keys(groupedData).sort().map((className) => (
          <div key={className} className="overflow-hidden transition-all duration-300 border-2 shadow-lg bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border-emerald-200/50 hover:shadow-xl">
            
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(className)}
              className="w-full p-5 text-left transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-md md:p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white md:text-2xl">{className}</h2>
                    <span className="inline-flex items-center gap-1 px-3 py-1 mt-1 text-xs font-semibold bg-white rounded-full text-emerald-700 md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      মোট: {groupedData[className].count} জন
                    </span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${openClass === className ? 'rotate-180' : 'rotate-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-white w-7 h-7 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Accordion Body with animation */}
            {openClass === className && (
              <div className="p-5 bg-white/80 backdrop-blur-sm md:p-7 animate-fade-in-down">
                {Object.keys(groupedData[className].categories).map((cat, idx) => (
                  <div key={cat} className={`${idx > 0 ? 'mt-7 pt-7 border-t-2 border-emerald-100' : ''}`}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg shadow-md bg-gradient-to-r from-amber-500 to-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-extrabold text-amber-600 md:text-2xl">
                        {cat} 
                      </h3>
                      <span className="px-3 py-1 text-sm font-bold text-white rounded-full shadow-md bg-gradient-to-r from-amber-500 to-orange-500">
                        {groupedData[className].categories[cat].length} জন
                      </span>
                    </div>
                    
                    {/* Roll Numbers Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {groupedData[className].categories[cat].sort().map((roll) => (
                        <div 
                          key={roll} 
                          className="relative px-4 py-3 overflow-hidden font-bold text-center transition-all duration-300 border-2 shadow-md group bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 rounded-xl border-emerald-200 hover:shadow-xl hover:scale-105 hover:from-emerald-100 hover:to-teal-100"
                        >
                          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 group-hover:opacity-100"></div>
                          <span className="relative z-10 text-base md:text-lg">{roll}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultList;
