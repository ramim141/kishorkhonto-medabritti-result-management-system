import React, { useState } from 'react';
import { 
  HiBookOpen, 
  HiAcademicCap, 
  HiDocumentText,
  HiChevronDown,
  HiSparkles,
  HiCheckCircle,
  HiExclamationTriangle,
  HiCalculator,
  HiLanguage,
  HiGlobeAlt,
  HiBeaker,
  HiLightBulb
} from 'react-icons/hi2';
import { FaBook } from 'react-icons/fa';

const SYLLABUS_DATA = [
  {
    id: 1,
    class: 'দশম শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'rose',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য ১. শিক্ষা ও মনুষ্যত্ব, ২. মানুষ মুহাম্মদ সা., ৩. প্রবাস বন্ধু',
          'পদ্য ১. আমি কোনো আগন্তুক নই, ২. সেই দিন এই মাঠ, ৩. বুদ্ধি',
          'ব্যাকরণঃ বাক্যের অংশ ও শ্রেণিবিভাগ, বাগধারা, কারক, সমাস সবর্ণ, জাতিক ও যৌগিক বাক্য'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit: 7-8, 11, 13, 16',
          'Grammar: Tag Question, Narration, Changing Sentence, Sentence Connectors, Suffix and Prefix'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
        topics: [
          '১. বীজগণিতিক অধ্যায় - ২, ৩, ১১',
          '২. জ্যামিতিঃ অধ্যায় - ৭, ৮',
          '৩. ত্রিকোণমিতিঃ অধ্যায় - ৯',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১৬'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান',
        icon: HiLightBulb,
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 2,
    class: 'নবম শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'violet',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য ১. মানুষ মুহাম্মদ (সাঃ), ২. নিজস্ব, ৩. উৎসর্গিত শক্তির উত্থান',
          'পদ্য ১. আশা, ২. আমি কোনো আগন্তুক নই',
          'ব্যাকরণঃ বিরামশ্ন, সবর্নাম, শব্দ বিতু, সন্ধি, শব্দের শ্রেণিবিভাগ'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit: 6-8, 11',
          'Grammar : Tag Question, Suffix and Prefix, Sentence Connectors, Punctuation, Narration'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
        topics: [
          '১. বীজগণিতঃ অধ্যায় - ৩',
          '২. জ্যামিতিঃ অধ্যায় - ৮',
          '৩. ত্রিকোণমিতিঃ অধ্যায় - ১৬',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১৭'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান',
        icon: HiLightBulb,
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 3,
    class: 'অষ্টম শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'blue',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য ১. বাংলা নববর্ষ, ২. বাংলা জামার ভদ্রতা, ৩. গন্তভূয়াশোনে কথা',
          'পদ্য ১. নদীর স্বপ্ন, ২. জাগো তবে অবনা করনো, ৩. প্রাণী',
          'ব্যাকরণঃ শব্দ পরিচয়, বাক্য, বিরাম চিহ্ন, শব্দার্থ'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit- 7-11',
          'Grammar : Changing Sentence, Narration, Right Form of Verbs, Tense'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
        topics: [
          '১. পাটিগণিতঃ অধ্যায় - ২, ৩',
          '২. বীজগণিতঃ অধ্যায় - ৫, ৬',
          '৩. জ্যামিতিঃ অধ্যায় - ৯, ১০',
          '৪. পরিসংখ্যানঃ অধ্যায় - ১১'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান',
        icon: HiLightBulb,
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 4,
    class: 'সপ্তম শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'emerald',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য ১. সেই ছেলেটি, ২. ছবির বৃষ্টি, ৩. বাংলাদেশের হৃদয়',
          'পদ্য ১. এই অক্ষরে, ২. সিপিটি, ৩. মোল্লা',
          'ব্যাকরণঃ বাক্য, শব্দার্থ, বনাম, বিরাম চিহ্ন'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit : 6-9',
          'Grammar : Article, Parts of Speech, Tense, Preposition'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
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
        icon: HiLightBulb,
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 5,
    class: 'ষষ্ঠ শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'amber',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য ১. আমাদের লোকশিল্প, ২. কৃষ্ণ কালা ধনে, ৩. মাদারি তেরেকোসা',
          'পদ্য ১. সাবির কাছে, ফুলের কাছে, ২. বীরের দাঁড়, ৩. ফাগুন মাস',
          'ব্যাকরণঃ রূপতত্ত্ব, বাগর্থ, অর্থপ্রদ'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Chapter : 25-31',
          'Grammar : Right Form of Verb, Parts of Speech, Article, Tense'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
        topics: [
          '১. পাটিগণিতঃ অধ্যায় - ১, ২',
          '২. বীজগণিতঃ অধ্যায় - ৫',
          '৩. জ্যামিতিঃ অধ্যায় - ৬, ৭',
          '৪. পরিসংখ্যানঃ অধ্যায় - ৮'
        ]
      },
      { 
        name: 'সাধারণ জ্ঞান',
        icon: HiLightBulb,
        topics: [
          'সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
        ]
      }
    ]
  },
  {
    id: 6,
    class: 'পঞ্চম শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'cyan',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য : ১. ভারত ছেলেটি, ২. বিদ্যাস হজ্জ, ৩. জন্মপরী ও কোর্টের গল্প, ৪. মুক্তুর্য ও পাখির কথা',
          'পদ্য : ১. দুই তীরে, ২. লোকক',
          'ব্যাকরণঃ পদ, বিশেষীত শব্দ, এক কথায় প্রকাশ'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit- 19-25',
          'Grammar: Adverb, Preposition, Tense, Sentence'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
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
        icon: HiBeaker,
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
    class: 'চতুর্থ শ্রেণি',
    subTitle: 'স্কুল/মাদ্রাসা',
    color: 'teal',
    subjects: [
      { 
        name: 'বাংলা',
        icon: HiLanguage,
        topics: [
          'পদ্য : ১. পদ্মা ভূমি কে, ২. ফুল আমি নোমাপারি, ৩. বল্লিরা হূদরের এমন (রাব)',
          'পদ্য : ১. কাজলা দিদি, ২. মা, ৩. বীর মুক্তি',
          'ব্যাকরণঃ বাক্যবান, এক কথায় প্রকাশ, পদ'
        ]
      },
      { 
        name: 'English',
        icon: HiGlobeAlt,
        topics: [
          'Unit: 35-42',
          'Grammar: Tense, Gender, Parts of Speech'
        ]
      },
      { 
        name: 'গণিত',
        icon: HiCalculator,
        topics: [
          '১. দশমিক ভগ্নাংশ',
          '২. সময়',
          '৩. উপার সহায় ও বিন্তুরুপ',
          '৪. ত্রিভুজ'
        ]
      },
      { 
        name: 'বিজ্ঞান',
        icon: HiBeaker,
        topics: [
          '১. আমার জীবনে প্রভুতি',
          '২. আবহাওয়া ও জলবায়ু',
          '৩. জলসংস্থা ও প্রাকৃতিক পরিবেশ'
        ]
      }
    ]
  }
];

const COLOR_CLASSES = {
  rose: {
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    border: 'border-rose-200',
    hoverBorder: 'hover:border-rose-400',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700',
    dot: 'bg-rose-500',
    light: 'bg-rose-50'
  },
  violet: {
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    hoverBorder: 'hover:border-violet-400',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    badge: 'bg-violet-100 text-violet-700',
    dot: 'bg-violet-500',
    light: 'bg-violet-50'
  },
  blue: {
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
    light: 'bg-blue-50'
  },
  emerald: {
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
    light: 'bg-emerald-50'
  },
  amber: {
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-500',
    light: 'bg-amber-50'
  },
  cyan: {
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50',
    border: 'border-cyan-200',
    hoverBorder: 'hover:border-cyan-400',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    badge: 'bg-cyan-100 text-cyan-700',
    dot: 'bg-cyan-500',
    light: 'bg-cyan-50'
  },
  teal: {
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
    border: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    dot: 'bg-teal-500',
    light: 'bg-teal-50'
  }
};

const Syllabus = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl"></div>
      </div>

      <div className="container relative z-10 max-w-6xl px-4 mx-auto">
        
        {/* Warning Box */}
        <div className="relative p-4 mb-8 overflow-hidden border-2 sm:p-6 border-amber-200 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
          
          <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-200/50">
              <HiExclamationTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-lg font-bold text-amber-800">বিশেষ দ্রষ্টব্য</h3>
              <p className="text-sm text-amber-700 sm:text-base">
                সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা <span className="font-bold">"অরেঞ্জ"</span> সংগ্রহ করতে হবে।
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="relative p-6 overflow-hidden border shadow-xl sm:p-8 bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl">
          
          {/* Card Header */}
          <div className="flex flex-col items-start gap-4 pb-6 mb-8 border-b border-gray-100 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 blur-lg opacity-40"></div>
              <div className="relative flex items-center justify-center shadow-lg w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <HiDocumentText className="text-white w-7 h-7 sm:w-8 sm:h-8" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
                পরীক্ষার <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">সিলেবাস</span>
              </h2>
              <p className="mt-1 text-gray-500">শ্রেণি অনুযায়ী বিস্তারিত সিলেবাস</p>
            </div>
            <div className="sm:ml-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                <HiAcademicCap className="w-5 h-5" />
                {SYLLABUS_DATA.length} টি শ্রেণি
              </span>
            </div>
          </div>
          
          {/* Accordion List */}
          <div className="space-y-4">
            {SYLLABUS_DATA.map((item, index) => {
              const colors = COLOR_CLASSES[item.color];
              const isOpen = openAccordion === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`
                    relative overflow-hidden rounded-2xl
                    border-2 ${colors.border} ${colors.hoverBorder}
                    transition-all duration-500
                    ${isOpen ? 'shadow-xl' : 'shadow-md hover:shadow-lg'}
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`
                      relative w-full p-4 sm:p-5 text-left
                      transition-all duration-300
                      bg-gradient-to-r ${colors.bgGradient}
                      hover:brightness-95
                      group
                    `}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 transition-all duration-700 -translate-x-full opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:opacity-100 group-hover:translate-x-full"></div>
                    
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Class Icon */}
                        <div className={`
                          flex items-center justify-center
                          w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                          ${colors.iconBg} ${colors.iconColor}
                          shadow-md
                          transition-all duration-300
                          group-hover:scale-110 group-hover:rotate-3
                        `}>
                          <FaBook className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        
                        {/* Title */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                            {item.class}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.badge} mt-1`}>
                            <HiAcademicCap className="w-3.5 h-3.5" />
                            {item.subTitle}
                          </span>
                        </div>
                      </div>
                      
                      {/* Subject Count & Arrow */}
                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 text-gray-600 text-sm font-medium shadow-sm">
                          <HiBookOpen className="w-4 h-4" />
                          {item.subjects.length} টি বিষয়
                        </span>
                        
                        <div className={`
                          flex items-center justify-center
                          w-8 h-8 sm:w-10 sm:h-10 rounded-full
                          bg-white/80 backdrop-blur-sm shadow-md
                          transition-all duration-300
                          ${isOpen ? 'rotate-180 bg-gradient-to-br ' + colors.gradient : ''}
                        `}>
                          <HiChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="p-4 bg-white border-t border-gray-100 sm:p-6">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {item.subjects.map((subject, subIndex) => {
                          const SubjectIcon = subject.icon;
                          return (
                            <div 
                              key={subIndex} 
                              className={`
                                group/card relative p-4 sm:p-5
                                rounded-xl sm:rounded-2xl
                                border border-gray-100
                                bg-gradient-to-br from-gray-50 to-white
                                transition-all duration-300
                                hover:shadow-lg hover:-translate-y-1
                                hover:border-transparent
                              `}
                              style={{ animationDelay: `${subIndex * 100}ms` }}
                            >
                              {/* Hover Background */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}></div>
                              
                              <div className="relative z-10">
                                {/* Subject Header */}
                                <div className="flex items-center gap-3 mb-4">
                                  <div className={`
                                    flex items-center justify-center
                                    w-10 h-10 rounded-lg
                                    ${colors.iconBg} ${colors.iconColor}
                                    transition-all duration-300
                                    group-hover/card:scale-110
                                  `}>
                                    <SubjectIcon className="w-5 h-5" />
                                  </div>
                                  <h4 className="text-lg font-bold text-gray-800">
                                    {subject.name}
                                  </h4>
                                </div>
                                
                                {/* Topics List */}
                                <ul className="space-y-2.5">
                                  {subject.topics.map((topic, topicIndex) => (
                                    <li 
                                      key={topicIndex} 
                                      className="flex items-start gap-2.5 group/item"
                                    >
                                      <span className={`
                                        flex-shrink-0 w-5 h-5 mt-0.5
                                        flex items-center justify-center
                                        rounded-full ${colors.light}
                                        transition-all duration-300
                                        group-hover/item:scale-110
                                      `}>
                                        <HiCheckCircle className={`w-4 h-4 ${colors.iconColor}`} />
                                      </span>
                                      <span className="text-sm leading-relaxed text-gray-600">
                                        {topic}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-center gap-2 pt-6 mt-8 border-t border-gray-100">
            <HiSparkles className="w-5 h-5 text-indigo-500" />
            <p className="text-sm text-gray-500">
              সিলেবাস অনুযায়ী প্রস্তুতি নিন এবং সাফল্য অর্জন করুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;