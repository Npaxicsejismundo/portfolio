import { Icon } from '@iconify/react';
import { personal, projects } from '../data/portfolio';
import { scrollToId } from '../lib/scroll';

const STATS = [
  { num: String(projects.length), label: 'Projects shipped' },
  { num: '3', label: 'Years experience' },
  { num: '15+', label: 'Technologies' },
  { num: 'BS IT', label: 'USJ-R, 2025' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="status-pill fade-up">
          <span className="status-dot" />
          Open to opportunities · Cebu, PH
        </div>

        <p className="hero-kicker fade-up d1">
          {personal.name} — Full Stack Developer
        </p>

        <h1 className="hero-title fade-up d2">
          I build clean web apps
          <br />
          &amp; <em className="serif">AI-powered</em> products.
        </h1>

        <p className="hero-sub fade-up d3">
          React, ASP.NET Core and RAG systems — from pixel-level UI to cloud deployment.
          Currently engineering at N-PAX Global IT Solutions.
        </p>

        <div className="hero-btns fade-up d4">
          <button className="btn btn-primary" onClick={() => scrollToId('projects')}>
            View my work
            <Icon icon="lucide:arrow-down" />
          </button>
          <a className="btn btn-ghost" href={`mailto:${personal.email}`}>
            <Icon icon="lucide:mail" />
            Email me
          </a>
          <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noopener noreferrer">
            <Icon icon="lucide:github" />
            GitHub
          </a>
        </div>

        <dl className="hero-stats fade-up d5">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <dt className="stat-label">{s.label}</dt>
              <dd className="stat-num">{s.num}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
