import { Icon } from '@iconify/react';
import SectionHeader from './SectionHeader';

const CARDS = [
  {
    icon: 'lucide:layers',
    title: 'Full Stack',
    desc: 'React + TypeScript frontends paired with C# ASP.NET Core APIs and SQL databases.',
  },
  {
    icon: 'lucide:bot',
    title: 'AI Systems',
    desc: 'RAG architecture, LangChain pipelines, and PGVector retrieval for intelligent apps.',
  },
  {
    icon: 'lucide:cloud',
    title: 'Cloud & DevOps',
    desc: 'Docker, Azure DevOps, Azure VMs — containerized, deployed, and maintained.',
  },
  {
    icon: 'lucide:chart-column',
    title: 'Data & BI',
    desc: 'Power BI dashboards, KPI reporting, and data visualization for actionable insights.',
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              Building things that <em className="serif">matter</em>.
            </>
          }
        />

        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-lead">
              I'm a Full Stack Developer from Talisay City, Cebu, with a BS in Information
              Technology from the University of San Jose – Recoletos.
            </p>
            <p>
              At N-PAX Global IT Solutions, I led the development of Paxie — an Agentic RAG chatbot
              integrating LangChain, PGVector, and Azure cloud infrastructure. I thrive at the
              intersection of solid engineering and practical AI integration.
            </p>
            <p>
              My approach is AI-augmented: I use AI tools to move faster while keeping full
              ownership of architecture, code quality, and outcomes. Think clearly, review
              critically, ship confidently.
            </p>
          </div>

          <div className="about-cards reveal">
            {CARDS.map((card) => (
              <div key={card.title} className="card about-card">
                <div className="icon-chip">
                  <Icon icon={card.icon} />
                </div>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
