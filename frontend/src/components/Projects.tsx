import { projects } from '../data/portfolio';

function badgeClass(badge: string) {
  if (badge === 'Capstone') return 'badge badge-capstone';
  if (badge === 'Personal') return 'badge badge-personal';
  return 'badge';
}

export default function Projects() {
  return (
    <section className="section-lifted" id="projects">
      <span className="ghost-text" style={{ top: '-10px', right: '-30px' }} aria-hidden="true">
        WORK
      </span>

      <div className="section-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>
          Projects
        </div>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-sub">
          Real-world applications built with production-grade architecture and modern tooling.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-top">
                <span className="project-card-title">{project.title}</span>
                <span className={badgeClass(project.badge)}>{project.badge}</span>
              </div>

              <p className="project-card-desc">{project.description}</p>

              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="project-card-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
