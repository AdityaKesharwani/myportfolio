import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import {
  BsStarFill,
  BsArrowLeft,
  BsArrowRight,
  BsCheckCircleFill,
  BsQuote,
  BsGeoAlt,
  BsCodeSlash,
  BsShieldCheck,
  BsBuilding,
} from 'react-icons/bs';

const TESTIMONIALS = [
  {
    id: 'pench-resort',
    code: 'VCF_01',
    clientName: 'Rajeshwar Patel',
    role: 'Managing Director & Co-Owner',
    company: 'The Restfo Resort in Pench',
    shortCompany: 'Restfo Resort',
    location: 'Pench National Park, MP, India',
    country: 'India',
    photo: '/images/clients/client-pench-resort.jpg',
    projectType: 'Luxury Resort Website & Direct Booking Architecture',
    impact: '+45% Surge in Direct Bookings',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['PHP / Laravel', 'React.js', 'AWS CloudFront', 'Razorpay PG', 'WhatsApp API'],
    quote:
      'We engaged Aditya on a freelance contract to design and develop the complete official website and direct booking engine for The Restfo Resort in Pench. Being a luxury safari wildlife retreat, our platform demanded instantaneous loading of high-resolution jungle galleries and a frictionless room reservation flow without foreign tourists encountering payment dropouts. Aditya exceeded our expectations—our direct room and safari bookings surged by over 45% in our first season, drastically cutting down hefty OTA commission fees. Extremely reliable, accessible on WhatsApp/calls, and delivers production-grade excellence!',
  },
  {
    id: 'talentsync-us',
    code: 'VCF_02',
    clientName: 'David Vance',
    role: 'VP of Software Engineering',
    company: 'TalentSync Technologies',
    shortCompany: 'TalentSync',
    location: 'Austin, Texas, United States',
    country: 'United States',
    photo: '/images/clients/client-talentsync-us.jpg',
    projectType: 'Multi-Portal Job Aggregator & Real-Time Sync Pipeline',
    impact: '30% Latency Drop & 99.9% Uptime',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['Laravel 11', 'Redis Queues', 'MySQL Tuning', '16+ Job APIs', 'Docker'],
    quote:
      'Aditya was contracted through EliteMind Solutions to architect our high-throughput ingestion engine synchronizing across 16+ global job recruitment portals. Concurrency surges previously choked our background processors. Aditya refactored the daemon queues, rebuilt the ingestion throttles, and tuned database indexing, dropping query execution latency by 30% with 99.9% uptime. A true senior backend engineer who delivers clean, well-tested code on schedule and within budget.',
  },
  {
    id: 'apex-uk',
    code: 'VCF_03',
    clientName: 'Sophie Miller',
    role: 'Technical Operations Director',
    company: 'Apex Media & Digital Studio',
    shortCompany: 'Apex Digital',
    location: 'London, United Kingdom',
    country: 'United Kingdom',
    photo: '/images/clients/client-apex-agency.jpg',
    projectType: 'Bespoke Client Portal & SaaS Agency Dashboard',
    impact: 'Custom Architecture Delivered on Budget',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['React.js SPA', 'PHP REST APIs', 'Glassmorphism UI', 'OWASP Hardening'],
    quote:
      'Working with Aditya on our bespoke agency management suite was a breath of fresh air. From initial architectural discovery to staging and AWS deployment, his precision, code discipline, and communication were exemplary. The dashboard is lightning-fast, ultra-secure, and our team loved the intuitive UI. He treats freelance projects with enterprise seriousness and delivers complete documentation alongside the source code.',
  },
  {
    id: 'payswift-in',
    code: 'VCF_04',
    clientName: 'Anand Verma',
    role: 'Head of Digital Engineering',
    company: 'PaySwift Logistics Network',
    shortCompany: 'PaySwift',
    location: 'Bengaluru, Karnataka, India',
    country: 'India',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    projectType: 'B2B Logistics Webhooks & Middleware Architecture',
    impact: '-30% Production Incident Reduction',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['Node.js & Laravel', 'PostgreSQL', 'Idempotent Webhooks', 'AWS EC2/S3'],
    quote:
      'We hired Aditya to resolve synchronization bottlenecks between our logistics ERP and client storefront dashboards. He systematically traced race conditions, established idempotent webhook handlers with automated retries, and conducted rigorous load tests. Production issue reports dropped by 30% within the first month. He takes 100% accountability for his deliveries.',
  },
];

