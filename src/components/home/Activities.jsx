import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const items = [
    { 
      title: "শিক্ষা কার্যক্রম", 
      content: "মেধাবৃত্তি পরীক্ষা আয়োজন, কুইজ প্রতিযোগিতা, এবং শিক্ষা সফর। শিক্ষার্থীদের মেধা বিকাশে আমরা নিয়মিত বিভিন্ন শিক্ষামূলক কর্মসূচী পালন করি।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.221 69.17 69.17 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600"
    },
    { 
      title: "সাংস্কৃতিক কার্যক্রম", 
      content: "হামদ-নাত, ক্বিরাত প্রতিযোগিতা, এবং সাহিত্য আসর। সুস্থ সংস্কৃতির চর্চা ও বিকাশে আমরা বদ্ধপরিকর।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.164zm0 0V2.25a2.25 2.25 0 00-2.25-2.25H13.5a2.25 2.25 0 00-2.25 2.25v10.5m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.164z" />
        </svg>
      ),
      color: "bg-purple-50 text-purple-600"
    },
    { 
      title: "সামাজিক কার্যক্রম", 
      content: "শীতবস্ত্র বিতরণ, রক্তদান কর্মসূচি, এবং বৃক্ষরোপণ অভিযান। সমাজের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো আমাদের নৈতিক দায়িত্ব।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      color: "bg-emerald-50 text-emerald-600"
    },
    { 
      title: "পুরস্কার বিতরণী", 
      content: "কৃতী শিক্ষার্থীদের সংবর্ধনা ও পুরস্কার প্রদান। মেধার স্বীকৃতি প্রদানে আমরা প্রতি বছর বর্ণাঢ্য অনুষ্ঠানের আয়োজন করি।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v7.125M12 3.75v-1.5" />
        </svg>
      ),
      color: "bg-amber-50 text-amber-600"
    },
    { 
      title: "ক্যারিয়ার গাইডলাইন", 
      content: "শিক্ষার্থীদের ভবিষ্যৎ গঠনে সঠিক দিকনির্দেশনা প্রদান। উচ্চশিক্ষা ও পেশা নির্বাচনে আমরা পরামর্শ দিয়ে থাকি।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      ),
      color: "bg-cyan-50 text-cyan-600"
    },
    { 
      title: "পাঠাগার কার্যক্রম", 
      content: "বই পড়ার অভ্যাস গড়ে তোলা ও জ্ঞান চর্চায় উৎসাহিত করা। আমাদের সমৃদ্ধ পাঠাগার সকলের জন্য উন্মুক্ত।",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      color: "bg-rose-50 text-rose-600"
    }
  ];

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (items.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 > items.length - itemsToShow) return 0;
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsToShow, items.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">আমাদের কার্যক্রম</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded bg-emerald-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="h-full p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:-translate-y-2 hover:shadow-xl group border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800">{item.title}</h3>
                    <p className="leading-relaxed text-gray-600">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full shadow-lg bg-white text-emerald-600 hover:bg-emerald-50 transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= items.length - itemsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full shadow-lg bg-white text-emerald-600 hover:bg-emerald-50 transition-all ${currentIndex >= items.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: items.length - itemsToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-emerald-600 w-6' : 'bg-emerald-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;