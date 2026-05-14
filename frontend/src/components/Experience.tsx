import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <span className="ghost-text" style={{ top: '-10px', left: '-20px' }} aria-hidden="true">
        EXP
      </span>

      <div className="section-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>
          Work Experience
        </div>
        <h2 className="section-title">Where I've Worked</h2>
        <p className="section-sub">
          From intern to engineer — a progression built on shipping real products.
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-role">{exp.role}</span>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                {exp.tags.length > 0 && (
                  <div className="tags timeline-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="timeline-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="timeline-bullet">
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
