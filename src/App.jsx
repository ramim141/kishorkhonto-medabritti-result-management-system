import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // ইমেজের মতো ল্যান্ডিং পেজ
import ResultList from './components/ResultList'; // রোল নাম্বার লিস্ট
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';

const App = () => {
  const [view, setView] = useState('home'); 
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
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Navbar onNavigate={setView} currentView={view} />

      <main className="container flex flex-col items-center flex-grow px-4 py-10 mx-auto">
        
        {/* LANDING PAGE (Image Design) */}
        {view === 'home' && <Home />}

        {/* ROLL LIST PAGE */}
        {view === 'list' && <ResultList />}

        {/* SEARCH PAGE */}
        {view === 'search' && (
          <div className="flex flex-col items-center w-full">
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
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;