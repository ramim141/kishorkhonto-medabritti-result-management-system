import React, { useState, useEffect } from 'react';

const Committee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const members = [
    { name: "নাবিল মাহমুদ নিলয়", role: "পরিচালক", img: "https://i.pravatar.cc/150?img=11" },
    { name: "আহসান হাবীব", role: "সহকারী পরিচালক", img: "https://i.pravatar.cc/150?img=13" },
    { name: "মুফাসসির আহমদ চৌধুরী", role: "সহকারী পরিচালক", img: "https://i.pravatar.cc/150?img=60" },
    { name: "আব্দুল্লাহ আল মামুন", role: "সদস্য", img: "https://i.pravatar.cc/150?img=33" },
    { name: "রাকিবুল ইসলাম", role: "সদস্য", img: "https://i.pravatar.cc/150?img=59" },
    { name: "তানভীর আহমেদ", role: "সদস্য", img: "https://i.pravatar.cc/150?img=12" },
    { name: "মাহমুদুল হাসান", role: "সদস্য", img: "https://i.pravatar.cc/150?img=68" }
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
    setCurrentIndex((prev) => (prev + 1) % (members.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 > members.length - itemsToShow) return 0;
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsToShow, members.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">পরিচালনা পর্ষদ</h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded bg-emerald-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative flex flex-col items-center p-8 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full">
                      <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-spin-slow opacity-70"></div>
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="relative object-cover w-full h-full p-1 rounded-full bg-white" 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">{member.name}</h3>
                      <p className="mt-2 font-medium text-emerald-500 bg-emerald-50 px-4 py-1 rounded-full text-sm">{member.role}</p>
                    </div>
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
            disabled={currentIndex >= members.length - itemsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full shadow-lg bg-white text-emerald-600 hover:bg-emerald-50 transition-all ${currentIndex >= members.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: members.length - itemsToShow + 1 }).map((_, idx) => (
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

export default Committee;