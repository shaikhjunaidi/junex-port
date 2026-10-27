import React, { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="glass-panel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        borderRadius: 'var(--radius-md)',
        border: isHovered
          ? '1px solid var(--border-orange)'
          : '1px solid var(--border-subtle)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        transition: 'all var(--transition-medium)',
      }}
    >
      {/* Media Screenshot Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: '#120b0a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        {/* Category Pill Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            padding: '0.28rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(9, 9, 9, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-warm-highlight)',
            letterSpacing: '0.04em',
            zIndex: 2,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Content Body */}
      <div
        style={{
          padding: 'clamp(1.5rem, 3vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                color: 'var(--text-accent)',
                letterSpacing: '0.02em',
              }}
            >
              {project.subtitle}
            </p>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.94rem',
              lineHeight: 1.6,
            }}
          >
            {project.shortDescription}
          </p>

          {/* Key Features List */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginTop: '0.4rem' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}
              >
                Key Capabilities
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  padding: 0,
                  margin: 0,
                }}
              >
                {project.features.slice(0, 3).map((feat, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--color-vivid-orange)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div style={{ marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Link Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
          }}
        >
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{
                fontSize: '0.85rem',
                padding: '0.55rem 1rem',
                flexGrow: 1,
              }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                fontSize: '0.85rem',
                padding: '0.55rem 1rem',
                flexGrow: 1,
              }}
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
