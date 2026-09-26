import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/navigation';
import { PERSONAL_INFO } from '../../utils/constants';
import { BsArrowUpRight, BsEnvelope, BsPerson, BsList, BsX, BsDownload } from 'react-icons/bs';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed-top w-100"
        style={{
          height: 'var(--header-height)',
          backgroundColor: 'rgba(9, 10, 15, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
          zIndex: 1000,
        }}
      >
        <div
          className="atelier-container h-100 d-flex align-items-center justify-content-between"
          style={{ gap: '1rem' }}
        >
          {/* Brand Logo */}
          <Link to="/" className="d-flex flex-column text-decoration-none group">
            <div className="d-flex align-items-center gap-2">
              <span
                className="font-display text-uppercase tracking-tight text-white transition-colors"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                }}
              >
                {PERSONAL_INFO.name}
              </span>
              <span
                className="label-mono-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.6875rem',
                }}
              >
                / DEV
              </span>
            </div>

            <div className="d-flex align-items-center gap-2 mt-0">
              <span
                className="label-mono-sm"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.6875rem',
                }}
              >
                {PERSONAL_INFO.role}
              </span>
              <span
                className="badge-atelier d-none d-xl-inline-flex align-items-center gap-1"
                style={{
                  backgroundColor: 'rgba(6, 78, 59, 0.45)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  fontSize: '0.65rem',
                  padding: '1px 6px',
                }}
              >
                <span
                  className="pulse-glow-green"
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#34d399',
                  }}
                ></span>
                Available ({PERSONAL_INFO.rateRange})
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Matrix */}
          <nav
            className="d-none d-lg-flex align-items-center p-1"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="px-3 py-1 label-mono-md text-decoration-none transition-all text-uppercase"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#000000' : '#cbd5e1',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  boxShadow: isActive ? '0 0 15px rgba(255, 255, 255, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="d-flex align-items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="d-none d-sm-flex align-items-center justify-content-center transition-all"
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
              }}
              title={`Email: ${PERSONAL_INFO.email}`}
            >
              <BsEnvelope size={16} />
            </a>

            <a
              href="/Aditya_Kesharwani_Resume.pdf"
              download="Aditya_Kesharwani_Resume.pdf"
              className="d-none d-md-inline-flex align-items-center gap-1 py-2 px-3 text-uppercase font-mono text-decoration-none fw-semibold transition-all"
              style={{
                fontSize: '0.75rem',
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.04em',
              }}
              title="Download Aditya Kesharwani's Resume (PDF)"
            >
              <BsDownload size={13} />
              <span>Resume</span>
            </a>

            <Link
              to="/hire-me"
              className="d-none d-sm-inline-flex align-items-center gap-1 py-2 px-3 text-uppercase font-mono text-decoration-none fw-semibold transition-all"
              style={{
                fontSize: '0.75rem',
                backgroundColor: '#ffffff',
                color: '#000000',
                letterSpacing: '0.04em',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.25)',
              }}
            >
              <span>Hire Me</span>
              <BsArrowUpRight size={13} />
            </Link>

            {/* <Link
              to="/about"
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
              }}
              title="About Aditya"
            >
              <BsPerson size={17} />
            </Link> */}

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="d-lg-none d-flex align-items-center justify-content-center p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
              }}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <BsX size={26} /> : <BsList size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-lg-none d-flex flex-column"
          style={{
            zIndex: 999,
            backgroundColor: '#090a0f',
            paddingTop: 'var(--header-height)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            className="p-3 d-flex align-items-center justify-content-between"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="label-mono-sm text-muted">ARCHITECTURAL NAVIGATION</span>
            <span className="label-mono-sm text-cyan" style={{ color: 'var(--accent-cyan)' }}>
              SYS_MENU // V5.4
            </span>
          </div>

          <div className="d-flex flex-column p-3 gap-2 overflow-auto flex-grow-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="p-3 label-mono-md text-decoration-none d-flex align-items-center justify-content-between transition-all"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#000000' : '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontWeight: isActive ? 700 : 500,
                })}
              >
                <span>{link.name}</span>
                <BsArrowUpRight size={14} />
              </NavLink>
            ))}

            <a
              href="/Aditya_Kesharwani_Resume.pdf"
              download="Aditya_Kesharwani_Resume.pdf"
              className="p-3 label-mono-md text-decoration-none d-flex align-items-center justify-content-between transition-all mt-2"
              style={{
                backgroundColor: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <BsDownload size={14} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </div>
              <span className="font-mono text-xs">76 KB</span>
            </a>

            <div
              className="mt-3 p-3 d-flex flex-column gap-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="label-mono-sm text-muted">DIRECT CONTACT</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="label-mono-sm text-decoration-none"
                style={{ color: 'var(--accent-cyan)' }}
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="label-mono-sm" style={{ color: '#94a3b8' }}>
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
