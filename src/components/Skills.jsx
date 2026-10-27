import React from 'react';
import { PORTFOLIO } from '../data/portfolio';
import { Code2, Layers, Database, Cpu, Wrench } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code2,
  'Frameworks & Backend': Layers,
  'Databases & Storage': Database,
  'Tools & Deployment': Wrench,
  'Core Engineering Concepts': Cpu,
};

export default function Skills() {
  const { skills } = PORTFOLIO;

  return (
    <section id="skills" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">03 // TECHNICAL TOOLKIT</span>
          <h2 className="section-title">
            Skills & <span className="accent">Competencies.</span>
          </h2>
          <p className="section-lead">
            Technologies, libraries, and architectural principles applied across backend development, machine learning integrations, and web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {Object.entries(skills).map(([category, items]) => {
            const Icon = categoryIcons[category] || Code2;

            return (
              <div
                key={category}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(244, 90, 39, 0.12)',
                      border: '1px solid rgba(244, 90, 39, 0.28)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-warm-highlight)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        transition: 'all var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(244, 90, 39, 0.4)';
                        e.currentTarget.style.background = 'rgba(244, 90, 39, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.875rem',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                        }}
                      >
                        {item.name}
                      </span>
                      {item.level && (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--text-accent)',
                            background: 'rgba(244, 90, 39, 0.12)',
                            padding: '0.1rem 0.35rem',
                            borderRadius: '2px',
                          }}
                        >
                          {item.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
