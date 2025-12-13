import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/images/Logo.png';
import logo from '../assets/images/logo3.png';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative text-white bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 print:hidden">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-auto h-12" />
            </div>
            <p className="text-base font-medium leading-relaxed text-white">
              কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট জেলা পশ্চিম ১৯৮৪ সাল থেকে শিক্ষার্থীদের মেধা ও মনন বিকাশে নিরলসভাবে কাজ করে যাচ্ছে।
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="https://www.facebook.com/profile.php?id=61550084636519" className="p-3 transition-all duration-300 rounded-full shadow-lg bg-white/20 hover:bg-white hover:text-emerald-700 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550084636519" className="p-3 transition-all duration-300 rounded-full shadow-lg bg-white/20 hover:bg-white hover:text-emerald-700 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.37c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550084636519" className="p-3 transition-all duration-300 rounded-full shadow-lg bg-white/20 hover:bg-white hover:text-emerald-700 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/home" className="text-base font-medium transition-colors hover:text-yellow-200 hover:font-semibold hover:pl-2">হোম</Link>
              </li>
              <li>
                <Link to="/about" className="text-base font-medium transition-colors hover:text-yellow-200 hover:font-semibold hover:pl-2">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link to="/list" className="text-base font-medium transition-colors hover:text-yellow-200 hover:font-semibold hover:pl-2">মেধাবৃত্তি - ২০২৫</Link>
              </li>
              <li>
                <Link to="/search" className="text-base font-medium transition-colors hover:text-yellow-200 hover:font-semibold hover:pl-2">ফলাফল</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1 text-yellow-300 w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-base font-medium">অস্থায়ী অফিস: নিয়ামাহ্ টাওয়ার, ২য় তলা,<br /> চন্ডিপুল, দক্ষিণ সুরমা, সিলেট।</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="flex-shrink-0 w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-base font-medium">+৮৮০ ১৭৯১-৬২৯৯৯৬</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="flex-shrink-0 w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-base font-medium">+৮৮০ ১৭৭৩-৬৫৬৩৯৬</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="flex-shrink-0 w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-base font-medium">kishorkanthasylwest@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">নিউজলেটার</h3>
            <p className="mb-4 text-base font-medium text-white">আমাদের সকল আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="w-full px-4 py-2 text-gray-900 transition-colors bg-white border-2 rounded-lg border-white/50 focus:outline-none focus:border-yellow-300 placeholder:text-gray-500"
              />
              <button className="w-full px-4 py-2 font-semibold transition-colors bg-white rounded-lg shadow-md text-emerald-700 hover:bg-yellow-100 hover:shadow-lg">
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 text-center border-t border-white/30">
          <p className="text-base font-medium text-white">
            &copy; {new Date().getFullYear()} কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট জেলা পশ্চিম। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Developed by <a href="https://www.linkedin.com/in/ramim-ahmed/" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-300 transition-colors hover:text-yellow-200 hover:underline">Ramim Ahmed</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white transition-all duration-300 rounded-full shadow-lg bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;