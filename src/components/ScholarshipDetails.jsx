import React, { useState } from 'react';

// ============= DATA CONSTANTS =============
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
  ],
  applicationProcess: [
    { step: '১', label: 'ফর্ম সংগ্রহ', value: 'আমাদের অফিস থেকে আবেদন ফর্ম সংগ্রহ করুন' },
    { step: '২', label: 'প্রয়োজনীয় কাগজপত্র', value: 'সত্যায়িত মার্কশিট, জন্ম নিবন্ধন, ছবি' },
    { step: '৩', label: 'ফর্ম জমা', value: 'নির্ধারিত সময়ের মধ্যে ফর্ম জমা দিন' },
    { step: '৪', label: 'প্রবেশপত্র', value: 'পরীক্ষার আগে প্রবেশপত্র সংগ্রহ করুন' }
  ]
};

const LOCATIONS = [
  { name: 'পশ্চিম লাইব্রেরী', address: 'বাজা মালনপাথ, জিন্দাবাজার', phone: '০১৭৫২৮১১৮৪' },
  { name: 'স্বামীনী লাইব্রেরী', address: 'শাহজালাল জামেয়ার পাশে, মদিনা মার্কেট', phone: '০১৭৫২৮১১৮৪' },
  { name: 'সৌদ্য একাডেমিক্স', address: 'দ্বি-নাৎ জুমার স্কুলের বিপরীতে, সিরের মহলন', phone: '০১৩০০২০৮১৮৮' },
  { name: 'ঢাকা বুক ডিপো এন্ড কৌণশালারী', address: '১নং ইসলামাবাদ টাওয়ার, ইসলামাবাদ মার্কেট রোড, লালদিঘীর পার, সিলেট।', phone: '০১৮২৮৭৪৩৯' },
  { name: 'প্রজিনিয়াল লাইব্রেরী', address: 'আইহম মানসুল, জিন্দাবাজার', phone: '০১৭৫২৮১১৮৪' },
  { name: 'মনোরম লাইব্রেরী', address: 'ইবনে সিনার পাশে, রিকাবিবাজার', phone: '০১৭৭৯০৮৬৪৫' },
  { name: 'ফ্রেন্ডস লাইব্রেরী', address: 'আরশিকানা গলির এর বিপরীতে, হাউজিং স্টেট', phone: '০১৭৫২৮১১৮৪' }
];

