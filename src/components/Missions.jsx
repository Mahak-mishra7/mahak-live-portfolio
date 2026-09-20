import React, { useState } from 'react';
import { ExternalLink, Github, FileText, CheckCircle2, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function Missions() {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      id: '01',
      code: 'MISSION 01',
      fileCode: 'FILE #7749-IN',
      name: 'VIRASAT',
      stamp: 'OPERATIONAL',
      stampColor: '#00F0FF',
      role: 'Developer',
      securityLevel: 'CLEARANCE: LEVEL 5',
      description:
        'A heritage discovery platform focused on Indian heritage, cultural experiences and verified artisans. Connecting cultural enthusiasts and travellers with verified indigenous artisans through modern web technology.',
      technologies: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
      highlights: [
        'Curated cultural discovery portal dedicated to Indian artisan craft heritage',
        'Verified artisan profiles with authentic craft documentation and storytelling',
        'Structured relational data models engineered using Prisma ORM & PostgreSQL',
        'Intuitive, responsive React interface built with modern component architecture',
      ],
      viewLink: 'YOUR_PROJECT_URL',
      githubLink: 'YOUR_GITHUB_URL',
    },
    {
      id: '02',
      code: 'MISSION 02',
      fileCode: 'FILE #8821-ALG',
      name: 'ALGO-PULSE',
      stamp: 'IN DEVELOPMENT',
      stampColor: '#FF4FD8',
      role: 'Developer & Architect',
      securityLevel: 'CLEARANCE: LEVEL 4',
      description:
        'Interactive algorithmic visualizer analyzing sorting algorithms, graph pathfinding, and computational complexity metrics with real-time telemetries.',
      technologies: ['Python', 'JavaScript', 'DSA', 'CSS Grid'],
      highlights: [
        'Step-by-step visual execution of sorting algorithms and recursive traversals',
        'Real-time Big-O computational time and space complexity display',
        'Custom dataset generators with step playback and speed controls',
      ],
      viewLink: 'YOUR_PROJECT_URL',
      githubLink: 'YOUR_GITHUB_URL',
    },
    {
      id: '03',
      code: 'MISSION 03',
      fileCode: 'FILE #9904-SYS',
      name: 'DEV-GRID',
      stamp: 'ARCHITECTURE PHASE',
      stampColor: '#8B4DFF',
      role: 'Full-Stack Developer',
      securityLevel: 'CLEARANCE: LEVEL 3',
      description:
        'Developer workspace and modular documentation suite built with robust object-oriented backend services, REST endpoints, and secure data persistence.',
      technologies: ['Java', 'React', 'REST APIs', 'SQL'],
      highlights: [
        'Clean object-oriented design emphasizing modularity and decoupled layers',
        'Structured RESTful API endpoints for persistent technical documentation',
        'Fast full-text tagging and search engine for code snippets and workflows',
      ],
      viewLink: 'YOUR_PROJECT_URL',
      githubLink: 'YOUR_GITHUB_URL',
    },
  ];

  return (
    <section id="missions" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="section-tag">
          <span>🎯 MISSIONS</span>
        </div>
        <h2 className="section-title">DEPLOYED MISSIONS</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Projects I've built and challenges I've taken on.
        </p>
      </div>

      {/* Mission Dossier Cards Grid */}
      <div
        className="missions-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '32px',
        }}
      >
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="comic-panel mission-file-card"
            style={{
              padding: '0',
              background: 'linear-gradient(160deg, rgba(24, 11, 33, 0.9) 0%, rgba(9, 4, 13, 0.98) 100%)',
              border: mission.id === '01' ? '1px solid rgba(255, 79, 216, 0.55)' : '1px solid rgba(139, 77, 255, 0.3)',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: mission.id === '01' ? '0 0 25px rgba(255, 79, 216, 0.16)' : 'none',
              transition: 'all 0.35s ease',
            }}
          >
            {/* Top Dossier Folder Tab */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 24px',
                background: 'rgba(5, 5, 5, 0.7)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={15} color={mission.id === '01' ? '#FF4FD8' : '#8B4DFF'} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#E0E0E8',
                  }}
                >
                  {mission.code} // {mission.fileCode}
                </span>
              </div>

              {/* Clearance Stamp */}
              <span
                className="dossier-stamp"
                style={{
                  color: mission.stampColor,
                  borderColor: mission.stampColor,
                  background: `${mission.stampColor}14`,
                }}
              >
                {mission.stamp}
              </span>
            </div>

            {/* Inner Content Area */}
            <div style={{ padding: '28px 28px 16px' }}>
              {/* Project Name */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    color: '#FFFFFF',
                  }}
                >
                  {mission.name}
                </h3>
              </div>

              {/* Role Line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'rgba(216, 216, 216, 0.6)',
                  }}
                >
                  ROLE:
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#FF4FD8',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {mission.role}
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#8B4DFF',
                  }}
                >
                  {mission.securityLevel}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: '#C4C4D1',
                  fontSize: '0.93rem',
                  lineHeight: 1.6,
                  marginBottom: '22px',
                }}
              >
                {mission.description}
              </p>

              {/* Technology Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px',
                }}
              >
                {mission.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(139, 77, 255, 0.12)',
                      border: '1px solid rgba(139, 77, 255, 0.35)',
                      color: '#E0C8FF',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Dossier Action Footer */}
            <div
              style={{
                padding: '18px 28px 24px',
                background: 'rgba(5, 5, 5, 0.5)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                gap: '12px',
              }}
            >
              <button
                onClick={() => setSelectedMission(mission)}
                className="btn-primary"
                style={{
                  flex: 1,
                  fontSize: '0.8rem',
                  padding: '10px 14px',
                }}
                aria-label={`View dossier for ${mission.name}`}
              >
                <ExternalLink size={15} />
                <span>VIEW DOSSIER</span>
              </button>

              <button
                onClick={() => setSelectedMission(mission)}
                className="btn-secondary"
                style={{
                  flex: 1,
                  fontSize: '0.8rem',
                  padding: '10px 14px',
                }}
                aria-label={`View GitHub repository for ${mission.name}`}
              >
                <Github size={15} />
                <span>GITHUB</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Dossier Modal */}
      {selectedMission && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 5, 5, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={() => setSelectedMission(null)}
        >
          <div
            className="comic-panel"
            style={{
              maxWidth: '620px',
              width: '100%',
              background: '#0D0613',
              border: '2px solid #FF4FD8',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 0 45px rgba(255, 79, 216, 0.45)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMission(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: '4px',
              }}
              aria-label="Close dossier modal"
            >
              <X size={22} color="#FF4FD8" />
            </button>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#00F0FF',
                letterSpacing: '0.15em',
              }}
            >
              {selectedMission.code} // CLASSIFIED FILE // {selectedMission.fileCode}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: '#FFFFFF',
                margin: '8px 0 14px',
              }}
            >
              {selectedMission.name}
            </h3>

            <p style={{ color: '#D8D8D8', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedMission.description}
            </p>

            {/* Architecture Highlights */}
            <div style={{ marginBottom: '22px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  color: '#FF4FD8',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                MISSION SPECIFICATIONS & ARCHITECTURE:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedMission.highlights.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: '#C4C4D1',
                    }}
                  >
                    <CheckCircle2 size={16} color="#00F0FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder Notification Box */}
            <div
              style={{
                background: 'rgba(255, 79, 216, 0.08)',
                border: '1px dashed rgba(255, 79, 216, 0.4)',
                borderRadius: '6px',
                padding: '14px',
                marginBottom: '22px',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FFB6EE' }}>
                ⚡ <strong>Deployment Placeholder:</strong> You can replace <code>YOUR_PROJECT_URL</code> and <code>YOUR_GITHUB_URL</code> with your live repository and hosted platform URLs.
              </span>
            </div>

            {/* Modal Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={selectedMission.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, textDecoration: 'none' }}
              >
                <span>VISIT LIVE DEMO</span>
              </a>
              <a
                href={selectedMission.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, textDecoration: 'none' }}
              >
                <Github size={16} />
                <span>GITHUB REPO</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mission-file-card:hover {
          transform: translateY(-5px);
          border-color: #FF4FD8 !important;
          box-shadow: 0 12px 35px rgba(255, 79, 216, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
