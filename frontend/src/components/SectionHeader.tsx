import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}

export default function SectionHeader({ index, eyebrow, title, sub }: SectionHeaderProps) {
  return (
    <header className="section-header reveal">
      <div className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </header>
  );
}
