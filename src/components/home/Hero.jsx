import React, { useState, useEffect } from 'react';
import heroBanner from '../../assets/images/hero-banner.jpg';
import heroBanner1 from '../../assets/images/hero-banner-exam-students.jpg';
import heroBanner2 from '../../assets/images/hero-banner-exam-center.jpg';
import heroBanner3 from '../../assets/images/hero-banner-exam-metting.jpg';
import { FaAward, FaBookOpen, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroImages = [
    heroBanner,
    heroBanner1,
    heroBanner2,
    heroBanner3
  ];

  const slideCaptions = [
    '২০২৪ সালের কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষায় বিশেষ বৃত্তিপ্রাপ্ত মেধাবী শিক্ষার্থীরা',
    '২০২৪ সালের কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষায় অংশগ্রহণকারী শিক্ষার্থীরা',
    '২০২৫ সালের কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষায় একটি পরীক্ষাকেন্দ্রের দৃশ্য',
    '২০২৫ সালের কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষার প্রস্তুতি সভার একটি মুহূর্ত'
  ];

  return (
    <div className="relative w-full mb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container px-4 py-12 mx-auto md:py-20">
        
        {/* Changed: flex container with reordering */}
        <div className="flex flex-col items-center text-center">

          {/* ============================================ */}
          {/* IMAGE SLIDER - order-1 on mobile (shows first) */}
          {/* ============================================ */}
          <div className="order-1 w-full mb-8 md:order-2 md:mb-0 md:mt-8">
            <div className="relative w-full mx-auto max-w-7xl">
              
              {/* Attractive Frame Container */}
              <div className="relative group">
                
                {/* Animated Gradient Border Glow */}
                <div className="absolute hidden transition duration-500 opacity-75 sm:block -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur-sm group-hover:opacity-100 animate-pulse" />
                
                {/* Outer Glow Effect */}
                <div className="absolute hidden -inset-3 sm:block bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-3xl blur-xl" />

                {/* Main White Frame */}
                <div className="relative bg-white shadow-2xl p-0 sm:p-1.5 rounded-xl">
                  
                  {/* Inner Gradient Border */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-xl p-0.5">
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 z-20 hidden w-6 h-6 border-t-2 border-l-2 pointer-events-none sm:block rounded-tl-xl sm:w-10 sm:h-10 border-emerald-500" />
                    <div className="absolute top-0 right-0 z-20 hidden w-6 h-6 border-t-2 border-r-2 border-teal-500 pointer-events-none sm:block rounded-tr-xl sm:w-10 sm:h-10" />
                    <div className="absolute bottom-0 left-0 z-20 hidden w-6 h-6 border-b-2 border-l-2 border-teal-500 pointer-events-none sm:block rounded-bl-xl sm:w-10 sm:h-10" />
                    <div className="absolute bottom-0 right-0 z-20 hidden w-6 h-6 border-b-2 border-r-2 pointer-events-none sm:block rounded-br-xl sm:w-10 sm:h-10 border-emerald-500" />

                    {/* Swiper */}
                    <Swiper
                      modules={[Autoplay, EffectFade, Pagination]}
                      effect="fade"
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      loop={true}
                      speed={1000}
                      className="rounded-xl hero-swiper"
                    >
                      {heroImages.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative overflow-hidden rounded-xl">
                            
                            {/* Fixed Aspect Ratio Container */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
                              <img
                                src={img}
                                alt={`Award Ceremony ${index + 1}`}
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                loading={index === 0 ? 'eager' : 'lazy'}
                              />
                              
                              {/* Overlay Gradients */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent" />

                              {/* Bottom Caption */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 sm:p-6 sm:pb-17">
                                <div className="flex items-center gap-3 ">
                                  <div className="w-1 h-6 rounded-full bg-gradient-to-b from-emerald-400 to-teal-400" />
                                  <div className="text-left">
                                    
                                    <p className="mt-1 text-sm font-medium text-white sm:text-base lg:text-lg drop-shadow-lg">
                                      {slideCaptions[index]}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Slide Counter Badge */}
                              <div className="absolute hidden px-2 py-1 text-xs font-bold rounded-full sm:block top-3 right-3 sm:top-4 sm:right-4 bg-white/90 text-emerald-700 backdrop-blur-sm">
                                {String(index + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* Bottom Reflection Shadow */}
                <div className="absolute hidden h-6 rounded-full sm:block left-6 right-6 -bottom-3 bg-black/10 blur-xl" />
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* TEXT CONTENT - order-2 on mobile (shows second) */}
          {/* ============================================ */}
          <div className="order-2 md:order-1">
            
            {/* Badge with Icon */}
            <div className="inline-flex items-center justify-center sm:mt-8 px-4 py-1.5 mb-6 text-sm font-bold text-emerald-800 bg-emerald-100 rounded-full animate-fade-in-up shadow-md">
              <FaAward className="mr-2 text-emerald-600" />
              <span>কিশোরকণ্ঠ মেধাবৃত্তি - ২০২৫</span>
            </div>

            {/* Main Title */}
            <h1 className="pt-4 mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-700 to-teal-600 animate-fade-in-up" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              কিশোরকণ্ঠ পাঠক ফোরাম
            </h1>

            {/* Subtitle with Icon */}
            <div className="flex items-center justify-center mb-6 text-xl font-semibold delay-100 text-amber-600 sm:text-2xl md:text-3xl animate-fade-in-up">
              <h2>সিলেট জেলা পশ্চিম</h2>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto mb-8 text-base text-gray-600 delay-200 sm:text-lg md:text-xl animate-fade-in-up">
              নৈতিকতা ও মেধার সমন্বয়ে এক নতুন প্রজন্ম গড়ার প্রত্যয়ে আমাদের পথচলা।
            </p>

            {/* Features Icons - Same Base Gradient, Different Hover */}
              <div className="flex justify-center gap-2 mb-6 delay-200 sm:gap-4 animate-fade-in-up">
                
                {/* মেধাবৃত্তি */}
                <div className="flex flex-col items-center w-20 p-2 text-center text-gray-700 transition-all duration-500 border shadow-lg cursor-pointer bg-gradient-to-br from-emerald-100 via-sky-50 to-amber-100 rounded-xl border-white/50 sm:w-28 sm:p-3 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-tl hover:from-emerald-200 hover:via-emerald-100 hover:to-teal-200 hover:border-emerald-300 group">
                  <div className="p-2 mb-2 transition-all duration-500 bg-white rounded-full shadow-sm group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:shadow-lg group-hover:shadow-emerald-200">
                    <FaGraduationCap className="text-2xl transition-all duration-500 sm:text-3xl text-emerald-600 group-hover:text-white group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold transition-colors duration-500 sm:text-sm group-hover:text-emerald-700">মেধাবৃত্তি</span>
                </div>

                {/* ফোরাম */}
                <div className="flex flex-col items-center w-24 p-3 text-center text-gray-700 transition-all duration-500 border shadow-lg cursor-pointer bg-gradient-to-br from-emerald-100 via-sky-50 to-amber-100 rounded-xl border-white/50 sm:w-28 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-tl hover:from-sky-200 hover:via-blue-100 hover:to-indigo-200 hover:border-sky-300 group">
                  <div className="p-2 mb-2 transition-all duration-500 bg-white rounded-full shadow-sm group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-400 group-hover:shadow-lg group-hover:shadow-sky-200">
                    <FaUsers className="text-2xl transition-all duration-500 text-sky-600 sm:text-3xl group-hover:text-white group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold transition-colors duration-500 sm:text-sm group-hover:text-sky-700">ফোরাম</span>
                </div>

                {/* পাঠচক্র */}
                <div className="flex flex-col items-center w-24 p-3 text-center text-gray-700 transition-all duration-500 border shadow-lg cursor-pointer bg-gradient-to-br from-emerald-100 via-sky-50 to-amber-100 rounded-xl border-white/50 sm:w-28 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-tl hover:from-amber-200 hover:via-yellow-100 hover:to-orange-200 hover:border-amber-300 group">
                  <div className="p-2 mb-2 transition-all duration-500 bg-white rounded-full shadow-sm group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-400 group-hover:shadow-lg group-hover:shadow-amber-200">
                    <FaBookOpen className="text-2xl transition-all duration-500 text-amber-600 sm:text-3xl group-hover:text-white group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-semibold transition-colors duration-500 sm:text-sm group-hover:text-amber-700">পাঠচক্র</span>
                </div>

              </div>
          </div>

        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-teal-200/30 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Floating decorative elements */}
      {!isMobile && (
        <>
          <div className="absolute w-4 h-4 rounded-full top-1/4 left-8 bg-emerald-400 animate-pulse"></div>
          <div className="absolute w-6 h-6 delay-1000 bg-teal-400 rounded-full top-1/3 right-12 animate-pulse"></div>
          <div className="absolute w-3 h-3 delay-500 rounded-full bottom-1/4 left-16 bg-cyan-400 animate-pulse"></div>
        </>
      )}

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 12px !important;
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #10b981;
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 767px) {
          .hero-swiper .swiper-pagination {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;