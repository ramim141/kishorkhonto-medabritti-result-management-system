import React from 'react';
import { HiPhone, HiEnvelope, HiSparkles } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-100/60 via-teal-50/40 via-cyan-50/30 to-blue-100/50 md:py-20">
      
      {/* Full Section Background Decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-emerald-200/50 to-teal-200/40 blur-3xl"></div>
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 rounded-full w-[350px] h-[350px] bg-gradient-to-br from-cyan-200/40 to-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 translate-y-1/4 rounded-full w-[300px] h-[300px] bg-gradient-to-br from-teal-200/30 to-emerald-200/25 blur-3xl"></div>
      
      <div className="container relative z-10 max-w-4xl px-4 mx-auto">
        
        <div className="relative p-8 overflow-hidden text-center shadow-2xl md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600">
          
          {/* Pattern Overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-pattern)" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-white/20 text-white/90">
              <HiSparkles className="w-5 h-5" />
              যোগাযোগ করুন
            </div>
            
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              আরও তথ্যের জন্য যোগাযোগ করুন
            </h2>
            
            <p className="max-w-xl mx-auto mb-8 text-lg text-white/90">
              মেধাবৃত্তি সম্পর্কে আরও বিস্তারিত জানতে আমাদের অফিসে যোগাযোগ করুন।
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+8801791629996" 
                className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all transform bg-white rounded-xl text-emerald-600 hover:scale-105 hover:shadow-lg"
              >
                <HiPhone className="w-5 h-5" />
                ফোন করুন
              </a>
              <a 
                href="mailto:kishorkanthasylwest@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all transform border-2 border-white rounded-xl hover:bg-white hover:text-emerald-600 hover:scale-105"
              >
                <HiEnvelope className="w-5 h-5" />
                ইমেইল করুন
              </a>
            </div>
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute w-24 h-24 transition-all duration-500 rounded-full opacity-20 -top-12 -right-12 bg-white/30"></div>
          <div className="absolute w-16 h-16 transition-all duration-500 rounded-full opacity-20 -bottom-8 -left-8 bg-white/30"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
