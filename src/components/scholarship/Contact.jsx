import React, { useState } from 'react';
import { HiPhone, HiEnvelope, HiSparkles, HiXMark, HiCheckCircle, HiClipboard } from 'react-icons/hi2';

const Contact = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = 'kishorkanthasylwest@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-100/60 via-teal-50/40 via-cyan-50/30 to-blue-100/50 md:py-20">
      
      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md overflow-hidden transition-all transform bg-white shadow-2xl rounded-2xl animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute z-10 p-2 transition-colors bg-white rounded-full shadow-lg top-4 right-4 hover:bg-gray-100 group"
            >
              <HiXMark className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-90" />
            </button>

            {/* Modal Content */}
            <div className="p-6 text-center sm:p-8">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 sm:w-20 sm:h-20">
                <HiEnvelope className="w-10 h-10 text-white sm:w-12 sm:h-12" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-transparent sm:text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                আমাদের ইমেইল ঠিকানা
              </h3>

              {/* Email Address */}
              <div className="p-4 mb-4 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                <p className="text-base font-semibold break-all text-emerald-700 sm:text-lg">
                  {emailAddress}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:scale-105 hover:shadow-xl"
                >
                  {isCopied ? (
                    <>
                      <HiCheckCircle className="w-5 h-5" />
                      কপি হয়েছে!
                    </>
                  ) : (
                    <>
                      <HiClipboard className="w-5 h-5" />
                      ইমেইল কপি করুন
                    </>
                  )}
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold transition-all transform border-2 rounded-lg border-emerald-600 text-emerald-600 hover:scale-105 hover:bg-emerald-50"
                >
                  <HiEnvelope className="w-5 h-5" />
                  ইমেইল পাঠান
                </a>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 blur-2xl -z-10"></div>
          </div>
        </div>
      )}

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
              <button 
                onClick={() => setIsEmailModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all transform border-2 border-white rounded-xl hover:bg-white hover:text-emerald-600 hover:scale-105"
              >
                <HiEnvelope className="w-5 h-5" />
                ইমেইল করুন
              </button>
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
