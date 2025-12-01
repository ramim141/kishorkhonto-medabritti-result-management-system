import React from 'react';
import { SectionHeader, InfoCard, BookIcon, UsersIcon, TrophyIcon } from './ScholarshipUI';

const SCHOLARSHIP_INFO = {
  examDetails: [
    { label: 'পরীক্ষার ধরন', value: 'লিখিত পরীক্ষা (বহুনির্বাচনী ও সৃজনশীল)' },
    { label: 'বিষয়সমূহ', value: 'বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান' },
    { label: 'মোট নম্বর', value: '১০০ নম্বর (প্রতি বিষয় ২৫ নম্বর)' },
    { label: 'পরীক্ষার সময়', value: '২ ঘণ্টা' }
  ],
  eligibility: [
    { label: 'শ্রেণি', value: '৫ম থেকে ১০ম শ্রেণির শিক্ষার্থী' },
    { label: 'এলাকা', value: 'সিলেট মহানগর এবং আশেপাশের এলাকা' },
    { label: 'নূন্যতম যোগ্যতা', value: 'পূর্ববর্তী ক্লাসে ৬০% নম্বর প্রয়োজন' },
    { label: 'নিয়মিত শিক্ষার্থী', value: 'স্বীকৃত শিক্ষা প্রতিষ্ঠানে অধ্যয়নরত' }
  ],
  rewards: [
    { label: 'মেধাবৃত্তি', value: '১ম, ২য়, ৩য় স্থান অধিকারীদের বিশেষ পুরস্কার' },
    { label: 'ক্রেস্ট ও সার্টিফিকেট', value: 'সকল অংশগ্রহণকারীদের জন্য সার্টিফিকেট' },
    { label: 'শিক্ষা উপকরণ', value: 'বই, খাতা, কলম সহ শিক্ষা উপকরণ' },
    { label: 'বিশেষ সংবর্ধনা', value: 'প্রতিভাবান শিক্ষার্থীদের সংবর্ধনা অনুষ্ঠান' }
  ]
};

const ScholarshipHero = () => {
  return (
    <>
      {/* Header Section */}
      <SectionHeader 
        title="কিশোরকণ্ঠ মেধাবৃত্তি"
        subtitle="শিক্ষার্থীদের মেধা ও প্রতিভা বিকাশে কিশোরকণ্ঠ পাঠক ফোরাম প্রতি বছর আয়োজন করে মেধাবৃত্তি পরীক্ষা।"
      />

      {/* Content Grid - Three Columns in One Row */}
      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
        
        {/* পরীক্ষার তথ্য */}
        <InfoCard
          Icon={BookIcon}
          title="পরীক্ষার তথ্য"
          items={SCHOLARSHIP_INFO.examDetails}
          bgColor="bg-emerald-100"
          textColor="text-emerald-600"
          dotColor="bg-emerald-500"
        />

        {/* যোগ্যতা */}
        <InfoCard
          Icon={UsersIcon}
          title="অংশগ্রহণের যোগ্যতা"
          items={SCHOLARSHIP_INFO.eligibility}
          bgColor="bg-teal-100"
          textColor="text-teal-600"
          dotColor="bg-teal-500"
        />

        {/* পুরস্কার */}
        <InfoCard
          Icon={TrophyIcon}
          title="পুরস্কার ও সম্মাননা"
          items={SCHOLARSHIP_INFO.rewards}
          bgColor="bg-amber-100"
          textColor="text-amber-600"
          dotColor="bg-amber-500"
        />

      </div>
    </>
  );
};

export default ScholarshipHero;
