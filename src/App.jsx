import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // ইমেজের মতো ল্যান্ডিং পেজ
import About from './components/About'; // আমাদের সম্পর্কে পেজ
import ResultList from './components/result/ResultList'; // রোল নাম্বার লিস্ট
import ScholarshipDetails from './components/scholarship/ScholarshipDetails'; // মেধাবৃত্তি বিস্তারিত
import SearchPage from './components/result/SearchPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden font-sans bg-gray-50">
      <Navbar />

      <main className="flex flex-col flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<ResultList />} />
          <Route path="/scholarship" element={<ScholarshipDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;