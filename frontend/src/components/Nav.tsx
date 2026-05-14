import { personal } from '../data/portfolio';

const NAV_OFFSET = 80;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Nav() {
  return (
    <nav className="nav-pill" role="navigation" aria-label="Main navigation">
      <span className="nav-logo" onClick={() => scrollTo('hero')} role="button" tabIndex={0}>
        Ivan S.
      </span>

      <div className="nav-divider" aria-hidden="true" />

      <ul className="nav-links">
        {[
          { label: 'About', id: 'about' },
          { label: 'Technical Stack', id: 'skills' },
          { label: 'Projects', id: 'projects' },
          { label: 'Work Experience', id: 'experience' },
          { label: 'Education & Training', id: 'education' },
        ].map(({ label, id }) => (
          <li key={id}>
            <span
              className="nav-link"
              onClick={() => scrollTo(id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollTo(id)}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>

      <button className="nav-cta" onClick={() => scrollTo('contact')}>
        Contact
      </button>
    </nav>
  );
}

// Suppress unused import warning
void personal;
