import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';

const HistoryTimeline = () => {
  const milestones = [
    {
      year: '১৯৮৪',
      title: 'কিশোরকণ্ঠ পাঠক ফোরাম এর যাত্রা শুরু',
      description: 'সিলেটে সাহিত্যক-্ম্যাগাজিন সংগঠন হিসেবে কিশোরকণ্ঠের আনুষ্ঠানিক যাত্রা শুরু। উদ্দেশ্য ছিল তরুণ প্রজন্মের মধ্যে সাহিত্য-সংস্কৃতির চর্চা বৃদ্ধি করা।',
      icon: '🌱'
    },
    {
      year: '২০২৪',
      title: 'প্রথম কিশোরকণ্ঠ মেধাবৃত্তি পরীক্ষা',
      description: 'সিলেট জেলা পশ্চিম প্রথমবারের মতো মেধাবৃত্তি পরীক্ষার আয়োজন। মাত্র ১৫০ জন শিক্ষার্থী অংশগ্রহণ করে এই ঐতিহাসিক পরীক্ষায়।',
      icon: '📚'
    },
    {
      year: '১৯৯৮৪',
      title: 'সিলেটব্যাপী সম্প্রসারণ ৮টি উপজেলা',
      description: 'সিলেট মহানগরের বাইরে উপজেলা পর্যায়ে মেধাবৃত্তি কার্যক্রম সম্প্রসারণ। ৮টি উপজেলায় পরীক্ষা কেন্দ্র স্থাপন করা হয়। উপজেলা গুলো দুক্ষিণ সুরমা, ফেঞ্চুগঞ্জ, বালাগঞ্জ, উসমানীনগর, বিশনাথ, সদর উপজেলা,  কোম্পানীগঞ্জ, গোয়াইনঘাট উপজেলা নন্দীর গাও ইউনিয়ন।',
      icon: '🏛️'
    },
    {
      year: '১৯৮৪',
      title: 'সদস্য সংগ্রহ',
      description: 'প্রথমবারের মতো সদস্য সংগ্রহ সিস্টেম চালু করা হয়।',
      icon: '💻'
    },
    {
      year: '',
      title: 'উদ্দেশ্য',
      description: 'ছাত্র সমাজকে জ্ঞান, দক্ষতা ও মূল্যবোধে সমৃদ্ধ করা এবং নৈতিক জ্ঞানার্জনে উদ্বুদ্ধ করা।',

      icon: '🎯'
    },
    {
      year: '',
      title: 'সামাজিক কার্যক্রম',
      description: 'মানুষ মানুষের জন্য। আমরা সমাজের সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে সর্বদা প্রস্তুত। প্রতি শীতে আমরা গরিব ও অসহায়দের মাঝে শীতবস্ত্র বিতরণ করি। আমাদের নিজস্ব ব্লাড ডোনার গ্রুপের মাধ্যমে মুমূর্ষু রোগীদের রক্তদান করা হয়। পরিবেশ রক্ষায় আমরা নিয়মিত বৃক্ষরোপণ অভিযান পরিচালনা করি। এছাড়াও বন্যা বা প্রাকৃতিক দুর্যোগে আমরা ত্রাণ সহায়তা নিয়ে মানুষের পাশে দাঁড়াই।',
      icon: '🌐'
    },
    
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
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
          
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 md:block left-1/2 bg-gradient-to-b from-emerald-200 via-teal-300 to-emerald-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className={`p-6 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-bold rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700`}>
                      <span className="text-2xl">{milestone.icon}</span>
                      <span>{milestone.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-2xl font-bold text-gray-800 transition-colors group-hover:text-emerald-600">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="leading-relaxed text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 md:block left-1/2 top-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 ring-4 ring-white"></div>
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl p-8 mx-auto mt-16 text-center border-2 border-gray-100 shadow-lg md:p-12 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <HiCheckCircle className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
          <h3 className="mb-3 text-3xl font-bold text-gray-800">
            আমাদের সাথে যুক্ত হোন
          </h3>
          <p className="mb-6 text-lg text-gray-600">
            এই গৌরবময় যাত্রার অংশীদার হয়ে পরবর্তী প্রজন্মের মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণে সাহায্য করুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:-translate-y-1">
              স্বেচ্ছাসেবক হন
            </button>
            <button className="px-8 py-3 font-semibold transition-all transform border-2 rounded-lg text-emerald-700 border-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1">
              দান করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
