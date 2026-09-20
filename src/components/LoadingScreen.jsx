import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Show loading screen for ~1.6s then fade out
    const timer = setTimeout(() => {
      setFade(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050505',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fade ? 0 : 1,
        transform: fade ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        pointerEvents: fade ? 'none' : 'auto',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.18) 0%, rgba(22, 9, 29, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Spider-Web SVG Pulse */}
      <div
        style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          style={{
            width: '100%',
            height: '100%',
            animation: 'spinWeb 8s linear infinite',
          }}
        >
          {/* Outer Web Circles */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(139, 77, 255, 0.4)" strokeWidth="1" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(255, 45, 170, 0.6)" strokeWidth="1.5" />
          
          {/* Radial Strands */}
          <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255, 79, 216, 0.5)" strokeWidth="1" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255, 79, 216, 0.5)" strokeWidth="1" />
          <line x1="18" y1="18" x2="82" y2="82" stroke="rgba(139, 77, 255, 0.4)" strokeWidth="1" />
          <line x1="18" y1="82" x2="82" y2="18" stroke="rgba(139, 77, 255, 0.4)" strokeWidth="1" />
        </svg>

        {/* Center Spider Icon Emblem */}
        <div
          style={{
            position: 'absolute',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF2DAA, #8B4DFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255, 79, 216, 0.8)',
            animation: 'pulseGlow 1.5s ease-in-out infinite alternate',
          }}
        >
          <span style={{ fontSize: '18px', userSelect: 'none' }}>🕷️</span>
        </div>
      </div>

      {/* Cinematic Text */}
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          letterSpacing: '0.28em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'relative',
          padding: '0 20px',
          textShadow: '0 0 10px rgba(255, 79, 216, 0.6)',
        }}
      >
        ENTERING THE SPIDER-VERSE...
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--color-pink)',
          letterSpacing: '0.2em',
          marginTop: '12px',
          opacity: 0.85,
        }}
      >
        DIMENSIONAL FREQUENCY: MAHAK // EARTH-CSE
      </p>

      {/* Quick Skip for accessibility */}
      <button
        onClick={() => {
          setFade(true);
          setTimeout(onComplete, 100);
        }}
        style={{
          position: 'absolute',
          bottom: '30px',
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: 'rgba(255, 255, 255, 0.5)',
          padding: '6px 14px',
          borderRadius: '4px',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        SKIP INTRO [ESC]
      </button>

      <style>{`
        @keyframes spinWeb {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0% { transform: scale(0.92); box-shadow: 0 0 15px rgba(255, 79, 216, 0.4); }
          100% { transform: scale(1.08); box-shadow: 0 0 30px rgba(255, 79, 216, 0.9); }
        }
      `}</style>
    </div>
  );
}
