import React from 'react';
import { GraduationCap, Code, Cpu, Network, Globe, FolderGit2, Rocket } from 'lucide-react';

export default function TrainingArc() {
  const steps = [
    {
      id: 1,
      title: 'BTech CSE',
      subtitle: 'Academic Inception',
      description: 'Enrolled in Computer Science & Engineering. Building strong foundations in discrete mathematics, computer architecture, and logic design.',
      icon: <GraduationCap size={18} color="#FF4FD8" />,
      accent: '#FF4FD8',
    },
    {
      id: 2,
      title: 'Programming Fundamentals',
      subtitle: 'Syntax & Memory Core',
      description: 'Understanding computational memory allocation, control flows, data types, and modular algorithmic decomposition.',
      icon: <Code size={18} color="#00F0FF" />,
      accent: '#00F0FF',
    },
    {
      id: 3,
      title: 'Python',
      subtitle: 'Versatility & Scripting',
      description: 'Developing concise scripting, data structure manipulation, standard libraries, and rapid logic problem-solving.',
      icon: <Code size={18} color="#FF2DAA" />,
      accent: '#FF2DAA',
    },
    {
      id: 4,
      title: 'Java',
      subtitle: 'Object-Oriented Architecture',
      description: 'Mastering encapsulation, inheritance, polymorphism, design patterns, and enterprise-grade modular software design.',
      icon: <Cpu size={18} color="#8B4DFF" />,
      accent: '#8B4DFF',
    },
    {
      id: 5,
      title: 'DSA',
      subtitle: 'Algorithmic Optimization',
      description: 'Tackling arrays, linked lists, trees, graphs, sorting, searching, and computational time/space complexity analysis.',
      icon: <Network size={18} color="#00F0FF" />,
      accent: '#00F0FF',
    },
    {
      id: 6,
      title: 'Web Development',
      subtitle: 'Interactive Ecosystems',
      description: 'Building modern interfaces with HTML5, CSS3, JavaScript, React components, and responsive full-stack integrations.',
      icon: <Globe size={18} color="#FF4FD8" />,
      accent: '#FF4FD8',
    },
    {
      id: 7,
      title: 'Projects',
      subtitle: 'Practical Mission Execution',
      description: 'Shipping software products like Virasat, integrating real database persistence (PostgreSQL, Prisma), and solving user problems.',
      icon: <FolderGit2 size={18} color="#8B4DFF" />,
      accent: '#8B4DFF',
    },
    {
      id: 8,
      title: 'Software Engineering',
      subtitle: 'Industry-Ready Engineering',
      description: 'Synthesizing clean code, Git version control, unit testing, and engineering discipline into high-caliber software delivery.',
      icon: <Rocket size={18} color="#00F0FF" />,
      accent: '#00F0FF',
    },
  ];

  return (
    <section id="training" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-tag">
          <span>🎓 TRAINING ARC</span>
        </div>
        <h2 className="section-title">EDUCATION & CHRONOLOGY</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Step-by-step evolution from core academic foundations to software engineering.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '880px',
          margin: '0 auto',
          padding: '10px 0',
        }}
      >
        {/* Center Vertical Glowing Line */}
        <div
          className="training-timeline-spine"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            background: 'linear-gradient(180deg, #FF4FD8 0%, #8B4DFF 50%, #00F0FF 100%)',
            boxShadow: '0 0 10px rgba(255, 79, 216, 0.4)',
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.id}
                className="training-item-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  width: '100%',
                }}
              >
                {/* Center Node Dot */}
                <div
                  className="training-node-dot"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#07030A',
                    border: `2px solid ${step.accent}`,
                    boxShadow: `0 0 14px ${step.accent}80`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                  }}
                >
                  {step.icon}
                </div>

                {/* Content Box */}
                <div
                  className="comic-panel training-card"
                  style={{
                    width: 'calc(50% - 36px)',
                    padding: '24px 26px',
                    background: 'linear-gradient(145deg, rgba(22, 9, 29, 0.88) 0%, rgba(10, 5, 14, 0.96) 100%)',
                    border: '1px solid rgba(139, 77, 255, 0.3)',
                    borderRadius: '8px',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: step.accent,
                        letterSpacing: '0.12em',
                      }}
                    >
                      PHASE 0{step.id}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'rgba(216, 216, 216, 0.55)',
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      color: '#C4C4D1',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .training-card:hover {
          border-color: #FF4FD8 !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 79, 216, 0.25);
        }

        @media (max-width: 768px) {
          .training-timeline-spine {
            left: 20px !important;
            transform: none !important;
          }
          .training-node-dot {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .training-item-row {
            justifyContent: flex-start !important;
            padding-left: 52px;
          }
          .training-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
