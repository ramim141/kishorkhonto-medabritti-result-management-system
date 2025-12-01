import React from 'react';
import { HiAcademicCap, HiBookOpen } from 'react-icons/hi2';

// ============= DATA CONSTANTS =============
const ABOUT_DATA = {
  badge: 'আমাদের সম্পর্কে',
  title: 'মেধা ও মনন বিকাশে',
  highlightedTitle: 'আমাদের পথচলা',
  description: 'কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর ১৯৮৪ সালে প্রতিষ্ঠিত একটি স্বেচ্ছাসেবী সংগঠন। দীর্ঘ চার দশকেরও বেশি সময় ধরে আমরা শিক্ষার্থীদের মেধা বিকাশ, নৈতিক চরিত্র গঠন এবং সুস্থ সংস্কৃতির চর্চায় নিরলসভাবে কাজ করে যাচ্ছি।',
  videoTitle: 'কিশোরকণ্ঠ মেধাবৃত্তি-২০২৫',
  videoUrl: 'https://www.facebook.com/61550084636519/videos/1560922935088975/'
};

const FEATURES = [
  {
    icon: 'graduation',
    title: 'মেধাবৃত্তি পরীক্ষা',
    description: 'শিক্ষার্থীদের সুপ্ত প্রতিভা অন্বেষণে প্রতি বছর আমরা আয়োজন করি বিশাল মেধাবৃত্তি পরীক্ষা।',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-600'
  },
  {
    icon: 'book',
    title: 'নৈতিক শিক্ষা',
    description: 'পুথিগত বিদ্যার পাশাপাশি আমরা গুরুত্ব দেই সততা, দেশপ্রেম এবং নৈতিক মূল্যবোধের ওপর।',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-600'
  }
];

const ICON_MAP = {
  graduation: HiAcademicCap,
  book: HiBookOpen
};

// ============= SUB COMPONENTS =============
const Badge = ({ text }) => (
  <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600">
    <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
    {text}
  </div>
);

const SectionHeader = ({ badge, title, highlightedTitle }) => (
  <div className="mb-12 text-center">
    <Badge text={badge} />
    <h2 className="text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
      {title} <span className="text-emerald-600">{highlightedTitle}</span>
    </h2>
  </div>
);

const AnimatedBlob = () => (
  <>
    <div className="absolute rounded-full -top-4 -left-4 w-72 h-72 bg-emerald-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bg-teal-100 rounded-full -bottom-4 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  </>
);

// Facebook Player Component
const FacebookPlayer = ({ videoUrl, title }) => {
  return (
    <div className="relative group/video">
      <AnimatedBlob />
      
      <div className="relative w-full overflow-hidden bg-black border-2 border-white shadow-2xl rounded-xl aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&t=0`}
          title={title}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description, bgColor, textColor }) => {
  const IconComponent = ICON_MAP[icon];
  
  return (
    <div className="flex items-start space-x-4">
      <div className={`flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg ${bgColor} ${textColor}`}>
        <IconComponent className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutContent = ({ description, features }) => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed text-gray-600">
      <span className="font-bold text-gray-800">কিশোরকণ্ঠ পাঠক ফোরাম সিলেট জেলা পশ্চিম</span> {description.replace('কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর', '')}
    </p>

    <div className="mt-4 space-y-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>

    <div className="pt-4">
      <button href="/about" className="px-8 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-1">
        আরও জানুন
      </button>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-teal-50/30">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-7xl">
          <SectionHeader 
            badge={ABOUT_DATA.badge}
            title={ABOUT_DATA.title}
            highlightedTitle={ABOUT_DATA.highlightedTitle}
          />
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <FacebookPlayer 
              videoUrl={ABOUT_DATA.videoUrl}
              title={ABOUT_DATA.videoTitle}
            />
            <AboutContent 
              description={ABOUT_DATA.description}
              features={FEATURES}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;