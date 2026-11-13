import { PROJECTS, type ProjectItem } from "../data/portfolioData";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section className="section-three interactive" id="works">
      <div className="interactive">
        <div className="mono-label reveal">[ 03 — Featured Projects &amp; Works ]</div>
        <h2 className="section-heading reveal" style={{ transitionDelay: "0.1s" }}>
          Selected Works
          <br />
          &amp; Deliverables.
        </h2>
      </div>

      <div className="shape-bottom interactive">
        <p className="body-copy reveal" style={{ transitionDelay: "0.15s" }}>
          Explore key client, institutional, and personal projects. Each build
          focuses on responsive design, clean code architecture, and engaging user
          interactions.
        </p>
        <div className="hint-pill reveal" style={{ transitionDelay: "0.28s" }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v6m0 0a3 3 0 1 0-3-3m3 3a3 3 0 1 1 3-3" />
          </svg>
          <span>Interactive 3D field · Swipe through it</span>
        </div>
      </div>

      <div className="projects-grid interactive">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="project-card reveal interactive"
            style={{ transitionDelay: `${0.1 + idx * 0.12}s`, cursor: "pointer" }}
            onClick={() => onSelectProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectProject(project);
              }
            }}
          >
            <div className="project-media-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
              <span className="project-tag">{project.tag}</span>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Live Site</span>
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
                )}
                <button
                  type="button"
                  className="project-btn ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                >
                  <span>Project Details</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
