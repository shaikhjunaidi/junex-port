import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const items = [
    'PYTHON & DJANGO',
    'WEB DEVELOPMENT',
    'AI & MACHINE LEARNING',
    'DATA STRUCTURES & ALGORITHMS',
    'RESTFUL APIS',
    'FULL-STACK ARCHITECTURE',
    'CREATIVE ENGINEERING',
    'RESPONSIVE UI DESIGN',
  ];

  return (
    <div
      className="marquee-strip"
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'linear-gradient(90deg, #0d0706 0%, #170d0b 50%, #0d0706 100%)',
        padding: '1.1rem 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="animate-marquee">
        {/* First set */}
        {items.map((text, i) => (
          <div
            key={`marquee-1-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginRight: '2.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{text}</span>
            <Sparkles size={14} style={{ color: 'var(--color-vivid-orange)', opacity: 0.85 }} />
          </div>
        ))}

        {/* Duplicate set for seamless continuous loop */}
        {items.map((text, i) => (
          <div
            key={`marquee-2-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginRight: '2.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{text}</span>
            <Sparkles size={14} style={{ color: 'var(--color-vivid-orange)', opacity: 0.85 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
