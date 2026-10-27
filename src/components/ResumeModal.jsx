import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, contact, education, experience, skills, certifications, achievements } = PORTFOLIO;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(5, 5, 5, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem) 1rem',
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Actions Bar */}
      <div
        className="no-print"
        style={{
          width: '100%',
          maxWidth: '210mm',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          background: 'rgba(25, 18, 17, 0.9)',
          padding: '0.85rem 1.5rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FFFFFF' }}>
            Resume Document
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-warm-highlight)',
              background: 'rgba(244, 90, 39, 0.1)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            A4 Standard
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={handlePrint}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Printer size={15} />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={onClose}
            aria-label="Close Resume"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Printable Sheet (Standard A4 Format) */}
      <div
        id="resume-printable-area"
        className="print-page"
        style={{
          width: '100%',
          maxWidth: '210mm',
          backgroundColor: '#FFFFFF',
          color: '#1F2937',
          padding: 'clamp(20px, 4vw, 45px)',
          borderRadius: '4px',
          boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6)',
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.5,
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '16px',
            marginBottom: '20px',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#111827',
              letterSpacing: '-0.03em',
            }}
          >
            {personal.name}
          </h1>
          <div
            style={{
              fontSize: '1.05rem',
              color: '#2563EB',
              fontWeight: 600,
              margin: '6px 0 10px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Python Web Developer
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '18px',
              fontSize: '0.88rem',
              color: '#4B5563',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={14} style={{ color: '#2563EB' }} /> {contact.email}
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#4B5563', textDecoration: 'none' }}
            >
              LinkedIn Profile
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#4B5563', textDecoration: 'none' }}
            >
              GitHub Portfolio
            </a>
          </div>
        </div>

        {/* Objective */}
        <div style={{ marginBottom: '18px' }}>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '8px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Objective
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#374151', textAlign: 'justify', margin: 0 }}>
            {personal.objective}
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '18px' }}>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600, fontSize: '0.98rem', color: '#111827' }}>
                  {edu.degree}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#2563EB', fontWeight: 500 }}>
                  {edu.period}
                </span>
              </div>
              <div style={{ fontStyle: 'italic', color: '#4B5563', fontSize: '0.9rem', marginBottom: '4px' }}>
                {edu.institution}
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#4B5563', fontSize: '0.88rem' }}>
                <li>Relevant Coursework: {edu.coursework.join(', ')}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: '18px' }}>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Technical Skills
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
            <div>
              <strong style={{ color: '#111827', width: '190px', display: 'inline-block' }}>
                Programming Languages:
              </strong>{' '}
              <span style={{ color: '#374151' }}>Python, Java, JavaScript, HTML5, CSS3, SQL</span>
            </div>
            <div>
              <strong style={{ color: '#111827', width: '190px', display: 'inline-block' }}>
                Frameworks & Libraries:
              </strong>{' '}
              <span style={{ color: '#374151' }}>Django, Bootstrap 5, jQuery</span>
            </div>
            <div>
              <strong style={{ color: '#111827', width: '190px', display: 'inline-block' }}>
                Databases:
              </strong>{' '}
              <span style={{ color: '#374151' }}>MySQL, SQLite, PostgreSQL</span>
            </div>
            <div>
              <strong style={{ color: '#111827', width: '190px', display: 'inline-block' }}>
                Tools & Platforms:
              </strong>{' '}
              <span style={{ color: '#374151' }}>Git, GitHub, VS Code</span>
            </div>
            <div>
              <strong style={{ color: '#111827', width: '190px', display: 'inline-block' }}>
                Core Concepts:
              </strong>{' '}
              <span style={{ color: '#374151' }}>
                Object-Oriented Programming (OOP), Data Structures & Algorithms, REST APIs, Responsive Web Design, SDLC
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '18px' }}>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600, fontSize: '0.98rem', color: '#111827' }}>
                  {exp.role}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#2563EB', fontWeight: 500 }}>
                  {exp.period}
                </span>
              </div>
              <div style={{ fontStyle: 'italic', color: '#4B5563', fontSize: '0.9rem', marginBottom: '6px' }}>
                {exp.company}
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', fontSize: '0.88rem' }}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: '4px' }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={{ marginBottom: '18px' }}>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Featured Projects
          </h2>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 600, fontSize: '0.98rem', color: '#111827' }}>
                Crop Prediction System
              </span>
              <span style={{ fontSize: '0.88rem', color: '#2563EB', fontWeight: 500 }}>
                Python, Django, ML
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', fontSize: '0.88rem' }}>
              <li>Developed an intelligent crop recommendation web application that predicts the most suitable crop based on soil nutrients and environmental conditions.</li>
              <li>Integrated user authentication and a clean, responsive dashboard for secure access.</li>
              <li>Implemented machine learning models into the Django backend to serve accurate predictions.</li>
            </ul>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 600, fontSize: '0.98rem', color: '#111827' }}>
                Personal Developer Portfolio
              </span>
              <span style={{ fontSize: '0.88rem', color: '#2563EB', fontWeight: 500 }}>
                HTML5, Bootstrap, JS
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', fontSize: '0.88rem' }}>
              <li>Designed a fully responsive personal portfolio showcasing skills, projects, and achievements.</li>
              <li>Developed a custom glassmorphism UI with a functioning dark/light mode toggle.</li>
              <li>Integrated interactive animations and a live AJAX contact form.</li>
            </ul>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h2
            style={{
              fontSize: '1rem',
              color: '#2563EB',
              borderBottom: '1px solid #E5E7EB',
              paddingBottom: '4px',
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Certifications & Achievements
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#374151', fontSize: '0.88rem' }}>
            <li style={{ marginBottom: '3px' }}>
              <strong>Winner</strong> — Mind Marathon (College Tech Fest)
            </li>
            <li style={{ marginBottom: '3px' }}>
              <strong>Python Essentials 1 Certification</strong> — Cisco Networking Academy
            </li>
            <li>
              <strong>Business Analytics with Excel</strong> — Microsoft × Simplilearn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
