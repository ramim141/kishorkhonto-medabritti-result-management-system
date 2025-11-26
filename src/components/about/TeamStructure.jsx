import React from 'react';
import { HiUserGroup, HiCog, HiChatBubbleLeftRight, HiPencilSquare, HiCamera, HiComputerDesktop } from 'react-icons/hi2';

const TeamStructure = () => {
  const teams = [
    {
      name: 'নির্বাহী কমিটি',
      icon: HiUserGroup,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      description: 'সংগঠনের নীতিনির্ধারণ, সিদ্ধান্ত গ্রহণ এবং সামগ্রিক দিকনির্দেশনা প্রদান করে। প্রধান কার্যনির্বাহী, সভাপতি, সাধারণ সম্পাদক ও কোষাধ্যক্ষ নিয়ে গঠিত।',
      responsibilities: [
        'বার্ষিক পরিকল্পনা প্রণয়ন',
        'বাজেট অনুমোদন ও আর্থিক ব্যবস্থাপনা',
        'কৌশলগত সিদ্ধান্ত গ্রহণ',
        'স্টেকহোল্ডারদের সাথে সম্পর্ক রক্ষা'
      ],
      members: 7
    },
    {
      name: 'পরীক্ষা পরিচালনা টিম',
      icon: HiCog,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      description: 'মেধাবৃত্তি পরীক্ষার সম্পূর্ণ প্রক্রিয়া পরিচালনা করে। প্রশ্নপত্র প্রণয়ন, পরীক্ষা কেন্দ্র ব্যবস্থাপনা, উত্তরপত্র মূল্যায়ন এবং রেজাল্ট প্রস্তুতকরণের দায়িত্ব পালন করে।',
      responsibilities: [
        'প্রশ্নপত্র প্রণয়ন ও মডারেশন',
        'পরীক্ষা কেন্দ্র নির্বাচন ও তত্ত্বাবধান',
        'উত্তরপত্র মূল্যায়ন ও যাচাই',
        'রেজাল্ট ঘোষণা ও সংরক্ষণ'
      ],
      members: 15
    },
    {
      name: 'যোগাযোগ ও মিডিয়া টিম',
      icon: HiChatBubbleLeftRight,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      description: 'জনসংযোগ, প্রচার-প্রচারণা এবং মিডিয়া ম্যানেজমেন্টের দায়িত্ব পালন করে। সোশ্যাল মিডিয়া পরিচালনা, প্রেস রিলিজ প্রকাশ এবং পাবলিক রিলেশন্স পরিচালনা করে।',
      responsibilities: [
        'সোশ্যাল মিডিয়া কন্টেন্ট তৈরি',
        'প্রচার প্রচারণা ক্যাম্পেইন পরিচালনা',
        'মিডিয়া কভারেজ সমন্বয়',
        'ব্র্যান্ড ইমেজ ম্যানেজমেন্ট'
      ],
      members: 8
    },
    {
      name: 'কন্টেন্ট ও এডিটোরিয়াল টিম',
      icon: HiPencilSquare,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50',
      description: 'সকল প্রকার কন্টেন্ট তৈরি, সম্পাদনা এবং প্রকাশনার কাজ করে। ওয়েবসাইট কন্টেন্ট, মাসিক ম্যাগাজিন, পরীক্ষা সিলেবাস এবং শিক্ষা উপকরণ প্রস্তুত করে।',
      responsibilities: [
        'ওয়েবসাইট কন্টেন্ট লেখা ও সম্পাদনা',
        'শিক্ষা উপকরণ ডিজাইন',
        'মাসিক ম্যাগাজিন প্রকাশ',
        'সিলেবাস ও গাইড প্রস্তুতকরণ'
      ],
      members: 10
    },
    {
      name: 'ফটোগ্রাফি ও ডিজাইন টিম',
      icon: HiCamera,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      description: 'সকল অনুষ্ঠানের ফটোগ্রাফি, ভিডিওগ্রাফি এবং গ্রাফিক্স ডিজাইনের কাজ করে। পোস্টার, ব্যানার, সার্টিফিকেট এবং প্রচারণা উপকরণ ডিজাইন করে।',
      responsibilities: [
        'ইভেন্ট ফটোগ্রাফি ও ভিডিওগ্রাফি',
        'পোস্টার ও ব্যানার ডিজাইন',
        'সার্টিফিকেট ও ক্রেস্ট ডিজাইন',
        'মার্কেটিং ম্যাটেরিয়াল তৈরি'
      ],
      members: 6
    },
    {
      name: 'আইটি ও টেকনিক্যাল টিম',
      icon: HiComputerDesktop,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      description: 'ওয়েবসাইট, অনলাইন রেজিস্ট্রেশন সিস্টেম, রেজাল্ট ম্যানেজমেন্ট এবং ডাটাবেস পরিচালনার দায়িত্ব পালন করে। ডিজিটাল সলিউশন ডেভেলপ ও মেইনটেইন করে।',
      responsibilities: [
        'ওয়েবসাইট ডেভেলপমেন্ট ও রক্ষণাবেক্ষণ',
        'অনলাইন রেজিস্ট্রেশন সিস্টেম পরিচালনা',
        'ডাটাবেস ম্যানেজমেন্ট',
        'সাইবার সিকিউরিটি নিশ্চিতকরণ'
      ],
      members: 5
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container px-4 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">টিম স্ট্রাকচার</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            বিভিন্ন বিভাগে বিভক্ত দক্ষ ও নিবেদিত প্রাণ টিম যারা একসাথে কাজ করে স্বপ্ন বাস্তবায়নে
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        {/* Teams Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`relative p-8 overflow-hidden transition-all transform bg-gradient-to-br ${team.bgColor} rounded-3xl hover:shadow-2xl hover:-translate-y-2 group border-2 border-gray-100`}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 transition-transform transform rounded-full bg-white/50 blur-3xl group-hover:scale-150"></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color}`}>
                    <team.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-gray-800 transition-colors group-hover:text-emerald-600">
                      {team.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-gray-700 rounded-full bg-white/80">
                      <HiUserGroup className="w-4 h-4" />
                      {team.members} জন সদস্য
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-gray-700">
                  {team.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="mb-3 text-lg font-bold text-gray-800">
                    প্রধান দায়িত্ব:
                  </h4>
                  <ul className="space-y-2">
                    {team.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center`}>
                          <span className="text-xs font-bold text-white">✓</span>
                        </span>
                        <span className="flex-1 text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="max-w-4xl p-8 mx-auto mt-16 border-2 border-gray-100 shadow-lg md:p-12 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                51
              </div>
              <div className="text-lg font-semibold text-gray-700">মোট সদস্য সংখ্যা</div>
              <div className="text-sm text-gray-600">সকল টিম মিলিয়ে</div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                6
              </div>
              <div className="text-lg font-semibold text-gray-700">বিভাগ/টিম</div>
              <div className="text-sm text-gray-600">বিশেষায়িত দক্ষতা</div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-700">সেবা প্রদান</div>
              <div className="text-sm text-gray-600">অনলাইন সহায়তা</div>
            </div>
          </div>

          <div className="pt-8 mt-8 text-center border-t-2 border-gray-200">
            <p className="mb-6 text-lg text-gray-700">
              আমাদের টিমে যোগ দিয়ে আপনিও পরিবর্তনের অংশীদার হোন
            </p>
            <button className="px-8 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:-translate-y-1">
              স্বেচ্ছাসেবক হিসেবে যোগ দিন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
