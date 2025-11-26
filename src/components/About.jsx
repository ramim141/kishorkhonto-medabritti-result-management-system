import React from 'react';
import AboutHero from './about/AboutHero';
import MissionVision from './about/MissionVision';
import CoreValues from './about/CoreValues';
import HistoryTimeline from './about/HistoryTimeline';
import Achievements from './about/Achievements';
import TeamStructure from './about/TeamStructure';

const About = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <AboutHero />
      <HistoryTimeline />
      <MissionVision />
      <CoreValues />
      {/* <Achievements /> */}
      <TeamStructure />
    </div>
  );
};

export default About;