const SYLLABUS_DATA = [
  {
    id: 1,
    class: 'দশম শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য ১. শিক্ষা ও মনুষ্যত্ব, ২. মানুষ মুহাম্মদ সা., ৩. প্রবাস বন্ধু',
          'পদ্য ১. আমি কোনো আগন্তুক নই, ২. সেই দিন এই মাঠ, ৩. বুদ্ধি',
          'ব্যাকরণঃ বাক্যের অংশ ও শ্রেণিবিভাগ, বাগধারা, কারক, সমাস সবর্ণ, জাতিক ও যৌগিক বাক্য'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit: 7-8, 11, 13, 16',
          'Grammar: Tag Question, Narration, Changing Sentence, Sentence Connectors, Suffix and Prefix'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. বীজগণিতিক অধ্যায় - ২, ৩, ১১',
          '২. জ্যামিতিঃ অধ্যায় - ৭, ৮',
          '৩. ত্রিকোণমিতিঃ অধ্যায় - ৯',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১৬'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান', 
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 2,
    class: 'নবম শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য ১. মানুষ মুহাম্মদ (সাঃ), ২. নিজস্ব, ৩. উৎসর্গিত শক্তির উত্থান',
          'পদ্য ১. আশা, ২. আমি কোনো আগন্তুক নই',
          'ব্যাকরণঃ বিরামশ্ন, সবর্নাম, শব্দ বিতু, সন্ধি, শব্দের শ্রেণিবিভাগ'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit: 6-8, 11',
          'Grammar : Tag Question, Suffix and Prefix, Sentence Connectors, Punctuation, Narration'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. বীজগণিতঃ অধ্যায় - ৩',
          '২. জ্যামিতিঃ অধ্যায় - ৮',
          '৩. ত্রিকোণমিতিঃ অধ্যায় - ১৬',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১৭'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান', 
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 3,
    class: 'অষ্টম শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য ১. বাংলা নববর্ষ, ২. বাংলা জামার ভদ্রতা, ৩. গন্তভূয়াশোনে কথা',
          'পদ্য ১. নদীর স্বপ্ন, ২. জাগো তবে অবনা করনো, ৩. প্রাণী',
          'ব্যাকরণঃ শব্দ পরিচয়, বাক্য, বিরাম চিহ্ন, শব্দার্থ'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit- 7-11',
          'Grammar : Changing Sentence, Narration, Right Form of Verbs, Tense'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. পাটিগণিতঃ অধ্যায় - ২, ৩',
          '২. বীজগণিতঃ অধ্যায় - ৫, ৬',
          '৩. জ্যামিতিঃ অধ্যায় - ৯, ১০',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১১'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান', 
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 4,
    class: 'সপ্তম শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য ১. সেই ছেলেটি, ২. ছবির বৃষ্টি, ৩. বাংলাদেশের হৃদয়',
          'পদ্য ১. এই অক্ষরে, ২. সিপিটি, ৩. মোল্লা',
          'ব্যাকরণঃ বাক্য, শব্দার্থ, বনাম, বিরাম চিহ্ন'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit : 6-9',
          'Grammar : Article, Parts of Speech, Tense, Preposition'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. সমানুপাত ও লাভ-ক্ষতি',
          '২. পরিমাপ',
          '৩. বীজগণিতীয় সূত্রাবলি ও প্রয়োগ',
          '৪. সবর্সমতা ও সদৃশতা',
          '৫. তথ্য ও উপাত্ত'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান', 
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 5,
    class: 'ষষ্ঠ শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য ১. আমাদের লোকশিল্প, ২. কৃষ্ণ কালা ধনে, ৩. মাদারি তেরেকোসা',
          'পদ্য ১. সাবির কাছে, ফুলের কাছে, ২. বীরের দাঁড়, ৩. ফাগুন মাস',
          'ব্যাকরণঃ রূপতত্ত্ব, বাগর্থ, অর্থপ্রদ'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Chapter : 25-31',
          'Grammar : Right Form of Verb, Parts of Speech, Article, Tense'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. পাটিগণিতঃ অধ্যায় - ১, ২',
          '২. বীজগণিতঃ অধ্যায় - ৫',
          '৩. জ্যামিতিঃ অধ্যায় - ৬, ৭',
          '৪. পরিসংখ্যানঃ অধ্যায় - ৮'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান', 
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 6,
    class: 'পঞ্চম শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য : ১. ভারত ছেলেটি, ২. বিদ্যাস হজ্জ, ৩. জন্মপরী ও কোর্টের গল্প, ৪. মুক্তুর্য ও পাখির কথা',
          'পদ্য : ১. দুই তীরে, ২. লোকক',
          'ব্যাকরণঃ পদ, বিশেষীত শব্দ, এক কথায় প্রকাশ'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit- 19-25',
          'Grammar: Adverb, Preposition, Tense, Sentence'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. দশমিক ভগ্নাংশ',
          '২. শতকরা',
          '৩. জ্যামিতি',
          '৪. পরিমাপ',
          '৫. উপাত্ত বিন্যাসকরণ'
        ]
      },
      { 
        name: 'বিজ্ঞান', 
        topics: [
          '১. আমাদের জীবনে তথ্য',
          '২. আবহাওয়া ও জলবায়ু',
          '৩. প্রাকৃতিক সম্পদ',
          '৪. জলসংস্থা ও প্রাকৃতিক পরিবেশ'
        ]
      }
    ]
  },
  {
    id: 7,
    class: 'চতুর্থ শ্রেণি (স্কুল/মাদ্রাসা)',
    subjects: [
      { 
        name: 'বাংলা', 
        topics: [
          'পদ্য : ১. পদ্মা ভূমি কে, ২. ফুল আমি নোমাপারি, ৩. বল্লিরা হূদরের এমন (রাব)',
          'পদ্য : ১. কাজলা দিদি, ২. মা, ৩. বীর মুক্তি',
          'ব্যাকরণঃ বাক্যবান, এক কথায় প্রকাশ, পদ'
        ]
      },
      { 
        name: 'English', 
        topics: [
          'Unit: 35-42',
          'Grammar: Tense, Gender, Parts of Speech'
        ]
      },
      { 
        name: 'গণিত', 
        topics: [
          '১. দশমিক ভগ্নাংশ',
          '২. সময়',
          '৩. উপার সহায় ও বিন্তুরুপ',
          '৪. ত্রিভুজ'
        ]
      },
      { 
        name: 'বিজ্ঞান', 
        topics: [
          '১. আমার জীবনে প্রভুতি',
          '২. আবহাওয়া ও জলবায়ু',
          '৩. জলসংস্থা ও প্রাকৃতিক পরিবেশ'
        ]
      }
    ]
  }
];

