import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-user-astronaut"></i>
            <span>Engineering Identity</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Aman</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer blending algorithmic problem solving with contemporary, responsive web design.
          </p>
        </div>

        {/* Main About Layout Grid */}
        <div className="split-grid-2col">
          {/* Left Column: Interactive Code Terminal View */}
          <div className="glass-card terminal-card">
            {/* Terminal Window Bar */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot terminal-dot-red"></span>
                <span className="terminal-dot terminal-dot-yellow"></span>
                <span className="terminal-dot terminal-dot-green"></span>
              </div>
              <span className="terminal-file-name">aman_profile.ts</span>
              <span className="terminal-tag">UTF-8</span>
            </div>

            {/* Code Content Body */}
            <div className="terminal-body">
              <div>
                <span className="code-kw-pink">const</span> <span className="code-kw-blue">developer</span>: <span className="code-kw-amber">DeveloperDossier</span> = &#123;
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">name:</span> <span className="code-str-green">"{PERSONAL_INFO.name}"</span>,
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">title:</span> <span className="code-str-green">"Web Developer & UI/UX Specialist"</span>,
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">location:</span> <span className="code-str-green">"{PERSONAL_INFO.location.label}"</span>,
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">education:</span> [
              </div>
              <div className="code-indent-2">
                <span className="code-str-green">"Bachelor of Computer Science (2022-25)"</span>,
              </div>
              <div className="code-indent-2">
                <span className="code-str-green">"Bachelor of Computer Applications (BCA)"</span>
              </div>
              <div className="code-indent-1">],</div>
              <div className="code-indent-1">
                <span className="code-key-label">coreLanguages:</span> [<span className="code-str-green">"HTML"</span>, <span className="code-str-green">"CSS"</span>, <span className="code-str-green">"JavaScript"</span>, <span className="code-str-green">"C/C++"</span>, <span className="code-str-green">"Python"</span>, <span className="code-str-green">"PHP"</span>],
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">passions:</span> [<span className="code-str-green">"Dynamic Web Architecture"</span>, <span className="code-str-green">"Open-Source"</span>, <span className="code-str-green">"Complex Problem Solving"</span>],
              </div>
              <div className="code-indent-1">
                <span className="code-key-label">status:</span> <span className="code-status-val">"Available for Opportunities"</span>
              </div>
              <div>&#125;;</div>
              <div className="code-comment">
                {"// Ready for challenging digital initiatives & engineering teams."}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Academic Qualifications */}
          <div className="about-stack-col">
            {/* Bio Card */}
            <div className="glass-card dossier-card">
              <h3 className="dossier-heading">
                <i className="fa-solid fa-code"></i>
                <span>The Developer Journey</span>
              </h3>

              {PERSONAL_INFO.bio.map((paragraph, pIdx) => (
                <p key={pIdx} className="dossier-bio-p">
                  {paragraph}
                </p>
              ))}

              <div className="dossier-footer">
                <a
                  href={PERSONAL_INFO.assets.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  className="btn-primary"
                >
                  <i className="fa-solid fa-file-arrow-down"></i>
                  <span>Download Verified CV</span>
                </a>

                <span className="dossier-edition-tag">Updated 2026 Edition</span>
              </div>
            </div>

            {/* Academic Credentials Pod */}
            <div className="glass-card dossier-card">
              <h3 className="dossier-heading">
                <i className="fa-solid fa-graduation-cap color-accent-blue"></i>
                <span>Academic Education</span>
              </h3>

              <div className="edu-pod-list">
                {EDUCATION.map((edu, eIdx) => (
                  <div key={eIdx} className="edu-pod">
                    <div className="edu-pod-header">
                      <h4 className="edu-title">{edu.degree}</h4>
                      <span className="edu-duration">{edu.duration}</span>
                    </div>
                    <div className="edu-institution">{edu.institution}</div>
                    <p className="edu-desc">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
