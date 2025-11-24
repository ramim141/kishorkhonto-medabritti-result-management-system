import React from 'react';
import aboutDetailsImage from '../../assets/images/about-details.jpg';

const About = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container px-4 mx-auto">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600">
              <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
              আমাদের সম্পর্কে
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
              মেধা ও মনন বিকাশে <span className="text-emerald-600">আমাদের পথচলা</span>
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Left Side: Image/Visuals */}
            <div className="relative">
              <div className="absolute rounded-full -top-4 -left-4 w-72 h-72 bg-emerald-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute bg-teal-100 rounded-full -bottom-4 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl">
                <img 
                  src={aboutDetailsImage}
                  alt="Students learning" 
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-lg font-medium text-white">১৯৮৪ সাল থেকে শিক্ষার আলো ছড়িয়ে দিচ্ছি</p>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                <span className="font-bold text-gray-800">কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর</span> ১৯৮৪ সালে প্রতিষ্ঠিত একটি স্বেচ্ছাসেবী সংগঠন। দীর্ঘ চার দশকেরও বেশি সময় ধরে আমরা শিক্ষার্থীদের মেধা বিকাশ, নৈতিক চরিত্র গঠন এবং সুস্থ সংস্কৃতির চর্চায় নিরলসভাবে কাজ করে যাচ্ছি।
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.221 69.17 69.17 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">মেধাবৃত্তি পরীক্ষা</h3>
                    <p className="text-sm text-gray-600">শিক্ষার্থীদের সুপ্ত প্রতিভা অন্বেষণে প্রতি বছর আমরা আয়োজন করি বিশাল মেধাবৃত্তি পরীক্ষা।</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-teal-600 bg-teal-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">নৈতিক শিক্ষা</h3>
                    <p className="text-sm text-gray-600">পুথিগত বিদ্যার পাশাপাশি আমরা গুরুত্ব দেই সততা, দেশপ্রেম এবং নৈতিক মূল্যবোধের ওপর।</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="px-8 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-1">
                  আরও জানুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;