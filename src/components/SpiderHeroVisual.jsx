import React from 'react';

export default function SpiderHeroVisual() {
  return (
    <div
      className="spider-hero-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Outer Ambient Glow Backing */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.22) 0%, rgba(139, 77, 255, 0.16) 40%, rgba(5, 5, 5, 0) 70%)',
          filter: 'blur(35px)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Comic Halftone Badge Ring */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '104%',
          height: '104%',
          borderRadius: '50%',
          border: '1px dashed rgba(255, 79, 216, 0.3)',
          animation: 'rotateBadge 40s linear infinite',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Secondary Counter-Rotating Ring with Cyberspace nodes */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '116%',
          height: '116%',
          borderRadius: '50%',
          border: '1px dotted rgba(0, 240, 255, 0.25)',
          animation: 'rotateBadgeReverse 32s linear infinite',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Main Character Floating Container */}
      <div
        className="spider-character-float"
        style={{
          position: 'relative',
          zIndex: 2,
          animation: 'heroFloat 4.5s ease-in-out infinite',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <svg
          viewBox="0 0 500 550"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '440px',
            filter: 'drop-shadow(0 15px 30px rgba(5, 5, 5, 0.9)) drop-shadow(0 0 25px rgba(255, 79, 216, 0.35))',
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Hood Outer Gradient */}
            <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#F0F0F7" />
              <stop offset="80%" stopColor="#D5D5E2" />
              <stop offset="100%" stopColor="#A8A8BD" />
            </linearGradient>

            {/* Inner Hood Deep Shadow Gradient */}
            <linearGradient id="innerHoodDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#08040C" />
              <stop offset="50%" stopColor="#16091D" />
              <stop offset="100%" stopColor="#2A1138" />
            </linearGradient>

            {/* Mask Face Center Gradient */}
            <linearGradient id="maskFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1C0E26" />
              <stop offset="100%" stopColor="#0A040D" />
            </linearGradient>

            {/* Neon Eye Glow Gradients */}
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#00F0FF" />
              <stop offset="85%" stopColor="#FF4FD8" />
              <stop offset="100%" stopColor="#FF2DAA" />
            </radialGradient>

            {/* Inner Web Pattern */}
            <pattern id="innerWeb" width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 22 22 M 22 0 L 0 22" stroke="rgba(255, 79, 216, 0.28)" strokeWidth="0.8" />
              <circle cx="11" cy="11" r="5" fill="none" stroke="rgba(139, 77, 255, 0.22)" strokeWidth="0.6" />
            </pattern>

            {/* Comic Halftone Dot Pattern */}
            <pattern id="comicDots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="1.5" fill="rgba(255, 79, 216, 0.18)" />
            </pattern>
          </defs>

          {/* Comic Background Energy Hexagon */}
          <polygon
            points="250,20 440,130 440,390 250,500 60,390 60,130"
            fill="url(#comicDots)"
            stroke="rgba(139, 77, 255, 0.35)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />

          {/* Outer Hood Silhouette (Iconic Ghost-Spider pointed silhouette) */}
          <path
            d="M 250 50 
               C 330 50, 420 120, 410 270 
               C 405 340, 370 430, 360 480 
               C 310 495, 280 500, 250 500 
               C 220 500, 190 495, 140 480 
               C 130 430, 95 340, 90 270 
               C 80 120, 170 50, 250 50 Z"
            fill="url(#hoodGrad)"
            stroke="#050505"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {/* Hood Inner Fold / Magenta Rim (Signature Ghost-Spider vibrant pink lining) */}
          <path
            d="M 250 85 
               C 315 85, 385 145, 375 270 
               C 368 335, 340 410, 330 445 
               C 290 458, 270 460, 250 460 
               C 230 460, 210 458, 170 445 
               C 160 410, 132 335, 125 270 
               C 115 145, 185 85, 250 85 Z"
            fill="#FF2DAA"
            stroke="#050505"
            strokeWidth="4"
          />

          {/* Inner Hood Dark Recess & Webbing */}
          <path
            d="M 250 92 
               C 310 92, 375 150, 365 270 
               C 358 330, 332 400, 322 435 
               C 285 448, 268 450, 250 450 
               C 232 450, 215 448, 178 435 
               C 168 400, 142 330, 135 270 
               C 125 150, 190 92, 250 92 Z"
            fill="url(#innerHoodDark)"
          />
          <path
            d="M 250 92 
               C 310 92, 375 150, 365 270 
               C 358 330, 332 400, 322 435 
               C 285 448, 268 450, 250 450 
               C 232 450, 215 448, 178 435 
               C 168 400, 142 330, 135 270 
               C 125 150, 190 92, 250 92 Z"
            fill="url(#innerWeb)"
          />

          {/* Mask / Face Center Plane */}
          <path
            d="M 250 150 
               C 295 150, 335 190, 330 280 
               C 325 340, 290 405, 250 418 
               C 210 405, 175 340, 170 280 
               C 165 190, 205 150, 250 150 Z"
            fill="url(#maskFaceGrad)"
            stroke="#050505"
            strokeWidth="4"
          />

          {/* Left Eye (Aggressive angled comic lens) */}
          <g>
            <path
              d="M 235 230 
                 C 215 220, 192 230, 185 255 
                 C 180 278, 198 300, 218 312 
                 C 235 305, 238 275, 235 230 Z"
              fill="url(#eyeGlow)"
              stroke="#FFFFFF"
              strokeWidth="3.5"
            />
            {/* Eye Pupil / Cyan Glitch Slash */}
            <path
              d="M 226 242 C 212 245, 198 258, 196 270 C 205 282, 222 280, 226 272 Z"
              fill="#FFFFFF"
              opacity="0.85"
            />
          </g>

          {/* Right Eye (Matching angle) */}
          <g>
            <path
              d="M 265 230 
                 C 285 220, 308 230, 315 255 
                 C 320 278, 302 300, 282 312 
                 C 265 305, 262 275, 265 230 Z"
              fill="url(#eyeGlow)"
              stroke="#FFFFFF"
              strokeWidth="3.5"
            />
            {/* Right Eye Pupil Accent */}
            <path
              d="M 274 242 C 288 245, 302 258, 304 270 C 295 282, 278 280, 274 272 Z"
              fill="#FFFFFF"
              opacity="0.85"
            />
          </g>

          {/* Center Bridge & Forehead Web Lines */}
          <path
            d="M 250 160 L 250 220 M 235 185 L 265 185 M 225 205 L 275 205"
            stroke="rgba(255, 79, 216, 0.45)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Chin / Jaw Line Geometry */}
          <path
            d="M 240 370 L 250 382 L 260 370"
            stroke="#FF2DAA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Comic Action Shading & Glitch Lines */}
          <line x1="375" y1="360" x2="395" y2="350" stroke="#FF4FD8" strokeWidth="3" strokeLinecap="round" />
          <line x1="365" y1="385" x2="390" y2="375" stroke="#FF4FD8" strokeWidth="3" strokeLinecap="round" />
          <line x1="355" y1="410" x2="375" y2="400" stroke="#FF4FD8" strokeWidth="3" strokeLinecap="round" />

          <line x1="125" y1="360" x2="105" y2="350" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="135" y1="385" x2="110" y2="375" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="145" y1="410" x2="125" y2="400" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating Holographic Badge */}
      <div
        style={{
          marginTop: '-16px',
          zIndex: 3,
          background: 'rgba(8, 4, 12, 0.92)',
          border: '1px solid rgba(255, 79, 216, 0.55)',
          borderRadius: '4px',
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 15px rgba(255, 79, 216, 0.35)',
          backdropFilter: 'blur(10px)',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#00F0FF',
            boxShadow: '0 0 10px #00F0FF',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.74rem',
            letterSpacing: '0.14em',
            color: '#FFFFFF',
          }}
        >
          SECTOR: MAHAK // CANON: ONLINE
        </span>
      </div>

      <style>{`
        @keyframes heroFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(0.6deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes rotateBadge {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotateBadgeReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
