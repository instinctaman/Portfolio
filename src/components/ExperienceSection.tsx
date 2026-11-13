import { EXPERIENCES, EDUCATION, type ExperienceItem } from "../data/portfolioData";

interface ExperienceSectionProps {
  onSelectExperience: (item: ExperienceItem) => void;
}

export default function ExperienceSection({
  onSelectExperience,
}: ExperienceSectionProps) {
  return (
    <section className="section-four interactive" id="journey">
      <div className="release-inner interactive">
        <div className="mono-label reveal">[ 05 — Experience &amp; Credentials ]</div>
        <h2 className="section-heading reveal" style={{ transitionDelay: "0.12s" }}>
          Experience &amp;
          <br />
          Qualifications.
        </h2>
        <p className="body-copy reveal" style={{ transitionDelay: "0.24s" }}>
          Practical industry internships, active participation in technical
          conferences, and rigorous computer science academics that form my
          professional background.
        </p>
      </div>

      <div className="experience-grid interactive">
        {EXPERIENCES.map((item, idx) => (
          <div
            key={item.id}
            className="exp-card reveal interactive"
            style={{ transitionDelay: `${0.1 + idx * 0.1}s`, cursor: "pointer" }}
            onClick={() => onSelectExperience(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectExperience(item);
              }
            }}
          >
            <div className="exp-top">
              <span className="exp-type">{item.type}</span>
              <span className="exp-duration">{item.duration}</span>
            </div>

            <h3 className="exp-title">{item.title}</h3>
            <div className="exp-org">
              {item.role} · {item.organization}
            </div>

            <p className="exp-desc">{item.summary}</p>

            <button
              type="button"
              className="exp-btn"
              onClick={(e) => {
                e.stopPropagation();
                onSelectExperience(item);
              }}
              aria-label={item.credentialLabel}
            >
              <span>{item.credentialLabel}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}

        {EDUCATION.map((edu, idx) => (
          <div
            key={edu.degree}
            className="exp-card reveal interactive"
            style={{ transitionDelay: `${0.1 + (EXPERIENCES.length + idx) * 0.1}s` }}
          >
            <div className="exp-top">
              <span className="exp-type">Education</span>
              <span className="exp-duration">{edu.duration}</span>
            </div>

            <h3 className="exp-title">{edu.degree}</h3>
            <div className="exp-org">{edu.institution}</div>

            <p className="exp-desc">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
