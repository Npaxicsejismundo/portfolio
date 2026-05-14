import { personal } from '../data/portfolio';

function scrollTo(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <span className="ghost-text hero-ghost" aria-hidden="true">PORTFOLIO</span>

      <div className="hero-inner">
        <div className="eyebrow fade-up">
          <span className="eyebrow-dot">●</span>
          {personal.location}
        </div>

        <h1 className="hero-name fade-up fade-up-d1">
          <span>Ivan Uriel</span>
          <span>Sejismundo</span>
        </h1>

        <p className="hero-sub fade-up fade-up-d2">
          Full Stack Developer specializing in React, ASP.NET Core, and AI-augmented systems.
          Building scalable web apps and intelligent solutions from Cebu, Philippines.
        </p>

        <div className="hero-btns fade-up fade-up-d3">
          <button className="btn-ink" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
          <a
            className="btn-outline"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-stats fade-up fade-up-d4">
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">BS IT</div>
            <div className="stat-label">Degree</div>
          </div>
        </div>
      </div>
    </section>
  );
}
