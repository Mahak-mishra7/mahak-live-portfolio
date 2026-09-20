import React from 'react';

export default function SpiderWebBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Background Soft Purple/Pink Radial Voids */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          maxHeight: '650px',
          maxWidth: '650px',
          background: 'radial-gradient(circle, rgba(139, 77, 255, 0.08) 0%, rgba(22, 9, 29, 0.04) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxHeight: '600px',
          maxWidth: '600px',
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.06) 0%, rgba(22, 9, 29, 0.03) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(55px)',
        }}
      />

      {/* Top Left Delicate Web Strand Pattern */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '320px',
          height: '320px',
          opacity: 0.18,
        }}
        viewBox="0 0 350 350"
      >
        <defs>
          <linearGradient id="webGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4FD8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B4DFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Radial Spokes */}
        <line x1="0" y1="0" x2="350" y2="0" stroke="url(#webGradLeft)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="330" y2="120" stroke="url(#webGradLeft)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="270" y2="220" stroke="url(#webGradLeft)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="170" y2="300" stroke="url(#webGradLeft)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="0" y2="350" stroke="url(#webGradLeft)" strokeWidth="0.8" />

        {/* Concentric Arcs */}
        <path d="M0,60 Q55,55 60,0" fill="none" stroke="rgba(255, 79, 216, 0.4)" strokeWidth="0.8" />
        <path d="M0,120 Q110,110 120,0" fill="none" stroke="rgba(139, 77, 255, 0.35)" strokeWidth="0.8" />
        <path d="M0,180 Q165,165 180,0" fill="none" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8" />
        <path d="M0,240 Q220,220 240,0" fill="none" stroke="rgba(139, 77, 255, 0.25)" strokeWidth="0.8" />
        <path d="M0,300 Q275,275 300,0" fill="none" stroke="rgba(255, 79, 216, 0.2)" strokeWidth="0.8" />

        {/* Subtle Web Node Points */}
        <circle cx="60" cy="0" r="1.5" fill="#FF4FD8" />
        <circle cx="120" cy="0" r="1.5" fill="#FF4FD8" />
        <circle cx="180" cy="0" r="1.5" fill="#FF4FD8" />
        <circle cx="55" cy="55" r="1.5" fill="#00F0FF" />
        <circle cx="110" cy="110" r="1.5" fill="#00F0FF" />
      </svg>

      {/* Bottom Right Subtle Corner Web */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '320px',
          height: '320px',
          opacity: 0.16,
          transform: 'rotate(180deg)',
        }}
        viewBox="0 0 350 350"
      >
        <defs>
          <linearGradient id="webGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF4FD8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="350" y2="0" stroke="url(#webGradRight)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="330" y2="120" stroke="url(#webGradRight)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="270" y2="220" stroke="url(#webGradRight)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="170" y2="300" stroke="url(#webGradRight)" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="0" y2="350" stroke="url(#webGradRight)" strokeWidth="0.8" />

        <path d="M0,60 Q55,55 60,0" fill="none" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="0.8" />
        <path d="M0,120 Q110,110 120,0" fill="none" stroke="rgba(139, 77, 255, 0.35)" strokeWidth="0.8" />
        <path d="M0,180 Q165,165 180,0" fill="none" stroke="rgba(255, 79, 216, 0.3)" strokeWidth="0.8" />
        <path d="M0,240 Q220,220 240,0" fill="none" stroke="rgba(139, 77, 255, 0.25)" strokeWidth="0.8" />
      </svg>

      {/* Floating Subtle Ambient Dust Particles */}
      <div className="spider-particle sp1" style={{ top: '20%', left: '12%' }} />
      <div className="spider-particle sp2" style={{ top: '65%', left: '88%' }} />
      <div className="spider-particle sp3" style={{ top: '40%', left: '72%' }} />
      <div className="spider-particle sp4" style={{ top: '85%', left: '20%' }} />
      <div className="spider-particle sp5" style={{ top: '12%', left: '60%' }} />

      <style>{`
        .spider-particle {
          position: absolute;
          width: 2.5px;
          height: 2.5px;
          background: #FF4FD8;
          border-radius: 50%;
          box-shadow: 0 0 6px #FF4FD8;
          opacity: 0.45;
          animation: floatParticle 9s ease-in-out infinite alternate;
        }
        .sp2 {
          width: 3px;
          height: 3px;
          background: #00F0FF;
          box-shadow: 0 0 8px #00F0FF;
          animation-duration: 12s;
          animation-delay: -2s;
        }
        .sp3 {
          width: 2px;
          height: 2px;
          background: #8B4DFF;
          animation-duration: 10s;
          animation-delay: -4s;
        }
        .sp4 {
          width: 2.5px;
          height: 2.5px;
          background: #FF2DAA;
          animation-duration: 14s;
          animation-delay: -1s;
        }
        .sp5 {
          width: 2px;
          height: 2px;
          background: #FFFFFF;
          animation-duration: 11s;
          animation-delay: -3s;
        }
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-25px) translateX(12px); opacity: 0.6; }
          100% { transform: translateY(-50px) translateX(-8px); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}
