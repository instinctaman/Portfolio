import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const HeroSection = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef(null);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && typedText === currentRole) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, typedText.length - 1)
          : currentRole.substring(0, typedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // 3D Card mouse tilt physics
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = -(y / (rect.height / 2)) * 12;
    const tiltY = (x / (rect.width / 2)) * 12;
    cardRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section id="hero" className="section-padding hero-section-container">
      {/* Radiant Background Aura */}
      <div className="hero-aura-cyan" />
      <div className="hero-aura-blue" />

      <div className="content-wrapper hero-content-wrapper">
        {/* HUD Telemetry Strip */}
        <div className="hero-telemetry-strip">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="hero-telemetry-status-text">
              SYS.STATUS: AVAILABLE FOR 2026
            </span>
          </div>

          <div className="hero-telemetry-coords">
            <span>
              <i className="fa-solid fa-location-crosshairs hero-telemetry-icon"></i>
              {PERSONAL_INFO.location.coords} [{PERSONAL_INFO.location.label}]
            </span>
            <span className="telemetry-tech-tag hero-telemetry-tech-tag">
              BUILD: ARCHITECT_V26
            </span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="split-grid-2col">
          {/* Left Column: Kinetic Introduction */}
          <div className="hero-content-col">
            <div className="section-badge hero-badge-align">
              <i className="fa-solid fa-terminal"></i>
              <span>Developer Dossier & Interactive Space</span>
            </div>

            <h1 className="hero-h1-title">
              Hi, I am <br />
              <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Interactive Role Headline */}
            <div className="hero-role-headline">
              <span>Passionate</span>
              <span className="hero-typed-wrapper">
                {typedText}
                <span className="hero-cursor-blink" />
              </span>
            </div>

            <p className="hero-bio-lead">
              {PERSONAL_INFO.bio[0]}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  sounds.playClick();
                  if (onNavigate) onNavigate('#projects');
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn-primary"
              >
                <i className="fa-solid fa-cubes"></i>
                <span>Explore Works</span>
              </a>

              <a
                href={PERSONAL_INFO.assets.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                onMouseEnter={() => sounds.playHover()}
                className="btn-secondary"
              >
                <i className="fa-solid fa-file-invoice"></i>
                <span>See Resume</span>
              </a>

              <a
                href="https://github.com/instinctaman"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                onMouseEnter={() => sounds.playHover()}
                className="btn-secondary"
                title="Visit Aman's GitHub"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub Vault</span>
              </a>
            </div>

            {/* Micro Social Network Matrix */}
            <div className="hero-channels-row">
              <span className="hero-channels-label">
                Channels //
              </span>
              {PERSONAL_INFO.socials.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon hero-social-btn"
                  title={soc.name}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                >
                  <i className={soc.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Holographic 3D Tilt Developer Card */}
          <div className="hero-perspective-wrapper">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-card hero-3d-card"
            >
              {/* Card Holographic Header */}
              <div className="hero-card-header">
                <div className="hero-card-header-left">
                  <i className="fa-solid fa-id-badge hero-id-icon"></i>
                  <span className="hero-token-label">
                    IDENT_TOKEN // AMAN.07
                  </span>
                </div>
                <span className="hero-verified-badge">
                  VERIFIED DEV
                </span>
              </div>

              {/* Developer Portrait with Laser Cyber Ring */}
              <div className="hero-portrait-frame">
                <img
                  src={PERSONAL_INFO.assets.avatar}
                  alt={PERSONAL_INFO.name}
                  className="hero-portrait-img"
                />
                <div className="hero-portrait-overlay" />
                <div className="hero-portrait-footer">
                  <span className="hero-portrait-name">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="hero-portrait-tag">
                    MCA CS / BCA
                  </span>
                </div>
              </div>

              {/* Core Skill Telemetry Rings */}
              <div className="hero-telemetry-mini-grid">
                <div className="hero-telemetry-mini-item">
                  <div className="hero-telemetry-stat-num hero-stat-cyan">
                    90%
                  </div>
                  <div className="hero-telemetry-stat-label">
                    HTML
                  </div>
                </div>

                <div className="hero-telemetry-mini-item">
                  <div className="hero-telemetry-stat-num hero-stat-blue">
                    80%
                  </div>
                  <div className="hero-telemetry-stat-label">
                    CSS / C++
                  </div>
                </div>

                <div className="hero-telemetry-mini-item">
                  <div className="hero-telemetry-stat-num hero-stat-violet">
                    65%
                  </div>
                  <div className="hero-telemetry-stat-label">
                    JS / MySQL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
