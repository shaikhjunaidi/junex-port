import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO } from '../data/portfolio';

export default function Contact() {
  const { contact } = PORTFOLIO;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || 'Failed to submit the form. Please verify and try again.'
        );
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'An unexpected error occurred while sending your message.',
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">05 // GET IN TOUCH</span>
          <h2 className="section-title">
            Let's build something <span className="accent">exceptional.</span>
          </h2>
          <p className="section-lead">
            Open for internships, full-time junior engineering roles, and innovative web projects. Reach out via the form or through direct contact channels.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Direct Channels Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
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
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  Direct Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-highlight)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {contact.email}
                </a>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Feel free to send proposals, inquiries, or feedback.
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
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
                  flexShrink: 0,
                }}
              >
                <LinkedinIcon size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  LinkedIn
                </span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-highlight)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  <span>Shaikh Junaid</span>
                  <ArrowUpRight size={15} style={{ opacity: 0.6 }} />
                </a>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Connect for professional networking and career updates.
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
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
                  flexShrink: 0,
                }}
              >
                <GithubIcon size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  GitHub
                </span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-highlight)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  <span>@shaikhjunaidi</span>
                  <ArrowUpRight size={15} style={{ opacity: 0.6 }} />
                </a>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Explore repositories, commit histories, and code experiments.
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Form Feedback Alerts */}
              {status.success && (
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(74, 222, 128, 0.1)',
                    border: '1px solid rgba(74, 222, 128, 0.35)',
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                  <span>Your message has been sent successfully! I will respond promptly.</span>
                </div>
              )}

              {status.error && (
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    color: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1rem',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-vivid-orange)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1rem',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-vivid-orange)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label
                  htmlFor="subject"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity, project inquiry, etc."
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-vivid-orange)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-fast)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-vivid-orange)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                  opacity: status.submitting ? 0.75 : 1,
                  cursor: status.submitting ? 'not-allowed' : 'pointer',
                }}
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
