import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';

const SearchPage = () => {
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
      const response = await fetch('/results.json');
      if (!response.ok) throw new Error('Failed to load data');
      const data = await response.json();
      const student = data.find((s) => s.roll === inputRoll.trim());
      if (student) setResult(student);
      else setError('No result found for this Roll Number.');
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => window.print();
  const resetSearch = () => { setResult(null); setInputRoll(''); };

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-160px)] px-4 py-16 md:py-20">
      {!result && (
        <SearchForm 
          onSearch={handleSearch}
          inputRoll={inputRoll}
          setInputRoll={setInputRoll}
          loading={loading}
          error={error}
        />
      )}
      {result && (
        <ResultCard 
          data={result}
          onPrint={handlePrint}
          onReset={resetSearch}
        />
      )}
    </div>
  );
};

export default SearchPage;
