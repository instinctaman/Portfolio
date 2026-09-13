import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const Navbar = ({ onOpenCommandPalette, activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: 'fa-solid fa-house' },
    { name: 'Projects', href: '#projects', icon: 'fa-solid fa-layer-group' },
    { name: 'Experience', href: '#experience', icon: 'fa-solid fa-timeline' },
    { name: 'Skills', href: '#skills', icon: 'fa-solid fa-microchip' },
    { name: 'Services', href: '#services', icon: 'fa-solid fa-cubes' },
    { name: 'About', href: '#about', icon: 'fa-solid fa-user-astronaut' },
    { name: 'Contact', href: '#contact', icon: 'fa-solid fa-paper-plane' },
  ];

  const handleLinkClick = (href) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  const toggleSoundHaptics = () => {
    const newState = sounds.toggleSound();
    setSoundActive(newState);
  };

  return (
    <>
      <header className={`nav-header-fixed ${scrolled ? 'nav-header-scrolled' : ''}`}>
        <div className={`nav-dock-container glass-card ${scrolled ? 'nav-dock-scrolled' : ''}`}>
          {/* Brand Logo & Telemetry */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="nav-brand-link"
          >
            <div className="nav-logo-circle">
              <img
                src={PERSONAL_INFO.assets.logo}
                alt={PERSONAL_INFO.name}
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text-col">
              <span className="nav-brand-title">
                AMAN<span className="nav-brand-title-accent">.STUDIO</span>
              </span>
              <span className="nav-brand-sub">
                <span className="nav-brand-dot"></span>
                GREATER NOIDA
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="nav-desktop-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  <i className={`${link.icon} nav-item-icon`}></i>
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="nav-controls-row">
            {/* Search Command Palette Trigger */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenCommandPalette();
              }}
              onMouseEnter={() => sounds.playHover()}
              title="Quick Search & Command Palette (Ctrl+K)"
              className="nav-search-btn"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className="search-text-label">Search</span>
              <kbd className="nav-kbd-badge">⌘K</kbd>
            </button>

            {/* Sound Haptics Toggle */}
            <button
              onClick={toggleSoundHaptics}
              title={soundActive ? 'Mute Audio Haptics' : 'Enable Audio Haptics'}
              className={`nav-haptics-btn ${soundActive ? 'active' : ''}`}
            >
              <i className={soundActive ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'}></i>
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="btn-primary nav-cv-btn desktop-cta"
            >
              <i className="fa-solid fa-arrow-down-to-bracket"></i>
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`nav-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle navigation"
            >
              <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="nav-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="nav-drawer-card" onClick={(e) => e.stopPropagation()}>
            <div className="nav-drawer-header">
              <span className="nav-drawer-tag">
                {"// Studio Menu Navigation"}
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="nav-drawer-link"
              >
                <i className={`${link.icon} nav-drawer-link-icon`}></i>
                {link.name}
              </a>
            ))}

            <a
              href={PERSONAL_INFO.assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="btn-primary nav-drawer-cv-btn"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Download CV (Aman CV.pdf)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
