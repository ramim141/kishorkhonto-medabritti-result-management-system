import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-800 md:text-4xl">যোগাযোগ</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Address */}
            <div className="p-8 transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-emerald-600 bg-emerald-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">ঠিকানা</h3>
              <p className="text-gray-600">কুদরত উল্লাহ মার্কেট (৪র্থ তলা), বন্দরবাজার, সিলেট</p>
            </div>

            {/* Phone */}
            <div className="p-8 transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-emerald-600 bg-emerald-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">ফোন</h3>
              <p className="text-gray-600">+৮৮০ ১৭১১-০০০০০০</p>
              <p className="text-gray-600">+৮৮০ ১৮১১-০০০০০০</p>
            </div>

            {/* Email */}
            <div className="p-8 transition bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-emerald-600 bg-emerald-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">ইমেইল</h3>
              <p className="text-gray-600">info@kishorkhonto.com</p>
              <p className="text-gray-600">support@kishorkhonto.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;