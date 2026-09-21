import { Icon } from '@iconify/react';
import { skillGroups } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const ICONS: Record<string, string> = {
  Frontend: 'lucide:layout-template',
  Backend: 'lucide:server',
  Database: 'lucide:database',
  DevOps: 'lucide:container',
  'Data & Analytics': 'lucide:chart-line',
  'Design & Management': 'lucide:pen-tool',
};

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Stack"
          title="Tools & technologies"
          sub="A broad skill set across the full development lifecycle — from UI to infrastructure."
        />

        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.category} className="card skill-card">
              <div className="skill-card-head">
                <div className="icon-chip">
                  <Icon icon={ICONS[group.category] ?? 'lucide:code'} />
                </div>
                <h3 className="skill-card-title">{group.category}</h3>
                <span className="skill-count">{group.skills.length}</span>
              </div>
              <div className="tags">
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
