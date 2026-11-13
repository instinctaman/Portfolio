import type { ExperienceItem } from "../data/portfolioData";

interface CredentialModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export default function CredentialModal({
  experience,
  onClose,
}: CredentialModalProps) {
  if (!experience) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {experience.image && (
          <img
            src={experience.image}
            alt={experience.title}
            className="modal-media"
          />
        )}

        <div className="mono-label" style={{ marginBottom: "12px" }}>
          [ {experience.type} · {experience.duration} ]
        </div>

        <h2 className="modal-title">{experience.title}</h2>
        <div
          style={{
            fontSize: "14px",
            color: "var(--blue)",
            fontFamily: "var(--mono)",
            marginBottom: "16px",
          }}
        >
          {experience.role} @ {experience.organization}
        </div>

        <p className="modal-desc">{experience.description}</p>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "11px",
              fontFamily: "var(--mono)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#777",
              marginBottom: "8px",
            }}
          >
            Key Technologies &amp; Domains:
          </div>
          <div className="project-tags">
            {experience.technologies.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {experience.image && (
          <div style={{ marginTop: "16px" }}>
            <a
              href={experience.image}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <span>Open Full Certificate Image</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
