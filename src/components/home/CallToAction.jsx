import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-16 text-center md:px-16">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">আসন্ন কার্যক্রম</h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-emerald-50">
              আমাদের বার্ষিক বৃত্তি কার্যক্রম শুরু হতে যাচ্ছে। আগ্রহী শিক্ষার্থীদের জন্য নিবন্ধন খোলা রয়েছে। 
              আজই আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য নিবন্ধন করুন।
            </p>
            <Link 
              to="/scholarship"
              className="inline-block px-8 py-4 text-lg font-bold text-emerald-700 transition-transform transform bg-white rounded-full shadow-lg hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              বৃত্তি সম্পর্কে জানুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;