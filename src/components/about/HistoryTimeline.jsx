import React, { useEffect, useRef, useState } from 'react';
import { 
  HiCheckCircle,
  HiRocketLaunch,
  HiAcademicCap,
  HiGlobeAlt,
  HiComputerDesktop,
  HiFlag,
  HiHeart,
  HiSparkles
} from 'react-icons/hi2';

const HistoryTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const milestones = [
    {
      year: '১৯৮৪',
      title: 'কিশোরকণ্ঠ পাঠক ফোরাম এর যাত্রা শুরু',
      description: 'সিলেটে সাহিত্য-ম্যাগাজিন সংগঠন হিসেবে কিশোরকণ্ঠের আনুষ্ঠানিক যাত্রা শুরু। উদ্দেশ্য ছিল তরুণ প্রজন্মের মধ্যে সাহিত্য-সংস্কৃতির চর্চা বৃদ্ধি করা।',
      icon: HiRocketLaunch,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100'
    },
    {
      year: '২০২৪',
      title: 'প্রথম কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষা',
      description: 'সিলেট জেলা পশ্চিম প্রথমবারের মতো মেধাবৃত্তি পরীক্ষার আয়োজন। মাত্র ৫২০০ জন শিক্ষার্থী অংশগ্রহণ করে এই ঐতিহাসিক পরীক্ষায়।',
      icon: HiAcademicCap,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      year: '১৯৯৮৪',
      title: 'সিলেটব্যাপী সম্প্রসারণ ৮টি উপজেলা',
      description: 'সিলেট জেলার ৮টি উপজেলা পর্যায়ে মেধাবৃত্তি কার্যক্রম সম্প্রসারণ। ৮টি উপজেলায় কিশোরকণ্ঠ পাঠক ফোরাম সিলেট জেলা পশ্চিমের কার্যক্রম পরিচালিত হয়। উপজেলাগুলো দক্ষিণ সুরমা, ফেঞ্চুগঞ্জ, বালাগঞ্জ, উসমানীনগর, বিশ্বনাথ, সদর উপজেলা, কোম্পানীগঞ্জ, গোয়াইনঘাট উপজেলার নন্দিরগাও ইউনিয়ন।',
      icon: HiGlobeAlt,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      year: '১৯৮৪',
      title: 'সদস্য সংগ্রহ',
      description: 'প্রথমবারের মতো সদস্য সংগ্রহ সিস্টেম চালু করা হয়।',
      icon: HiComputerDesktop,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100'
    },
    {
      year: 'লক্ষ্য',
      title: 'উদ্দেশ্য',
      description: 'ছাত্র সমাজকে জ্ঞান, দক্ষতা ও মূল্যবোধে সমৃদ্ধ করা এবং নৈতিক জ্ঞানার্জনে উদ্বুদ্ধ করা।',
      icon: HiFlag,
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-100'
    },
    {
      year: 'বর্তমান',
      title: 'সামাজিক কার্যক্রম',
      description: 'মানুষ মানুষের জন্য। আমরা সমাজের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে সর্বদা প্রস্তুত। প্রতি শীতে আমরা গরিব ও অসহায়দের মাঝে শীতবস্ত্র বিতরণ করি। আমাদের নিজস্ব ব্লাড ডোনার গ্রুপের মাধ্যমে মুমূর্ষু রোগীদের রক্তদান করা হয়। পরিবেশ রক্ষায় আমরা নিয়মিত বৃক্ষরোপণ অভিযান পরিচালনা করি। এছাড়াও বন্যা বা প্রাকৃতিক দুর্যোগে আমরা ত্রাণ সহায়তা নিয়ে মানুষের পাশে দাঁড়াই।',
      icon: HiHeart,
      gradient: 'from-rose-500 to-red-500',
      bgGradient: 'from-rose-50 to-red-50',
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-100'
    },
  ];

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleItems((prev) => [...new Set([...prev, index])]);
                }, index * 100); // Stagger animation
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 -top-20 -left-20 bg-emerald-200/20 blur-3xl animate-blob"></div>
        <div className="absolute rounded-full w-96 h-96 -bottom-20 -right-20 bg-teal-200/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-cyan-200/20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-bold rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700">
            <HiSparkles className="w-5 h-5" />
            আমাদের যাত্রাপথ
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">ইতিহাস</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            ৩২ বছরের গৌরবময় যাত্রা - মেধা অন্বেষণ থেকে মেধা বিকাশ পর্যন্ত
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line - Enhanced with gradient and glow */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 md:block left-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-200 via-teal-300 to-emerald-200"></div>
            <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-400 blur-sm"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  
                  {/* Content Card */}
                  <div className={`
                    w-full md:w-[calc(50%-2rem)]
                    transition-all duration-700 ease-out
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : `opacity-0 ${isLeft ? 'translate-x-[-50px]' : 'translate-x-[50px]'} md:translate-y-0 translate-y-[50px]`
                    }
                  `}>
                    <div className={`
                      relative p-8 bg-white border-2 border-gray-100 rounded-2xl 
                      shadow-lg hover:shadow-2xl 
                      transition-all duration-500 transform 
                      hover:-translate-y-2
                      group overflow-hidden
                      ${isLeft ? 'md:text-right' : 'md:text-left'}
                    `}>
                      
                      {/* Gradient Background on Hover */}
                      <div className={`
                        absolute inset-0 
                        bg-gradient-to-br ${milestone.bgGradient}
                        opacity-0 group-hover:opacity-100
                        transition-all duration-500
                      `}></div>

                      {/* Border Glow Effect */}
                      <div className={`
                        absolute inset-0 rounded-2xl
                        bg-gradient-to-r ${milestone.gradient}
                        opacity-0 group-hover:opacity-20
                        blur-xl transition-opacity duration-500
                      `}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        
                        {/* Icon & Year Badge */}
                        <div className={`
                          inline-flex items-center gap-3 px-5 py-2.5 mb-5
                          rounded-full bg-gradient-to-r ${milestone.bgGradient}
                          border-2 ${milestone.iconBg} 
                          group-hover:scale-110
                          transition-all duration-300
                          shadow-md group-hover:shadow-lg
                        `}>
                          <div className={`
                            flex items-center justify-center w-8 h-8 rounded-full
                            ${milestone.iconBg} ${milestone.iconColor}
                            group-hover:rotate-12
                            transition-transform duration-300
                          `}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`text-sm font-bold ${milestone.iconColor}`}>
                            {milestone.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`
                          mb-4 text-2xl font-bold text-gray-800 
                          transition-all duration-300
                          group-hover:text-transparent 
                          group-hover:bg-clip-text 
                          group-hover:bg-gradient-to-r ${milestone.gradient}
                        `}>
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          {milestone.description}
                        </p>

                        {/* Decorative Elements */}
                        <div className={`
                          absolute top-0 ${isLeft ? 'right-0' : 'left-0'} 
                          w-24 h-24 
                          bg-gradient-to-br ${milestone.gradient}
                          opacity-0 group-hover:opacity-10
                          rounded-full blur-2xl
                          transition-opacity duration-500
                        `}></div>
                      </div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                        <div className={`
                          absolute inset-0 
                          bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] 
                          transition-transform duration-1000
                        `}></div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot - Enhanced */}
                  <div className={`
                    absolute hidden transform -translate-x-1/2 -translate-y-1/2 
                    md:block left-1/2 top-1/2
                    transition-all duration-500 ease-out
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `}>
                    <div className="relative">
                      {/* Main Dot */}
                      <div className={`
                        w-8 h-8 rounded-full shadow-xl
                        bg-gradient-to-r ${milestone.gradient}
                        ring-4 ring-white
                        flex items-center justify-center
                        group-hover:scale-125
                        transition-transform duration-300
                      `}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Pulsing Ring */}
                      <div className={`
                        absolute inset-0 rounded-full 
                        bg-gradient-to-r ${milestone.gradient}
                        animate-ping opacity-20
                      `}></div>
                      
                      {/* Outer Glow */}
                      <div className={`
                        absolute inset-0 rounded-full 
                        bg-gradient-to-r ${milestone.gradient}
                        blur-md opacity-50 scale-150
                      `}></div>
                    </div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className={`
          relative max-w-3xl p-8 mx-auto mt-20 overflow-hidden text-center 
          border-2 border-transparent shadow-2xl md:p-12 rounded-3xl 
          bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50
          hover:shadow-emerald-500/20
          transition-all duration-500
          group
        `}>
          
          {/* Gradient Border */}
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl group-hover:opacity-100 blur-xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-500 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl group-hover:scale-110 group-hover:rotate-6">
              <HiCheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
              আমাদের সাথে যুক্ত হোন
            </h3>
            
            <p className="mb-8 text-lg text-gray-600">
              এই গৌরবময় যাত্রার অংশীদার হয়ে পরবর্তী প্রজন্মের মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণে সাহায্য করুন
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1 hover:scale-105 group-hover:from-emerald-700 group-hover:to-teal-700">
                স্বেচ্ছাসেবক হন
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute w-32 h-32 transition-opacity duration-500 rounded-full bg-emerald-200 -top-16 -left-16 opacity-20 blur-2xl group-hover:opacity-40"></div>
          <div className="absolute w-32 h-32 transition-opacity duration-500 bg-teal-200 rounded-full -bottom-16 -right-16 opacity-20 blur-2xl group-hover:opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;