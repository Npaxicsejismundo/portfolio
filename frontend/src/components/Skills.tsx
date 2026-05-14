import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <span className="ghost-text" style={{ top: '-10px', left: '-20px' }} aria-hidden="true">
        STACK
      </span>

      <div className="section-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>
          Technical Stack
        </div>
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <p className="section-sub">
          A broad skill set across the full development lifecycle — from UI to infrastructure.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-title">{group.category}</div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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
