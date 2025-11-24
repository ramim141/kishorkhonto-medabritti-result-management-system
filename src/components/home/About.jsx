import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center border-t-4 border-[#1a5d45]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a5d45] mb-6">আমাদের সম্পর্কে</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর ১৯৮৪ সালে প্রতিষ্ঠিত একটি স্বেচ্ছাসেবী সংগঠন। 
          আমরা শিক্ষা ও সংস্কৃতির উন্নয়নে নিবেদিত। আমাদের লক্ষ্য হলো যুব সমাজকে জ্ঞান, দক্ষতা এবং মূল্যবোধে সমৃদ্ধ করে তোলা।
        </p>
      </div>
    </div>
  );
};

export default About;