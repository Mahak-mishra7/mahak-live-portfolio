import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, ArrowRight, Check, Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailPlaceholder = 'YOUR_EMAIL';
  const githubPlaceholder = 'YOUR_GITHUB_URL';
  const linkedinPlaceholder = 'YOUR_LINKEDIN_URL';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div className="section-tag">
          <span>🕷️ ENTER THE SPIDER-VERSE</span>
        </div>
        <h2 className="section-title">TRANSMIT A SIGNAL</h2>
        <p
          className="section-subtitle"
          style={{
            margin: '0 auto',
            fontSize: '1.25rem',
            color: '#FFFFFF',
            fontWeight: 600,
          }}
        >
          Want to connect?
        </p>
      </div>

      <div
        className="contact-layout-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '36px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Connection Channels Column */}
        <div
          className="comic-panel"
          style={{
            padding: '36px',
            background: 'linear-gradient(150deg, rgba(24, 11, 33, 0.92) 0%, rgba(9, 4, 13, 0.98) 100%)',
            border: '1px solid rgba(255, 79, 216, 0.35)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                marginBottom: '10px',
              }}
            >
              DIRECT FREQUENCIES
            </h3>
            <p style={{ color: '#B3B3C2', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Whether you'd like to discuss engineering opportunities, collaborate on technical missions, or share ideas—my transmission line is open.
            </p>

            {/* Social Link Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* GitHub */}
              <a
                href={githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'rgba(5, 5, 5, 0.7)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Github size={20} color="#00F0FF" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                    GITHUB
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#8B4DFF' }}>
                  {githubPlaceholder}
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'rgba(5, 5, 5, 0.7)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Linkedin size={20} color="#FF4FD8" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                    LINKEDIN
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#FF4FD8' }}>
                  {linkedinPlaceholder}
                </span>
              </a>

              {/* Email */}
              <div
                className="contact-channel-btn"
                onClick={handleCopyEmail}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'rgba(5, 5, 5, 0.7)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={20} color="#FF2DAA" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                    EMAIL
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#D8D8D8' }}>
                    {emailPlaceholder}
                  </span>
                  {copied ? <Check size={14} color="#00F0FF" /> : <Copy size={14} color="#8B4DFF" />}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '24px',
              padding: '14px',
              borderRadius: '6px',
              background: 'rgba(255, 79, 216, 0.06)',
              border: '1px dashed rgba(255, 79, 216, 0.3)',
              fontSize: '0.75rem',
              color: '#FFB6EE',
              fontFamily: 'var(--font-mono)',
            }}
          >
            💡 Note: Replace <code>YOUR_GITHUB_URL</code>, <code>YOUR_LINKEDIN_URL</code>, and <code>YOUR_EMAIL</code> with your exact profiles!
          </div>
        </div>

        {/* Message Signal Dispatch Form Box */}
        <div
          className="comic-panel"
          style={{
            padding: '36px',
            background: 'linear-gradient(150deg, rgba(18, 8, 25, 0.95) 0%, rgba(6, 3, 9, 0.98) 100%)',
            border: '1px solid rgba(139, 77, 255, 0.35)',
            borderRadius: '8px',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.06em',
              marginBottom: '8px',
            }}
          >
            DISPATCH MESSAGE
          </h3>
          <p style={{ color: '#A0A0B0', fontSize: '0.88rem', marginBottom: '24px' }}>
            Send a transmission directly to Mahak's inbox.
          </p>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: '#FF4FD8',
                  marginBottom: '6px',
                }}
              >
                YOUR CALLSIGN / NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Hiring Lead / Tech Explorer"
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FF4FD8')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 77, 255, 0.3)')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: '#00F0FF',
                  marginBottom: '6px',
                }}
              >
                YOUR FREQUENCY / EMAIL
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00F0FF')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 77, 255, 0.3)')}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: '#D8D8D8',
                  marginBottom: '6px',
                }}
              >
                TRANSMISSION CONTENT
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your transmission..."
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid rgba(139, 77, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FF4FD8')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 77, 255, 0.3)')}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                marginTop: '6px',
              }}
            >
              <span>{formSent ? 'TRANSMISSION RECEIVED! 🕷️' : "LET'S CONNECT →"}</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-channel-btn:hover {
          border-color: #FF4FD8 !important;
          background: rgba(255, 79, 216, 0.12) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
