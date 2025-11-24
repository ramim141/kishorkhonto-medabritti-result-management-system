import React from 'react';

const ResultCard = ({ data, onReset, onPrint }) => {
  return (
    <div className="w-full max-w-3xl bg-white shadow-2xl print:shadow-none mt-4">
      
      {/* Result Header */}
      <div className="bg-[#2e8b57] text-white p-4 text-center print:bg-white print:text-black print:border-b-2 print:border-black">
        <h2 className="text-xl font-bold uppercase">Official Result Sheet</h2>
      </div>

      <div className="p-8 print:p-0">
        
        {/* Student Info Table */}
        <div className="border-2 border-gray-300 mb-6 print:border-black">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-gray-300 print:border-black">
                <th className="p-3 bg-gray-100 w-1/3 border-r border-gray-300 print:bg-gray-200 print:border-black text-gray-700 font-bold">Student Name</th>
                <td className="p-3 font-bold text-lg text-gray-900">{data.name}</td>
              </tr>
              <tr className="border-b border-gray-300 print:border-black">
                <th className="p-3 bg-gray-100 w-1/3 border-r border-gray-300 print:bg-gray-200 print:border-black text-gray-700 font-bold">Roll No</th>
                <td className="p-3 text-gray-900">{data.roll}</td>
              </tr>
              <tr className="border-b border-gray-300 print:border-black">
                <th className="p-3 bg-gray-100 w-1/3 border-r border-gray-300 print:bg-gray-200 print:border-black text-gray-700 font-bold">Father's Name</th>
                <td className="p-3 text-gray-900">{data.father}</td>
              </tr>
              <tr className="border-b border-gray-300 print:border-black">
                <th className="p-3 bg-gray-100 w-1/3 border-r border-gray-300 print:bg-gray-200 print:border-black text-gray-700 font-bold">Class</th>
                <td className="p-3 text-gray-900">{data.class}</td>
              </tr>
              <tr className="border-b border-gray-300 print:border-black">
                <th className="p-3 bg-gray-100 w-1/3 border-r border-gray-300 print:bg-gray-200 print:border-black text-gray-700 font-bold">School Name</th>
                <td className="p-3 text-gray-900">{data.school}</td>
              </tr>
              
              {/* Marks & Category */}
              <tr className="bg-green-50 print:bg-white">
                <th className="p-3 w-1/3 border-r border-gray-300 print:border-black text-green-800 font-bold text-lg">Total Marks</th>
                <td className="p-3 font-bold text-xl text-green-700 print:text-black">{data.total_marks}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Category Display */}
        <div className="text-center mb-8 border-2 border-dashed border-green-300 p-4 bg-green-50 rounded print:border-black print:bg-white">
          <span className="block text-gray-600 text-sm uppercase tracking-widest mb-1">Result Status</span>
          <span className="text-2xl md:text-3xl font-extrabold text-green-800 uppercase">
            {data.category}
          </span>
        </div>

        {/* Action Buttons (Hidden on Print) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center print:hidden">
          <button 
            onClick={onPrint}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Result
          </button>
          <button 
            onClick={onReset}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Search Another
          </button>
        </div>

        {/* Print Only Footer */}
        <div className="hidden print:block mt-10 text-center text-xs text-gray-500">
          <p>This result is computer generated.</p>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;