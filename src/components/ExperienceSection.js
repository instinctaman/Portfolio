import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import CertificateModal from './CertificateModal';

const ExperienceSection = () => {
  const [selectedCredential, setSelectedCredential] = useState(null);

  return (
    <section id="experience" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-timeline"></i>
            <span>Career Milestones & Education</span>
          </div>
          <h2 className="section-title">
            Trajectory & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on industry internships, academic rigor, and international technical conferences shaping my engineering journey.
          </p>
        </div>

        {/* Interactive Trajectory Grid / Timeline */}
        <div className="cards-grid-timeline">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="glass-card exp-milestone-card"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="exp-top-row">
                  <span className="cyber-badge exp-type-badge">
                    <i className="fa-solid fa-certificate exp-badge-icon"></i>
                    {exp.type}
                  </span>
                  <span className="exp-duration">
                    {exp.duration}
                  </span>
                </div>

                {/* Role & Title */}
                <h3 className="exp-title">
                  {exp.title}
                </h3>

                <div className="exp-org-row">
                  <i className="fa-solid fa-building"></i>
                  <span>{exp.organization}</span>
                </div>

                {/* Description */}
                <p className="exp-desc">
                  {exp.description}
                </p>

                {/* Tech Pills */}
                <div className="exp-tech-row">
                  {exp.technologies.map((t, tIndex) => (
                    <span
                      key={tIndex}
                      className="exp-tech-chip"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: View Certificate / Photo Lightbox */}
              <button
                onClick={() => {
                  sounds.playClick();
                  setSelectedCredential(exp);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn-secondary exp-btn-action"
              >
                <i className="fa-regular fa-image"></i>
                <span>{exp.credentialLabel || 'View Record'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Credential Modal */}
      {selectedCredential && (
        <CertificateModal
          item={selectedCredential}
          onClose={() => setSelectedCredential(null)}
        />
      )}
    </section>
  );
};

export default ExperienceSection;
