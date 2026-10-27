import React from 'react';
import { GraduationCap, Briefcase, Award, Trophy, CheckCircle, Info } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export default function Experience() {
  const { education, experience, certifications, achievements } = PORTFOLIO;

  return (
    <section id="experience" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">04 // BACKGROUND & CREDENTIALS</span>
          <h2 className="section-title">
            Education, Experience & <span className="accent">Achievements.</span>
          </h2>
          <p className="section-lead">
            Academic grounding, professional simulation experience, verified industry certifications, and competition honors.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Education & Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Education Card */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                <GraduationCap size={22} style={{ color: 'var(--color-vivid-orange)' }} />
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
                  Education
                </h3>
              </div>

              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF' }}>{edu.degree}</h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--color-warm-highlight)',
                        background: 'rgba(244, 90, 39, 0.1)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    {edu.institution} · {edu.location}
                  </p>

                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '0.45rem',
                      }}
                    >
                      Key Coursework
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {edu.coursework.map((course) => (
                        <span key={course} className="tech-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Card (Job Simulation) */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                <Briefcase size={22} style={{ color: 'var(--color-vivid-orange)' }} />
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
                  Practical Experience
                </h3>
              </div>

              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF' }}>{exp.role}</h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--color-warm-highlight)',
                        background: 'rgba(244, 90, 39, 0.1)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                    {exp.company}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {exp.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.92rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--color-vivid-orange)',
                            marginTop: '0.55rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Verification Note */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <Info size={14} style={{ color: 'var(--color-warm-highlight)', flexShrink: 0 }} />
                    <span>AI-powered financial analytics simulation verified from original source.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications & Achievements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Certifications */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                <Award size={22} style={{ color: 'var(--color-vivid-orange)' }} />
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
                  Industry Certifications
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass-panel"
                    style={{ padding: '1.5rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(244, 90, 39, 0.1)',
                          border: '1px solid rgba(244, 90, 39, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-warm-highlight)',
                          flexShrink: 0,
                        }}
                      >
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>
                          {cert.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: 'var(--color-vivid-orange)',
                            display: 'block',
                            marginBottom: '0.4rem',
                          }}
                        >
                          {cert.issuer}
                        </span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '1.25rem',
                }}
              >
                <Trophy size={22} style={{ color: 'var(--color-vivid-orange)' }} />
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
                  Honors & Achievements
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="glass-panel"
                    style={{ padding: '1.5rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(244, 90, 39, 0.1)',
                          border: '1px solid rgba(244, 90, 39, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-warm-highlight)',
                          flexShrink: 0,
                        }}
                      >
                        <Trophy size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>
                          {ach.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            color: 'var(--color-vivid-orange)',
                            display: 'block',
                            marginBottom: '0.4rem',
                          }}
                        >
                          {ach.organization}
                        </span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
