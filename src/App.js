import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import ExperienceSection from './components/ExperienceSection';
import ThemeCustomizer from './components/ThemeCustomizer';
import './styles/design-system.css';

// Internal Portfolio Layout Wrapper
const PortfolioContent = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  // Active section tracker via IntersectionObserver on homepage
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  const handleNavigate = (target, action) => {
    if (action === 'toggle-palette') {
      setIsCommandPaletteOpen((prev) => !prev);
      return;
    }

    if (!target) return;

    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Interactive 60fps Particle Canvas */}
      <CanvasBackground />

      {/* Floating Glassmorphic Dock Navbar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Universal Command Palette Search Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Primary Content Routes */}
      <div className="page-content-wrapper">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<div className="page-wrapper"><ExperienceSection /></div>} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home onNavigate={handleNavigate} />} />
        </Routes>
      </div>

      {/* Futuristic Studio Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom-Right Theme & Display Customizer */}
      <ThemeCustomizer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <PortfolioContent />
    </Router>
  );
}

export default App;
