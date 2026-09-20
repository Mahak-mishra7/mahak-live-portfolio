import React from 'react';
import { Compass, BookOpen, Code, Terminal, BrainCircuit, Rocket, Sparkles } from 'lucide-react';

export default function OriginStory() {
  const journeyPanels = [
    {
      panelNumber: 'PANEL 1',
      stage: 'START',
      title: 'THE CATALYST // BTECH CSE',
      caption: 'EVERY STORY HAS A FIRST ISSUE',
      desc: 'Stepped into the world of Computer Science as a BTech CSE student. What began as curiosity quickly became a driven passion for dissecting complex systems and bringing software to life.',
      icon: <Compass size={22} color="#00F0FF" />,
      accentColor: '#00F0FF',
      skills: ['CS Foundations', 'Logic Systems', 'Academic Inception'],
    },
    {
      panelNumber: 'PANEL 2',
      stage: 'LEARNING',
      title: 'WEAVING THE SYNTAX // PYTHON & JAVA',
      caption: 'MASTERING THE MULTIVERSE LANGUAGES',
      desc: 'Dived deep into Python and Java. Explored the beauty of concise scripting alongside object-oriented architecture, encapsulation, and type discipline.',
      icon: <BookOpen size={22} color="#FF4FD8" />,
      accentColor: '#FF4FD8',
      skills: ['Python', 'Java', 'OOP Architecture', 'Memory Modeling'],
    },
    {
      panelNumber: 'PANEL 3',
      stage: 'BUILDING',
      title: 'CREATING THE WEB GRID // FULL-STACK',
      caption: 'TRANSFORMING LOGIC INTO INTERFACES',
      desc: 'Bridged algorithmic concepts with interactive web applications. Built dynamic React frontends, structured API backends, and responsive database layers.',
      icon: <Code size={22} color="#8B4DFF" />,
      accentColor: '#8B4DFF',
      skills: ['React', 'JavaScript / ES6+', 'REST APIs', 'Database Integration'],
    },
    {
      panelNumber: 'PANEL 4',
      stage: 'EXPERIMENTING',
      title: 'SYSTEM CONTROL // GIT & GITHUB',
      caption: 'COLLABORATION ACROSS THE TIMELINE',
      desc: 'Adopted professional developer workflows. Engineered structured Git branching workflows, pull request reviews, and disciplined code versioning.',
      icon: <Terminal size={22} color="#FF2DAA" />,
      accentColor: '#FF2DAA',
      skills: ['Git Version Control', 'GitHub Collaboration', 'Code Integrity'],
    },
    {
      panelNumber: 'PANEL 5',
      stage: 'GROWING',
      title: 'COMPUTATIONAL RIGOR // DSA',
      caption: 'SHARPENING THE INNER SPIDER-SENSE',
      desc: 'Tackled Data Structures and Algorithms with systematic rigor. Analyzing time-space complexity, trees, graphs, dynamic programming, and edge cases.',
      icon: <BrainCircuit size={22} color="#00F0FF" />,
      accentColor: '#00F0FF',
      skills: ['Data Structures', 'Algorithmic Optimization', 'Problem Solving'],
    },
    {
      panelNumber: 'PANEL 6',
      stage: 'NEXT MISSION',
      title: 'CANON TRAJECTORY // SOFTWARE ENGINEERING',
      caption: 'STEPPING INTO THE TECH UNIVERSE',
      desc: 'Unifying algorithmic logic, full-stack systems engineering, and collaborative agility to solve real-world problems as a high-impact Software Engineer.',
      icon: <Rocket size={22} color="#FF4FD8" />,
      accentColor: '#FF4FD8',
      skills: ['Software Engineering', 'System Reliability', 'Continuous Growth'],
    },
  ];

  return (
    <section id="origin" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div className="section-tag">
          <span>🕸️ ORIGIN STORY</span>
        </div>
        <h2 className="section-title">EVERY HERO STARTS SOMEWHERE</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
          Follow the comic chronology of Mahak's path into Computer Science and Software Engineering.
        </p>
      </div>

      {/* Main Comic Narrative Splash Panel */}
      <div
        className="comic-panel halftone-overlay"
        style={{
          padding: '36px',
          marginBottom: '54px',
          borderLeft: '5px solid #FF4FD8',
          borderRight: '1px solid rgba(139, 77, 255, 0.4)',
          background: 'linear-gradient(135deg, rgba(26, 11, 35, 0.92) 0%, rgba(10, 5, 15, 0.96) 100%)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 0 30px rgba(255, 79, 216, 0.15)',
        }}
      >
        {/* Comic Issue Header Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '18px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.72rem',
                fontWeight: 800,
                background: '#FF2DAA',
                color: '#FFFFFF',
                padding: '2px 8px',
                borderRadius: '2px',
                letterSpacing: '0.1em',
              }}
            >
              ISSUE #01
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#00F0FF',
                letterSpacing: '0.12em',
              }}
            >
              THE AWAKENING OF A BUILDER
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#8B4DFF',
              letterSpacing: '0.12em',
            }}
          >
            EARTH-CSE // TIMELINE VERIFIED
          </span>
        </div>

        {/* Narrative Quote Bubble */}
        <div style={{ maxWidth: '880px' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#FF4FD8',
              color: '#050505',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              padding: '2px 8px',
              borderRadius: '2px',
              marginBottom: '12px',
            }}
          >
            NARRATOR CAPTION:
          </div>
          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              lineHeight: 1.6,
              color: '#FFFFFF',
              fontWeight: 600,
              fontStyle: 'normal',
              letterSpacing: '0.01em',
            }}
          >
            “I’m Mahak, a BTech CSE student passionate about programming, problem solving and building things with technology.”
          </p>

          {/* Technical Keywords Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '22px',
            }}
          >
            {['Python', 'Java', 'DSA', 'Web Development', 'Git/GitHub', 'Software Engineering'].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  background: 'rgba(255, 79, 216, 0.08)',
                  border: '1px solid rgba(255, 79, 216, 0.28)',
                  color: '#FFB6EE',
                }}
              >
                #{item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Comic Book Chronology Panels Grid */}
      <div
        className="comic-panels-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
          gap: '24px',
          position: 'relative',
        }}
      >
        {journeyPanels.map((panel, idx) => (
          <div
            key={panel.stage}
            className="comic-panel comic-story-card"
            style={{
              padding: '28px',
              background: 'linear-gradient(150deg, rgba(22, 9, 29, 0.8) 0%, rgba(10, 5, 15, 0.95) 100%)',
              border: `1px solid ${panel.accentColor}35`,
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Top Comic Panel Caption Tape */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                background: panel.accentColor,
                color: '#050505',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.68rem',
                fontWeight: 900,
                letterSpacing: '0.15em',
                padding: '3px 12px',
                borderBottomRightRadius: '6px',
              }}
            >
              {panel.panelNumber}
            </div>

            <div style={{ marginTop: '14px' }}>
              {/* Stage Badge & Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: panel.accentColor,
                    letterSpacing: '0.12em',
                  }}
                >
                  // {panel.stage}
                </span>

                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(5, 5, 5, 0.85)',
                    border: `1px solid ${panel.accentColor}50`,
                    boxShadow: `0 0 12px ${panel.accentColor}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {panel.icon}
                </div>
              </div>

              {/* Panel Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  letterSpacing: '0.04em',
                }}
              >
                {panel.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: '#C4C4D1',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '18px',
                }}
              >
                {panel.desc}
              </p>
            </div>

            {/* Bottom Tech Focus Chips */}
            <div
              style={{
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
              }}
            >
              {panel.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#E0E0E8',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '2px 8px',
                    borderRadius: '3px',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .comic-story-card:hover {
          transform: translateY(-5px);
          border-color: #FF4FD8 !important;
          box-shadow: 0 10px 30px rgba(255, 79, 216, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
