import React from 'react';

const SearchForm = ({ onSearch, inputRoll, setInputRoll, loading, error }) => {
  return (
    <div className="w-full max-w-2xl">
      {/* Card with gradient background */}
      <div className="relative p-8 border-2 shadow-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 md:p-12 rounded-2xl border-emerald-200/50 backdrop-blur-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 blur-3xl -z-10"></div>
        
      <div className="mb-10 text-center">
        <div className="inline-block p-3 mb-6 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 className="mb-8 text-3xl font-extrabold text-emerald-700 md:text-4xl">
          কিশোরকণ্ঠ মেধাবৃত্তি ফলাফল ২০২৫
        </h1>
        <p className="text-lg font-medium text-teal-700">আপনার রোল নম্বর দিয়ে ফলাফল যাচাই করুন</p>
      </div>

      <form onSubmit={onSearch} className="space-y-6">
        <div className="relative">
          <label className="block mb-3 text-lg font-bold text-emerald-800">
            রোল নম্বর
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="উদাহরণ: ১০০১"
              value={inputRoll}
              onChange={(e) => setInputRoll(e.target.value)}
              className="w-full p-4 pl-12 text-lg font-semibold transition-all duration-300 border-2 shadow-inner border-emerald-300 bg-white/80 backdrop-blur-sm rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200/50 hover:border-teal-400"
            />
            <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 text-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden group"
        >
          {loading ? (
            <>
              <svg className="w-6 h-6 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-xl font-bold">খুঁজছি...</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>ফলাফল দেখুন</span>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      </form>

      {error && (
        <div className="p-5 mt-6 font-bold text-center text-red-700 border-2 border-red-300 shadow-lg bg-gradient-to-r from-red-50 to-rose-50 rounded-xl animate-pulse">
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg">{error}</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default SearchForm;
