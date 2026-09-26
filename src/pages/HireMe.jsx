import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import Services from '../components/hire/Services';
import WorkProcess from '../components/hire/WorkProcess';
import Availability from '../components/hire/Availability';
import HireCTA from '../components/hire/HireCTA';
import ContactForm from '../components/contact/ContactForm';
import EliteMindShowcase from '../components/hire/EliteMindShowcase';
import ClientFeedback3D from '../components/hire/ClientFeedback3D';
import { PERSONAL_INFO } from '../utils/constants';
import techBlueprint from '../assets/images/tech-atelier-blueprint.png';
import {
  BsCheckCircleFill,
  BsTerminal,
  BsArrowDown,
  BsEnvelope,
} from 'react-icons/bs';

export default function HireMe() {
  return (
    <>
      <Helmet>
        <title>Hire Me &amp; Services | {PERSONAL_INFO.name} - Full Stack Developer</title>
        <meta
          name="description"
          content="Hire Aditya Kesharwani - Full Stack Developer & Digital Architect for Laravel, PHP, React.js, and API architecture projects. Flexible hourly rate: $12–$25/hr."
        />
      </Helmet>

      {/* Prominent Dark Architectural Hero & Commission Register (New Theme) */}
      <section
        className="w-100 text-white position-relative overflow-hidden border-bottom"
        style={{
          backgroundColor: '#0d1015',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          paddingTop: '2.5rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Ambient moody glowing orbs */}
        <div
          className="position-absolute rounded-circle pointer-events-none"
          style={{
            top: '-6rem',
            left: '-4rem',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            filter: 'blur(100px)',
          }}
        ></div>
        <div
          className="position-absolute rounded-circle pointer-events-none"
          style={{
            bottom: '-4rem',
            right: '20%',
            width: '28rem',
            height: '28rem',
            backgroundColor: 'rgba(14, 165, 233, 0.08)',
            filter: 'blur(110px)',
          }}
        ></div>

        <div className="atelier-container position-relative" style={{ zIndex: 2 }}>
          {/* Top Cyber Breadcrumb */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-3 mb-4 font-mono text-xs"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="d-flex align-items-center gap-2" style={{ color: '#94a3b8' }}>
              <span
                className="d-inline-block rounded-1"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#fbbf24',
                  animation: 'pulseGlowCyan 2s infinite',
                }}
              ></span>
              <span className="text-uppercase tracking-wider">
                Commission Register &amp; Dossier / 2026.04
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span className="fw-semibold" style={{ color: '#fde68a' }}>
                SESSION_LIVE
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 font-mono">
              <span className="d-none d-sm-inline" style={{ color: '#94a3b8' }}>
                [NODE_JBP_IN] UTC+05:30
              </span>
              <span
                className="d-inline-flex align-items-center gap-1 px-2 py-0.5 border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#6ee7b7',
                }}
              >
                <span
                  className="pulse-glow-green rounded-circle d-inline-block"
                  style={{ width: '6px', height: '6px', backgroundColor: '#34d399' }}
                ></span>
                ACTIVE BOOKING WINDOW
              </span>
            </div>
          </div>

          {/* Split Hero Layout */}
          <div className="row g-4 align-items-center">
            {/* Left Column: Copy & Commercial Rates */}
            <div className="col-12 col-lg-7 d-flex flex-column gap-3">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 font-mono text-uppercase"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fde68a',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                  width: 'fit-content',
                }}
              >
                <BsTerminal size={14} style={{ color: '#fbbf24' }} />
                <span>Hire Me &amp; Engineering Services</span>
              </div>

              <h1
                className="font-display text-uppercase text-white m-0 tracking-tighter"
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                Let's Build Something That Works.
              </h1>

              <p
                className="font-body m-0"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: '#cbd5e1',
                  maxWidth: '640px',
                }}
              >
                I help businesses and teams build reliable web applications, scalable backend systems and modern digital products. Calibrated for maximum uptime, high throughput, and seamless craft.
              </p>

              {/* Live Studio Telemetry & Commercial Tiering within Hero */}
              <div className="row g-3 pt-2">
                {/* Pricing Card */}
                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 border rounded-1 position-relative overflow-hidden h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2 font-mono text-xs">
                      <span className="text-uppercase" style={{ color: '#94a3b8' }}>Commercial Standard</span>
                      <span
                        className="px-2 py-0.5 border"
                        style={{
                          backgroundColor: 'rgba(251, 191, 36, 0.1)',
                          borderColor: 'rgba(251, 191, 36, 0.25)',
                          color: '#fde68a',
                          fontSize: '0.65rem',
                        }}
                      >
                        TIER 1
                      </span>
                    </div>
                    <div
                      className="font-display text-white fw-bold leading-none tracking-tight"
                      style={{ fontSize: '2.5rem' }}
                    >
                      {PERSONAL_INFO.rateRange}
                    </div>
                    <span className="font-mono text-xs text-uppercase d-block mt-2" style={{ color: '#94a3b8' }}>
                      USD / Hour or Defined Sprint Milestone
                    </span>
                  </div>
                </div>

                {/* SLA & Specs Card */}
                <div className="col-12 col-sm-6">
                  <div
                    className="p-3 border rounded-1 d-flex flex-column gap-1.5 font-mono text-xs h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-between pb-1"
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: '#94a3b8' }}
                    >
                      <span>Capacity Status:</span>
                      <span className="fw-semibold d-inline-flex align-items-center gap-1" style={{ color: '#34d399' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }}></span>
                        ACTIVE
                      </span>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between py-1"
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: '#94a3b8' }}
                    >
                      <span>Availability:</span>
                      <span className="text-white fw-medium">Freelance &amp; Contract</span>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between py-1"
                      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: '#94a3b8' }}
                    >
                      <span>SLA:</span>
                      <span className="fw-medium" style={{ color: '#fde68a' }}>&lt; 24h Response</span>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between pt-1"
                      style={{ color: '#94a3b8' }}
                    >
                      <span>Execution:</span>
                      <span className="text-white fw-medium">Production-Tested</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA Action Bar */}
              <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                <a
                  href="#services"
                  className="btn-atelier btn-primary-atelier text-decoration-none font-mono text-uppercase px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <span>Explore Capabilities</span>
                  <BsArrowDown size={14} />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-decoration-none font-mono text-xs d-inline-flex align-items-center gap-2 px-3 py-2 border transition-all"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                  }}
                >
                  <BsEnvelope size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Atmospheric Photo Feature Card */}
            <div className="col-12 col-lg-5">
              <div
                className="dark-card-interactive position-relative rounded-1 overflow-hidden p-2 shadow-2xl"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ backgroundColor: '#0d1015' }}
                >
                  <div
                    className="position-relative w-100 overflow-hidden"
                    style={{ height: '440px' }}
                  >
                    <img
                      src={techBlueprint}
                      alt="Aditya Kesharwani Technical Atelier"
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        filter: 'contrast(1.1) brightness(0.95)',
                      }}
                    />

                    {/* Gradient vignettes */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, #0d1015 5%, transparent 60%, rgba(13, 16, 21, 0.4) 100%)',
                      }}
                    ></div>

                    {/* Overlaid blueprint summary chip */}
                    <div
                      className="position-absolute bottom-0 start-0 end-0 m-3 p-3 font-mono"
                      style={{
                        backgroundColor: 'rgba(9, 10, 16, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(12px)',
                        fontSize: '0.75rem',
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center text-white pb-1 mb-1 border-bottom border-secondary">
                        <span className="fw-semibold text-uppercase" style={{ color: 'var(--accent-cyan)' }}>
                          COMMISSION SPEC V5.4
                        </span>
                        <span style={{ color: '#94a3b8' }}>100% IP ASSIGNMENT</span>
                      </div>
                      <p className="m-0" style={{ fontSize: '0.7rem', lineHeight: 1.5 }}>
                        Enterprise contract models with zero licensing lock-in. Full CI/CD pipelines, container configurations, and production runbooks delivered with every sprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Location Bar */}
      <div
        className="w-100 py-2 border-bottom"
        style={{
          backgroundColor: 'var(--surface-container)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 font-mono text-muted" style={{ fontSize: '0.75rem' }}>
            <div className="d-flex align-items-center gap-2">
              <span className="text-dark font-semibold">[NODE_JBP_IN]</span>
              <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
              <span className="d-none d-md-inline">• Distributed Remote Infrastructure Serving Global Engineering Hubs</span>
            </div>
            <div className="d-flex align-items-center gap-1 text-dark font-semibold">
              <BsCheckCircleFill size={13} className="text-success" />
              <span>Immediate Allocation / Full-Stack SLA Validated</span>
            </div>
          </div>
        </Container>
      </div>

      {/* EliteMind Solutions - Freelance Engineering Collective (Founded 2022) */}
      <EliteMindShowcase />

      {/* Services Directory */}
      <Services />

      {/* 6-Stage Delivery Protocol */}
      <WorkProcess />

      {/* 3D Client Testimonials Slider (Authentic Feedback including The Restfo Resort in Pench) */}
      <ClientFeedback3D />

      {/* Deterministic Architecture Benchmarks */}
      <Availability />

      {/* Client FAQs & Terms */}
      <HireCTA />

      {/* Direct Project Briefing Form */}
      <section id="briefing-form" className="w-100 py-5 bg-surface border-bottom border-atelier">
        <Container>
          <div className="d-flex flex-column gap-2 mb-4 pb-3 border-bottom border-atelier">
            <span className="label-mono-sm text-secondary font-semibold">
              COMMISSION INITIATION // DIRECT ENGAGEMENT
            </span>
            <h2 className="headline-lg text-dark text-uppercase m-0">
              Submit Your Project Scope
            </h2>
            <p className="font-body text-muted m-0" style={{ maxWidth: '640px', fontSize: '0.9375rem' }}>
              Define your deliverables, timeline expectations, and budget tier. Every inquiry receives a thorough architectural feasibility review within 24 hours.
            </p>
          </div>
          <ContactForm formTitle="Hire &amp; Commission Initiation Form" formId="HIRE-AK-2026" />
        </Container>
      </section>
    </>
  );
}
