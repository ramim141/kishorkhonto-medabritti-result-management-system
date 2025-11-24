import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';
import Home from './components/Home'; // নতুন হোম কম্পোনেন্ট

const App = () => {
  // Navigation State ('home' or 'search')
  const [view, setView] = useState('home'); 

  // Search Logic State
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

      if (student) {
        setResult(student);
      } else {
        setError('No result found for this Roll Number.');
      }
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetSearch = () => {
    setResult(null);
    setInputRoll('');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* Navigation - Pass view handler */}
      <Navbar onNavigate={setView} currentView={view} />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-10 flex flex-col items-center">
        
        {/* VIEW: HOME LIST */}
        {view === 'home' && (
          <Home />
        )}

        {/* VIEW: SEARCH RESULT */}
        {view === 'search' && (
          <div className="w-full flex flex-col items-center">
            
            {/* Show Search Form only if no result is displayed */}
            {!result && (
              <SearchForm 
                onSearch={handleSearch}
                inputRoll={inputRoll}
                setInputRoll={setInputRoll}
                loading={loading}
                error={error}
              />
            )}

            {/* Show Result Card if result exists */}
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