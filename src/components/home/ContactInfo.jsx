import React from 'react';

const CallToAction = () => {
  return (
    <div className="w-full max-w-5xl px-4 mx-auto mb-16">
      <div className="bg-[#1a5d45] rounded-xl p-10 md:p-16 text-center shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">আসন্ন কার্যক্রম</h2>
        <p className="max-w-2xl mx-auto mb-8 text-green-100">
          আমাদের বার্ষিক বৃত্তি কার্যক্রম শুরু হতে যাচ্ছে। আগ্রহী শিক্ষার্থীদের জন্য নিবন্ধন খোলা রয়েছে।
        </p>
        <button className="bg-white text-[#1a5d45] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md">
          বৃত্তি সম্পর্কে জানুন
        </button>
      </div>
    </div>
  );
};

export default CallToAction;