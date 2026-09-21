import { experiences } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Where I've worked"
          sub="From intern to engineer — a progression built on shipping real products."
        />

        <ol className="exp-list">
          {experiences.map((exp) => {
            const current = exp.period.includes('Present');
            return (
              <li key={exp.id} className="exp-item reveal">
                <div className="exp-side">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-company">{exp.company}</span>
                  {current && (
                    <span className="exp-current">
                      <span className="status-dot" />
                      Current
                    </span>
                  )}
                </div>

                <div className="exp-main">
                  <h3 className="exp-role">{exp.role}</h3>
                  {exp.tags.length > 0 && (
                    <div className="tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
