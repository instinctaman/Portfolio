import smLogo from "../assets/logo/sm_logo.jpg";
import { PERSONAL_INFO } from "../data/portfolioData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home", index: "01", desc: "Top & intro fold" },
  { label: "Works", href: "#works", index: "02", desc: "Featured projects & deliverables" },
  { label: "Skills", href: "#skills", index: "03", desc: "Core stack & technical profile" },
  { label: "Services", href: "#services", index: "04", desc: "Capabilities & solutions" },
  { label: "Journey", href: "#journey", index: "05", desc: "Experience & credentials" },
  { label: "Contact", href: "#contact", index: "06", desc: "Get in touch & collaborate" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop scrim */}
      <div
        id="scrim"
        className={isOpen ? "open" : ""}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside
        id="drawer"
        className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-head">
          <div className="mobile-drawer-brand">
            <img src={smLogo} alt="Aman Logo" className="mobile-drawer-avatar" />
            <div>
              <div className="mobile-drawer-name">{PERSONAL_INFO.name}</div>
              <div className="mobile-drawer-tagline">Portfolio Navigation</div>
            </div>
          </div>

          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-status">
          <span className="status-indicator" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Navigation list */}
        <nav className="mobile-menu-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-item"
              onClick={onClose}
            >
              <div className="mobile-nav-meta">
                <span className="mobile-nav-idx">[{link.index}]</span>
                <span className="mobile-nav-text">{link.label}</span>
              </div>
              <span className="mobile-nav-desc">{link.desc}</span>
              <svg
                className="mobile-nav-chevron"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Quick action buttons */}
        <div className="mobile-menu-actions">
          <a
            href="#contact"
            className="mobile-action-btn primary"
            onClick={onClose}
          >
            <span>Let&apos;s Connect</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href={PERSONAL_INFO.assets.resume}
            download
            target="_blank"
            rel="noreferrer"
            className="mobile-action-btn secondary"
            onClick={onClose}
          >
            <span>Download CV</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>

        {/* Bottom meta */}
        <div className="mobile-menu-footer">
          <div className="mobile-meta-line">
            <span>📍 {PERSONAL_INFO.location.label}</span>
          </div>
          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="mobile-email-link"
          >
            {PERSONAL_INFO.contact.email}
          </a>
        </div>
      </aside>
    </>
  );
}
