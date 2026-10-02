import React from 'react';
import Container from '../common/Container';
import {
  BsShieldCheck,
  BsCodeSlash,
  BsLightningChargeFill,
  BsAwardFill,
  BsPeopleFill,
  BsCheck2Circle,
  BsArrowRight,
  BsBriefcaseFill,
} from 'react-icons/bs';

export default function EliteMindShowcase() {
  const highlights = [
    {
      icon: <BsPeopleFill size={22} className="text-info" />,
      title: 'Direct Founder Collaboration',
      desc: '100% of your architecture, backend code, and frontend logic is engineered directly by Aditya. Zero junior outsourcing, zero middleman overhead.',
    },
    {
      icon: <BsShieldCheck size={22} className="text-success" />,
      title: '100% IP & NDA Security',
      desc: 'Every freelance agreement includes comprehensive non-disclosure agreements, clean source code delivery, and complete intellectual property assignment.',
    },
    {
      icon: <BsLightningChargeFill size={22} className="text-warning" />,
      title: 'Agile & Milestone-Driven',
      desc: 'Weekly sprint demonstrations, staging environment access, and real-time communication via WhatsApp, Slack, or Google Meet.',
    },
    {
      icon: <BsCodeSlash size={22} className="text-primary" />,
      title: 'Production Runbooks & SLA',
      desc: 'Every delivered project includes Docker containers, CI/CD pipeline automation, and post-launch maintenance guarantees.',
    },
  ];

  const milestones = [
    { value: '2022', label: 'FOUNDED', sub: 'Dedicated Freelance Practice' },
    { value: '40+', label: 'DELIVERED', sub: 'Production Web Systems' },
    { value: '100%', label: 'ON-TIME', sub: 'Milestone Execution Rate' },
    { value: '99.8%', label: 'RETENTION', sub: 'Client Satisfaction Index' },
  ];

  return (
    <section className="w-100 py-5 bg-surface-container-low border-bottom border-atelier position-relative overflow-hidden">
      {/* Ambient background aura */}
      <div
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '28rem',
          height: '28rem',
          backgroundColor: 'rgba(34, 211, 238, 0.05)',
          filter: 'blur(90px)',
          zIndex: 1,
        }}
      />
      <div
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(99, 102, 241, 0.04)',
          filter: 'blur(90px)',
          zIndex: 1,
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="d-flex flex-column gap-2 mb-5 pb-3 border-bottom border-atelier">
          <div className="d-flex align-items-center gap-2">
            <span
              className="d-inline-flex align-items-center gap-1.5 px-2.5 py-1 font-mono text-uppercase fw-bold rounded-1 border"
              style={{
                fontSize: '0.72rem',
                backgroundColor: 'rgba(34, 211, 238, 0.08)',
                borderColor: 'rgba(34, 211, 238, 0.35)',
                color: 'var(--primary)',
                letterSpacing: '0.08em',
              }}
            >
              <BsBriefcaseFill size={11} />
              FREELANCE ENGINEERING STUDIO // EST. 2022
            </span>
          </div>

          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mt-2">
            <div>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                EliteMind Solutions
              </h2>
              <p className="font-mono text-muted text-xs mt-1 m-0">
                FOUNDER &amp; LEAD FULL STACK ARCHITECT: ADITYA KESHARWANI • ACTIVE SINCE 2022
              </p>
            </div>
            <p className="font-body text-muted m-0" style={{ maxWidth: '540px', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              <strong>EliteMind Solutions</strong> is my dedicated freelance engineering collective established in 2022 exclusively for independent contracting, bespoke web applications, enterprise API development, and high-performance cloud architectures.
            </p>
          </div>
        </div>

        {/* Milestone Stat Grid */}
        <div
          className="row g-0 mb-5 border-atelier shadow-sm"
          style={{ backgroundColor: '#ffffff' }}
        >
          {milestones.map((m, idx) => (
            <div
              key={m.label}
              className="col-6 col-md-3 p-3 p-sm-4 d-flex flex-column justify-content-center"
              style={{
                borderRight: (idx % 2 === 0 || idx < 3) ? '1px solid var(--border-subtle)' : 'none',
                borderBottom: idx < 2 ? '1px solid var(--border-subtle)' : 'none',
              }}
            >
              <span
                className="font-display fw-bold text-dark leading-none"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', letterSpacing: '-0.03em' }}
              >
                {m.value}
              </span>
              <span
                className="font-mono fw-bold text-uppercase mt-2"
                style={{ fontSize: '0.75rem', color: 'var(--primary)' }}
              >
                {m.label}
              </span>
              <span className="font-body text-muted mt-0.5" style={{ fontSize: '0.78rem', wordBreak: 'break-word' }}>
                {m.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Core Pillars / Why Hire EliteMind Solutions */}
        <div className="row g-4">
          {highlights.map((item) => (
            <div key={item.title} className="col-12 col-md-6">
              <div
                className="p-4 bg-white border-atelier h-100 d-flex flex-column gap-3 transition-all hover-shadow"
                style={{
                  borderLeft: '4px solid var(--primary)',
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="p-2.5 rounded-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: 'var(--surface-container)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="headline-sm text-dark font-bold text-uppercase m-0" style={{ fontSize: '1rem' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-muted m-0" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner linking to Briefing Form */}
        <div
          className="mt-5 p-4 p-md-4 border-atelier d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3"
          style={{
            backgroundColor: '#090d16',
            color: '#f8fafc',
            borderLeft: '4px solid #22d3ee',
          }}
        >
          <div className="d-flex flex-column gap-1">
            <span className="font-mono fw-bold" style={{ color: '#22d3ee', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
              ✦ CONTRACT ENGAGEMENT READY
            </span>
            <p className="font-body text-slate-300 m-0" style={{ fontSize: '0.92rem' }}>
              Need an enterprise-grade web application, custom booking engine, or API sync pipeline built with 100% accountability?
            </p>
          </div>
          <a
            href="#briefing-form"
            className="btn-atelier d-inline-flex align-items-center gap-2 shrink-0 py-2.5 px-4 font-mono fw-bold text-uppercase"
            style={{
              backgroundColor: '#22d3ee',
              color: '#090d16',
              border: 'none',
              fontSize: '0.82rem',
              letterSpacing: '0.05em',
            }}
          >
            <span>Commission via EliteMind</span>
            <BsArrowRight size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}
