import React from 'react';
import { ArrowRight, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import SpiderHeroVisual from './SpiderHeroVisual';

export default function Hero() {
  const handleEnterClick = () => {
    const target = document.getElementById('origin');
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '70px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 65% 45%, rgba(38, 14, 52, 0.45) 0%, rgba(12, 6, 17, 0.6) 45%, rgba(5, 5, 5, 1) 85%)',
      }}
    >
      {/* Decorative Comic Halftone Diagonal Blade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45vw',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255, 79, 216, 0.03) 0%, rgba(139, 77, 255, 0.05) 100%)',
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="section-container hero-grid-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* LEFT COLUMN: HERO HEADLINE & INTRO */}
        <div
          className="hero-text-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: 0,
          }}
        >
          {/* Small Top Badge with Comic Chapter Numbering */}
          <div
            className="section-tag hero-badge-anim"
            style={{
              marginBottom: '18px',
              animation: 'fadeInUp 0.6s ease-out forwards',
            }}
          >
            <span>🕸️ EVERY UNIVERSE HAS A HERO</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', margin: '0 4px' }}>//</span>
            <span style={{ color: '#00F0FF', fontSize: '0.74rem' }}>EARTH-CSE</span>
          </div>

          {/* Main Name Heading */}
          <h1
            className="hero-name-anim"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 5.4rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              marginBottom: '14px',
              textShadow: '0 0 30px rgba(255, 79, 216, 0.4), 0 0 60px rgba(139, 77, 255, 0.2)',
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
              opacity: 0,
            }}
          >
            <span
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 15%, #EDEDF5 55%, #FFB6EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              MAHAK
            </span>
          </h1>

          {/* Subtitle: Aspiring Software Engineer */}
          <div
            className="hero-sub-anim"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
              animation: 'fadeInUp 0.8s ease-out 0.35s forwards',
              opacity: 0,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '2px',
                background: '#FF4FD8',
                boxShadow: '0 0 8px #FF4FD8',
              }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.05rem, 2.3vw, 1.45rem)',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#FF4FD8',
                textTransform: 'uppercase',
              }}
            >
              ASPIRING SOFTWARE ENGINEER
            </h2>
          </div>

          {/* Welcome Tagline */}
          <p
            className="hero-tagline-anim"
            style={{
              fontSize: 'clamp(1.1rem, 1.9vw, 1.35rem)',
              color: '#FFFFFF',
              fontWeight: 500,
              marginBottom: '10px',
              lineHeight: 1.5,
              animation: 'fadeInUp 0.8s ease-out 0.5s forwards',
              opacity: 0,
            }}
          >
            Welcome to my Spider-Verse.
          </p>

          {/* Supporting Engineering Bio */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
              color: '#B3B3C2',
              lineHeight: 1.6,
              maxWidth: '520px',
              marginBottom: '28px',
              animation: 'fadeInUp 0.8s ease-out 0.55s forwards',
              opacity: 0,
            }}
          >
            Weaving algorithmic logic, disciplined architecture, and modern full-stack development into robust digital experiences.
          </p>

          {/* Telemetry Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
              padding: '6px 14px',
              background: 'rgba(22, 9, 29, 0.65)',
              border: '1px solid rgba(139, 77, 255, 0.3)',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#D8D8D8',
              animation: 'fadeInUp 0.8s ease-out 0.6s forwards',
              opacity: 0,
            }}
          >
            <span style={{ color: '#00F0FF' }}>● PROTOCOL:</span>
            <span>BTECH CSE</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <span style={{ color: '#FF4FD8' }}>STATUS: READY FOR MISSIONS</span>
          </div>

          {/* Action Buttons */}
          <div
            className="hero-btn-anim"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              animation: 'fadeInUp 0.8s ease-out 0.7s forwards',
              opacity: 0,
              width: '100%',
            }}
          >
            <button
              onClick={handleEnterClick}
              className="btn-primary"
              aria-label="Enter Mahak's Spider-Verse"
            >
              <span>ENTER MY SPIDER-VERSE</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#missions"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('missions');
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth',
                  });
                }
              }}
              className="btn-secondary"
            >
              <Terminal size={16} color="#FF4FD8" />
              <span>VIEW MISSIONS</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: ORIGINAL SPIDER-HERO VISUAL */}
        <div
          className="hero-visual-content hero-art-anim"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            animation: 'fadeInVisual 1.2s ease-out 0.4s forwards',
            opacity: 0,
          }}
        >
          <SpiderHeroVisual />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInVisual {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (max-width: 920px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
            text-align: center;
          }
          .hero-text-content {
            align-items: center !important;
          }
          .hero-btn-anim {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
