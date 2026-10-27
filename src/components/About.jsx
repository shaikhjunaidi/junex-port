import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Compass, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO } from '../data/portfolio';

export default function About() {
  const { personal, contact } = PORTFOLIO;

  const focusCards = [
    {
      icon: Terminal,
      title: 'Backend Engineering',
      desc: 'Architecting scalable server-side systems, MVT/MVC workflows, and robust business logic with Python & Django.',
    },
    {
      icon: Database,
      title: 'Data & Modeling',
      desc: 'Schema design, query optimization, and persistent relational data storage using PostgreSQL, MySQL, and SQLite.',
    },
    {
      icon: Code,
      title: 'Algorithms & Problem Solving',
      desc: 'Systematically mastering Data Structures & Algorithms in Python to write time- and memory-efficient code.',
    },
    {
      icon: Compass,
      title: 'Modern Web UX',
      desc: 'Crafting responsive, intuitive user interfaces with semantic HTML5, modern CSS, JavaScript, and React.',
    },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">01 // IDENTITY & OBJECTIVE</span>
          <h2 className="section-title">
            Engineering robust applications with <span className="accent">Python & purpose.</span>
          </h2>
          <p className="section-lead">
            Bridging conceptual computer science foundations with real-world, production-ready web implementations.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Biography Column */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Who I Am
            </h3>

            {personal.bio.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.025rem',
                  lineHeight: 1.7,
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-highlight)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                Career Objective
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.975rem',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                }}
              >
                "{personal.objective}"
              </p>
            </div>

            {/* Quick Links */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Core Focus Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {focusCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="glass-panel"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(244, 90, 39, 0.12)',
                      border: '1px solid rgba(244, 90, 39, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-warm-highlight)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