// ============= ICON COMPONENTS =============
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v7.125M12 3.75v-1.5" />
  </svg>
);

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-6 h-6 mt-1 text-amber-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

// ============= SUB COMPONENTS =============
const Badge = ({ text }) => (
  <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600">
    <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
    {text}
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <Badge text="মেধাবৃত্তি তথ্য" />
    <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
      {title} <span className="text-emerald-600">২০২৫</span>
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-gray-600">{subtitle}</p>
  </div>
);

const CardIcon = ({ Icon, bgColor, textColor }) => (
  <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${bgColor} ${textColor}`}>
    <Icon />
  </div>
);

const InfoItem = ({ label, value, dotColor = 'bg-emerald-500' }) => (
  <div className="flex items-start">
    <span className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${dotColor}`}></span>
    <div className="ml-4">
      <p className="font-semibold text-gray-700">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const StepItem = ({ step, label, value }) => (
  <div className="flex items-start">
    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 text-xs font-bold text-white rounded-full bg-cyan-500">
      {step}
    </span>
    <div className="ml-4">
      <p className="font-semibold text-gray-700">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const InfoCard = ({ Icon, title, items, bgColor, textColor, dotColor, ItemComponent = InfoItem }) => (
  <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl">
    <div className="flex items-center mb-6">
      <CardIcon Icon={Icon} bgColor={bgColor} textColor={textColor} />
      <h2 className="ml-4 text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        ItemComponent === StepItem ? (
          <ItemComponent key={index} {...item} />
        ) : (
          <ItemComponent key={index} {...item} dotColor={dotColor} />
        )
      ))}
    </div>
  </div>
);

