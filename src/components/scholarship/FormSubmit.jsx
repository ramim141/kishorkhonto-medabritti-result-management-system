import React from 'react';
import { HiMapPin, HiPhone, HiSparkles } from 'react-icons/hi2';

const LOCATIONS = [
  { name: 'পশ্চিম লাইব্রেরী', address: 'বাজা মালনপাথ, জিন্দাবাজার', phone: '০১৭৫২৮১১৮৪' },
  { name: 'স্বামীনী লাইব্রেরী', address: 'শাহজালাল জামেয়ার পাশে, মদিনা মার্কেট', phone: '০১৭৫২৮১১৮৪' },
  { name: 'সৌদ্য একাডেমিক্স', address: 'দ্বি-নাৎ জুমার স্কুলের বিপরীতে, সিরের মহলন', phone: '০১৩০০২০৮১৮৮' },
  { name: 'ঢাকা বুক ডিপো এন্ড কৌণশালারী', address: '১নং ইসলামাবাদ টাওয়ার, ইসলামাবাদ মার্কেট রোড, লালদিঘীর পার, সিলেট।', phone: '০১৮২৮৭৪৩৯' },
  { name: 'প্রজিনিয়াল লাইব্রেরী', address: 'আইহম মানসুল, জিন্দাবাজার', phone: '০১৭৫২৮১১৮৪' },
  { name: 'মনোরম লাইব্রেরী', address: 'ইবনে সিনার পাশে, রিকাবিবাজার', phone: '০১৭৭৯০৮৬৪৫' },
  { name: 'ফ্রেন্ডস লাইব্রেরী', address: 'আরশিকানা গলির এর বিপরীতে, হাউজিং স্টেট', phone: '০১৭৫২৮১১৮৪' }
];

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
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-white/20 text-white/90">
        <HiSparkles className="w-5 h-5" />
        সীমিত সময়
      </div>
      <h2 className="mb-4 text-3xl font-bold text-white">এখনই রেজিস্ট্রেশন করুন</h2>
      <button className="px-8 py-3 font-semibold transition-all transform bg-white rounded-lg text-emerald-700 hover:scale-105 hover:shadow-lg">
        অনলাইন রেজিস্ট্রেশন
      </button>
      <p className="mt-4 text-white/90">অথবা আপনার স্কুল প্রতিনিধির সাথে যোগাযোগ করুন</p>
    </div>
  </div>
);

const LocationCard = ({ name, address, phone }) => (
  <div className="relative p-5 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-xl hover:shadow-xl hover:-translate-y-1">
    {/* Hover Background */}
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-emerald-500 to-teal-500 group-hover:opacity-100"></div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-white/20 group-hover:text-white">
          <HiMapPin className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">{name}</h3>
      </div>
      <p className="mb-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">{address}</p>
      <div className="flex items-center gap-2 transition-colors duration-300 text-amber-600 group-hover:text-white/90">
        <HiPhone className="w-4 h-4" />
        <span className="text-sm font-semibold">{phone}</span>
      </div>
    </div>
  </div>
);

const FormSubmit = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-amber-100/60 via-orange-50/40 via-yellow-50/30 to-emerald-100/50 md:py-20">
      
      {/* Full Section Background Decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 rounded-full w-[500px] h-[500px] bg-gradient-to-br from-teal-200/50 to-emerald-200/40 blur-3xl"></div>
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-amber-200/40 to-orange-200/30 blur-3xl"></div>
      <div className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-cyan-200/35 to-teal-200/25 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 translate-y-1/4 rounded-full w-[350px] h-[350px] bg-gradient-to-br from-emerald-200/30 to-green-200/25 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rounded-full w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/30 to-amber-200/25 blur-3xl"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* রেজিস্ট্রেশন CTA */}
        <RegistrationCTA />

        {/* আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা */}
        <div className="mb-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700">
              <HiMapPin className="w-5 h-5" />
              ফর্ম সংগ্রহ কেন্দ্র
            </div>
            <h2 className="text-3xl font-extrabold text-center text-transparent md:text-4xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
              আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা
            </h2>
            <p className="mt-3 text-gray-500">নিচের যেকোনো স্থান থেকে ফর্ম সংগ্রহ করুন</p>
            <div className="w-24 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LOCATIONS.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSubmit;
