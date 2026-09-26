import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import {
  BsStarFill,
  BsArrowLeft,
  BsArrowRight,
  BsCheckCircleFill,
  BsQuote,
  BsGeoAlt,
  BsBuilding,
  BsCodeSlash,
} from 'react-icons/bs';

const TESTIMONIALS = [
  {
    id: 'pench-resort',
    clientName: 'Rajeshwar Patel',
    role: 'Managing Director & Co-Owner',
    company: 'The Restfo Resort in Pench',
    location: 'Pench National Park, Madhya Pradesh, India',
    photo: '/images/clients/client-pench-resort.jpg',
    projectType: 'Luxury Resort Website & Direct Booking Architecture',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['PHP / Laravel', 'React.js', 'AWS CloudFront', 'Razorpay PG', 'WhatsApp API'],
    quote:
      'We engaged Aditya on a freelance contract to design and develop the complete official website and direct booking engine for The Restfo Resort in Pench. Being a luxury safari wildlife retreat, our platform demanded instantaneous loading of high-resolution jungle galleries and a frictionless room reservation flow without foreign tourists encountering payment dropouts. Aditya exceeded our expectations—our direct room and safari bookings surged by over 45% in our first season, drastically cutting down hefty OTA commission fees. Extremely reliable, accessible on WhatsApp/calls, and delivers production-grade excellence!',
  },
  {
    id: 'talentsync-us',
    clientName: 'David Vance',
    role: 'VP of Software Engineering',
    company: 'TalentSync Technologies',
    location: 'Austin, Texas, United States',
    photo: '/images/clients/client-talentsync-us.jpg',
    projectType: 'Multi-Portal Job Aggregator & Real-Time Sync Pipeline',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['Laravel 11', 'Redis Queues', 'MySQL Tuning', '16+ Job APIs', 'Docker'],
    quote:
      'Aditya was contracted through EliteMind Solutions to architect our high-throughput ingestion engine synchronizing across 16+ global job recruitment portals. Concurrency surges previously choked our background processors. Aditya refactored the daemon queues, rebuilt the ingestion throttles, and tuned database indexing, dropping query execution latency by 30% with 99.9% uptime. A true senior backend engineer who delivers clean, well-tested code on schedule and within budget.',
  },
  {
    id: 'apex-uk',
    clientName: 'Sophie Miller',
    role: 'Technical Operations Director',
    company: 'Apex Media & Digital Studio',
    location: 'London, United Kingdom',
    photo: '/images/clients/client-apex-agency.jpg',
    projectType: 'Bespoke Client Portal & SaaS Agency Dashboard',
    rating: 5,
    verified: 'VERIFIED FREELANCE CONTRACT',
    tech: ['React.js SPA', 'PHP REST APIs', 'Glassmorphism UI', 'OWASP Hardening'],
    quote:
      'Working with Aditya on our bespoke agency management suite was a breath of fresh air. From initial architectural discovery to staging and AWS deployment, his precision, code discipline, and communication were exemplary. The dashboard is lightning-fast, ultra-secure, and our team loved the intuitive UI. He treats freelance projects with enterprise seriousness and delivers complete documentation alongside the source code.',
  },
  {
    id: 'payswift-in',
    clientName: 'Anand Verma',
    role: 'Head of Digital Engineering',
    company: 'PaySwift Logistics Network',
    location: 'Bengaluru, Karnataka, India',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    projectType: 'B2B Logistics Webhooks & Middleware Architecture',
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
  const touchStartX = useRef(null);

  // Auto-advance slider every 6.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6500);

    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const getCardClass = (index) => {
    if (index === activeIndex) return 'card-active';
    if (index === (activeIndex - 1 + total) % total) return 'card-prev';
    if (index === (activeIndex + 1) % total) return 'card-next';
    return 'card-hidden';
  };

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier position-relative overflow-hidden">
      {/* Background Decorative Tech Grid */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="d-flex flex-column gap-2 mb-4 pb-3 border-bottom border-atelier">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
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
              <BsCheckCircleFill size={11} className="text-success" />
              AUTHENTIC FREELANCE TESTIMONIALS // 3D DOSSIER
            </span>

            {/* Slider Counter */}
            <span className="font-mono text-muted text-xs">
              RECORD [ {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} ]
            </span>
          </div>

          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mt-2">
            <div>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                Verified Client Feedback
              </h2>
              <p className="font-mono text-muted text-xs mt-1 m-0">
                REAL BUSINESS OUTCOMES DELIVERED BY ADITYA KESHARWANI (ELITEMIND SOLUTIONS)
              </p>
            </div>

            {/* Controls */}
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="btn-atelier p-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: '#ffffff',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--dark)',
                }}
                aria-label="Previous Testimonial"
              >
                <BsArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="btn-atelier p-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: '42px',
                  height: '42px',
                  backgroundColor: '#ffffff',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--dark)',
                }}
                aria-label="Next Testimonial"
              >
                <BsArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Testimonials Stage with Mobile Touch Swipe */}
        <div
          className="testimonials-3d-stage my-4 py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {TESTIMONIALS.map((item, index) => {
            const cardState = getCardClass(index);
            const isCurrent = index === activeIndex;

            return (
              <div
                key={item.id}
                className={`testimonial-3d-card ${cardState}`}
                onClick={() => {
                  if (!isCurrent) setActiveIndex(index);
                }}
                style={{ cursor: !isCurrent ? 'pointer' : 'default' }}
              >
                <div
                  className="p-3 p-sm-4 p-md-5 bg-white border-atelier position-relative overflow-hidden"
                  style={{
                    borderLeft: isCurrent ? '4px solid var(--primary)' : '1px solid var(--border-subtle)',
                    boxShadow: isCurrent
                      ? '0 20px 45px -12px rgba(0, 0, 0, 0.12), 0 0 25px 2px rgba(34, 211, 238, 0.1)'
                      : '0 8px 20px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Subtle Background Giant Quote */}
                  <BsQuote
                    size={110}
                    className="position-absolute end-0 top-0 m-2 pointer-events-none"
                    style={{
                      color: 'rgba(0, 0, 0, 0.035)',
                      transform: 'translateY(-20px) rotate(180deg)',
                    }}
                  />

                  {/* Top Bar: Verification Badge & Stars */}
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-3 border-bottom border-atelier font-mono">
                    <div className="d-flex align-items-center gap-1.5 text-success" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      <BsCheckCircleFill size={13} />
                      <span>{item.verified}</span>
                    </div>

                    <div className="d-flex align-items-center gap-1" style={{ color: '#f59e0b' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <BsStarFill key={i} size={14} />
                      ))}
                      <span className="ms-1 font-mono text-dark fw-bold" style={{ fontSize: '0.8rem' }}>
                        5.0
                      </span>
                    </div>
                  </div>

                  {/* Project Tag & Location */}
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-3 font-mono text-xs">
                    <span
                      className="px-2 py-0.5 fw-semibold"
                      style={{
                        backgroundColor: 'var(--surface-container)',
                        color: 'var(--primary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <BsCodeSlash size={11} className="me-1" />
                      {item.projectType}
                    </span>
                    <span className="text-muted d-flex align-items-center gap-1">
                      <BsGeoAlt size={12} />
                      {item.location}
                    </span>
                  </div>

                  {/* Authentic Quote */}
                  <p
                    className="font-body text-dark m-0 my-3"
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      color: '#1e293b',
                    }}
                  >
                    "{item.quote}"
                  </p>

                  {/* Tech stack used in this contract */}
                  <div className="d-flex flex-wrap gap-1.5 my-3 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono px-2 py-0.5"
                        style={{
                          fontSize: '0.72rem',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          color: '#475569',
                          borderRadius: '2px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Client Profile Row */}
                  <div className="d-flex align-items-center gap-3 pt-3 mt-3 border-top border-atelier">
                    <img
                      src={item.photo}
                      alt={item.clientName}
                      className="rounded-circle object-fit-cover shadow-sm shrink-0 border"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderColor: 'var(--border-subtle)',
                      }}
                      onError={(e) => {
                        // Fallback avatar if external image fails
                        e.target.src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div className="d-flex flex-column">
                      <h4 className="headline-sm text-dark font-bold m-0" style={{ fontSize: '1.05rem' }}>
                        {item.clientName}
                      </h4>
                      <span className="font-mono text-muted" style={{ fontSize: '0.8rem' }}>
                        {item.role} • <strong className="text-dark">{item.company}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="border-0 p-0 transition-all rounded-pill"
              style={{
                width: idx === activeIndex ? '28px' : '8px',
                height: '8px',
                backgroundColor: idx === activeIndex ? 'var(--primary)' : 'var(--border-subtle)',
                cursor: 'pointer',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