const WarningBox = ({ title, message }) => (
  <div className="p-6 mb-12 border-l-4 rounded-lg bg-amber-50 border-amber-500">
    <div className="flex items-start">
      <WarningIcon />
      <div className="ml-4">
        <h3 className="mb-2 text-lg font-bold text-amber-800">{title}</h3>
        <p className="text-amber-700">{message}</p>
      </div>
    </div>
  </div>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const SyllabusSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="p-8 mb-12 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl">
      <div className="flex items-center mb-8">
        <CardIcon Icon={DocumentIcon} bgColor="bg-indigo-100" textColor="text-indigo-600" />
        <h2 className="ml-4 text-2xl font-bold text-gray-800">পরীক্ষার সিলেবাস</h2>
      </div>
      
      <div className="space-y-4">
        {SYLLABUS_DATA.map((item) => (
          <div key={item.id} className="overflow-hidden border border-gray-200 rounded-lg">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition-all bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100"
            >
              <span className="text-lg font-semibold text-gray-800">{item.class}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${
                  openAccordion === item.id ? 'rotate-180' : ''
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openAccordion === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {item.subjects.map((subject, index) => (
                    <div key={index} className="p-4 transition-all border border-gray-100 rounded-lg hover:shadow-md bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-emerald-700">{subject.name}</h4>
                      </div>
                      <ul className="space-y-2">
                        {subject.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-emerald-500"></span>
                            <span className="text-sm text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RegistrationCTA = () => (
  <div className="relative p-8 mb-12 overflow-hidden text-center rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="registration-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#registration-pattern)" />
      </svg>
    </div>
    <div className="relative z-10">
      <h2 className="mb-4 text-3xl font-bold text-white">এখনই রেজিস্ট্রেশন করুন</h2>
      <button className="px-8 py-3 font-semibold transition-all transform bg-white rounded-lg text-emerald-700 hover:scale-105 hover:shadow-lg">
        অনলাইন রেজিস্ট্রেশন
      </button>
      <p className="mt-4 text-white/90">অথবা আপনার স্কুল প্রতিনিধির সাথে যোগাযোগ করুন</p>
    </div>
  </div>
);

const LocationCard = ({ name, address, phone }) => (
  <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl">
    <h3 className="mb-3 text-xl font-bold text-gray-800">{name}</h3>
    <p className="mb-2 text-gray-600">{address}</p>
    <p className="font-semibold text-amber-600">ফোন: {phone}</p>
  </div>
);

const LocationsSection = ({ locations }) => (
  <div className="mb-12">
    <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
      আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  </div>
);

const ContactCTA = () => (
  <div className="p-8 text-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600">
    <h2 className="mb-4 text-3xl font-bold text-white">আরও তথ্যের জন্য যোগাযোগ করুন</h2>
    <p className="mb-6 text-lg text-white/90">
      মেধাবৃত্তি সম্পর্কে আরও বিস্তারিত জানতে আমাদের অফিসে যোগাযোগ করুন।
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="tel:+8801711000000" className="px-8 py-3 font-semibold transition-all transform bg-white rounded-lg text-emerald-600 hover:scale-105 hover:shadow-lg">
        ফোন করুন
      </a>
      <a href="mailto:info@kishorkhonto.com" className="px-8 py-3 font-semibold text-white transition-all transform border-2 border-white rounded-lg hover:bg-white hover:text-emerald-600 hover:scale-105">
        ইমেইল করুন
      </a>
    </div>
  </div>
);

// ============= MAIN COMPONENT =============
const ScholarshipDetails = () => {
  return (
    <div className="w-full bg-white">
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        
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

        {/* আবেদন প্রক্রিয়া - Horizontal Flow */}
        <div className="p-8 mb-12 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl">
          <div className="flex items-center justify-center mb-10">
            <CardIcon Icon={ClipboardIcon} bgColor="bg-cyan-100" textColor="text-cyan-600" />
            <h2 className="ml-4 text-3xl font-bold text-center text-gray-800">আবেদন প্রক্রিয়া</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SCHOLARSHIP_INFO.applicationProcess.map((item, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg">
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-center w-16 h-16 mb-4 text-2xl font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    {item.step}
                  </div>
                  
                  {/* Step Label */}
                  <h3 className="mb-2 text-lg font-bold text-gray-800">{item.label}</h3>
                  
                  {/* Step Description */}
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
                
                {/* Arrow (except for last item) */}
                {index < SCHOLARSHIP_INFO.applicationProcess.length - 1 && (
                  <div className="absolute z-10 items-center justify-center hidden transform -translate-y-1/2 lg:flex -right-3 top-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* বিশেষ দ্রষ্টব্য */}
        <WarningBox
          title="বিশেষ দ্রষ্টব্য"
          message='সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        />

        {/* পরীক্ষার সিলেবাস */}
        <SyllabusSection />

        {/* রেজিস্ট্রেশন CTA */}
        <RegistrationCTA />

        {/* আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা */}
        <LocationsSection locations={LOCATIONS} />

        {/* যোগাযোগ CTA */}
        <ContactCTA />

      </div>
    </div>
  );
};

export default ScholarshipDetails;