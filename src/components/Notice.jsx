import React, { useState } from 'react';
import { HiBell, HiCalendar, HiClock, HiSparkles, HiExclamationCircle } from 'react-icons/hi2';

const Notice = () => {
  // Sample notices - পরে backend থেকে fetch করা হবে
  const [notices] = useState([
    {
      id: 1,
      title: "কিশোরকন্ঠ মেধাবৃত্তি - ২০২৫ এর ফলাফল প্রকাশ",
      description: "কিশোরকন্ঠ মেধাবৃত্তি পরীক্ষা - ২০২৫, সিলেট জেলা পশ্চিম এর ফলাফল প্রকাশিত হয়েছে। সার্চ অপশন ব্যবহার করে আপনার রোল নম্বর দিয়ে ফলাফল দেখুন। সকল উত্তীর্ণ শিক্ষার্থীদের অভিনন্দন।",
      date: "১৩ ডিসেম্বর ২০২৫",
      time: "১২:৩০ AM",
      type: "result",
      isPinned: false
    },
    {
      id: 2,
      title: "মেধাবৃত্তির পুরস্কার বিতরণী অনুষ্ঠান প্রসঙ্গে",
      description: "২০২৬ সালের জানুয়ারী মাসের প্রথমার্ধে (সম্ভাব্য), কিশোরকন্ঠ পাঠক ফোরাম সিলেট জেলা পশ্চিম -এর  কিশোরকন্ঠ মেধাবৃত্তি পরীক্ষা-২০২৫ এর পুরস্কার বিতরণী অনুষ্ঠান অনুষ্ঠিত হবে। সকল অভিভাবক ও শিক্ষার্থীদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে। মোবাইল এসএমএস, ওয়েবসাইট এবং ফেসবুক পেইজে বিস্তারিত জানিয়ে দেওয়া হবে।",
      date: "১৫ ডিসেম্বর ২০২৫",
      time: "১০:০০ PM",
      type: "event",
      isPinned: true
    },
   

  ]);

  const getTypeColor = (type) => {
    switch(type) {
      case 'result':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          iconBg: 'bg-emerald-100',
          iconColor: 'text-emerald-600',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        };
      case 'event':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          badge: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'announcement':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600',
          badge: 'bg-purple-50 text-purple-700 border-purple-200'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
          badge: 'bg-gray-50 text-gray-700 border-gray-200'
        };
    }
  };

  const getTypeBangla = (type) => {
    switch(type) {
      case 'result':
        return 'ফলাফল';
      case 'event':
        return 'অনুষ্ঠান';
      case 'announcement':
        return 'ঘোষণা';
      default:
        return 'নোটিস';
    }
  };

  // Separate pinned and regular notices
  const pinnedNotices = notices.filter(notice => notice.isPinned);
  const regularNotices = notices.filter(notice => !notice.isPinned);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Modern & Clean */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-emerald-700 bg-emerald-50 border-emerald-200">
              <HiBell className="w-4 h-4" />
              <span>Notice Board</span>
            </div>
            
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              নোটিস বোর্ড
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              কিশোরকন্ঠ পাঠক ফোরাম জেলা পশ্চিমের সকল গুরুত্বপূর্ণ নোটিস ও আপডেট
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Pinned Notices */}
        {pinnedNotices.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <HiSparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-semibold text-gray-900">গুরুত্বপূর্ণ নোটিস <span className="text-yellow-500">(সাম্প্রতিক) </span></h2>
            </div>
            
            <div className="space-y-4">
              {pinnedNotices.map((notice) => {
                const colors = getTypeColor(notice.type);
                return (
                  <div key={notice.id} className={`relative overflow-hidden transition-all duration-200 bg-white border-2 ${colors.border} shadow-sm rounded-xl hover:shadow-md`}>
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          {/* Icon */}
                          <div className={`flex items-center justify-center flex-shrink-0 w-12 h-12 ${colors.iconBg} rounded-lg`}>
                            <HiBell className={`w-6 h-6 ${colors.iconColor}`} />
                          </div>
                          
                          {/* Type Badge */}
                          <span className={`inline-block px-2.5 py-1 text-xs font-semibold border rounded-md whitespace-nowrap ${colors.badge}`}>
                            {getTypeBangla(notice.type)}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="w-full">
                          <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
                            {notice.title}
                          </h3>
                          
                          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                            {notice.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:gap-4 sm:text-sm">
                            <div className="flex items-center gap-1.5">
                              <HiCalendar className="w-4 h-4" />
                              <span>{notice.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <HiClock className="w-4 h-4" />
                              <span>{notice.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Notices */}
        {regularNotices.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HiExclamationCircle className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">বিগত নোটিস</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {regularNotices.map((notice) => {
                const colors = getTypeColor(notice.type);
                return (
                  <div key={notice.id} className={`overflow-hidden transition-all duration-200 bg-white border ${colors.border} shadow-sm rounded-xl hover:shadow-md`}>
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start justify-between">
                          {/* Icon */}
                          <div className={`flex items-center justify-center flex-shrink-0 w-12 h-12 ${colors.iconBg} rounded-lg`}>
                            <HiBell className={`w-6 h-6 ${colors.iconColor}`} />
                          </div>
                          
                          {/* Type Badge */}
                          <span className={`inline-block px-2.5 py-1 text-xs font-semibold border rounded-md whitespace-nowrap ${colors.badge}`}>
                            {getTypeBangla(notice.type)}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="w-full">
                          <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">
                            {notice.title}
                          </h3>
                          
                          <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:line-clamp-2">
                            {notice.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:gap-4">
                            <div className="flex items-center gap-1.5">
                              <HiCalendar className="w-4 h-4" />
                              <span>{notice.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <HiClock className="w-4 h-4" />
                              <span>{notice.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {notices.length === 0 && (
          <div className="py-16 text-center bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
              <HiBell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">কোনো নোটিস পাওয়া যায়নি</h3>
            <p className="text-sm text-gray-600">
              এই মুহূর্তে কোনো নতুন নোটিস প্রকাশিত হয়নি।
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Notice;


