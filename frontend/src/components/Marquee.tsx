import { skillGroups } from '../data/portfolio';

const ITEMS = skillGroups
  .filter((g) => g.category !== 'Design & Management')
  .flatMap((g) => g.skills);

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
