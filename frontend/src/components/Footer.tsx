import { Icon } from '@iconify/react';
import { personal } from '../data/portfolio';
import { scrollToId } from '../lib/scroll';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} {personal.name} · Built with React &amp; Vite
        </p>

        <div className="footer-links">
          <a className="footer-link" href={personal.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="footer-link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <button className="footer-top" onClick={() => scrollToId('hero')} aria-label="Back to top">
            <Icon icon="lucide:arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}
