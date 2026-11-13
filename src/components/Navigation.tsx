import amanLogo from "../assets/logo/aman_logo.jpg";

interface NavigationProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  visible: boolean;
  isScrolled: boolean;
}

export default function Navigation({
  onToggleMobileMenu,
  isMobileMenuOpen,
  visible,
  isScrolled,
}: NavigationProps) {
  return (
    <header
      id="header"
      className={`${visible ? "visible" : ""} ${isScrolled ? "scrolled" : ""}`}
    >
      <a
        className="brand-logo-link"
        href="#home"
        aria-label="Aman Kumar Gautam - Home"
        title="Aman Kumar Gautam"
      >
        <img src={amanLogo} alt="Aman Logo" className="brand-full-logo" />
      </a>

      <nav className="nav">
        <a href="#works">Works</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="actions">
        <button
          className="glass-btn mobile-menu-btn"
          id="open-drawer"
          onClick={onToggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation menu"}
          title={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? (
            <svg
              width="17"
              height="17"
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
          ) : (
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <a className="contact-pill" href="#contact">
          <span>Contact me</span>
          <span className="orb">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
