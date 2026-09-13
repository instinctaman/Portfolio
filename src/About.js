import React from 'react';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';

const About = () => {
  return (
    <div className="page-wrapper">
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default About;