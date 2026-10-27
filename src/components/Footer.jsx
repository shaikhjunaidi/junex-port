import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO } from '../data/portfolio';

export default function Footer() {
  const { personal, contact } = PORTFOLIO;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#070505',
        padding: '3.5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            {/* Brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                }}
              >
                <span>JUNEX</span>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-vivid-orange)',
                    display: 'inline-block',
                  }}
                />
              </a>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {personal.tagline}
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--color-vivid-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-warm-highlight)';
                  e.currentTarget.style.borderColor = 'var(--color-vivid-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${contact.email}`}
                aria-label="Send Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-vivid-orange)';
                  e.currentTarget.style.borderColor = 'var(--color-vivid-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Mail size={18} />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(244, 90, 39, 0.12)',
                  border: '1px solid rgba(244, 90, 39, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-warm-highlight)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-vivid-orange)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 90, 39, 0.12)';
                  e.currentTarget.style.color = 'var(--color-warm-highlight)';
                }}
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.825rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span>© {new Date().getFullYear()} Shaikh Junaid. All rights reserved.</span>
            <span>Crafted with React · Vite · Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
