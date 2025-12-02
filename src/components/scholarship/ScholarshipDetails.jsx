import React from 'react';
import ScholarshipHero from './ScholarshipHero';
import ApplicationProcess from './ApplicationProcess';
import Syllabus from './Syllabus';
import FormSubmit from './FormSubmit';
import Contact from './Contact';

// ============= MAIN COMPONENT =============
const ScholarshipDetails = () => {
  return (
    <div className="w-full">
        
        {/* Header & Info Cards */}
        <ScholarshipHero />

        {/* আবেদন প্রক্রিয়া */}
        <ApplicationProcess />

        {/* পরীক্ষার সিলেবাস & বিশেষ দ্রষ্টব্য */}
        <Syllabus />

        {/* রেজিস্ট্রেশন & ঠিকানা */}
        <FormSubmit />

        {/* যোগাযোগ */}
        <Contact />

    </div>
  );
};

export default ScholarshipDetails;
