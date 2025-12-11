import React from 'react';
import ScholarshipHero from './ScholarshipHero';
import ApplicationProcess from './ApplicationProcess';
import Syllabus from './Syllabus';
import FormSubmit from './FormSubmit';
import Contact from './Contact';

// ============= MAIN COMPONENT =============
const ScholarshipDetails = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        
        {/* Header & Info Cards */}
        <ScholarshipHero />

        <ApplicationProcess />

  
        <Syllabus />

        <FormSubmit />

        <Contact />

    </div>
  );
};

export default ScholarshipDetails;
