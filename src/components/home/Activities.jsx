import React, { useState } from 'react';

const Activities = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const items = [
    { title: "শিক্ষা কার্যক্রম", content: "মেধাবৃত্তি পরীক্ষা আয়োজন, কুইজ প্রতিযোগিতা, এবং শিক্ষা সফর।" },
    { title: "সাংস্কৃতিক কার্যক্রম", content: "হামদ-নাত, ক্বিরাত প্রতিযোগিতা, এবং সাহিত্য আসর।" },
    { title: "সামাজিক কার্যক্রম", content: "শীতবস্ত্র বিতরণ, রক্তদান কর্মসূচি, এবং বৃক্ষরোপণ অভিযান।" }
  ];

  return (
    <div className="w-full max-w-3xl px-4 mx-auto mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a5d45] mb-8 text-center">আমাদের কার্যক্রম</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm">
            <button 
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-4 text-left transition bg-white hover:bg-gray-50"
            >
              <span className="font-bold text-[#1a5d45] text-lg">{item.title}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {active === index && (
              <div className="p-4 text-gray-600 border-t border-gray-100 bg-gray-50">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;