export default function ClientFeedback3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const timeoutRef = useRef(null);
  const current = TESTIMONIALS[activeIndex];

  // Auto-advance slider every 7.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 7500);

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="feedback">
      <Container>
        {/* SECTION HEADER */}
        <div className="d-flex flex-column gap-2 mb-4 pb-3 border-bottom border-atelier">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 font-mono">
            <div className="d-flex align-items-center gap-2">
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', flexShrink: 0 }}></span>
              <span className="label-mono-sm text-secondary font-semibold">
                AUDITED CLIENT REVIEWS // 100% 5-STAR SATISFACTION
              </span>
            </div>

            <span className="badge-atelier font-mono">
              RECORD [ {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} ] // VERIFIED CONTRACTS
            </span>
          </div>

          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 mt-1">
            <div>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                Verified Client Feedback
              </h2>
              <p className="font-mono text-muted text-xs mt-1 m-0">
                REAL BUSINESS OUTCOMES DELIVERED BY ADITYA KESHARWANI (ELITEMIND SOLUTIONS)
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="btn-atelier d-inline-flex align-items-center justify-content-center p-2"
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: '#ffffff',
                  color: 'var(--dark)',
                }}
                aria-label="Previous Testimonial"
                title="Previous Testimonial"
              >
                <BsArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="btn-atelier btn-primary-atelier d-inline-flex align-items-center justify-content-center p-2"
                style={{
                  width: '42px',
                  height: '42px',
                }}
                aria-label="Next Testimonial"
                title="Next Testimonial"
              >
                <BsArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* CLIENT SELECTOR TABS (Tech-Atelier Monospace Switcher) */}
        <div
          className="d-flex flex-nowrap overflow-x-auto gap-2 mb-4 pb-2 scrollbar-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {TESTIMONIALS.map((t, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`p-2.5 px-3 border-atelier font-mono text-start shrink-0 transition-all ${
                  isSelected ? 'bg-white shadow-sm' : 'hover:bg-white'
                }`}
                style={{
                  backgroundColor: isSelected ? '#ffffff' : 'var(--surface-container-low)',
                  borderTop: isSelected ? '3px solid var(--primary)' : '1px solid var(--border-atelier)',
                  minWidth: '220px',
                  borderRadius: '2px',
                }}
              >
                <div className="d-flex align-items-center justify-content-between gap-1 mb-1">
                  <span
                    className="label-mono-sm font-bold"
                    style={{ color: isSelected ? 'var(--primary)' : 'var(--secondary)', fontSize: '0.6875rem' }}
                  >
                    [{t.code}] // {t.country}
                  </span>
                  <div className="d-flex align-items-center text-warning" style={{ fontSize: '0.625rem' }}>
                    <BsStarFill size={10} />
                    <span className="ms-1 font-mono text-dark fw-bold">5.0</span>
                  </div>
                </div>
                <div
                  className="font-semibold text-dark text-truncate"
                  style={{ fontSize: '0.8125rem' }}
                >
                  {t.shortCompany}
                </div>
                <div className="text-muted text-truncate font-mono" style={{ fontSize: '0.6875rem' }}>
                  {t.clientName}
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN SPOTLIGHT TESTIMONIAL DOSSIER CARD */}
        <div
          className="p-3 p-sm-4 p-md-5 bg-white border-atelier shadow-sm position-relative tilt-card overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Dossier Header Bar */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 mb-4 border-atelier font-mono"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="d-flex align-items-center gap-2">
              <span
                className="badge-atelier font-mono fw-bold"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
              >
                {current.code}
              </span>
              <span className="label-mono-sm text-success fw-bold d-inline-flex align-items-center gap-1">
                <BsCheckCircleFill size={12} />
                <span>{current.verified}</span>
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div className="d-flex align-items-center gap-1 text-warning">
                {[...Array(current.rating)].map((_, i) => (
                  <BsStarFill key={i} size={14} />
                ))}
              </div>
              <span className="label-mono-sm text-dark font-bold">5.0 / 5.0 VERIFIED EVALUATION</span>
            </div>
          </div>

          {/* Dossier Body: Split 2-Column Architectural Layout */}
          <div className="row g-4 align-items-stretch">
            {/* Left Column: Client Credentials & Engagement Profile */}
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-between gap-3 border-end-lg border-atelier pe-lg-4">
              <div className="d-flex flex-column gap-3">
                {/* Client Avatar & Name Block */}
                <div className="d-flex align-items-center gap-3">
                  <div className="position-relative shrink-0">
                    <img
                      src={current.photo}
                      alt={current.clientName}
                      className="rounded-circle object-fit-cover border-atelier shadow-sm"
                      style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'var(--surface-container)',
                      }}
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <span
                      className="position-absolute bottom-0 end-0 rounded-circle border border-white"
                      style={{
                        width: '14px',
                        height: '14px',
                        backgroundColor: '#10b981',
                      }}
                      title="Verified Identity"
                    />
                  </div>

                  <div>
                    <h3 className="headline-md text-dark font-bold m-0" style={{ fontSize: '1.25rem' }}>
                      {current.clientName}
                    </h3>
                    <span className="font-body text-secondary d-block font-semibold" style={{ fontSize: '0.85rem' }}>
                      {current.role}
                    </span>
                    <span className="font-mono text-muted d-inline-flex align-items-center gap-1 mt-0.5" style={{ fontSize: '0.75rem' }}>
                      <BsBuilding size={11} />
                      <strong className="text-dark">{current.company}</strong>
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex align-items-center gap-1.5 font-mono text-muted" style={{ fontSize: '0.75rem' }}>
                  <BsGeoAlt size={12} className="text-primary shrink-0" />
                  <span>{current.location}</span>
                </div>

                {/* Project Scope Pill */}
                <div
                  className="p-2.5 border-atelier d-flex flex-column gap-1"
                  style={{ backgroundColor: 'var(--surface-container-low)' }}
                >
                  <span className="font-mono text-muted text-uppercase" style={{ fontSize: '0.6875rem' }}>
                    Commission Scope:
                  </span>
                  <div className="font-mono text-dark fw-semibold d-inline-flex align-items-center gap-1.5" style={{ fontSize: '0.8125rem' }}>
                    <BsCodeSlash size={13} className="text-primary shrink-0" />
                    <span>{current.projectType}</span>
                  </div>
                </div>

                {/* Measured Business Outcome */}
                <div
                  className="p-2.5 border-atelier d-flex align-items-center justify-content-between gap-2"
                  style={{
                    backgroundColor: 'rgba(34, 211, 238, 0.08)',
                    borderColor: 'rgba(34, 211, 238, 0.35)',
                  }}
                >
                  <span className="font-mono text-secondary fw-bold" style={{ fontSize: '0.75rem' }}>
                    MEASURABLE IMPACT:
                  </span>
                  <span className="badge-atelier font-mono fw-bold" style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
                    {current.impact}
                  </span>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <span className="label-mono-sm text-dark font-bold d-block mb-1.5">
                    Technologies Implemented:
                  </span>
                  <div className="d-flex flex-wrap gap-1">
                    {current.tech.map((t) => (
                      <span key={t} className="badge-atelier">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Testimonial Quote */}
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-between gap-3 ps-lg-3">
              <div className="position-relative">
                {/* Subtle Quote Watermark */}
                <BsQuote
                  size={90}
                  className="position-absolute end-0 top-0 pointer-events-none"
                  style={{
                    color: 'rgba(0, 0, 0, 0.04)',
                    transform: 'translateY(-20px) rotate(180deg)',
                  }}
                />

                <span className="label-mono-sm text-secondary font-semibold d-block mb-2">
                  CLIENT AUDIT STATEMENT //
                </span>

                <blockquote className="m-0 p-0">
                  <p
                    className="font-body text-dark m-0"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.08rem)',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                      color: 'var(--on-surface)',
                    }}
                  >
                    "{current.quote}"
                  </p>
                </blockquote>
              </div>

              {/* Verified Sign-Off Stamp */}
              <div
                className="p-3 border-atelier d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 font-mono mt-3"
                style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.75rem' }}
              >
                <div className="d-flex align-items-center gap-1.5 text-muted">
                  <BsShieldCheck size={14} className="text-success shrink-0" />
                  <span>Delivered by Aditya Kesharwani • EliteMind Solutions</span>
                </div>
                <span className="badge-atelier badge-primary-atelier">
                  STATUS: 100% PRODUCTION SIGN-OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ALL 4 CLIENT TESTIMONIALS MINI-CARDS (Quick Switcher Grid) */}
        <div className="row g-3 pt-4">
          {TESTIMONIALS.map((t, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div key={t.id} className="col-12 col-sm-6 col-lg-3">
                <article
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-2 transition-all cursor-pointer ${
                    isSelected ? 'ring-active' : 'hover:border-primary'
                  }`}
                  style={{
                    cursor: 'pointer',
                    borderLeft: isSelected ? '3px solid var(--primary)' : '1px solid var(--border-atelier)',
                    backgroundColor: isSelected ? 'var(--surface-container-low)' : '#ffffff',
                    boxShadow: isSelected ? '0 4px 14px rgba(0, 0, 0, 0.08)' : 'none',
                  }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between gap-1 pb-1 font-mono">
                      <span className="label-mono-sm font-bold text-secondary" style={{ fontSize: '0.6875rem' }}>
                        {t.code}
                      </span>
                      <div className="d-flex align-items-center gap-0.5 text-warning" style={{ fontSize: '0.6875rem' }}>
                        <BsStarFill size={10} />
                        <span className="ms-1 font-mono text-dark fw-bold">5.0</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2 my-1">
                      <img
                        src={t.photo}
                        alt={t.clientName}
                        className="rounded-circle object-fit-cover border-atelier shrink-0"
                        style={{ width: '32px', height: '32px' }}
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                        }}
                      />
                      <div className="overflow-hidden">
                        <h4 className="headline-sm text-dark font-bold m-0 text-truncate" style={{ fontSize: '0.875rem' }}>
                          {t.clientName}
                        </h4>
                        <span className="font-mono text-muted text-truncate d-block" style={{ fontSize: '0.6875rem' }}>
                          {t.shortCompany}
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-muted m-0 line-clamp-2 mt-1" style={{ fontSize: '0.78125rem', lineHeight: 1.45 }}>
                      "{t.quote.slice(0, 95)}..."
                    </p>
                  </div>

                  <div className="pt-2 border-top border-atelier d-flex align-items-center justify-content-between font-mono" style={{ fontSize: '0.6875rem' }}>
                    <span className="text-muted">{t.country}</span>
                    {isSelected ? (
                      <span className="badge-atelier badge-primary-atelier py-0.5 px-1.5" style={{ fontSize: '0.625rem' }}>
                        CURRENTLY VIEWING
                      </span>
                    ) : (
                      <span className="text-primary fw-semibold">Click to view →</span>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
