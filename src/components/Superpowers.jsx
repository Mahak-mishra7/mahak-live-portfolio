import React from 'react';
import { Terminal, Cpu, Network, Globe, GitBranch, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Superpowers() {
  const superpowers = [
    {
      id: 'python',
      name: 'PYTHON',
      tagline: 'Programming & Problem Solving',
      directive: 'LOGIC & SCRIPTING',
      description:
        'Harnessing clean, readable syntax for rapid algorithmic prototyping, computational problem-solving, and efficient data operations.',
      category: 'CORE COMPUTATION',
      icon: <Terminal size={26} color="#FF4FD8" />,
      glowColor: '#FF4FD8',
      capabilities: ['Data Processing', 'Automation Scripts', 'Algorithmic Logic', 'Clean Syntax'],
      specs: 'PARADIGM: MULTI-PARADIGM // EXTENSIBLE',
    },
    {
      id: 'java',
      name: 'JAVA',
      tagline: 'Object-Oriented Programming',
      directive: 'ARCHITECTURE & TYPE DISCIPLINE',
      description:
        'Architecting robust, modular software using object-oriented principles: encapsulation, inheritance, polymorphism, and solid class design.',
      category: 'ENTERPRISE ARCHITECTURE',
      icon: <Cpu size={26} color="#00F0FF" />,
      glowColor: '#00F0FF',
      capabilities: ['OOP Foundations', 'Class Hierarchies', 'Memory Discipline', 'Robust Typing'],
      specs: 'ENGINE: JVM // STRICT MODULARITY',
    },
    {
      id: 'dsa',
      name: 'DSA',
      tagline: 'Logic & Problem Solving',
      directive: 'ALGORITHMIC OPTIMIZATION',
      description:
        'Analyzing computational efficiency, time and space complexity (Big-O), and constructing optimal solutions for complex algorithmic challenges.',
      category: 'COMPUTATIONAL RIGOR',
      icon: <Network size={26} color="#8B4DFF" />,
      glowColor: '#8B4DFF',
      capabilities: ['Arrays & Strings', 'Trees & Recursion', 'Searching & Sorting', 'Complexity Analysis'],
      specs: 'COMPLEXITY: BIG-O ANALYSIS // RIGOROUS',
    },
    {
      id: 'webdev',
      name: 'WEB DEVELOPMENT',
      tagline: 'Building Web Applications',
      directive: 'INTERACTIVE ECOSYSTEMS',
      description:
        'Engineering responsive, user-centric web applications with modern React, component lifecycle management, and scalable frontend architectures.',
      category: 'FULL-STACK INTERFACE',
      icon: <Globe size={26} color="#FF2DAA" />,
      glowColor: '#FF2DAA',
      capabilities: ['React & Components', 'Modern JavaScript (ES6+)', 'REST APIs Integration', 'Responsive UI/UX'],
      specs: 'STACK: REACT // RESPONSIVE & FAST',
    },
    {
      id: 'git',
      name: 'GIT & GITHUB',
      tagline: 'Version Control & Collaboration',
      directive: 'ENGINEERING PIPELINE',
      description:
        'Managing distributed version control, maintaining repository health, branching strategies, and collaborative developer workflows.',
      category: 'COLLABORATIVE WORKFLOW',
      icon: <GitBranch size={26} color="#00F0FF" />,
      glowColor: '#00F0FF',
      capabilities: ['Branching & Merges', 'Pull Request Reviews', 'Version History', 'Clean Commit Logs'],
      specs: 'SYSTEM: DISTRIBUTED VCS // COLLABORATIVE',
    },
  ];

  return (
    <section id="superpowers" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="section-tag">
          <span>⚡ SUPERPOWERS</span>
        </div>
        <h2 className="section-title">ENGINEERING ARSENAL</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 16px' }}>
          Core technical competencies, algorithmic foundations, and development disciplines.
        </p>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#8B4DFF',
            letterSpacing: '0.12em',
          }}
        >
          // VERIFIED TECHNICAL PROFICIENCY — ZERO ARBITRARY PERCENTAGES
        </span>
      </div>

      {/* Superpowers Futuristic Grid */}
      <div
        className="superpowers-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '26px',
        }}
      >
        {superpowers.map((power) => (
          <div
            key={power.id}
            className="superpower-card comic-panel"
            style={{
              padding: '32px',
              background: 'linear-gradient(155deg, rgba(24, 10, 32, 0.85) 0%, rgba(10, 5, 14, 0.95) 100%)',
              border: `1px solid ${power.glowColor}35`,
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Corner Decorative Tech Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '42px',
                height: '42px',
                background: `linear-gradient(135deg, transparent 50%, ${power.glowColor}25 50%)`,
                borderTopRightRadius: '8px',
              }}
            />

            <div>
              {/* Top Meta Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                {/* Glowing Icon Emblem */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    background: 'rgba(5, 5, 5, 0.88)',
                    border: `1px solid ${power.glowColor}60`,
                    boxShadow: `0 0 16px ${power.glowColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {power.icon}
                </div>

                {/* Category Chip */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: power.glowColor,
                    background: `${power.glowColor}14`,
                    border: `1px solid ${power.glowColor}40`,
                    padding: '3px 10px',
                    borderRadius: '3px',
                  }}
                >
                  {power.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  marginBottom: '4px',
                }}
              >
                {power.name}
              </h3>

              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#FF4FD8',
                  letterSpacing: '0.08em',
                  marginBottom: '16px',
                }}
              >
                "{power.tagline}"
              </h4>

              {/* Description */}
              <p
                style={{
                  color: '#C4C4D1',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '22px',
                }}
              >
                {power.description}
              </p>
            </div>

            {/* Bottom Capabilities Matrix */}
            <div>
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '14px',
                }}
              >
                {power.capabilities.map((cap) => (
                  <span
                    key={cap}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#E0E0E8',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '3px 9px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span style={{ color: power.glowColor }}>•</span> {cap}
                  </span>
                ))}
              </div>

              {/* Telemetry specs string */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'rgba(216, 216, 216, 0.45)',
                  letterSpacing: '0.08em',
                }}
              >
                {power.specs}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .superpower-card:hover {
          transform: translateY(-6px);
          border-color: #FF4FD8 !important;
          box-shadow: 0 12px 35px rgba(255, 79, 216, 0.35) !important;
        }
      `}</style>
    </section>
  );
}
