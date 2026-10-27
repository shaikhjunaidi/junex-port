import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color var(--transition-medium), backdrop-filter var(--transition-medium), border-color var(--transition-medium)',
          backgroundColor: scrolled ? 'rgba(9, 9, 9, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.5rem',
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
                background: 'linear-gradient(135deg, var(--color-burnt-orange), var(--color-vivid-orange))',
                display: 'inline-block',
              }}
            />
          </a>

          {/* Availability Badge (Desktop) */}
          <div
            className="no-print"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.785rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
            }}
            id="desktop-status-badge"
          >
            <span className="status-beacon-dot" />
            <span>Open for Internships</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-highlight)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
              aria-label="View Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 9, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.75rem',
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <span className="status-beacon-dot" />
            <span>Open for Internships</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-primary"
            style={{ marginTop: '1rem', width: '220px' }}
          >
            <FileText size={18} />
            <span>View Resume</span>
          </button>
        </div>
      )}

      {/* Responsive media query helper for Navbar */}
      <style>{`
        @media (min-width: 900px) {
          #desktop-nav { display: flex !important; }
          #desktop-status-badge { display: inline-flex !important; }
          #mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
