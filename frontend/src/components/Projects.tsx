import { useState } from 'react';
import { Icon } from '@iconify/react';
import { projects, type Project } from '../data/portfolio';
import SectionHeader from './SectionHeader';

type Filter = 'All' | Project['badge'];
const FILTERS: Filter[] = ['All', 'Work', 'Personal', 'Capstone'];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.badge === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title={
            <>
              Selected <em className="serif">work</em>.
            </>
          }
          sub="Real-world applications built with production-grade architecture and modern tooling."
        />

        <div className="filters reveal" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count = f === 'All' ? projects.length : projects.filter((p) => p.badge === f).length;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`filter ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid reveal">
          {visible.map((project) => {
            const [name, subtitle] = project.title.split(' — ');
            const index = String(projects.indexOf(project) + 1).padStart(2, '0');
            return (
              <article key={project.id} className="card project-card">
                <div className="project-top">
                  <span className="project-index">{index}</span>
                  <span className={`badge badge-${project.badge.toLowerCase()}`}>{project.badge}</span>
                </div>

                <h3 className="project-name">{name}</h3>
                {subtitle && <p className="project-subtitle">{subtitle}</p>}
                <p className="project-desc">{project.description}</p>

                <div className="tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label.replace(' ↗', '')}
                        <Icon icon="lucide:arrow-up-right" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
