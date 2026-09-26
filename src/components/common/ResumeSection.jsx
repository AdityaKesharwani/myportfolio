import React from 'react';
import Container from './Container';
import {
  BsDownload,
  BsFileEarmarkPdf,
  BsEye,
  BsCheckCircleFill,
  BsBriefcase,
  BsCodeSlash,
  BsMortarboard,
  BsShieldCheck
} from 'react-icons/bs';
import { PERSONAL_INFO } from '../../utils/constants';

export default function ResumeSection({ className = '' }) {
  const resumeUrl = '/Aditya_Kesharwani_Resume.pdf';

  return (
    <section className={`w-100 py-5 ${className}`} id="resume-section" style={{ backgroundColor: '#090a0f', color: '#ffffff' }}>
      <Container>
        <div
          className="p-4 p-md-5 position-relative overflow-hidden"
          style={{
            backgroundColor: '#0d111a',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '0px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Subtle Ambient Glowing Orbs */}
          <div
            className="position-absolute rounded-circle pointer-events-none"
            style={{
              top: '-5rem',
              right: '-5rem',
              width: '24rem',
              height: '24rem',
              backgroundColor: 'rgba(34, 211, 238, 0.08)',
              filter: 'blur(90px)',
              zIndex: 1,
            }}
          ></div>
          <div
            className="position-absolute rounded-circle pointer-events-none"
            style={{
              bottom: '-5rem',
              left: '-5rem',
              width: '20rem',
              height: '20rem',
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              filter: 'blur(90px)',
              zIndex: 1,
            }}
          ></div>

          <div className="position-relative row g-4 align-items-center" style={{ zIndex: 2 }}>
            {/* Left Content Column */}
            <div className="col-12 col-lg-7 d-flex flex-column gap-3">
              {/* Badge */}
              <div
                className="d-inline-flex align-items-center gap-2 font-mono px-3 py-1"
                style={{
                  backgroundColor: 'rgba(34, 211, 238, 0.08)',
                  border: '1px solid rgba(34, 211, 238, 0.35)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  width: 'fit-content',
                }}
              >
                <BsFileEarmarkPdf size={14} />
                <span>CURRICULUM VITAE // VERIFIED DOCUMENT</span>
              </div>

              {/* Title */}
              <h2
                className="font-display text-uppercase text-white m-0"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                Download Official Resume
              </h2>

              {/* Small Concise Content */}
              <p
                className="font-body m-0"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  maxWidth: '620px',
                }}
              >
                Get a comprehensive overview of my 5+ years of full-stack engineering experience across Laravel, PHP, React.js, MySQL, RESTful APIs, and cloud deployments. Clean, ATS-optimized, and ready for recruitment evaluation.
              </p>

              {/* Key Highlights Grid */}
              <div className="row g-3 py-2">
                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 d-flex align-items-start gap-3 h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <BsBriefcase size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="font-mono d-block text-white fw-semibold" style={{ fontSize: '0.8125rem' }}>
                        5+ Years Experience
                      </span>
                      <span className="font-body text-muted d-block" style={{ fontSize: '0.75rem' }}>
                        Kragos, Valethi, White Force, Seven Eye
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 d-flex align-items-start gap-3 h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <BsCodeSlash size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="font-mono d-block text-white fw-semibold" style={{ fontSize: '0.8125rem' }}>
                        Core Technology Stack
                      </span>
                      <span className="font-body text-muted d-block" style={{ fontSize: '0.75rem' }}>
                        Laravel, PHP, React.js, MySQL, AWS EC2
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 d-flex align-items-start gap-3 h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <BsMortarboard size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="font-mono d-block text-white fw-semibold" style={{ fontSize: '0.8125rem' }}>
                        Formal Education
                      </span>
                      <span className="font-body text-muted d-block" style={{ fontSize: '0.75rem' }}>
                        MCA &amp; BCA in Information Technology
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 d-flex align-items-start gap-3 h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <BsShieldCheck size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <span className="font-mono d-block text-white fw-semibold" style={{ fontSize: '0.8125rem' }}>
                        Verified Document
                      </span>
                      <span className="font-body text-muted d-block" style={{ fontSize: '0.75rem' }}>
                        PDF Document • 2 Pages • 76 KB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                <a
                  href={resumeUrl}
                  download="Aditya_Kesharwani_Resume.pdf"
                  className="btn btn-cyan px-4 py-3 d-inline-flex align-items-center gap-2 font-mono text-uppercase fw-semibold text-decoration-none shadow-sm"
                  style={{
                    backgroundColor: 'var(--accent-cyan)',
                    color: '#000000',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <BsDownload size={16} />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-4 py-3 d-inline-flex align-items-center gap-2 font-mono text-uppercase fw-semibold text-decoration-none"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <BsEye size={16} />
                  <span>Preview in Browser</span>
                </a>
              </div>
            </div>

            {/* Right Preview Card / Document Blueprint Box */}
            <div className="col-12 col-lg-5">
              <div
                className="p-4 position-relative"
                style={{
                  backgroundColor: '#0a0d14',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Header bar of preview card */}
                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-atelier">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#22c55e',
                        borderRadius: '50%',
                      }}
                    ></span>
                    <span className="font-mono text-xs text-uppercase" style={{ color: '#94a3b8' }}>
                      Aditya_Kesharwani_Resume.pdf
                    </span>
                  </div>
                  <span
                    className="font-mono px-2 py-0.5 text-uppercase"
                    style={{
                      fontSize: '0.625rem',
                      backgroundColor: 'rgba(34, 211, 238, 0.1)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(34, 211, 238, 0.3)',
                    }}
                  >
                    2-PAGE CV
                  </span>
                </div>

                {/* Simulated Resume Document Preview */}
                <div
                  className="p-3 mb-3"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    borderRadius: '2px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start border-bottom pb-2 mb-2">
                    <div>
                      <h4 className="m-0 fw-bold font-display" style={{ fontSize: '1.125rem', color: '#090a0f' }}>
                        {PERSONAL_INFO.name}
                      </h4>
                      <p className="m-0 font-mono" style={{ fontSize: '0.6875rem', color: '#475569' }}>
                        Full Stack Developer | Laravel | PHP | React.js
                      </p>
                    </div>
                    <span
                      className="badge bg-dark font-mono text-uppercase"
                      style={{ fontSize: '0.5625rem', padding: '3px 6px' }}
                    >
                      5+ YRS EXP
                    </span>
                  </div>

                  <div className="font-mono mb-2" style={{ fontSize: '0.625rem', color: '#64748b' }}>
                    {PERSONAL_INFO.email} • {PERSONAL_INFO.phone} • {PERSONAL_INFO.location}
                  </div>

                  <div className="mb-2">
                    <span
                      className="font-mono d-block fw-bold text-uppercase pb-1 mb-1 border-bottom"
                      style={{ fontSize: '0.625rem', color: '#090a0f' }}
                    >
                      Professional Experience Highlights
                    </span>
                    <div className="d-flex flex-column gap-1" style={{ fontSize: '0.625rem', color: '#334155' }}>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Kragos Technologies</span>
                        <span className="text-muted font-mono">06/2026 – Present</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Valethi Technologies</span>
                        <span className="text-muted font-mono">10/2022 – 06/2026</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">White Force</span>
                        <span className="text-muted font-mono">07/2021 – 10/2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span
                      className="font-mono d-block fw-bold text-uppercase pb-1 mb-1 border-bottom"
                      style={{ fontSize: '0.625rem', color: '#090a0f' }}
                    >
                      Education &amp; Credentials
                    </span>
                    <div style={{ fontSize: '0.625rem', color: '#334155' }}>
                      Master of Computer Applications (MCA) • Gyan Ganga College
                    </div>
                  </div>
                </div>

                {/* Footer validation stamp */}
                <div className="d-flex align-items-center justify-content-between pt-1">
                  <div className="d-flex align-items-center gap-1">
                    <BsCheckCircleFill size={13} style={{ color: '#22c55e' }} />
                    <span className="font-mono text-xs" style={{ color: '#94a3b8', fontSize: '0.6875rem' }}>
                      Latest Chronology Verified
                    </span>
                  </div>
                  <a
                    href={resumeUrl}
                    download="Aditya_Kesharwani_Resume.pdf"
                    className="font-mono text-xs text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    <span>Instant Save</span>
                    <BsDownload size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
