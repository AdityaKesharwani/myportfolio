import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../../utils/constants';
import TickerMarquee from './TickerMarquee';
import adityaPortrait from '../../assets/images/aditya-portrait.png';
import {
  BsArrowDownRight,
  BsArrowUpRight,
  BsTerminal,
  BsGeoAlt,
  BsEnvelope,
  BsDownload,
} from 'react-icons/bs';

export default function Hero() {
  return (
    <div className="w-100 flex-column d-flex">

      {/* HERO SECTION: ENHANCED MOTION DARK HERO (#090a0f) */}
      <section
        className="w-100 text-white position-relative overflow-hidden border-bottom"
        style={{
          backgroundColor: '#090a0f',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          paddingTop: '2.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        {/* Ambient Glowing Backdrop Orbs */}
        <div
          className="position-absolute rounded-circle pointer-events-none"
          style={{
            top: '-6rem',
            left: '-6rem',
            width: '26rem',
            height: '26rem',
            backgroundColor: 'rgba(34, 211, 238, 0.08)',
            filter: 'blur(90px)',
            zIndex: 1,
          }}
        ></div>
        <div
          className="position-absolute rounded-circle pointer-events-none"
          style={{
            top: '30%',
            right: '-8rem',
            width: '30rem',
            height: '30rem',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            filter: 'blur(100px)',
            zIndex: 1,
          }}
        ></div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.25,
            zIndex: 1,
          }}
        ></div>

        <div className="atelier-container position-relative" style={{ zIndex: 2 }}>
          {/* Metadata Status Bar */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 mb-4"
            style={{
              backgroundColor: 'rgba(15, 18, 29, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="d-flex flex-wrap align-items-center gap-2">
              <span
                className="font-mono text-uppercase px-2 py-1 fw-bold text-black"
                style={{
                  backgroundColor: 'var(--accent-cyan)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                }}
              >
                FULL STACK DEVELOPER
              </span>
              <span
                className="font-mono px-2 py-1 fw-semibold"
                style={{
                  backgroundColor: 'rgba(8, 51, 68, 0.6)',
                  border: '1px solid rgba(14, 116, 144, 0.6)',
                  color: '#67e8f9',
                  fontSize: '0.7rem',
                }}
              >
                5+ YEARS EXP
              </span>
              <span
                className="font-mono px-2 py-1 fw-semibold d-inline-flex align-items-center gap-1"
                style={{
                  backgroundColor: 'rgba(6, 78, 59, 0.5)',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  color: '#34d399',
                  fontSize: '0.7rem',
                }}
              >
                <span
                  className="pulse-glow-green rounded-circle d-inline-block"
                  style={{ width: '6px', height: '6px', backgroundColor: '#34d399' }}
                ></span>
                RATE: {PERSONAL_INFO.rateRange}
              </span>
            </div>

            <div
              className="d-flex align-items-center gap-1 font-mono"
              style={{ fontSize: '0.75rem', color: '#cbd5e1' }}
            >
              <BsGeoAlt size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>{PERSONAL_INFO.location} • Available for freelance &amp; contract</span>
            </div>
          </div>

          {/* Main Hero Grid: Left Content + Right Spec Image */}
          <div className="row g-4 align-items-center">
            {/* Left Column (7 cols on lg) */}
            <div className="col-12 col-lg-7 d-flex flex-column gap-3">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 font-mono text-uppercase hero-badge-strip"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  color: '#67e8f9',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  maxWidth: '100%',
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)',
                }}
              >
                <BsTerminal size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.4 }}>Delivering High-Performance Web Solutions for International Clients</span>
              </div>

              <h1
                className="font-display text-uppercase text-white m-0 tracking-tighter"
                style={{
                  fontSize: 'clamp(2.15rem, 5.5vw, 4.25rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                }}
              >
                {PERSONAL_INFO.name}
              </h1>

              <p
                className="font-display m-0"
                style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.875rem)',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  lineHeight: 1.25,
                }}
              >
                Building High-Performance Web Solutions.
              </p>

              <p
                className="font-body m-0"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#94a3b8',
                  maxWidth: '680px',
                }}
              >
                Full Stack Developer with 5+ years of experience building scalable, secure and production-ready web applications using Laravel, PHP, React.js, JavaScript, TypeScript and modern cloud technologies.
              </p>

              {/* CTAs with Glow Effects */}
              <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3 pt-2 hero-cta-group">
                <Link
                  to="/projects"
                  className="btn-atelier text-decoration-none font-mono text-uppercase fw-semibold px-3 px-sm-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 transition-all"
                  style={{
                    backgroundColor: 'var(--accent-cyan)',
                    color: '#000000',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.06em',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.45)',
                  }}
                >
                  <span>View My Work</span>
                  <BsArrowDownRight size={14} className="shrink-0" />
                </Link>

                <a
                  href="/Aditya_Kesharwani_Resume.pdf"
                  download="Aditya_Kesharwani_Resume.pdf"
                  className="btn-atelier text-decoration-none font-mono text-uppercase fw-semibold px-3 px-sm-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 transition-all"
                  style={{
                    backgroundColor: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid var(--accent-cyan)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.06em',
                  }}
                >
                  <BsDownload size={14} className="shrink-0" />
                  <span>Download CV</span>
                </a>

                <Link
                  to="/hire-me"
                  className="btn-atelier text-decoration-none font-mono text-uppercase fw-semibold px-3 px-sm-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 transition-all"
                  style={{
                    backgroundColor: '#141824',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.06em',
                  }}
                >
                  <span>Hire Me</span>
                  <BsArrowUpRight size={14} className="shrink-0" />
                </Link>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-decoration-none font-mono text-xs d-inline-flex align-items-center gap-1 px-2 py-2"
                  style={{ color: '#cbd5e1' }}
                >
                  <BsEnvelope size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>Email: {PERSONAL_INFO.email}</span>
                </a>
              </div>

              {/* Quick Stack Badges */}
              <div
                className="pt-3 d-flex flex-wrap align-items-center gap-2 font-mono text-xs"
                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <span className="text-white fw-semibold text-uppercase">Quick Stack:</span>
                {['Laravel', 'PHP 8.x', 'React.js', 'TypeScript', 'MySQL & Redis'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                      color: '#a5f3fc',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Full Integrated Portrait & Architect Spec Card (5 cols on lg) */}
            <div className="col-12 col-lg-5">
              <div
                className="glow-border position-relative"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05), rgba(34,211,238,0.2))',
                  padding: '1px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ backgroundColor: '#0b0d15' }}
                >
                  {/* Portrait container with proper sizing and clear visibility */}
                  <div
                    className="position-relative w-100 overflow-hidden d-flex align-items-center justify-content-center hero-portrait-stage"
                    style={{ height: '560px', minHeight: '520px', backgroundColor: '#0b0d15' }}
                  >
                    <img
                      src={adityaPortrait}
                      alt={`${PERSONAL_INFO.name} - Full Stack Developer portrait`}
                      className="w-100 h-100 portrait-float"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center 6%',
                        filter: 'contrast(1.04) brightness(1.02)',
                        transition: 'transform 0.7s ease',
                      }}
                    />

                    {/* Subtle bottom fade behind the spec card without covering face */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(11, 13, 21, 0.95) 0%, rgba(11, 13, 21, 0.4) 20%, transparent 38%)',
                      }}
                    ></div>

                    {/* Top status chips */}
                    <div
                      className="position-absolute d-flex align-items-center justify-content-between p-2 pointer-events-none"
                      style={{
                        top: '8px',
                        left: '8px',
                        right: '8px',
                        zIndex: 3,
                      }}
                    >
                      <span
                        className="px-2 py-1 font-mono text-xs d-inline-flex align-items-center gap-1"
                        style={{
                          backgroundColor: 'rgba(9, 10, 16, 0.88)',
                          border: '1px solid rgba(34, 211, 238, 0.4)',
                          color: 'var(--accent-cyan)',
                          backdropFilter: 'blur(8px)',
                          pointerEvents: 'auto',
                        }}
                      >
                        <span
                          className="rounded-circle d-inline-block"
                          style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-cyan)' }}
                        ></span>
                        <span>ADITYA K.</span>
                      </span>

                      <span
                        className="px-2 py-1 font-mono"
                        style={{
                          backgroundColor: 'rgba(9, 10, 16, 0.88)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#94a3b8',
                          fontSize: '0.62rem',
                          backdropFilter: 'blur(8px)',
                          pointerEvents: 'auto',
                        }}
                      >
                        SEC_2026
                      </span>
                    </div>

                    {/* Overlaid Architect Spec Sheet Card (Sleek & Compact, Below Face) */}
                    <div
                      className="position-absolute d-flex flex-column gap-1.5 shadow-lg hero-spec-card"
                      style={{
                        bottom: '10px',
                        left: '10px',
                        right: '10px',
                        padding: '10px 12px',
                        backgroundColor: 'rgba(9, 10, 16, 0.92)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(12px)',
                        zIndex: 3,
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-between pb-1"
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
                      >
                        <span
                          className="font-mono text-uppercase fw-semibold d-flex align-items-center gap-1"
                          style={{ color: 'var(--accent-cyan)', fontSize: '0.65rem' }}
                        >
                          <span
                            className="rounded-circle d-inline-block"
                            style={{ width: '5px', height: '5px', backgroundColor: 'var(--accent-cyan)' }}
                          ></span>
                          ARCHITECT SPEC SHEET
                        </span>
                        <span
                          className="font-mono px-1.5 py-0.2 border"
                          style={{
                            fontSize: '0.6rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#94a3b8',
                          }}
                        >
                          V5.4.1
                        </span>
                      </div>

                      <div className="row g-1 font-mono" style={{ fontSize: '0.65rem' }}>
                        <div className="col-6">
                          <span className="d-block" style={{ color: '#64748b', fontSize: '0.58rem' }}>CORE STACK</span>
                          <span className="text-white fw-medium">Laravel / React / TS</span>
                        </div>
                        <div className="col-6">
                          <span className="d-block" style={{ color: '#64748b', fontSize: '0.58rem' }}>CONTRACT RATE</span>
                          <span className="fw-semibold" style={{ color: '#34d399' }}>{PERSONAL_INFO.rateRange} USD</span>
                        </div>
                        <div className="col-6">
                          <span className="d-block" style={{ color: '#64748b', fontSize: '0.58rem' }}>EXPERIENCE</span>
                          <span className="text-white fw-medium">5+ Years Production</span>
                        </div>
                        <div className="col-6">
                          <span className="d-block" style={{ color: '#64748b', fontSize: '0.58rem' }}>DEPLOY TARGETS</span>
                          <span className="text-white fw-medium">AWS / Docker / VPS</span>
                        </div>
                      </div>

                      {/* Mini code snippet */}
                      <div
                        className="px-2 py-0.5 font-mono"
                        style={{
                          backgroundColor: '#050608',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.6rem',
                          color: '#67e8f9',
                          overflowX: 'auto',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span style={{ color: '#c084fc' }}>const</span> engineer = &#123; status: <span style={{ color: '#34d399' }}>"available"</span>, quality: <span style={{ color: '#fde047' }}>"enterprise-grade"</span> &#125;;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FULL-WIDTH ARCHITECTURAL TICKER MARQUEE */}
      <TickerMarquee />
    </div>
  );
}
