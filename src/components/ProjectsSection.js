import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'featured', label: 'Featured Works' },
    { id: 'internship', label: 'Internship Deliverables' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'featured') return proj.tag.toLowerCase().includes('featured') || proj.tag.toLowerCase().includes('commercial');
    if (filter === 'internship') return proj.tag.toLowerCase().includes('internship');
    return true;
  });

  return (
    <section id="projects" className="section-padding section-relative">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-code-fork"></i>
            <span>Engineering & Deployments</span>
          </div>
          <h2 className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of real-world web applications, responsive platforms, and internship project deliverables.
          </p>

          {/* Category Filter Pills */}
          <div className="filter-pills-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setFilter(cat.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`filter-pill-btn ${filter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="cards-grid-2col">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card project-showcase-card"
            >
              {/* Browser Window Header Mockup */}
              <div className="project-window-bar">
                <div className="window-dots-row">
                  <span className="window-dot-red"></span>
                  <span className="window-dot-yellow"></span>
                  <span className="window-dot-green"></span>
                </div>

                <span className="project-url-label">
                  {`SYS.0${idx + 1} // ${project.liveUrl.replace('https://', '')}`}
                </span>

                <span className="cyber-badge project-tag-badge">
                  {project.tag}
                </span>
              </div>

              {/* Project Visual Image Showcase */}
              <div
                className="project-visual-frame"
                onClick={() => {
                  sounds.playClick();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-visual-img"
                />
                <div className="project-visual-overlay" />
              </div>

              {/* Project Details Content */}
              <div className="project-info-body">
                <div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-desc">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="project-tags-row">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="cyber-badge project-tech-chip"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Actions */}
                <div className="project-actions-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    onMouseEnter={() => sounds.playHover()}
                    className="btn-primary project-btn-primary"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Launch Live Site</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    onMouseEnter={() => sounds.playHover()}
                    className="btn-secondary project-btn-secondary"
                    title="View Source on GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
