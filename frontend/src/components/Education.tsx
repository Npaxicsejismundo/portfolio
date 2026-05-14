import { degrees, trainings } from '../data/portfolio';

export default function Education() {
  return (
    <section className="section-lifted" id="education">
      <span className="ghost-text" style={{ top: '-10px', right: '-20px' }} aria-hidden="true">
        EDU
      </span>

      <div className="section-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>
          Education &amp; Training
        </div>
        <h2 className="section-title">Academic &amp; Professional Development</h2>
        <p className="section-sub">
          Formal education anchored by intensive industry training at N-PAX Global IT Solutions.
        </p>

        <div className="edu-grid">
          {degrees.map((deg) => (
            <div key={deg.school} className="edu-card">
              <div className="edu-degree">{deg.degree}</div>
              <div className="edu-school">{deg.school}</div>
              <div className="edu-year">{deg.year}</div>
            </div>
          ))}
        </div>

        <div className="eyebrow" style={{ marginBottom: '24px' }}>
          <span className="eyebrow-dot">●</span>
          Professional Training
        </div>

        <div className="training-grid">
          {trainings.map((t) => (
            <div key={t.title} className="training-card">
              <div className="training-title">{t.title}</div>
              <div className="training-org">
                {t.org} · {t.period}
              </div>
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
