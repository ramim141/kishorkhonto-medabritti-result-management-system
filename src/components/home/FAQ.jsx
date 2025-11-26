import React, { useState, useMemo } from 'react';
import { 
  HiChevronDown, 
  HiQuestionMarkCircle,
  HiMagnifyingGlass,
  HiXMark,
  HiPhone,
  HiEnvelope,
  HiCheckBadge,
  HiLightBulb,
  HiAcademicCap,
  HiCurrencyDollar,
  HiCalendarDays,
  HiDocumentText,
  HiShieldCheck
} from 'react-icons/hi2';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'সকল', icon: HiQuestionMarkCircle, color: 'emerald' },
    { id: 'eligibility', name: 'যোগ্যতা', icon: HiAcademicCap, color: 'blue' },
    { id: 'registration', name: 'রেজিস্ট্রেশন', icon: HiDocumentText, color: 'purple' },
    { id: 'exam', name: 'পরীক্ষা', icon: HiCheckBadge, color: 'cyan' },
    { id: 'payment', name: 'পেমেন্ট', icon: HiCurrencyDollar, color: 'amber' },
  ];

  const faqs = [
    {
      category: 'eligibility',
      question: "মেধাবৃত্তি পরীক্ষায় অংশগ্রহণের যোগ্যতা কী?",
      answer: "৫ম থেকে ১০ম শ্রেণির যেকোনো শিক্ষার্থী যারা সিলেট মহানগর এবং আশেপাশের এলাকায় অধ্যয়নরত এবং পূর্ববর্তী ক্লাসে ন্যূনতম ৬০% নম্বর পেয়েছে তারা আবেদন করতে পারবে। শিক্ষার্থীকে অবশ্যই স্বীকৃত শিক্ষা প্রতিষ্ঠানে নিয়মিত অধ্যয়নরত হতে হবে।",
      icon: HiAcademicCap,
      color: 'blue'
    },
    {
      category: 'payment',
      question: "আবেদন ফি কত এবং কীভাবে জমা দিতে হবে?",
      answer: "আবেদন ফি মাত্র ১৫০ টাকা। আপনি আমাদের নির্দিষ্ট বিকাশ নম্বরে পেমেন্ট করতে পারবেন অথবা সরাসরি আমাদের অফিস থেকে ফর্ম সংগ্রহের সময় নগদ পরিশোধ করতে পারবেন। অনলাইন রেজিস্ট্রেশনের ক্ষেত্রে পেমেন্ট স্লিপ আপলোড করতে হবে।",
      icon: HiCurrencyDollar,
      color: 'amber'
    },
    {
      category: 'exam',
      question: "পরীক্ষার বিষয় ও মোট নম্বর কত?",
      answer: "পরীক্ষায় মোট ৪টি বিষয় থাকবে - বাংলা, ইংরেজি, গণিত এবং সাধারণ জ্ঞান। প্রতিটি বিষয়ে ২৫ নম্বর করে মোট ১০০ নম্বরের পরীক্ষা হবে। পরীক্ষার সময়কাল ২ ঘণ্টা এবং এতে বহুনির্বাচনী ও সৃজনশীল প্রশ্ন থাকবে।",
      icon: HiDocumentText,
      color: 'purple'
    },
    {
      category: 'exam',
      question: "সাধারণ জ্ঞানের জন্য কোন ম্যাগাজিন পড়তে হবে?",
      answer: "সাধারণ জ্ঞানের জন্য জানুয়ারি থেকে জুলাই ২০২৫ পর্যন্ত প্রকাশিত কিশোরকণ্ঠ ম্যাগাজিন এবং বিশেষ সংখ্যা 'অরেঞ্জ' থেকে প্রশ্ন করা হবে। এই ম্যাগাজিনগুলো সিলেটের বিভিন্ন লাইব্রেরি এবং বইয়ের দোকান থেকে সংগ্রহ করা যাবে।",
      icon: HiLightBulb,
      color: 'cyan'
    },
    {
      category: 'exam',
      question: "মেধাবৃত্তিতে কী কী পুরস্কার দেওয়া হয়?",
      answer: "১ম, ২য় ও ৩য় স্থান অধিকারীদের বিশেষ নগদ পুরস্কার, ক্রেস্ট এবং সার্টিফিকেট প্রদান করা হয়। এছাড়াও মেধাবী শিক্ষার্থীদের জন্য শিক্ষা উপকরণ (বই, খাতা, কলম) এবং সংবর্ধনা অনুষ্ঠানের আয়োজন করা হয়। সকল অংশগ্রহণকারীরা সার্টিফিকেট পাবেন।",
      icon: HiCheckBadge,
      color: 'emerald'
    },
    {
      category: 'exam',
      question: "রেজাল্ট কখন এবং কীভাবে প্রকাশ করা হবে?",
      answer: "পরীক্ষার ১৫-২০ দিনের মধ্যে রেজাল্ট প্রকাশ করা হবে। রেজাল্ট আমাদের ওয়েবসাইটে প্রকাশ করা হবে এবং বিজয়ী শিক্ষার্থীদের মোবাইলে SMS-এর মাধ্যমে জানানো হবে। এছাড়াও আমাদের Facebook পেজেও রেজাল্ট শেয়ার করা হবে।",
      icon: HiCalendarDays,
      color: 'rose'
    },
    {
      category: 'registration',
      question: "পরীক্ষার প্রবেশপত্র কীভাবে পাবো?",
      answer: "আবেদন সম্পূর্ণ হওয়ার পর এবং নির্ধারিত তারিখে আপনার রেজিস্ট্রেশন নম্বর দিয়ে আমাদের ওয়েবসাইট থেকে প্রবেশপত্র ডাউনলোড করতে পারবেন। অনলাইনে প্রবেশপত্র না পেলে আমাদের অফিস থেকে সরাসরি সংগ্রহ করতে পারবেন। পরীক্ষার দিন প্রবেশপত্র সাথে আনা বাধ্যতামূলক।",
      icon: HiDocumentText,
      color: 'indigo'
    },
    {
      category: 'exam',
      question: "পরীক্ষায় কোন কোন জিনিস আনা যাবে?",
      answer: "পরীক্ষার হলে প্রবেশপত্র, কলম, পেন্সিল, রাবার, এবং স্কেল আনতে পারবেন। ক্যালকুলেটর, মোবাইল ফোন, স্মার্টওয়াচ বা যেকোনো ইলেকট্রনিক ডিভাইস কঠোরভাবে নিষিদ্ধ। এসব নিয়ম লঙ্ঘন করলে পরীক্ষার্থীকে অযোগ্য ঘোষণা করা হবে।",
      icon: HiShieldCheck,
      color: 'red'
    },
    {
      category: 'registration',
      question: "অনলাইনে রেজিস্ট্রেশন করা যাবে কি?",
      answer: "হ্যাঁ, আমাদের ওয়েবসাইটে অনলাইন রেজিস্ট্রেশনের সুবিধা রয়েছে। অনলাইনে ফর্ম পূরণ করে প্রয়োজনীয় ডকুমেন্ট আপলোড এবং ফি পেমেন্ট করলেই রেজিস্ট্রেশন সম্পূর্ণ হবে। তবে চাইলে সরাসরি আমাদের অফিস বা নির্ধারিত লাইব্রেরি থেকেও ফর্ম সংগ্রহ ও জমা দেওয়া যাবে।",
      icon: HiDocumentText,
      color: 'teal'
    },
    {
      category: 'exam',
      question: "পূর্ববর্তী বছরের প্রশ্নপত্র পাওয়া যাবে কি?",
      answer: "হ্যাঁ, পূর্ববর্তী ৩ বছরের প্রশ্নপত্র আমাদের ওয়েবসাইটের 'সিলেবাস' সেকশনে পাওয়া যাবে। এছাড়াও আমাদের অফিস থেকে মডেল প্রশ্নপত্র সংগ্রহ করা যাবে। এগুলো পড়লে পরীক্ষার ধরন সম্পর্কে ভালো ধারণা পাওয়া যাবে।",
      icon: HiLightBulb,
      color: 'violet'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, faqs]);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-cyan-500',
        hover: 'hover:bg-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-pink-500',
        hover: 'hover:bg-purple-100'
      },
      emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        gradient: 'from-emerald-500 to-teal-500',
        hover: 'hover:bg-emerald-100'
      },
      amber: {
        bg: 'bg-amber-50',
        text: 'text-amber-600',
        border: 'border-amber-200',
        gradient: 'from-amber-500 to-orange-500',
        hover: 'hover:bg-amber-100'
      },
      cyan: {
        bg: 'bg-cyan-50',
        text: 'text-cyan-600',
        border: 'border-cyan-200',
        gradient: 'from-cyan-500 to-blue-500',
        hover: 'hover:bg-cyan-100'
      },
      rose: {
        bg: 'bg-rose-50',
        text: 'text-rose-600',
        border: 'border-rose-200',
        gradient: 'from-rose-500 to-pink-500',
        hover: 'hover:bg-rose-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        gradient: 'from-indigo-500 to-purple-500',
        hover: 'hover:bg-indigo-100'
      },
      red: {
        bg: 'bg-red-50',
        text: 'text-red-600',
        border: 'border-red-200',
        gradient: 'from-red-500 to-orange-500',
        hover: 'hover:bg-red-100'
      },
      teal: {
        bg: 'bg-teal-50',
        text: 'text-teal-600',
        border: 'border-teal-200',
        gradient: 'from-teal-500 to-cyan-500',
        hover: 'hover:bg-teal-100'
      },
      violet: {
        bg: 'bg-violet-50',
        text: 'text-violet-600',
        border: 'border-violet-200',
        gradient: 'from-violet-500 to-purple-500',
        hover: 'hover:bg-violet-100'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-emerald-200 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 bg-purple-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 bg-pink-200 rounded-full left-1/2 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700">
              <HiQuestionMarkCircle className="w-5 h-5" />
              সাধারণ জিজ্ঞাসা
            </div>
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              প্রায়শই জিজ্ঞাসিত <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">প্রশ্নাবলী</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              মেধাবৃত্তি পরীক্ষা সম্পর্কিত আপনার সকল প্রশ্নের উত্তর এখানে পাবেন
            </p>
            <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <HiMagnifyingGlass className="absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="প্রশ্ন খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-12 text-lg transition-all duration-300 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute p-2 text-gray-400 transition-colors transform -translate-y-1/2 rounded-full right-2 top-1/2 hover:text-gray-600 hover:bg-gray-100"
                >
                  <HiXMark className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const colors = getColorClasses(cat.color);
              const isActive = selectedCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold
                    transition-all duration-300 transform
                    ${isActive 
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg scale-105` 
                      : `${colors.bg} ${colors.text} ${colors.hover} hover:scale-105`
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{cat.name}</span>
                  {isActive && (
                    <span className="px-2 py-0.5 text-xs bg-white/30 rounded-full">
                      {faqs.filter(f => cat.id === 'all' || f.category === cat.id).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-emerald-600">{filteredFAQs.length}</span> টি ফলাফল পাওয়া গেছে
              </p>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const Icon = faq.icon;
                const colors = getColorClasses(faq.color);
                const isOpen = openIndex === index;
                
                return (
                  <div
                    key={index}
                    className={`
                      relative overflow-hidden transition-all duration-500 bg-white 
                      border-2 shadow-md rounded-2xl
                      ${isOpen 
                        ? `${colors.border} shadow-xl scale-[1.02]` 
                        : 'border-gray-100 hover:shadow-xl hover:border-emerald-100'
                      }
                    `}
                  >
                    {/* Gradient Border Effect */}
                    {isOpen && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-5 pointer-events-none`}></div>
                    )}

                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`
                        relative flex items-start justify-between w-full p-6 text-left 
                        transition-all duration-300
                        ${isOpen ? colors.hover : 'hover:bg-emerald-50/30'}
                      `}
                    >
                      <div className="flex items-start flex-1 gap-4">
                        {/* Icon */}
                        <div className={`
                          flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl
                          ${colors.bg} ${colors.text}
                          ${isOpen ? 'scale-110 rotate-12' : ''}
                          transition-all duration-300
                        `}>
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        {/* Question Text */}
                        <div className="flex-1 pr-4">
                          <h3 className={`
                            text-lg font-bold md:text-xl
                            ${isOpen ? 'text-emerald-700' : 'text-gray-800'}
                            transition-colors duration-300
                          `}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      {/* Chevron Icon */}
                      <div className={`
                        flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full
                        ${isOpen ? `${colors.bg} ${colors.text}` : 'bg-gray-100 text-gray-500'}
                        transition-all duration-300
                        ${isOpen ? 'rotate-180 scale-110' : 'hover:scale-110'}
                      `}>
                        <HiChevronDown className="w-6 h-6" />
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`
                        transition-all duration-500 ease-in-out
                        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        overflow-hidden
                      `}
                    >
                      <div className="px-6 pb-6">
                        <div className={`
                          p-6 rounded-xl
                          ${colors.bg}
                          border-l-4 ${colors.border}
                        `}>
                          <p className="leading-relaxed text-gray-700">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 rounded-full">
                  <HiMagnifyingGlass className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">কোনো ফলাফল পাওয়া যায়নি</h3>
                <p className="text-gray-600">অন্য কিছু খুঁজে দেখুন বা ফিল্টার পরিবর্তন করুন</p>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
            <div className="p-6 text-center transition-all duration-300 transform bg-white border-2 border-gray-100 shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl hover:border-emerald-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl">
                <HiQuestionMarkCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-1 text-3xl font-bold text-gray-800">{faqs.length}+</h4>
              <p className="text-sm text-gray-600">প্রশ্ন ও উত্তর</p>
            </div>

            <div className="p-6 text-center transition-all duration-300 transform bg-white border-2 border-gray-100 shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl hover:border-purple-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                <HiAcademicCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-1 text-3xl font-bold text-gray-800">{categories.length - 1}</h4>
              <p className="text-sm text-gray-600">বিভিন্ন ক্যাটাগরি</p>
            </div>

            <div className="p-6 text-center transition-all duration-300 transform bg-white border-2 border-gray-100 shadow-lg rounded-2xl hover:scale-105 hover:shadow-xl hover:border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                <HiLightBulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-1 text-3xl font-bold text-gray-800">24/7</h4>
              <p className="text-sm text-gray-600">সহায়তা উপলব্ধ</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="relative p-8 mt-12 overflow-hidden text-center border-2 border-dashed rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-emerald-200">
            {/* Decorative Elements */}
            <div className="absolute w-32 h-32 rounded-full bg-emerald-200 -top-16 -left-16 opacity-30 blur-2xl"></div>
            <div className="absolute w-32 h-32 bg-teal-200 rounded-full -bottom-16 -right-16 opacity-30 blur-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl">
                <HiQuestionMarkCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                আপনার প্রশ্নের উত্তর পাননি?
              </h3>
              <p className="max-w-xl mx-auto mb-6 text-gray-600">
                আমাদের সাথে সরাসরি যোগাযোগ করুন। আমরা সাহায্য করতে প্রস্তুত এবং আপনার সকল প্রশ্নের উত্তর দিতে খুশি হবো।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+8801711000000"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all transform shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1 hover:scale-105"
                >
                  <HiPhone className="w-5 h-5" />
                  ফোন করুন
                </a>
                <a
                  href="mailto:info@kishorkhonto.com"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all transform bg-white border-2 shadow-lg text-emerald-700 border-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white hover:-translate-y-1 hover:scale-105"
                >
                  <HiEnvelope className="w-5 h-5" />
                  ইমেইল করুন
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;