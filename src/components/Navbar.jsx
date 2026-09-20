import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Origin Story', href: '#origin' },
    { label: 'Superpowers', href: '#superpowers' },
    { label: 'Missions', href: '#missions' },
    { label: 'Training', href: '#training' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'origin', 'superpowers', 'missions', 'training', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 74;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(5, 5, 5, 0.92)' : 'rgba(5, 5, 5, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 79, 216, 0.25)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.75), 0 1px 15px rgba(255, 79, 216, 0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '74px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          className="brand-logo"
        >
          <span style={{ fontSize: '1.35rem', filter: 'drop-shadow(0 0 8px #FF4FD8)' }}>🕷️</span>
          <span style={{ position: 'relative' }}>
            MAHAK
            <span
              style={{
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, #FF4FD8, #00F0FF)',
                borderRadius: '2px',
              }}
            />
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#FFFFFF' : '#B3B3C2',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(255, 79, 216, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 79, 216, 0.4)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px rgba(255, 79, 216, 0.25)' : 'none',
                }}
                className="nav-link-item"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'rgba(22, 9, 29, 0.8)',
            border: '1px solid rgba(255, 79, 216, 0.45)',
            color: '#FFFFFF',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          {isOpen ? <X size={22} color="#FF4FD8" /> : <Menu size={22} color="#FFFFFF" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}
        style={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          top: '74px',
          left: 0,
          right: 0,
          background: 'rgba(8, 4, 12, 0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '2px solid #FF4FD8',
          padding: '24px',
          gap: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.95)',
          maxHeight: 'calc(100vh - 74px)',
          overflowY: 'auto',
        }}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive ? '#FF4FD8' : '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                background: isActive ? 'rgba(255, 79, 216, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                borderLeft: isActive ? '3px solid #FF4FD8' : '3px solid transparent',
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
        .nav-link-item:hover {
          color: #FF4FD8 !important;
          background: rgba(255, 79, 216, 0.08) !important;
          border-color: rgba(255, 79, 216, 0.3) !important;
        }
      `}</style>
    </header>
  );
}
