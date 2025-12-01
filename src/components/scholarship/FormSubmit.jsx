import React from 'react';

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

const FormSubmit = () => {
  return (
    <>
      {/* রেজিস্ট্রেশন CTA */}
      <RegistrationCTA />

      {/* আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা */}
      <div className="mb-12">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          আবেদন ফর্ম প্রাপ্তি ও জমা দেওয়ার ঠিকানা
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FormSubmit;
