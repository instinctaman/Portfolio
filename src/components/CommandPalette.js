import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, SKILLS, SERVICES, EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const CommandPalette = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      sounds.playActivate();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate(null, 'toggle-palette');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  // Search items index
  const items = [
    { section: 'Navigation', label: 'Home / Hero', icon: 'fa-solid fa-house', action: () => onNavigate('#hero') },
    { section: 'Navigation', label: 'Selected Works (Projects)', icon: 'fa-solid fa-layer-group', action: () => onNavigate('#projects') },
    { section: 'Navigation', label: 'Trajectory & Experience', icon: 'fa-solid fa-timeline', action: () => onNavigate('#experience') },
    { section: 'Navigation', label: 'Skill Matrix & Tech Radar', icon: 'fa-solid fa-microchip', action: () => onNavigate('#skills') },
    { section: 'Navigation', label: 'Studio Services', icon: 'fa-solid fa-cubes', action: () => onNavigate('#services') },
    { section: 'Navigation', label: 'Developer Dossier (About)', icon: 'fa-solid fa-user-astronaut', action: () => onNavigate('#about') },
    { section: 'Navigation', label: 'Signal Terminal (Contact)', icon: 'fa-solid fa-paper-plane', action: () => onNavigate('#contact') },
    
    // Quick Actions
    { section: 'Actions', label: 'Download Resume (Aman CV.pdf)', icon: 'fa-solid fa-file-arrow-down', action: () => window.open(PERSONAL_INFO.assets.resume, '_blank') },
    { section: 'Actions', label: 'Visit GitHub (@instinctaman)', icon: 'fa-brands fa-github', action: () => window.open('https://github.com/instinctaman', '_blank') },
    { section: 'Actions', label: 'LinkedIn Profile', icon: 'fa-brands fa-linkedin-in', action: () => window.open('https://www.linkedin.com/in/aman-kumar-38aa882b8/', '_blank') },

    // Projects
    ...PROJECTS.map(p => ({
      section: 'Projects',
      label: p.title + ' — ' + p.description,
      icon: 'fa-solid fa-code-branch',
      action: () => {
        onNavigate('#projects');
        window.open(p.liveUrl, '_blank');
      }
    })),

    // Skills
    ...SKILLS.map(s => ({
      section: 'Skills',
      label: `${s.name} (${s.percentage}% Proficiency) — ${s.highlight}`,
      icon: s.icon,
      action: () => onNavigate('#skills')
    })),

    // Services
    ...SERVICES.map(srv => ({
      section: 'Services',
      label: `${srv.title} — ${srv.subtitle}`,
      icon: srv.icon,
      action: () => onNavigate('#services')
    })),

    // Experiences
    ...EXPERIENCES.map(exp => ({
      section: 'Experience',
      label: `${exp.title} (${exp.organization})`,
      icon: 'fa-solid fa-award',
      action: () => onNavigate('#experience')
    }))
  ];

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.section.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay-backdrop" onClick={onClose}>
      <div className="modal-dialog-frame glass-card" onClick={e => e.stopPropagation()}>
        {/* Search Header */}
        <div className="search-input-header">
          <i className="fa-solid fa-terminal search-header-icon"></i>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, skill, or section..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="search-text-input"
          />
          <span className="search-esc-badge">
            ESC to close
          </span>
        </div>

        {/* Results List */}
        <div className="command-results-list">
          {filteredItems.length === 0 ? (
            <div className="command-empty-state">
              <i className="fa-solid fa-ghost command-empty-icon"></i>
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sounds.playClick();
                  item.action();
                  onClose();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="command-item-btn"
              >
                <div className="command-item-left">
                  <div className="command-item-icon-box">
                    <i className={item.icon}></i>
                  </div>
                  <span className="command-item-label">
                    {item.label}
                  </span>
                </div>
                <span className="command-item-section-tag">
                  {item.section}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="command-footer-bar">
          <div className="command-footer-left">
            <span>Aman Studio Command Dispatcher</span>
          </div>
          <span>Navigation: Click or Enter</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
