import React from 'react';
import { Rocket, Sparkles, ChevronRight, ArrowDown } from 'lucide-react';

export default function FutureUniverse() {
  const steps = [
    { name: 'LEARN', desc: 'Continuous absorption of new paradigms', color: '#00F0FF' },
    { name: 'BUILD', desc: 'Crafting reliable, functional software', color: '#FF4FD8' },
    { name: 'SOLVE', desc: 'Untangling computational bottlenecks', color: '#8B4DFF' },
    { name: 'CREATE', desc: 'Deploying impactful digital solutions', color: '#FF2DAA' },
    { name: 'GROW', desc: 'Expanding technical depth & systems judgment', color: '#00F0FF' },
    { name: 'SOFTWARE ENGINEER', desc: 'Delivering scalable engineering impact', color: '#FFFFFF', isFinal: true },
  ];

  return (
    <section id="future" className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Dimensional Portal Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.16) 0%, rgba(139, 77, 255, 0.1) 45%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 2 }}>
        <div className="section-tag">
          <span>🚀 NEXT UNIVERSE</span>
        </div>
        <h2 className="section-title">TRAJECTORY & HORIZONS</h2>
        <p
          className="section-subtitle"
          style={{
            margin: '0 auto',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: '#FFFFFF',
            fontWeight: 500,
            maxWidth: '680px',
            lineHeight: 1.6,
          }}
        >
          “My goal is to keep learning, build meaningful software and grow into a strong software engineer.”
        </p>
      </div>

      {/* Dimensional Portal Graphic & Flow */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Futuristic Portal Circle Graphic */}
        <div
          style={{
            position: 'relative',
            width: '190px',
            height: '190px',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer Portal Ring */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px dashed #FF4FD8',
              boxShadow: '0 0 30px rgba(255, 79, 216, 0.5)',
              animation: 'spinPortal 22s linear infinite',
            }}
          />

          {/* Inner Counter Ring */}
          <div
            style={{
              position: 'absolute',
              width: '76%',
              height: '76%',
              borderRadius: '50%',
              border: '1px dotted #00F0FF',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              animation: 'spinPortalRev 16s linear infinite',
            }}
          />

          {/* Center Dimensional Core */}
          <div
            style={{
              width: '54%',
              height: '54%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #16091D, #FF2DAA)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(255, 45, 170, 0.8)',
            }}
          >
            <Rocket size={34} color="#FFFFFF" />
          </div>
        </div>

        {/* Sequential Progression Badges */}
        <div
          className="future-steps-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
          }}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={step.name}>
              <div
                className="comic-panel future-step-card"
                style={{
                  padding: step.isFinal ? '18px 24px' : '14px 18px',
                  background: step.isFinal
                    ? 'linear-gradient(135deg, rgba(255, 45, 170, 0.25) 0%, rgba(139, 77, 255, 0.35) 100%)'
                    : 'rgba(22, 9, 29, 0.85)',
                  border: step.isFinal ? '2px solid #FF4FD8' : '1px solid rgba(139, 77, 255, 0.35)',
                  boxShadow: step.isFinal ? '0 0 25px rgba(255, 79, 216, 0.4)' : 'none',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: step.isFinal ? '220px' : '125px',
                  transition: 'all 0.25s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: step.isFinal ? '1.05rem' : '0.88rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: step.color,
                    textAlign: 'center',
                  }}
                >
                  {step.name}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'rgba(216, 216, 216, 0.65)',
                    marginTop: '4px',
                    textAlign: 'center',
                  }}
                >
                  {step.desc}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div
                  className="step-connector-arrow"
                  style={{
                    color: '#FF4FD8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    userSelect: 'none',
                  }}
                >
                  <ChevronRight size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spinPortal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinPortalRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .future-step-card:hover {
          transform: translateY(-4px);
          border-color: #FF4FD8 !important;
          box-shadow: 0 8px 25px rgba(255, 79, 216, 0.35);
        }
        @media (max-width: 900px) {
          .step-connector-arrow {
            display: none !important;
          }
          .future-steps-container {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 12px !important;
          }
          .future-step-card {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
