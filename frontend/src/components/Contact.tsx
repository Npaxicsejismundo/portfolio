import { useState } from 'react';
import { Icon } from '@iconify/react';
import { personal } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-glow" aria-hidden="true" />

          <div className="eyebrow contact-eyebrow">
            <span className="eyebrow-index">06</span>
            <span className="eyebrow-line" aria-hidden="true" />
            Contact
          </div>

          <h2 className="contact-title">
            Let's build something
            <br />
            <em className="serif">great</em> together.
          </h2>

          <p className="contact-desc">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>

          <div className="contact-email">
            <a href={`mailto:${personal.email}`} className="contact-email-link">
              {personal.email}
            </a>
            <button className="contact-copy" onClick={copyEmail} aria-label="Copy email address">
              <Icon icon={copied ? 'lucide:check' : 'lucide:copy'} />
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="contact-meta">
            <a className="contact-chip" href={`tel:${personal.phone}`}>
              <Icon icon="lucide:phone" />
              {personal.phone}
            </a>
            <span className="contact-chip">
              <Icon icon="lucide:map-pin" />
              {personal.location}
            </span>
            <a className="contact-chip" href={personal.github} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:github" />
              GitHub
            </a>
            <a className="contact-chip" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:linkedin" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
