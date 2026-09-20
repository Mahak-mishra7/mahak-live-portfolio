import React from 'react';
import { Activity, Cpu, Terminal, ShieldAlert } from 'lucide-react';

export default function CurrentMission() {
  const telemetryTracks = [
    { label: 'Learning', blocks: 7, total: 10, note: 'CS Foundations & Paradigms' },
    { label: 'Building', blocks: 6, total: 10, note: 'Full-Stack Web Architectures' },
    { label: 'Problem Solving', blocks: 8, total: 10, note: 'Algorithmic DSA Practice' },
    { label: 'Projects', blocks: 6, total: 10, note: 'Practical Implementations' },
  ];

  const currentFocusAreas = [
    { name: 'Python', role: 'Scripting & Logic', color: '#FF4FD8' },
    { name: 'DSA', role: 'Computational Algorithms', color: '#00F0FF' },
    { name: 'Java', role: 'Object-Oriented Design', color: '#8B4DFF' },
    { name: 'Web Development', role: 'Full-Stack Engineering', color: '#FF2DAA' },
    { name: 'Software Engineering', role: 'System Discipline', color: '#00F0FF' },
    { name: 'Projects', role: 'Practical Implementations', color: '#FF4FD8' },
  ];

  return (
    <section id="current-mission" className="section-container" style={{ position: 'relative' }}>
      {/* Section Tag */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div className="section-tag">
          <span>🕷️ CURRENT MISSION</span>
        </div>
        <h2 className="section-title">
          STATUS: <span style={{ color: '#FF4FD8' }}>LEVELING UP</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Mission dashboard tracking active focus areas and daily engineering cultivation.
        </p>
      </div>

      {/* Dashboard HUD Container */}
      <div
        className="comic-panel halftone-overlay"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '36px',
          background: 'linear-gradient(135deg, rgba(24, 10, 32, 0.95) 0%, rgba(8, 4, 12, 0.98) 100%)',
          border: '1px solid rgba(255, 79, 216, 0.4)',
          borderRadius: '8px',
          boxShadow: '0 0 35px rgba(255, 79, 216, 0.15)',
        }}
      >
        {/* HUD Top Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(139, 77, 255, 0.25)',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#00F0FF',
                boxShadow: '0 0 10px #00F0FF',
                animation: 'blinkStatus 1.4s ease-in-out infinite alternate',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                color: '#FFFFFF',
              }}
            >
              MISSION TELEMETRY // SECTOR EARTH-MAHAK
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#8B4DFF',
              letterSpacing: '0.12em',
            }}
          >
            ACTIVE CYCLE: LEVELING UP
          </div>
        </div>

        {/* Dashboard 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Visual Status Bars */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#FF4FD8',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Activity size={18} />
              <span>CURRENT STATUS BARS</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {telemetryTracks.map((track) => {
                const filled = '█'.repeat(track.blocks);
                const empty = '░'.repeat(track.total - track.blocks);
                return (
                  <div
                    key={track.label}
                    style={{
                      background: 'rgba(5, 5, 5, 0.65)',
                      padding: '14px 18px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', color: '#FFFFFF', letterSpacing: '0.08em' }}>
                        {track.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#A0A0B0' }}>
                        {track.note}
                      </span>
                    </div>

                    {/* Comic Character Block Meter */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.05rem',
                        letterSpacing: '0.15em',
                        userSelect: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        overflowX: 'auto',
                      }}
                    >
                      <span style={{ color: '#FF4FD8', textShadow: '0 0 10px rgba(255, 79, 216, 0.5)' }}>
                        {filled}
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.18)' }}>
                        {empty}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'rgba(216, 216, 216, 0.5)',
                marginTop: '14px',
                letterSpacing: '0.04em',
              }}
            >
              * Visual activity indicators representing ongoing focus vectors. Zero arbitrary percentage claims.
            </p>
          </div>

          {/* Column 2: Current Focus Vectors */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#00F0FF',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Cpu size={18} />
              <span>ACTIVE FOCUS VECTORS</span>
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
              }}
            >
              {currentFocusAreas.map((area) => (
                <div
                  key={area.name}
                  style={{
                    padding: '16px',
                    borderRadius: '6px',
                    background: 'rgba(12, 6, 17, 0.85)',
                    border: `1px solid ${area.color}40`,
                    transition: 'all 0.2s ease',
                  }}
                  className="focus-tile"
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                    }}
                  >
                    {area.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: area.color,
                    }}
                  >
                    {area.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical Log Box */}
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                background: 'rgba(255, 79, 216, 0.05)',
                border: '1px solid rgba(255, 79, 216, 0.25)',
                borderRadius: '6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Terminal size={15} color="#FF4FD8" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FF4FD8', fontWeight: 600 }}>
                  TACTICAL LOG:
                </span>
              </div>
              <p style={{ color: '#D8D8D8', fontSize: '0.86rem', lineHeight: 1.55 }}>
                Currently iterating on core problem-solving strategies, optimizing computational structures in Python and Java, and refining production-grade web systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkStatus {
          0% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.15); }
        }
        .focus-tile:hover {
          transform: translateY(-2px);
          border-color: #FF4FD8 !important;
          box-shadow: 0 4px 15px rgba(255, 79, 216, 0.2);
        }
      `}</style>
    </section>
  );
}
