import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const Footer = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST / Local
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-container">
      <div className="content-wrapper">
        <div className="footer-grid">
          {/* Studio Brand Column */}
          <div className="footer-col">
            <div className="footer-brand-row">
              <div className="footer-logo-circle">
                <img
                  src={PERSONAL_INFO.assets.logo}
                  alt={PERSONAL_INFO.name}
                  className="footer-logo-img"
                />
              </div>
              <span className="footer-brand-title">
                AMAN<span className="footer-brand-title-accent">.STUDIO</span>
              </span>
            </div>

            <p className="footer-brand-desc">
              High-performance web applications, modern UI engineering, and creative problem solving.
            </p>

            {/* Live Clock Telemetry */}
            <div className="footer-clock-pod">
              <i className="fa-regular fa-clock"></i>
              <span>GREATER NOIDA [IST]: {currentTime || 'LIVE'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">
              Navigation
            </h4>
            <ul className="footer-link-list">
              {navLinks.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      sounds.playClick();
                      if (onNavigate) onNavigate(link.href);
                    }}
                    onMouseEnter={() => sounds.playHover()}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="footer-col-title">
              Direct Transmission
            </h4>
            <div className="footer-contact-list">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="footer-contact-link"
              >
                <i className="fa-solid fa-envelope footer-contact-icon-cyan"></i>
                {PERSONAL_INFO.contact.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.contact.phone}`}
                className="footer-contact-link"
              >
                <i className="fa-solid fa-phone footer-contact-icon-blue"></i>
                {PERSONAL_INFO.contact.phoneDisplay}
              </a>
              <span className="footer-contact-text">
                <i className="fa-solid fa-location-dot footer-contact-icon-violet"></i>
                {PERSONAL_INFO.location.label}
              </span>
            </div>
          </div>

          {/* Social Profiles & Back to top */}
          <div className="footer-social-col">
            <div>
              <h4 className="footer-col-title">
                Connect With Aman
              </h4>
              <div className="footer-social-row">
                {PERSONAL_INFO.socials.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-icon footer-social-btn"
                    title={soc.name}
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                  >
                    <i className={soc.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => sounds.playHover()}
              className="btn-secondary footer-back-to-top-btn"
            >
              <i className="fa-solid fa-arrow-up"></i>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Aman Kumar Gautam. Designed & Engineered with precision. All rights reserved.
          </div>
          <div>
            Built with React 19 & Next-Gen CSS Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
