import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Committee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const members = [
    { 
      name: "নাবিল মাহমুদ নিলয়", 
      role: "পরিচালক", 
      img: "https://i.pravatar.cc/150?img=11",
      coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop" // ডামি কভার ইমেজ
    },
    { 
      name: "আহসান হাবীব", 
      role: "সহকারী পরিচালক", 
      img: "https://i.pravatar.cc/150?img=13",
      coverImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "মুফাসসির আহমদ চৌধুরী", 
      role: "সহকারী পরিচালক", 
      img: "https://i.pravatar.cc/150?img=60",
      coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "আব্দুল্লাহ আল মামুন", 
      role: "সদস্য", 
      img: "https://i.pravatar.cc/150?img=33",
      coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "রাকিবুল ইসলাম", 
      role: "সদস্য", 
      img: "https://i.pravatar.cc/150?img=59",
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "তানভীর আহমেদ", 
      role: "সদস্য", 
      img: "https://i.pravatar.cc/150?img=12",
      coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
    },
    { 
      name: "মাহমুদুল হাসান", 
      role: "সদস্য", 
      img: "https://i.pravatar.cc/150?img=68",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop"
    }
  ];

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
    <section className="relative py-20 overflow-hidden bg-white">
      
      <div className="absolute top-0 right-0 w-1/3 h-full skew-x-12 bg-gradient-to-l from-emerald-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl"></div>

      <div className="container relative px-4 mx-auto">
        
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full text-emerald-700 bg-emerald-100">
            <HiSparkles className="w-5 h-5" />
            আমাদের টিম
          </div>
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
            পরিচালনা <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">পর্ষদ</span>
          </h2>
          <p className="mt-4 text-gray-500">যাদের নিরলস পরিশ্রমে এগিয়ে চলছে আমাদের কার্যক্রম</p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          
          <div className="px-2 py-10 overflow-hidden">
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="group relative h-full bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group-hover:bg-emerald-50/30 group-hover:border-emerald-200">
                    
                    {/* TOP BACKGROUND AREA */}
                    <div className="relative h-32 overflow-hidden">
                      
                      {/* 1. Default Green Gradient (Visible Initially) */}
                      <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-br from-emerald-500 to-teal-600 group-hover:opacity-0">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                      </div>

                      {/* 2. Hover Image Background (Hidden Initially, Fades In on Hover) */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-700 transform bg-center bg-cover opacity-0 group-hover:opacity-100 group-hover:scale-110"
                        style={{ backgroundImage: `url(${member.coverImage})` }}
                      >
                        {/* Dark Overlay for text readability if needed */}
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>

                      {/* Bottom Fade for smooth transition to white body */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 transition-colors duration-500 bg-gradient-to-t from-white to-transparent group-hover:from-emerald-50/90"></div>
                    </div>

                    <div className="relative px-6 pb-8 -mt-16 text-center">
                      
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-emerald-400 to-teal-500 blur-md group-hover:opacity-50"></div>
                        <div className="relative w-32 h-32 p-1 transition-transform duration-500 bg-white rounded-full shadow-lg group-hover:scale-105">
                          <img 
                            src={member.img} 
                            alt={member.name} 
                            className="object-cover w-full h-full border-2 rounded-full border-emerald-50" 
                          />
                          
                          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" className="p-2 text-white transition-colors rounded-full bg-white/20 hover:bg-emerald-500">
                              <FaFacebookF size={14} />
                            </a>
                            <a href="#" className="p-2 text-white transition-colors rounded-full bg-white/20 hover:bg-sky-500">
                              <FaTwitter size={14} />
                            </a>
                            <a href="#" className="p-2 text-white transition-colors rounded-full bg-white/20 hover:bg-blue-600">
                              <FaLinkedinIn size={14} />
                            </a>
                          </div>
                        </div>
                      </div>

                      <h3 className="mb-1 text-xl font-bold text-gray-800 transition-colors group-hover:text-emerald-700">
                        {member.name}
                      </h3>
                      <span className="inline-block px-4 py-1 text-sm font-medium transition-all bg-white border rounded-full shadow-sm text-emerald-600 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200">
                        {member.role}
                      </span>

                      <div className="w-full h-1 mt-6 transition-all duration-500 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-emerald-400"></div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`
              hidden md:flex items-center justify-center
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16
              w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100
              text-gray-600 hover:text-emerald-600 hover:border-emerald-200
              transition-all duration-300 hover:scale-110
              disabled:opacity-0 disabled:cursor-not-allowed
              z-10
            `}
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= members.length - itemsToShow}
            className={`
              hidden md:flex items-center justify-center
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16
              w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100
              text-gray-600 hover:text-emerald-600 hover:border-emerald-200
              transition-all duration-300 hover:scale-110
              disabled:opacity-0 disabled:cursor-not-allowed
              z-10
            `}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: members.length - itemsToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  h-2 rounded-full transition-all duration-500 ease-out
                  ${currentIndex === idx 
                    ? 'w-8 bg-emerald-500 shadow-lg shadow-emerald-500/30' 
                    : 'w-2 bg-gray-300 hover:bg-emerald-300'
                  }
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Committee;