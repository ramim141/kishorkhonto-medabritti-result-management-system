import React from 'react';
import AboutHero from './about/AboutHero';
import MissionVision from './about/MissionVision';
import HistoryTimeline from './about/HistoryTimeline';
import Achievements from './about/Achievements';
import TeamStructure from './about/TeamStructure';

const About = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <AboutHero />
      <HistoryTimeline />
      <MissionVision />
      <Achievements />
      <TeamStructure />
    </div>
  );
};

export default About;
