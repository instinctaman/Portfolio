import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ServicesSection = ({ onNavigate }) => {
  return (
    <section id="services" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-cubes"></i>
            <span>Studio Capabilities</span>
          </div>
          <h2 className="section-title">
            Offerings & <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Specialized digital engineering, interface design, and technical consulting to bring your digital visions into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="cards-grid-3col">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card service-item-card"
            >
              {/* Service Visual Thumbnail */}
              <div className="service-thumb-frame">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-thumb-img"
                />
                <div className="service-thumb-overlay" />
                <div className="service-icon-badge">
                  <i className={service.icon}></i>
                </div>
              </div>

              {/* Service Info */}
              <div className="service-info-container">
                <div>
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                  <span className="service-sub">
                    {service.subtitle}
                  </span>
                  <p className="service-desc">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="service-feat-list">
                    {service.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="service-feat-item"
                      >
                        <i className="fa-solid fa-check"></i>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    sounds.playClick();
                    if (onNavigate) onNavigate('#contact');
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className="btn-secondary service-inquire-btn"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Inquire Service</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Banner */}
        <div className="glass-card service-banner-card">
          <div>
            <span className="service-banner-tag">
              {"// Direct Line Available"}
            </span>
            <h3 className="service-banner-title">
              Interested in collaborating or hiring?
            </h3>
            <p className="service-banner-desc">
              Reach out directly via email or telephone to discuss projects, ideas, or opportunities.
            </p>
          </div>

          <div className="service-banner-btn-group">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="btn-primary service-banner-btn"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
            >
              <i className="fa-solid fa-envelope"></i>
              <span>{PERSONAL_INFO.contact.email}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.contact.phone}`}
              className="btn-secondary service-banner-btn"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
            >
              <i className="fa-solid fa-phone"></i>
              <span>{PERSONAL_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
