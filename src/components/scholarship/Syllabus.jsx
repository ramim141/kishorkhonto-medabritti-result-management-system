import React, { useState } from 'react';
import { CardIcon, DocumentIcon, WarningBox } from './ScholarshipUI';

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

const Syllabus = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      {/* বিশেষ দ্রষ্টব্য */}
      <WarningBox
        title="বিশেষ দ্রষ্টব্য"
        message='সাধারণ জ্ঞানের জন্য (জানুয়ারি - জুলাই২৫) কিশোরকণ্ঠ এবং বিশেষ সংখ্যা "অরেঞ্জ" সংগ্রহ করতে হবে।'
      />

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
    </>
  );
};

export default Syllabus;
