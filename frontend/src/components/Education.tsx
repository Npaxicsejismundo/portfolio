import { Icon } from '@iconify/react';
import { degrees, trainings } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Education"
          title="Learning, formally & on the job"
          sub="Formal education anchored by intensive industry training at N-PAX Global IT Solutions."
        />

        <div className="edu-grid reveal">
          {degrees.map((deg) => (
            <div key={deg.school} className="card edu-card">
              <div className="icon-chip">
                <Icon icon="lucide:graduation-cap" />
              </div>
              <div>
                <h3 className="edu-degree">{deg.degree}</h3>
                <p className="edu-school">{deg.school}</p>
              </div>
              <span className="edu-year">{deg.year}</span>
            </div>
          ))}
        </div>

        <h3 className="subheading reveal">Professional training</h3>

        <div className="training-grid reveal">
          {trainings.map((t) => (
            <div key={t.title} className="card training-card">
              <h4 className="training-title">{t.title}</h4>
              <p className="training-org">
                {t.org} · {t.period}
              </p>
              <div className="tags">
                {t.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
