import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    sounds.playActivate();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-satellite-dish"></i>
            <span>Transmission Terminal</span>
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project, role opportunity, or question? Send a direct transmission or connect across social channels.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="split-grid-2col">
          {/* Left Column: Direct Contact Telemetry & Social Matrix */}
          <div className="about-stack-col">
            {/* Direct Information Nodes */}
            <div className="glass-card contact-panel-card">
              <h3 className="contact-panel-title">
                <i className="fa-solid fa-address-card hero-id-icon"></i>
                <span>Direct Access Channels</span>
              </h3>

              <div className="contact-node-list">
                {/* Location Node */}
                <a
                  href={PERSONAL_INFO.location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="contact-node-card"
                >
                  <div className="contact-icon-square contact-icon-cyan">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="contact-node-meta-label">
                      LOCATION
                    </div>
                    <div className="contact-node-main-val">{PERSONAL_INFO.location.label}</div>
                  </div>
                </a>

                {/* Email Node */}
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="contact-node-card"
                >
                  <div className="contact-icon-square contact-icon-blue">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div className="contact-node-meta-label">
                      EMAIL TRANSMISSION
                    </div>
                    <div className="contact-node-main-val">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </a>

                {/* Phone Node */}
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="contact-node-card"
                >
                  <div className="contact-icon-square contact-icon-violet">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div className="contact-node-meta-label">
                      PHONE / WHATSAPP
                    </div>
                    <div className="contact-node-main-val">{PERSONAL_INFO.contact.phoneDisplay}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Matrix Pod */}
            <div className="glass-card contact-social-matrix-card">
              <h4 className="contact-social-matrix-title">
                Network Profiles // Connect
              </h4>

              <div className="contact-social-matrix-row">
                {PERSONAL_INFO.socials.map((soc) => (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                    className="btn-secondary contact-social-pill-btn"
                  >
                    <i className={soc.icon}></i>
                    <span>{soc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Interactive Transmission Terminal Form */}
          <div className="glass-card contact-form-container">
            <div className="contact-form-header">
              <h3 className="contact-form-title">
                Send Direct Message
              </h3>
              <span className="contact-form-badge">
                FORM.V26
              </span>
            </div>

            {formSubmitted ? (
              <div className="transmission-success-card">
                <div className="transmission-check-circle">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="transmission-title">
                  Transmission Dispatched
                </h4>
                <p className="transmission-desc">
                  Thank you for reaching out! Your message has been routed to Aman Kumar Gautam.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary transmission-reset-btn"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form-body"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                {/* Name field */}
                <div className="form-field-group">
                  <label className={`form-field-label ${focusedField === 'name' ? 'focused' : ''}`}>
                    YOUR NAME / IDENTIFIER *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="form-field-input"
                  />
                </div>

                {/* Email field */}
                <div className="form-field-group">
                  <label className={`form-field-label ${focusedField === 'email' ? 'focused' : ''}`}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="form-field-input"
                  />
                </div>

                {/* Phone field */}
                <div className="form-field-group">
                  <label className={`form-field-label ${focusedField === 'phone' ? 'focused' : ''}`}>
                    PHONE / CONTACT NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 ..."
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="form-field-input"
                  />
                </div>

                {/* Message field */}
                <div className="form-field-group">
                  <label className={`form-field-label ${focusedField === 'message' ? 'focused' : ''}`}>
                    TRANSMISSION MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe your project, inquiry, or proposal..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="form-field-textarea"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  onMouseEnter={() => sounds.playHover()}
                  className="btn-primary contact-submit-btn"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
