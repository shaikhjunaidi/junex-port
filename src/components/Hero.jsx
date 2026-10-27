import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileText, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO } from '../data/portfolio';

export default function Hero({ onOpenResume }) {
  const { personal, contact } = PORTFOLIO;

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 35 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Cinematic Layered Lighting Atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '90vh',
          background: 'radial-gradient(ellipse 65% 55% at 50% 30%, rgba(217, 71, 22, 0.22) 0%, rgba(100, 24, 15, 0.35) 45%, rgba(9, 9, 9, 0) 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Main Visual Composition: Portrait & Overlapping Typography */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            {/* Background Headline Layer (SHAIKH) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                width: '100%',
                position: 'relative',
                zIndex: 3,
                marginBottom: '-2.5vw',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.8rem, 13vw, 11rem)',
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  display: 'block',
                  textTransform: 'uppercase',
                  textShadow: '0 10px 40px rgba(0,0,0,0.8)',
                }}
              >
                {personal.headlineWord1}
              </span>
            </motion.div>

            {/* Central Portrait Container with Ambient Aura */}
            <div
              style={{
                position: 'relative',
                width: 'clamp(260px, 34vw, 420px)',
                height: 'clamp(320px, 42vw, 500px)',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Backlight Ambient Glow */}
              <div className="ambient-portrait-glow" />

              {/* Portrait Frame */}
              <motion.div
                variants={portraitVariants}
                initial="hidden"
                animate="visible"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'clamp(16px, 3vw, 28px)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(244, 90, 39, 0.35)',
                  backgroundColor: '#120B0A',
                }}
              >
                <img
                  src={personal.avatar}
                  alt={`${personal.name} — Python Web Developer`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.98)',
                  }}
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9, 9, 9, 0.7) 0%, transparent 45%, rgba(9, 9, 9, 0.25) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Subtle Corner Tech Brand */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 4,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-vivid-orange)',
                    }}
                  />
                  <span>JUNEX // 2026</span>
                </div>
              </motion.div>
            </div>

            {/* Foreground Outlined Headline Layer (JUNAID.) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              style={{
                width: '100%',
                position: 'relative',
                zIndex: 3,
                marginTop: '-3.5vw',
              }}
            >
              <span
                className="text-stroke"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.8rem, 13vw, 11rem)',
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  display: 'block',
                  textTransform: 'uppercase',
                  cursor: 'default',
                }}
              >
                {personal.headlineWord2}
              </span>
            </motion.div>
          </div>

          {/* Supporting Text & Interactive CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {/* Editorial Role Pill */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(244, 90, 39, 0.08)',
                  border: '1px solid rgba(244, 90, 39, 0.28)',
                  fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                  fontWeight: 600,
                  color: 'var(--color-warm-highlight)',
                  letterSpacing: '0.02em',
                }}
              >
                <span>{personal.tagline}</span>
              </div>
            </motion.div>

            {/* Concise Mission Statement */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.05rem, 1.9vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '680px',
              }}
            >
              A passionate Computer Applications student building modern, scalable, and responsive web applications.
              Mastering Data Structures and Algorithms with Python to engineer efficient software solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ChevronRight size={17} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={16} />
                <span>Contact Me</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-outline">
                <FileText size={16} />
                <span>View Resume</span>
              </button>
            </motion.div>

            {/* Social Anchor Links */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginTop: '1rem',
              }}
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color var(--transition-fast), transform var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color var(--transition-fast), transform var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-warm-highlight)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${contact.email}`}
                aria-label="Send Email"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color var(--transition-fast), transform var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-vivid-orange)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
