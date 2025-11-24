import React, { useState, useEffect } from 'react';

const Home = () => {
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [openClass, setOpenClass] = useState(null); // কোন ক্লাস ওপেন আছে তা দেখার জন্য

  useEffect(() => {
    fetch('/results.json')
      .then((res) => res.json())
      .then((data) => {
        // Data processing: Group by Class -> Category
        const groups = {};
        
        data.forEach((student) => {
          // বাংলা বা ইংলিশ ক্লাসের নাম ঠিক করা
          const className = `Class ${student.class}`; // e.g., "Class 5"
          
          if (!groups[className]) {
            groups[className] = { count: 0, categories: {} };
          }
          
          // ক্যাটাগরি নাম সুন্দর করা (Talentfull -> Talentpool)
          let categoryName = student.category;
          if(categoryName.toLowerCase().includes('talent')) categoryName = 'Talentpool';
          else if(categoryName.toLowerCase().includes('genral') || categoryName.toLowerCase().includes('general')) categoryName = 'General';
          else if(categoryName.toLowerCase().includes('normal')) categoryName = 'General';

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

  if (loading) return <div className="text-center mt-10">লোডিং...</div>;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a5d45]">
          মেধাবৃত্তি পরীক্ষার ফলাফল - ২০২৪
        </h1>
      </div>

      <div className="space-y-4">
        {Object.keys(groupedData).sort().map((className) => (
          <div key={className} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(className)}
              className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition text-left"
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-[#1a5d45]">{className}</h2>
                <span className="text-gray-500 text-sm">(মোট: {groupedData[className].count} জন)</span>
              </div>
              <span className={`transform transition-transform duration-300 text-[#1a5d45] ${openClass === className ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>

            {/* Accordion Body */}
            {openClass === className && (
              <div className="p-5 border-t border-gray-100 bg-white">
                {Object.keys(groupedData[className].categories).map((cat) => (
                  <div key={cat} className="mb-6 last:mb-0">
                    <h3 className="text-orange-500 font-bold mb-3 flex items-center gap-2">
                      {cat} 
                      <span className="text-gray-400 text-sm font-normal">
                        ({groupedData[className].categories[cat].length} জন)
                      </span>
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {groupedData[className].categories[cat].sort().map((roll) => (
                        <span 
                          key={roll} 
                          className="bg-[#f0fdf4] text-[#166534] px-4 py-2 rounded-md font-medium text-sm shadow-sm border border-[#dcfce7]"
                        >
                          {roll}
                        </span>
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

export default Home;