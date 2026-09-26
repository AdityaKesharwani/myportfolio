import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../../utils/constants';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer
      className="w-100 border-top"
      style={{
        backgroundColor: '#07080d',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
      }}
      id="contact"
    >
      <div className="atelier-container pt-5 pb-4">
        {/* Top Architectural Header */}
        <div
          className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between pb-4 gap-4"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div className="d-flex flex-column gap-1">
            <span
              className="label-mono-sm text-uppercase fw-semibold"
              style={{ color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}
            >
              Master Architect &amp; Engineer Index
            </span>
            <span
              className="font-display text-uppercase tracking-tighter text-white m-0"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div
            className="p-3 font-mono"
            style={{
              maxWidth: '440px',
              fontSize: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
            }}
          >
            <span
              className="d-block fw-semibold mb-1"
              style={{ color: 'var(--accent-cyan)' }}
            >
              Specialization Matrix:
            </span>
            <span>
              Laravel • PHP • React.js • JavaScript • TypeScript • AI Automation
            </span>
          </div>
        </div>

        {/* 4 Column Architectural Grid */}
        <div
          className="row g-4 py-5 footer-columns"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          {/* Col 01: Navigation */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column gap-3">
            <span
              className="label-mono-sm text-uppercase fw-semibold"
              style={{ color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}
            >
              01 / Navigation
            </span>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0 font-mono" style={{ fontSize: '0.8125rem' }}>
              <li>
                <Link to="/" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  About Dossier
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Certificates &amp; Accreditations
                </Link>
              </li>
              <li>
                <Link to="/hire-me" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Hire Me &amp; Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none transition-colors" style={{ color: '#94a3b8' }}>
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 02: Direct Contact */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column gap-3">
            <span
              className="label-mono-sm text-uppercase fw-semibold"
              style={{ color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}
            >
              02 / Direct Contact
            </span>
            <div className="d-flex flex-column gap-2 font-mono" style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
              <div>
                <span className="d-block" style={{ color: '#64748b' }}>Electronic Mail:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-decoration-none text-white transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <span className="d-block" style={{ color: '#64748b' }}>Direct Line:</span>
                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className="text-decoration-none text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <span className="d-block" style={{ color: '#64748b' }}>Availability Status:</span>
                <span style={{ color: '#34d399' }} className="fw-semibold">
                  Immediate / Contract ({PERSONAL_INFO.rateRange})
                </span>
              </div>
            </div>
          </div>

          {/* Col 03: Network & Profiles */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column gap-3">
            <span
              className="label-mono-sm text-uppercase fw-semibold"
              style={{ color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}
            >
              03 / Network &amp; Profiles
            </span>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0 font-mono" style={{ fontSize: '0.8125rem' }}>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center justify-content-between transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  <span>GitHub</span>
                  <BsArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center justify-content-between transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  <span>LinkedIn</span>
                  <BsArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-decoration-none d-flex align-items-center justify-content-between transition-colors"
                  style={{ color: '#94a3b8' }}
                >
                  <span>Schedule Briefing</span>
                  <BsArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 04: Origin & Base */}
          <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column gap-3">
            <span
              className="label-mono-sm text-uppercase fw-semibold"
              style={{ color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}
            >
              04 / Origin &amp; Base
            </span>
            <div className="d-flex flex-column gap-1 font-body" style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
              <span className="text-white fw-semibold">{PERSONAL_INFO.location}</span>
              <span className="font-mono text-xs">{PERSONAL_INFO.timezone}</span>
              <span className="mt-2 text-xs" style={{ color: '#64748b' }}>
                Remote-first architecture, serving engineering teams globally across North America, Europe, Australia, and Asia.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 font-mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>
          <p className="m-0" style={{ maxWidth: '640px' }}>
            Building scalable web solutions with clean architecture, modern technology and practical engineering.
          </p>
          <p className="m-0 text-md-end">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
