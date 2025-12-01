import React from 'react';
import { 
  HiUserPlus, 
  HiHeart, 
  HiAcademicCap, 
  HiSparkles,
  HiArrowRight,
  HiCheckCircle,
  HiUsers,
  HiHandRaised
} from 'react-icons/hi2';

const JoinUs = () => {
  const benefits = [
    {
      icon: HiAcademicCap,
      title: 'শিক্ষায় অবদান',
      description: 'মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণে সাহায্য করুন',
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: HiUsers,
      title: 'সামাজিক নেটওয়ার্ক',
      description: 'একই চিন্তাভাবনার মানুষদের সাথে যুক্ত হোন',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: HiHeart,
      title: 'সেবার সুযোগ',
      description: 'সমাজের উন্নয়নে প্রত্যক্ষ ভূমিকা রাখুন',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: HiSparkles,
      title: 'দক্ষতা উন্নয়ন',
      description: 'নেতৃত্ব ও সংগঠনের অভিজ্ঞতা অর্জন করুন',
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  const steps = [
    {
      number: '০১',
      title: 'ফর্ম পূরণ করুন',
      description: 'আপনার তথ্য দিয়ে সদস্যপদ ফর্ম পূরণ করুন'
    },
    {
      number: '০২',
      title: 'অনুমোদন পান',
      description: 'আমাদের টিম আপনার আবেদন যাচাই করবে'
    },
    {
      number: '০৩',
      title: 'যুক্ত হোন',
      description: 'অনুমোদনের পর আপনি সক্রিয় সদস্য হবেন'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-96 h-96 -top-20 -left-20 bg-emerald-300/30 blur-3xl animate-blob"></div>
        <div className="absolute rounded-full w-96 h-96 -bottom-20 -right-20 bg-teal-300/30 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-300/30 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-bold text-white rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg">
            <HiHandRaised className="w-5 h-5" />
            আমাদের সাথে থাকুন
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            আমাদের সাথে <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">যুক্ত হোন</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl">
            এই গৌরবময় যাত্রার অংশীদার হয়ে পরবর্তী প্রজন্মের মেধাবী শিক্ষার্থীদের স্বপ্ন পূরণে সাহায্য করুন
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative p-6 overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                {/* Gradient Background on Hover */}
                <div className={`
                  absolute inset-0 
                  bg-gradient-to-br ${benefit.gradient}
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                `}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`
                    inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl
                    ${benefit.iconBg} ${benefit.iconColor}
                    group-hover:bg-white/20 group-hover:text-white
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500
                  `}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-500 rounded-bl-full opacity-0 bg-gradient-to-br from-white/30 to-transparent group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        {/* Main CTA Card */}
        <div className="relative max-w-5xl p-8 mx-auto overflow-hidden bg-white shadow-2xl md:p-12 rounded-3xl">
          
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 blur-2xl opacity-20"></div>

          <div className="relative z-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              
              {/* Left Side - Steps */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
                  কিভাবে যুক্ত হবেন?
                </h3>
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl group-hover:scale-110">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-bold text-gray-800 transition-colors group-hover:text-emerald-600">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="p-6 mt-8 border-2 border-emerald-100 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <div className="space-y-3">
                    {['বিনামূল্যে সদস্যপদ', 'সকল কার্যক্রমে অংশগ্রহণ', 'সার্টিফিকেট প্রাপ্তি'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <HiCheckCircle className="flex-shrink-0 w-6 h-6 text-emerald-600" />
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="space-y-6">
                <div className="p-8 text-center border-2 border-dashed border-emerald-200 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-500 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl hover:scale-110 hover:rotate-6">
                    <HiUserPlus className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="mb-3 text-2xl font-bold text-gray-800">
                    স্বেচ্ছাসেবক হন
                  </h4>
                  
                  <p className="mb-6 text-gray-600">
                    আজই আমাদের সাথে যুক্ত হয়ে সমাজ পরিবর্তনের অংশীদার হোন
                  </p>
                  
                  <button className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1 hover:scale-105 group">
                    <span>এখনই যুক্ত হোন</span>
                    <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="p-6 text-center bg-white border-2 border-gray-100 shadow-lg rounded-2xl">
                  <p className="mb-4 text-sm font-semibold text-gray-700">
                    আরও তথ্যের জন্য যোগাযোগ করুন
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 info@kishorkhonto.org</p>
                    <p>📞 +880 1711-000000</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute w-32 h-32 rounded-full bg-emerald-200 -top-16 -left-16 opacity-30 blur-2xl"></div>
          <div className="absolute w-32 h-32 bg-teal-200 rounded-full -bottom-16 -right-16 opacity-30 blur-2xl"></div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4 md:gap-6">
          {[
            { number: '৫০০+', label: 'সক্রিয় স্বেচ্ছাসেবক' },
            { number: '১০০+', label: 'বার্ষিক কার্যক্রম' },
            { number: '৩৬০০০+', label: 'উপকৃত শিক্ষার্থী' },
            { number: '৩২+', label: 'বছরের অভিজ্ঞতা' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoinUs;
