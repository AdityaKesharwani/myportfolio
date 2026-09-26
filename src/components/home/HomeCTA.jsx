import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { PERSONAL_INFO } from '../../utils/constants';
import { BsSend, BsShieldCheck, BsLightningCharge, BsGlobe } from 'react-icons/bs';

export default function HomeCTA() {
  return (
    <section className="w-100 py-5 bg-surface">
      <Container>
        {/* Technical Benchmarking & Diagnostic Strip */}
        <div className="p-4 mb-4 border-atelier bg-white shadow-sm">
          <div className="row g-4">
            <div className="col-12 col-md-4 d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <BsShieldCheck size={18} className="text-dark" />
                <span className="label-mono-sm text-secondary font-semibold">SECURITY &amp; COMPLIANCE</span>
              </div>
              <h4 className="headline-sm text-dark font-semibold m-0">Sanitized by Design</h4>
              <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                Zero reliance on speculative packages. Strict adherence to OWASP Top 10 recommendations, CSRF shields, and rigorous input sanitation.
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <BsLightningCharge size={18} className="text-dark" />
                <span className="label-mono-sm text-secondary font-semibold">RELIABILITY METRIC</span>
              </div>
              <h4 className="headline-sm text-dark font-semibold m-0">Production Hardened</h4>
              <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                Demonstrated 30% reduction in client production bugs across HRMS, CRM, and SaaS engines with defensive programming practices.
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <BsGlobe size={18} className="text-dark" />
                <span className="label-mono-sm text-secondary font-semibold">CONTRACT FLEXIBILITY</span>
              </div>
              <h4 className="headline-sm text-dark font-semibold m-0">Immediate Onboarding</h4>
              <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                Available on retainer or milestone contracts for engineering departments across North America, Europe, Australia, and Asia.
              </p>
            </div>
          </div>
        </div>

        {/* Home CTA Banner with New Theme Dark Glass */}
        <div
          className="p-4 p-md-5 glow-border shadow-lg position-relative overflow-hidden"
          style={{
            backgroundColor: '#090a0f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
          }}
        >
          {/* Ambient Glowing Backdrop Orb */}
          <div
            className="position-absolute rounded-circle pointer-events-none"
            style={{
              top: '-4rem',
              right: '-4rem',
              width: '20rem',
              height: '20rem',
              backgroundColor: 'rgba(34, 211, 238, 0.1)',
              filter: 'blur(80px)',
            }}
          ></div>

          <div className="position-relative row g-4 align-items-center cta-grid" style={{ zIndex: 2 }}>
            <div className="col-12 col-lg-8 d-flex flex-column gap-3">
              <div
                className="d-inline-flex align-items-center gap-2 font-mono px-2 py-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(34, 211, 238, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.6875rem',
                  width: 'fit-content',
                }}
              >
                <span
                  className="pulse-glow-cyan"
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan)',
                  }}
                ></span>
                <span>DIRECT CONTRACT ENGAGEMENT // OPEN WINDOW</span>
              </div>

              <h2
                className="display-xl text-white text-uppercase m-0"
                style={{ lineHeight: 1.05 }}
              >
                Have a Product Worth Building?
              </h2>

              <p
                className="font-body m-0"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  maxWidth: '650px',
                }}
              >
                Whether you need a complete web application, backend architecture, API integration or help improving an existing product, let's build something reliable and scalable.
              </p>
            </div>

            <div className="col-12 col-lg-4 d-flex flex-column align-items-start align-items-lg-end gap-3">
              {/* Rate Notice Box */}
              <div
                className="p-3 bg-white text-dark border-atelier shadow-sm w-100"
                style={{ maxWidth: '320px' }}
              >
                <span className="label-mono-sm text-secondary d-block font-semibold">
                  Standard Hourly Matrix
                </span>
                <span className="font-display d-block font-semibold" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
                  {PERSONAL_INFO.rateRange}
                </span>
                <span className="font-mono text-muted d-block mt-1" style={{ fontSize: '0.6875rem' }}>
                  Flexible sprint billing or project milestones
                </span>
              </div>

              <Button
                to="/contact"
                variant="cyan"
                size="lg"
                icon={<BsSend size={15} />}
                className="w-100"
                style={{
                  maxWidth: '320px',
                  boxShadow: '0 0 25px rgba(34, 211, 238, 0.45)',
                }}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
