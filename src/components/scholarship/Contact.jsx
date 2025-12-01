import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 text-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600">
      <h2 className="mb-4 text-3xl font-bold text-white">আরও তথ্যের জন্য যোগাযোগ করুন</h2>
      <p className="mb-6 text-lg text-white/90">
        মেধাবৃত্তি সম্পর্কে আরও বিস্তারিত জানতে আমাদের অফিসে যোগাযোগ করুন।
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+8801791629996" className="px-8 py-3 font-semibold transition-all transform bg-white rounded-lg text-emerald-600 hover:scale-105 hover:shadow-lg">
          ফোন করুন
        </a>
        <a href="mailto:kishorkanthasylwest@gmail.com" className="px-8 py-3 font-semibold text-white transition-all transform border-2 border-white rounded-lg hover:bg-white hover:text-emerald-600 hover:scale-105">
          ইমেইল করুন
        </a>
      </div>
    </div>
  );
};

export default Contact;
