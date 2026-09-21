import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { scrollToId } from '../lib/scroll';

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
];

type Theme = 'light' | 'dark';

function initialTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Nav() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    [...LINKS.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => go('hero')} aria-label="Back to top">
          <span className="nav-mark">IS</span>
          <span className="nav-name">Ivan Sejismundo</span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          {LINKS.map(({ label, id }) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'is-active' : ''}`}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon icon={theme === 'dark' ? 'lucide:sun' : 'lucide:moon'} />
          </button>
          <button className="btn btn-primary btn-sm nav-cta" onClick={() => go('contact')}>
            Let's talk
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon icon={open ? 'lucide:x' : 'lucide:menu'} />
          </button>
        </div>
      </div>

      <div className="nav-mobile">
        {[...LINKS, { label: 'Contact', id: 'contact' }].map(({ label, id }) => (
          <button key={id} className="nav-mobile-link" onClick={() => go(id)}>
            {label}
            <Icon icon="lucide:arrow-up-right" />
          </button>
        ))}
      </div>
    </header>
  );
}
