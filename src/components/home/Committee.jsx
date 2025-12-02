import React, { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { HiSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

import AbuJubayer_chairman from '../../assets/images/jubayer.jpg';
import Tofayel_vicechairman from '../../assets/images/tofayel.jpg';
import MahmudurRahman_assistant_poricalok from '../../assets/images/mahmudurrahman.jpg';
import M_ahmedamim_assistant_poricalok from '../../assets/images/m_Ahmedamim.jpg';
import mufakkir_assistant_poricalok from '../../assets/images/mufakkhir.jpg';
import riyaz_assistant_poricalok from '../../assets/images/riyazuddin.jpg';
import sultan_assistant_poricalok from '../../assets/images/sultanmahmud.jpg';
import yeasin_assistant_poricalok from '../../assets/images/yasinahmed.jpg';
import taher_assistant_poricalok from '../../assets/images/taher.jpg';
import abu_taher_nirbahi from '../../assets/images/abutaherchowdhury.jpg';
import moynulIslam_assistant_poricalok from '../../assets/images/moynulislam.jpg';
import coverPhotoCommittee from '../../assets/images/cover-photo-commitee.jpg';

const Committee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const members = [
    { 
      name: "আবু জুবায়ের", 
      role: "চেয়ারম্যান", 
      img: AbuJubayer_chairman,
      coverImage: coverPhotoCommittee,
      facebook: '#'
    },
    { 
      name: "তোফায়েল আহমদ", 
      role: "ভাইস চেয়ারম্যান", 
      img: Tofayel_vicechairman,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/tufael.ahmed.54922'
    },
    { 
      name: "মাহমুদুর রহমান", 
      role: "পৃষ্ঠপোষক", 
      img: MahmudurRahman_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: '#'
    },
    { 
      name: "এম আহমদ আমীম",   
      role: "পৃষ্ঠপোষক", 
      img: M_ahmedamim_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/ahmed.amim.1'
    },
    { 
      name: "শেখ মুফাক্কির হোসাইন", 
      role: "পৃষ্ঠপোষক",  
      img: mufakkir_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/sheikh.mufakkir'
    },
    { 
      name: "আবু তাহের চৌধুরী", 
      role: "নির্বাহী সম্পাদক", 
      img: abu_taher_nirbahi,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/mataher.chowdhury.1'
    },
    { 
      name: "রিয়াজ উদ্দিন", 
      role: "পৃষ্ঠপোষক", 
      img: riyaz_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/riyaj.uddin.7146'
    },
    {
      name: "সুলতান মাহমুদ",
      role: "পৃষ্ঠপোষক",  
      img: sultan_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/sultan.mahmud.239321'
    },
    {
      name: "ইয়াসিন আহমদ",
      role: "সহকারী পৃষ্ঠপোষক",   
      img: yeasin_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/yasinahmed.yasinahmed.549'
    },
    {
      name: "ময়নুল ইসলাম",
      role: "পৃষ্ঠপোষক",   
      img: moynulIslam_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/mdmoynulislam.mayon.3'
    },
    {
      name: "আবু তাহের",
      role: "পৃষ্ঠপোষক",  
      img: taher_assistant_poricalok,
      coverImage: coverPhotoCommittee,
      facebook: 'https://www.facebook.com/taher200135'
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
    // ========== UPDATED BACKGROUND ==========
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      
      {/* ========== UPDATED DECORATIVE BLOBS ========== */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-teal-200/60 to-cyan-200/60 blur-3xl"></div>
      <div className="absolute w-48 h-48 rounded-full top-1/3 left-1/4 bg-emerald-100/40 blur-2xl"></div>
      <div className="absolute hidden w-32 h-32 rounded-full md:block bottom-1/4 right-1/4 bg-cyan-100/50 blur-xl"></div>

      <div className="container relative px-4 mx-auto">
        
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full text-emerald-700 bg-emerald-100/80 backdrop-blur-sm">
            <HiSparkles className="w-5 h-5" />
            আমাদের টিম
          </div>
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
            পরিচালনা <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">পর্ষদ</span>
          </h2>
          <p className="mt-4 text-gray-600">যাদের নিরলস পরিশ্রমে এগিয়ে চলছে আমাদের কার্যক্রম</p>
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
                  {/* ========== UPDATED CARD STYLING ========== */}
                  <div className="group relative h-full bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/60 overflow-hidden hover:bg-white hover:border-emerald-100">
                    
                    {/* TOP BACKGROUND AREA */}
                    <div className="relative h-32 overflow-hidden">
                      
                      {/* 1. Default Green Gradient (Visible Initially) */}
                      <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 group-hover:opacity-0">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        {/* Animated Shimmer Effect */}
                        <div className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full"></div>
                      </div>

                      {/* 2. Hover Image Background (Hidden Initially, Fades In on Hover) */}
                      <div 
                        className="absolute inset-0 transition-all duration-700 transform bg-center bg-cover opacity-0 group-hover:opacity-100 group-hover:scale-110"
                        style={{ backgroundImage: `url(${member.coverImage})` }}
                      >
                        {/* Dark Overlay for text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-black/20"></div>
                      </div>

                      {/* Bottom Fade for smooth transition to white body */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 transition-colors duration-500 bg-gradient-to-t from-white/80 to-transparent group-hover:from-white"></div>
                    </div>

                    <div className="relative px-6 pb-8 -mt-16 text-center">
                      
                      <div className="relative inline-block mb-4">
                        {/* Glow Effect Behind Avatar */}
                        <div className="absolute inset-0 transition-all duration-500 rounded-full opacity-0 bg-gradient-to-r from-emerald-400 to-teal-500 blur-lg group-hover:opacity-60 group-hover:scale-110"></div>
                        <div className="relative w-32 h-32 p-1 transition-all duration-500 bg-white rounded-full shadow-lg group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-emerald-200/50">
                          <img 
                            src={member.img} 
                            alt={member.name} 
                            className="object-cover w-full h-full border-2 rounded-full border-emerald-50" 
                          />
                          
                          {/* Social Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] rounded-full opacity-0 group-hover:opacity-100">
                            <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 text-white transition-all rounded-full bg-white/20 hover:bg-emerald-500 hover:scale-110">
                              <FaFacebookF size={16} />
                            </a>
                          </div>
                        </div>
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-emerald-700">
                        {member.name}
                      </h3>
                      <span className="inline-block px-4 py-1.5 text-sm font-medium transition-all bg-gradient-to-r from-emerald-50 to-teal-50 border rounded-full shadow-sm text-emerald-600 border-emerald-100 group-hover:from-emerald-100 group-hover:to-teal-100 group-hover:border-emerald-200 group-hover:shadow-md">
                        {member.role}
                      </span>

                      {/* Bottom Decorative Line */}
                      <div className="w-full h-1 mt-6 overflow-hidden rounded-full bg-gray-100/80">
                        <div className="w-0 h-full transition-all duration-500 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full"></div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== UPDATED NAVIGATION BUTTONS ========== */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`
              hidden md:flex items-center justify-center
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16
              w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-emerald-100
              text-emerald-600 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500
              transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-200/50
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
              w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-emerald-100
              text-emerald-600 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500
              transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-200/50
              disabled:opacity-0 disabled:cursor-not-allowed
              z-10
            `}
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* ========== UPDATED PAGINATION DOTS ========== */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: members.length - itemsToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  h-2.5 rounded-full transition-all duration-500 ease-out
                  ${currentIndex === idx 
                    ? 'w-10 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-400/40' 
                    : 'w-2.5 bg-emerald-200 hover:bg-emerald-300'
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