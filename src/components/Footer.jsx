import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        background: '#040206',
        borderTop: '1px solid rgba(255, 79, 216, 0.25)',
        padding: '50px 24px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '18px',
          textAlign: 'center',
        }}
      >
        {/* Spider Emblem Mini Accent */}
        <div
          onClick={scrollToTop}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(22, 9, 29, 0.9)',
            border: '1px solid rgba(255, 79, 216, 0.5)',
            boxShadow: '0 0 15px rgba(255, 79, 216, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          title="Return to top of universe"
          className="footer-spider-btn"
        >
          <ArrowUp size={18} color="#FF4FD8" />
        </div>

        {/* Primary Copyright Text */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            letterSpacing: '0.1em',
            color: '#FFFFFF',
            fontWeight: 700,
          }}
        >
          © 2026 Mahak Mishra
        </div>

        {/* Thematic Footer Subtext */}
        <p
          style={{
            color: '#B3B3C2',
            fontSize: '0.92rem',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.02em',
          }}
        >
          Built with curiosity, code & a little Spider-Verse energy. 🕷️
        </p>

        {/* Sector Tag */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'rgba(216, 216, 216, 0.4)',
            letterSpacing: '0.12em',
            marginTop: '8px',
          }}
        >
          PORTFOLIO NODE: MAHAK-EARTH-CSE // SECURE TRANSMISSION
        </div>
      </div>

      <style>{`
        .footer-spider-btn:hover {
          transform: translateY(-3px);
          border-color: #00F0FF !important;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.6) !important;
        }
      `}</style>
    </footer>
  );
}
