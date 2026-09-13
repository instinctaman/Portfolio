import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const Home = ({ onNavigate }) => {
  return (
    <main className="page-main-container">
      <HeroSection onNavigate={onNavigate} />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection onNavigate={onNavigate} />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Home;