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