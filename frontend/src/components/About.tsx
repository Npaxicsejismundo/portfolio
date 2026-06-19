import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section className="section-lifted" id="about">
      <span className="ghost-text" style={{ top: '-20px', right: '-40px' }} aria-hidden="true">
        ABOUT
      </span>

      <div className="section-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot">●</span>
          Who I Am
        </div>
        <h2 className="section-title">Building things that matter</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Full Stack Developer from Talisay City, Cebu, Philippines with a BS in
              Information Technology from the University of San Jose – Recoletos. I specialize in
              building scalable web applications and AI-powered systems.
            </p>
            <p>
              At N-PAX Global IT Solutions, I led the development of Paxie — an Agentic RAG chatbot
              integrating LangChain, PGVector, and Azure cloud infrastructure. I thrive at the
              intersection of solid engineering and practical AI integration.
            </p>
            <p>
              My approach is AI-augmented: I leverage AI tools to accelerate development while
              maintaining full ownership of architecture, code quality, and outcomes. I believe the
              best software is built when developers think clearly, review critically, and ship
              confidently.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon"><Icon icon="lucide:zap" /></div>
              <div className="about-card-title">Full Stack</div>
              <div className="about-card-desc">
                React + TypeScript frontends paired with C# ASP.NET Core APIs and SQL databases.
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><Icon icon="lucide:bot" /></div>
              <div className="about-card-title">AI Systems</div>
              <div className="about-card-desc">
                RAG architecture, LangChain pipelines, and PGVector retrieval for intelligent apps.
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><Icon icon="lucide:cloud" /></div>
              <div className="about-card-title">Cloud & DevOps</div>
              <div className="about-card-desc">
                Docker, Azure DevOps, Azure VMs — containerized, deployed, and maintained.
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon"><Icon icon="lucide:bar-chart-3" /></div>
              <div className="about-card-title">Data & BI</div>
              <div className="about-card-desc">
                Power BI dashboards, KPI reporting, and data visualization for actionable insights.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
