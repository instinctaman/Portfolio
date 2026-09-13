import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'Frontend Core', label: 'Frontend & UI' },
    { id: 'Programming Core', label: 'Core Languages' },
    { id: 'Database & Backend', label: 'Backend & Data' },
  ];

  const filteredSkills = SKILLS.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory || (activeCategory === 'Frontend Core' && s.category === 'Styling & Motion');
  });

  return (
    <section id="skills" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-microchip"></i>
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="section-title">
            Skill <span className="text-gradient">Matrix</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, modern web frameworks, and database technologies honed through academic studies and practical project development.
          </p>

          {/* Category Filter Pills */}
          <div className="filter-pills-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="cards-grid-auto">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const radius = 38;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

            return (
              <div
                key={skill.name}
                className="glass-card gauge-card-box"
                onMouseEnter={() => {
                  sounds.playHover();
                  setHoveredSkill(skill.name);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* SVG Radial Gauge */}
                <div className="gauge-wrapper">
                  <svg width="100" height="100" className="gauge-svg">
                    {/* Background track */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      strokeWidth="7"
                      className="gauge-circle-track"
                    />
                    {/* Glowing progress arc */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke="url(#skillGrad)"
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="gauge-circle-bar"
                    />
                    <defs>
                      <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-cyan)" />
                        <stop offset="100%" stopColor="var(--accent-blue)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Centered Icon & Percentage */}
                  <div className="gauge-center-box">
                    <i className={`${skill.icon} gauge-icon ${
                      skill.name === 'HTML' ? 'skill-icon-html' :
                      skill.name === 'CSS' ? 'skill-icon-css' :
                      skill.name === 'C/C++' ? 'skill-icon-cpp' :
                      skill.name === 'Javascript' ? 'skill-icon-javascript' :
                      skill.name === 'MySQL' ? 'skill-icon-mysql' :
                      skill.name === 'Node.js' ? 'skill-icon-nodejs' :
                      skill.name === 'Express.js' ? 'skill-icon-expressjs' :
                      skill.name === 'React.js' ? 'skill-icon-reactjs' :
                      skill.name === 'MongoDB' ? 'skill-icon-mongodb' :
                      skill.name === 'Git / GitHub' ? 'skill-icon-git' : 'skill-icon-default'
                    }`}></i>
                    <span className="gauge-percent-text">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="gauge-title">
                  {skill.name}
                </h3>

                <span className="gauge-cat-tag">
                  {skill.category}
                </span>

                <p className="gauge-desc">
                  {skill.highlight}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Terminal Telemetry Readout */}
        <div className="glass-card telemetry-bar-card">
          <div className="hero-card-header-left">
            <i className="fa-solid fa-terminal hero-id-icon"></i>
            <span className="telemetry-bar-text">
              <strong className="text-highlight">STACK_STATUS:</strong> 8 verified competencies initialized. Clean code, semantic standards & algorithmic logic.
            </span>
          </div>
          <span className="cyber-badge telemetry-badge-emerald">
            ACTIVE & OPTIMIZED
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
