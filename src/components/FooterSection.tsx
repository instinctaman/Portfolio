import { PERSONAL_INFO } from "../data/portfolioData";
import smLogo from "../assets/logo/sm_logo.jpg";

export default function FooterSection() {
  return (
    <footer id="contact">
      <div className="glow one" />
      <div className="glow two" />

      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-set">
            <span className="marquee-word">{PERSONAL_INFO.name}</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Web Developer</span>
            <i className="marquee-dot" />
            <span className="marquee-word">App Designer</span>
            <i className="marquee-dot" />
            <span className="marquee-word">UI/UX Specialist</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Available for 2026</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Let&apos;s Build Together</span>
            <i className="marquee-dot" />
          </div>
          <div className="marquee-set" aria-hidden="true">
            <span className="marquee-word">{PERSONAL_INFO.name}</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Web Developer</span>
            <i className="marquee-dot" />
            <span className="marquee-word">App Designer</span>
            <i className="marquee-dot" />
            <span className="marquee-word">UI/UX Specialist</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Available for 2026</span>
            <i className="marquee-dot" />
            <span className="marquee-word">Let&apos;s Build Together</span>
            <i className="marquee-dot" />
          </div>
        </div>
      </div>

      <div className="footer-body">
        <div className="footer-grid">
          <div className="footer-cta reveal">
            <div className="footer-kicker">[ Get In Touch ]</div>
            <h2>
              Have a project in mind
              <br />
              or looking to hire?
            </h2>

            <div className="footer-cta-actions">
              <a
                className="email-pill"
                href={`mailto:${PERSONAL_INFO.contact.email}`}
              >
                <span>{PERSONAL_INFO.contact.email}</span>
                <span className="orb">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>

              <a
                className="resume-pill"
                href={PERSONAL_INFO.assets.resume}
                download
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
                <span>Download Aman&apos;s Resume (PDF)</span>
                <span className="orb">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="link-columns">
            <div className="link-col reveal">
              <h3>Navigation</h3>
              <a href="#works">
                Projects &amp; Works
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <a href="#skills">
                Skills &amp; Profile
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <a href="#services">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <a href="#journey">
                Journey &amp; Education
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            <div className="link-col reveal" style={{ transitionDelay: "0.08s" }}>
              <h3>Connect</h3>
              {PERSONAL_INFO.socials.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer">
                  {s.name}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="link-col reveal" style={{ transitionDelay: "0.16s" }}>
              <h3>Contact Info</h3>
              <a href={`tel:${PERSONAL_INFO.contact.phone}`}>
                {PERSONAL_INFO.contact.phoneDisplay}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <a
                href={PERSONAL_INFO.location.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {PERSONAL_INFO.location.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="bottom-brand">
            <img src={smLogo} alt="Aman Logo" className="footer-brand-logo" />
            <strong>AMAN KUMAR GAUTAM</strong>
            <i className="blue-dot" />
            <small>
              © 2026 Aman Kumar Gautam — Personal Portfolio &amp; Showcase.
            </small>
          </div>

          <div className="socials">
            {PERSONAL_INFO.socials.slice(0, 4).map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                {s.id === "github" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                  </svg>
                )}
                {s.id === "linkedin" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
                  </svg>
                )}
                {s.id === "twitter" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                  </svg>
                )}
                {s.id === "instagram" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
