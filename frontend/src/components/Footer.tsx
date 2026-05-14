import { personal } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">Ivan S.</div>

        <div className="footer-copy">
          © {year} Ivan Uriel Sejismundo — Talisay City, Cebu, Philippines
        </div>

        <div className="footer-links">
          <a
            className="footer-link"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="footer-link" href={`mailto:${personal.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
