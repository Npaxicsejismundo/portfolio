import { personal } from '../data/portfolio';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <span className="ghost-text" aria-hidden="true">CONTACT</span>

      <div className="section-inner">
        <div className="contact-layout">

          {/* Left — headline + social */}
          <div className="contact-left">
            <div className="eyebrow">
              <span className="eyebrow-dot">●</span>
              Let's Connect
            </div>
            <h2 className="contact-headline">
              Always here<br />when you need.
            </h2>
            <p className="contact-desc">
              Open to full-time roles, freelance projects, and interesting collaborations.
              Reach out via email or connect on social.
            </p>
            <div className="social-links">
              <a className="social-link" href={personal.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a className="social-link" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — contact cards */}
          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${personal.email}`}>
              <div className="contact-card-icon">✉️</div>
              <div className="contact-card-body">
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">{personal.email}</div>
              </div>
              <span className="contact-card-arrow">↗</span>
            </a>

            <a className="contact-card" href={`tel:${personal.phone}`}>
              <div className="contact-card-icon">📞</div>
              <div className="contact-card-body">
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">{personal.phone}</div>
              </div>
              <span className="contact-card-arrow">↗</span>
            </a>

            <div className="contact-card" style={{ cursor: 'default' }}>
              <div className="contact-card-icon">📍</div>
              <div className="contact-card-body">
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">{personal.location}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
