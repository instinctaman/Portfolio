import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import smLogo from "../assets/logo/sm_logo.jpg";

interface HeroSectionProps {
  revealed: boolean;
}

export default function HeroSection({ revealed }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    if (!isDeleting && typedText === currentRole) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
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

  return (
    <section className={`hero ${revealed ? "revealed" : ""}`} id="home">
      <div className="hero-row interactive">
        <div className="hero-left">
          <div className="eyebrow">
            <img src={smLogo} alt="Aman" className="hero-avatar-badge" />
            <span>[ Personal Portfolio ]</span>
            <span className="status-badge">
              <span className="status-indicator" />
              {PERSONAL_INFO.status}
            </span>
          </div>

          <div className="hero-intro-lead">Hi, I am</div>
          <h1 className="hero-main-name">
            {PERSONAL_INFO.name}
          </h1>

          <div className="hero-role-headline">
            <span className="role-prefix">Passionate </span>
            <span className="role-typed-text">{typedText}</span>
            <span className="hero-cursor-blink">|</span>
          </div>

          <div className="hero-actions">
            <a href="#works" className="hero-btn">
              <span>View Projects</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.assets.resume}
              download
              target="_blank"
              rel="noreferrer"
              className="hero-btn secondary"
            >
              <span>Download CV</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="hero-btn secondary"
            >
              <span>Get in Touch</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <p>
            {PERSONAL_INFO.bio[0]}
          </p>
          <div className="hero-telemetry-tag">
            <span>📍 {PERSONAL_INFO.location.label}</span>
          </div>
          <div className="credit">
            © 2026 — {PERSONAL_INFO.name} Portfolio
          </div>
          <div className="scrollcue">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 5v14m-7-7 7 7 7-7" />
            </svg>
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
