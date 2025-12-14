import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Notice from './components/Notice';
import ResultList from './components/result/ResultList'; 
import ScholarshipDetails from './components/scholarship/ScholarshipDetails'; 
import SearchPage from './components/result/SearchPage';
import Result_info from './components/result/Result_info';
const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden font-sans bg-gray-50">
      <Navbar />

      <main className="flex flex-col flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/list" element={<ResultList />} />
          <Route path="/scholarship" element={<ScholarshipDetails />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/result-info" element={<Result_info />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;