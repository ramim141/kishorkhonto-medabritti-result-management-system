import React, { useState } from 'react';

const App = () => {
  const [inputRoll, setInputRoll] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!inputRoll) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Fetching the JSON file from the public folder
      const response = await fetch('/results.json');
      if (!response.ok) throw new Error('Failed to load data');
      
      const data = await response.json();
      
      // Finding the student by Roll Number (trim removes accidental spaces)
      const student = data.find((s) => s.roll === inputRoll.trim());

      if (student) {
        setResult(student);
      } else {
        setError('No result found for this Roll Number.');
      }
    } catch (err) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to get badge color based on category
  const getCategoryBadge = (cat) => {
    const category = cat ? cat.toLowerCase() : '';
    if (category === 'talentfull') return 'bg-green-100 text-green-800 border-green-200';
    if (category === 'normal') return 'bg-blue-100 text-blue-800 border-blue-200';
    if (category === 'genral') return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      
      {/* Header - Hidden on Print */}
      <header className="text-center mb-8 print:hidden">
        <h1 className="text-3xl font-bold text-blue-600">Medabitti Exam Results</h1>
        <p className="text-gray-500 mt-2">Check your performance instantly</p>
      </header>

      <div className="max-w-2xl mx-auto">
        
        {/* Search Box - Hidden on Print */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 print:hidden">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Roll Number (e.g., 1001)"
              value={inputRoll}
              onChange={(e) => setInputRoll(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300 font-semibold"
            >
              {loading ? 'Checking...' : 'Check Result'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-3 text-center font-medium">{error}</p>}
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-8 print:shadow-none print:border-2 print:border-black">
            <div className="bg-blue-600 p-4 text-white print:bg-white print:text-black print:border-b-2 print:border-black">
              <h2 className="text-xl font-bold text-center uppercase tracking-wide">Result Card</h2>
              <p className="text-center text-blue-100 text-sm print:hidden">Medabitti Examination 2024</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResultField label="Roll Number" value={result.roll} />
                <ResultField label="Class" value={result.class} />
                <ResultField label="Student Name" value={result.name} fullWidth />
                <ResultField label="Father's Name" value={result.father} fullWidth />
                <ResultField label="School" value={result.school} fullWidth />
              </div>

              <div className="mt-6 pt-6 border-t border-dashed border-gray-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Total Marks</span>
                  <span className="text-2xl font-bold text-gray-800">{result.total_marks}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-600 font-medium">Category</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getCategoryBadge(result.category)}`}>
                    {result.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Print Button - Hidden when printing */}
            <div className="bg-gray-50 p-4 flex justify-end print:hidden">
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
                Print Result
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const ResultField = ({ label, value, fullWidth }) => (
  <div className={`${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
    <p className="text-xs text-gray-500 uppercase font-semibold">{label}</p>
    <p className="text-lg text-gray-900 font-medium border-b border-gray-200 pb-1">{value}</p>
  </div>
);

export default App;