import React from 'react';

const SearchForm = ({ onSearch, inputRoll, setInputRoll, loading, error }) => {
  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">মেধাবৃত্তি ফলাফল - ২০২৪</h1>
        <p className="text-gray-500 mt-2">আপনার রোল নম্বর দিয়ে ফলাফল যাচাই করুন</p>
      </div>

      <form onSubmit={onSearch} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">রোল নম্বর (Roll Number)</label>
          <input
            type="text"
            placeholder="Ex: 1001"
            value={inputRoll}
            onChange={(e) => setInputRoll(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition text-lg"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#2e8b57] text-white font-bold py-3 rounded hover:bg-[#246e45] transition duration-200 text-lg shadow-sm disabled:bg-gray-400"
        >
          {loading ? 'খুজছে...' : 'ফলাফল দেখুন'}
        </button>
      </form>

      {error && (
        <div className="mt-5 p-4 bg-red-50 text-red-700 border border-red-200 rounded text-center font-medium">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchForm;