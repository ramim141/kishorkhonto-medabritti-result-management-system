import React, { useState } from 'react';
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin, 
  HiUser,
  HiChatBubbleBottomCenterText,
  HiPaperAirplane,
  HiGlobeAsiaAustralia,
  HiClock,
  HiBuildingOffice2,
  HiSparkles,
  HiArrowRight,
  HiCheckCircle,
  HiHeart,
  HiStar,
  HiShare
} from 'react-icons/hi2';
import { FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B9%E0%A7%8D+%E0%A6%9F%E0%A6%BE%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0/@24.8675259,91.8568155,3a,58.7y,328.4h,97.45t/data=!3m7!1e1!3m5!1s8ShZkYe5d5Zj1Y7NIyFkEw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.448823858365202%26panoid%3D8ShZkYe5d5Zj1Y7NIyFkEw%26yaw%3D328.39724145102605!7i16384!8i8192!4m6!3m5!1s0x3751aae9f370e6b3:0x130316da9abdf5cb!8m2!3d24.8676891!4d91.8565573!16s%2Fg%2F11bzrhtlft?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      
      {/* ==================== HERO SECTION ==================== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Elements - Static positions */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-white/25 rounded-full animate-float" style={{ left: '8%', top: '15%', animationDelay: '0s', animationDuration: '6s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{ left: '22%', top: '55%', animationDelay: '1.2s', animationDuration: '7s' }}></div>
          <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-float" style={{ left: '38%', top: '25%', animationDelay: '2.4s', animationDuration: '5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/25 rounded-full animate-float" style={{ left: '52%', top: '70%', animationDelay: '0.8s', animationDuration: '6.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{ left: '68%', top: '12%', animationDelay: '1.8s', animationDuration: '7.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/30 rounded-full animate-float" style={{ left: '82%', top: '45%', animationDelay: '3s', animationDuration: '5.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/25 rounded-full animate-float" style={{ left: '92%', top: '80%', animationDelay: '0.5s', animationDuration: '6.8s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-float" style={{ left: '15%', top: '85%', animationDelay: '2s', animationDuration: '7.2s' }}></div>
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto text-center md:py-28 lg:py-32">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs md:text-sm font-bold text-white/95 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <HiSparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-300/50 blur-md rounded-full"></div>
            </div>
            <span>২৪/৭ যোগাযোগ</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            <span className="inline-block transition-all duration-500 hover:scale-110 hover:rotate-2">যোগাযোগ করুন</span>
            <br />
            <span className="inline-block mt-2 text-transparent bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 bg-clip-text animate-gradient drop-shadow-2xl">আমাদের সাথে</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium px-4">
            আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য আমরা সবসময় প্রস্তুত।
            <br />
            <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-yellow-100 text-sm md:text-base font-semibold">আমরা আপনার বিশ্বস্ত সহযোগী!</span>
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-10 px-2 sm:px-4">
            <div className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 md:px-5 md:py-3 bg-white/15 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl border border-white/25 shadow-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <div className="p-1 sm:p-1.5 md:p-2 bg-green-400/30 rounded-md sm:rounded-lg md:rounded-xl">
                <HiCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-100" />
              </div>
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">দ্রুত সাড়া</span>
            </div>
            <div className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 md:px-5 md:py-3 bg-white/15 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl border border-white/25 shadow-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <div className="p-1 sm:p-1.5 md:p-2 bg-pink-400/30 rounded-md sm:rounded-lg md:rounded-xl">
                <HiHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-100" />
              </div>
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">বিশ্বতা</span>
            </div>
            <div className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 md:px-5 md:py-3 bg-white/15 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl border border-white/25 shadow-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105">
              <div className="p-1 sm:p-1.5 md:p-2 bg-yellow-400/30 rounded-md sm:rounded-lg md:rounded-xl">
                <HiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-100" />
              </div>
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">মানবিক</span>
            </div>
          </div>
        </div>

        {/* Modern Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="white" fillOpacity="0.1"/>
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H0Z" fill="white" fillOpacity="0.05"/>
            <path d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 82.5C840 90 960 105 1080 105C1200 105 1320 90 1380 82.5L1440 75V120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* ==================== QUICK CONTACT CARDS ==================== */}
      <section className="relative -mt-16 md:-mt-20 z-20 pb-16 md:pb-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            
            {/* Phone Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              
              <div className="relative overflow-hidden bg-white rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-3 border-2 border-gray-100 group-hover:border-emerald-200">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-32 md:w-40 h-32 md:h-40 bg-emerald-200/30 rounded-full group-hover:bg-white/30 transition-all duration-500"></div>
                <div className="absolute -bottom-8 -left-8 w-24 md:w-32 h-24 md:h-32 bg-teal-200/20 rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
                
                <div className="relative p-6 md:p-8 lg:p-10 text-center z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl md:rounded-3xl shadow-2xl group-hover:bg-white group-hover:shadow-emerald-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <HiPhone className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white group-hover:text-emerald-600 transition-colors duration-500" />
                  </div>
                  
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">ফোন করুন</h3>
                  <p className="text-base md:text-lg lg:text-xl text-emerald-600 font-bold mb-2 group-hover:text-white transition-colors duration-500">০১৯৬২-৬৩৩৬৬২</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 group-hover:text-white/90 transition-colors duration-500">সকাল ১১টা - রাত ৮টা</p>
                  
                  <a href="tel:+8801962633662" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 rounded-full group-hover:bg-white group-hover:text-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg">
                    <span>এখনই কল করুন</span>
                    <HiArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              
              <div className="relative overflow-hidden bg-white rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-3 border-2 border-gray-100 group-hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -top-12 -right-12 w-32 md:w-40 h-32 md:h-40 bg-blue-200/30 rounded-full group-hover:bg-white/30 transition-all duration-500"></div>
                <div className="absolute -bottom-8 -left-8 w-24 md:w-32 h-24 md:h-32 bg-cyan-200/20 rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
                
                <div className="relative p-6 md:p-8 lg:p-10 text-center z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl md:rounded-3xl shadow-2xl group-hover:bg-white group-hover:shadow-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <HiEnvelope className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white group-hover:text-blue-600 transition-colors duration-500" />
                  </div>
                  
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">ইমেইল করুন</h3>
                  <p className="text-sm md:text-base lg:text-lg text-blue-600 font-bold mb-2 group-hover:text-white transition-colors duration-500 break-all">kishorkanthasylwest@gmail.com</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 group-hover:text-white/90 transition-colors duration-500">২৪/৭ সহায়তা</p>
                  
                  <a href="mailto:info@kishorkhonto.com" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-blue-600 bg-blue-50 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
                    <span>ইমেইল পাঠান</span>
                    <HiArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              
              <div className="relative overflow-hidden bg-white rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-3 border-2 border-gray-100 group-hover:border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -top-12 -right-12 w-32 md:w-40 h-32 md:h-40 bg-purple-200/30 rounded-full group-hover:bg-white/30 transition-all duration-500"></div>
                <div className="absolute -bottom-8 -left-8 w-24 md:w-32 h-24 md:h-32 bg-pink-200/20 rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
                
                <div className="relative p-6 md:p-8 lg:p-10 text-center z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl md:rounded-3xl shadow-2xl group-hover:bg-white group-hover:shadow-purple-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <HiMapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white group-hover:text-purple-600 transition-colors duration-500" />
                  </div>
                  
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">আমাদের ঠিকানা</h3>
                  <p className="text-base md:text-lg text-purple-600 font-bold mb-2 group-hover:text-white transition-colors duration-500">নিয়ামাহ্ টাওয়ার (২য় তলা)</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 group-hover:text-white/90 transition-colors duration-500">চন্ডিপুল, দক্ষিণ সুরমা, সিলেট-৩১০০</p>
                  
                  <button onClick={handleMapClick} className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold text-purple-600 bg-purple-50 rounded-full group-hover:bg-white group-hover:text-purple-600 transition-all duration-300 hover:scale-105 shadow-lg">
                    <span>ম্যাপে দেখুন</span>
                    <HiArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT FORM & INFO SECTION ==================== */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-xs md:text-sm font-bold text-emerald-700 bg-emerald-100 rounded-full shadow-lg border-2 border-emerald-200">
                <HiChatBubbleBottomCenterText className="w-4 h-4 md:w-5 md:h-5" />
                <span>আমাদের সাথে যোগাযোগ করুন</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text mb-4 md:mb-6">
                বার্তা পাঠান
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                আপনার যেকোনো প্রশ্ন, পরামর্শ বা মতামত আমাদের কাছে পাঠান।
                <span className="block mt-2 text-emerald-600 font-semibold text-sm md:text-base">আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেওয়ার চেষ্টা করব।</span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="relative group">
                  <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl md:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  
                  <div className="relative p-6 md:p-8 lg:p-10 xl:p-12 bg-white border-2 border-gray-100 shadow-2xl rounded-2xl md:rounded-3xl">
                    {submitStatus === 'success' && (
                      <div className="mb-6 md:mb-8 p-4 md:p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl md:rounded-2xl flex items-start gap-3 md:gap-4 shadow-lg">
                        <div className="flex-shrink-0 p-2 md:p-3 bg-green-500 rounded-lg md:rounded-xl">
                          <HiCheckCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-green-800 font-bold text-base md:text-lg">সফলভাবে পাঠানো হয়েছে!</p>
                          <p className="text-green-600 text-xs md:text-sm mt-1">আপনার বার্তা আমরা পেয়েছি। শীঘ্রই উত্তর দেওয়া হবে।</p>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 lg:space-y-7">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
                        <div className="group/input">
                          <label className="flex items-center gap-2 mb-2 md:mb-3 text-xs md:text-sm font-bold text-gray-700">
                            <HiUser className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                            আপনার নাম <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl transition-all duration-300 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white hover:border-emerald-300 font-medium text-gray-800 placeholder:text-gray-400 text-sm md:text-base"
                            placeholder="আপনার সম্পূর্ণ নাম"
                          />
                        </div>
                        
                        <div className="group/input">
                          <label className="flex items-center gap-2 mb-2 md:mb-3 text-xs md:text-sm font-bold text-gray-700">
                            <HiEnvelope className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                            ইমেইল <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl transition-all duration-300 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white hover:border-emerald-300 font-medium text-gray-800 placeholder:text-gray-400 text-sm md:text-base"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="group/input">
                        <label className="flex items-center gap-2 mb-2 md:mb-3 text-xs md:text-sm font-bold text-gray-700">
                          <HiPhone className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                          ফোন নাম্বার
                        </label>
                        <input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl transition-all duration-300 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white hover:border-emerald-300 font-medium text-gray-800 placeholder:text-gray-400 text-sm md:text-base"
                          placeholder="+880 1XXX-XXXXXX"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label className="flex items-center gap-2 mb-2 md:mb-3 text-xs md:text-sm font-bold text-gray-700">
                          <HiChatBubbleBottomCenterText className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                          বিষয় <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl transition-all duration-300 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white hover:border-emerald-300 font-medium text-gray-800 placeholder:text-gray-400 text-sm md:text-base"
                          placeholder="বার্তার বিষয়"
                        />
                      </div>
                      
                      <div className="group/input">
                        <label className="flex items-center gap-2 mb-2 md:mb-3 text-xs md:text-sm font-bold text-gray-700">
                          <HiChatBubbleBottomCenterText className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                          বার্তা <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl resize-none transition-all duration-300 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white hover:border-emerald-300 font-medium text-gray-800 placeholder:text-gray-400 text-sm md:text-base"
                          placeholder="আপনার বিস্তারিত বার্তা লিখুন..."
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-base md:text-lg font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl md:rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 md:w-6 md:h-6 border-2 md:border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>পাঠানো হচ্ছে...</span>
                          </>
                        ) : (
                          <>
                            <HiPaperAirplane className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <span>বার্তা পাঠান</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-5 md:space-y-6 lg:space-y-7">
                
                {/* Office Hours */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative p-5 md:p-6 lg:p-7 bg-white rounded-xl md:rounded-2xl shadow-xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-row items-start gap-4 md:gap-5">
                      <div className="flex-shrink-0 self-start p-3 md:p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                        <HiClock className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">অফিস সময়</h4>
                        <div className="space-y-2 md:space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                            <span className="text-gray-700 font-medium text-sm">শনি - বৃহস্পতি</span>
                            <span className="font-bold text-amber-600 text-sm">বিকালঃ ২:০০ - ৫:০০</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative p-5 md:p-6 lg:p-7 bg-white rounded-xl md:rounded-2xl shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-row items-start gap-4 md:gap-5">
                      <div className="flex-shrink-0 self-start p-3 md:p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                        <HiBuildingOffice2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">সম্পূর্ণ ঠিকানা</h4>
                        <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                          অস্থায়ী অফিস: নিয়ামাহ্ টাওয়ার (২য় তলা)<br />
                          চন্ডিপুল, দক্ষিণ সুরমা, সিলেট-৩১০০<br />
                          বাংলাদেশ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative p-5 md:p-6 lg:p-7 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-row items-start gap-4 md:gap-5">
                      <div className="flex-shrink-0 self-start p-3 md:p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                        <HiGlobeAsiaAustralia className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">সার্বিক সেবা</h4>
                        <p className="text-gray-600 font-medium text-sm md:text-base">
                          সিলেট বিভাগের সকল জেলায় আমাদের সেবা রয়েছে
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links - Enhanced Design */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative p-5 md:p-6 lg:p-7 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                    
                    {/* Header with icon */}
                    <div className="relative flex items-center gap-3 mb-5 md:mb-6">
                      <div className="p-2.5 md:p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                        <HiShare className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg lg:text-xl font-black text-white">সোশ্যাল মিডিয়া</h4>
                        <p className="text-xs md:text-sm text-gray-400">আমাদের সাথে সংযুক্ত থাকুন</p>
                      </div>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="relative flex flex-wrap gap-3 md:gap-4">
                      {/* Facebook */}
                      <a href="https://www.facebook.com/kishorkanthasylwest" target="_blank" rel="noopener noreferrer" className="group/social relative">
                        <div className="absolute -inset-1 bg-blue-500 rounded-xl md:rounded-2xl blur opacity-40 group-hover/social:opacity-70 transition duration-300"></div>
                        <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl md:rounded-2xl text-white transition-all duration-300 group-hover/social:scale-110 group-hover/social:-translate-y-2 shadow-xl border border-blue-400/30">
                          <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </a>
                      
                      {/* WhatsApp */}
                      <a href="https://wa.me/8801962633662" target="_blank" rel="noopener noreferrer" className="group/social relative">
                        <div className="absolute -inset-1 bg-green-500 rounded-xl md:rounded-2xl blur opacity-40 group-hover/social:opacity-70 transition duration-300"></div>
                        <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl md:rounded-2xl text-white transition-all duration-300 group-hover/social:scale-110 group-hover/social:-translate-y-2 shadow-xl border border-green-400/30">
                          <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </a>
                      
                      {/* YouTube */}
                      <a href="https://www.youtube.com/@kishorkanthasylwest" target="_blank" rel="noopener noreferrer" className="group/social relative">
                        <div className="absolute -inset-1 bg-red-500 rounded-xl md:rounded-2xl blur opacity-40 group-hover/social:opacity-70 transition duration-300"></div>
                        <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl md:rounded-2xl text-white transition-all duration-300 group-hover/social:scale-110 group-hover/social:-translate-y-2 shadow-xl border border-red-400/30">
                          <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </a>
                    </div>
                    
                    {/* Follow text */}
                    <p className="relative mt-4 md:mt-5 text-xs md:text-sm text-gray-400 font-medium">
                      <span className="text-emerald-400">✦</span> ফলো করুন আপডেট পেতে
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAP SECTION ==================== */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 md:w-[500px] h-96 md:h-[500px] bg-cyan-200/30 rounded-full blur-3xl translate-x-1/3"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 text-xs md:text-sm font-bold text-blue-700 bg-blue-100 rounded-full shadow-lg border-2 border-blue-200">
                <HiMapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>আমাদের অফিস</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text">
                আমাদের অবস্থান
              </h3>
            </div>

            {/* Map Card */}
            <div className="relative group">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl md:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-3xl border-2 border-gray-100">
                {/* Map Embed */}
                <div className="relative h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-blue-50 to-cyan-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9451396523!2d91.87041!3d24.89975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sBandar%20Bazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1699000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 rounded-2xl md:rounded-3xl"
                  ></iframe>
                  
                  {/* Overlay Info Card */}
                  <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 right-4 md:right-auto md:max-w-sm">
                    <div className="relative group/card">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl md:rounded-2xl blur opacity-50"></div>
                      <div className="relative p-4 md:p-5 lg:p-7 bg-white/98 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-2xl border-2 border-blue-100">
                        <div className="flex items-center gap-3 md:gap-4 lg:gap-5 mb-4 md:mb-5">
                          <div className="p-2 md:p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl md:rounded-2xl shadow-lg flex-shrink-0">
                            <HiMapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-black text-gray-800 text-sm md:text-base lg:text-lg truncate">নিয়ামাহ্ টাওয়ার</h4>
                            <p className="text-xs md:text-sm text-gray-600 font-medium">বন্দরবাজার, সিলেট</p>
                          </div>
                        </div>
                        <button 
                          onClick={handleMapClick}
                          className="w-full flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 lg:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group/btn"
                        >
                          <span>Google Maps এ দেখুন</span>
                          <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-25px) rotate(180deg); 
            opacity: 1; 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;