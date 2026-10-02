import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import ProjectGrid from '../components/projects/ProjectGrid';
import ArchitectureSection from '../components/projects/ArchitectureSection';
import { SKILL_DOMAINS } from '../data/skills';
import { PERSONAL_INFO } from '../utils/constants';
import { PROJECTS } from '../data/projects';
import Button from '../components/common/Button';
import { BsLayers, BsDatabase, BsDiagram3, BsShield, BsCart, BsCloudCheck, BsSend } from 'react-icons/bs';

export default function Projects() {
  const getDomainIcon = (icon) => {
    switch (icon) {
      case 'layers':
        return <BsLayers size={18} />;
      case 'database':
        return <BsDatabase size={18} />;
      case 'hub':
        return <BsDiagram3 size={18} />;
      case 'shield':
        return <BsShield size={18} />;
      case 'shopping_cart':
        return <BsCart size={18} />;
      case 'cloud_sync':
      default:
        return <BsCloudCheck size={18} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects &amp; Technical Index | 5.5+ Years Journey | {PERSONAL_INFO.name}</title>
        <meta
          name="description"
          content={`Systematic inventory of ${PROJECTS.length}+ production architectures, enterprise ERPs, e-commerce platforms, and full-stack software deployments delivered across 5.5+ years journey by ${PERSONAL_INFO.name}.`}
        />
      </Helmet>

      {/* SECTION 01: HERO / LEDGER DIRECTORY */}
      <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 pb-3 mb-3 border-bottom border-atelier">
            <div>
              <div className="d-flex align-items-center gap-2 font-mono flex-wrap">
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', flexShrink: 0 }}></span>
                <span className="label-mono-sm text-secondary font-semibold">
                  INDEX // 5.5+ YEARS ENGINEERING JOURNEY // {PERSONAL_INFO.name.toUpperCase()}
                </span>
              </div>
              <h1 className="display-xl text-dark text-uppercase m-0 mt-1">
                Technical Index &amp; Selected Work
              </h1>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2 font-mono" style={{ fontSize: '0.75rem' }}>
              <span className="badge-atelier">JOURNEY: 5.5+ YEARS</span>
              <span className="badge-atelier badge-primary-atelier">
                {PROJECTS.length} PRODUCTION SYSTEMS ARCHIVED
              </span>
            </div>
          </div>

          <p className="font-body text-muted m-0" style={{ maxWidth: '840px', fontSize: '1.05rem', lineHeight: 1.65 }}>
            An authenticated portfolio of <strong>{PROJECTS.length} production systems</strong> delivered across a <strong>5.5+ years software engineering journey</strong>. Encompassing enterprise Real Estate ERPs, high-throughput retail e-commerce (P.C. Richard &amp; Son), automated ADA accessibility compliance tools (VACT), cross-platform Flutter mobile applications, and resilient Laravel &amp; React full-stack architectures.
          </p>

          {/* Quick Metrics Ribbon from new theme */}
          <div className="row g-2 pt-4">
            <div className="col-6 col-lg-3">
              <div className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between tilt-card">
                <span className="font-mono text-muted text-uppercase text-xs">Engineering Journey</span>
                <div className="d-flex align-items-baseline gap-1 my-1">
                  <span className="font-display fw-bold text-dark" style={{ fontSize: '2rem' }}>5.5+</span>
                  <span className="font-mono text-muted text-xs">Years</span>
                </div>
                <span className="font-mono text-muted text-xs">Professional Full-Stack Delivery</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between tilt-card">
                <span className="font-mono text-muted text-uppercase text-xs">Delivered Systems</span>
                <div className="d-flex align-items-baseline gap-1 my-1">
                  <span className="font-display fw-bold text-dark" style={{ fontSize: '2rem' }}>{PROJECTS.length}+</span>
                  <span className="font-mono text-muted text-xs">Projects</span>
                </div>
                <span className="font-mono text-muted text-xs">ERP, E-Commerce &amp; Web Apps</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between tilt-card">
                <span className="font-mono text-muted text-uppercase text-xs">Integrations &amp; APIs</span>
                <div className="d-flex align-items-baseline gap-1 my-1">
                  <span className="font-display fw-bold text-dark" style={{ fontSize: '2rem' }}>16+</span>
                  <span className="font-mono text-muted text-xs">Portals</span>
                </div>
                <span className="font-mono text-muted text-xs">Payment Gateways &amp; Multi-Store</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between tilt-card">
                <span className="font-mono text-muted text-uppercase text-xs">Production Rollouts</span>
                <div className="d-flex align-items-baseline gap-1 my-1">
                  <span className="font-display fw-bold text-dark" style={{ fontSize: '2rem' }}>100%</span>
                  <span className="font-mono text-muted text-xs">Live</span>
                </div>
                <span className="font-mono text-muted text-xs">Zero-Downtime Releases</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 02: SKILLS & DOMAIN EXPERTISE MATRIX (7 Domains / 58 Stack Units) */}
      <section className="w-100 py-5 bg-surface border-bottom border-atelier perspective-container" id="skills">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
            <div>
              <span className="label-mono-sm text-secondary font-semibold d-block">
                01 // ARCHITECTURAL GRID
              </span>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                Technologies I Work With
              </h2>
            </div>
            <span className="badge-atelier font-mono">COMPETENCY INDEX: 7 DOMAINS / 58 STACK UNITS</span>
          </div>

          {/* 7 Domains Bento/Matrix Grid */}
          <div className="row g-3">
            {SKILL_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className={domain.colSpan === 2 ? 'col-12 col-lg-8' : 'col-12 col-md-6 col-lg-4'}
              >
                <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 tilt-card">
                  <div>
                    <div className="d-flex align-items-center justify-content-between font-mono pb-2 border-bottom border-atelier">
                      <span className="label-mono-sm text-secondary font-semibold">
                        {domain.id} // {domain.code}
                      </span>
                      {domain.highlight ? (
                        <span className="badge-atelier font-mono" style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--primary)', fontWeight: 600 }}>
                          {domain.highlight}
                        </span>
                      ) : (
                        <span className="text-dark">{getDomainIcon(domain.icon)}</span>
                      )}
                    </div>

                    <h3 className="headline-md text-dark font-bold m-0 mt-2" style={{ fontSize: '1.25rem' }}>
                      {domain.title}
                    </h3>

                    <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                      {domain.description}
                    </p>
                  </div>

                  <div className="d-flex flex-wrap gap-1 pt-2">
                    {domain.skills.map((sk) => (
                      <span
                        key={sk.name}
                        className={`badge-atelier badge-interactive ${
                          sk.primary ? 'badge-primary-atelier' : ''
                        }`}
                      >
                        {sk.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 03: PROJECTS IN-DEPTH CATALOGUE */}
      <ProjectGrid />

      {/* SECTION 04: TECHNICAL DRILLDOWN (TABULAR LEDGER) */}
      <ArchitectureSection />

      {/* SECTION 05: CALL TO ACTION FOOTER BANNER */}
      <section className="w-100 py-5" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-4">
            <div className="d-flex flex-column gap-2" style={{ maxWidth: '680px' }}>
              <span className="label-mono-sm" style={{ color: 'var(--accent-cyan)' }}>
                AVAILABLE FOR IMMEDIATE ENGAGEMENT
              </span>
              <h2 className="headline-lg text-white text-uppercase m-0">
                Ready to construct resilient web systems.
              </h2>
              <p className="font-body m-0" style={{ color: 'var(--on-primary-container)', fontSize: '0.9375rem' }}>
                Available for contract architecture, enterprise backend development, or high-performance React frontends. Rate range: {PERSONAL_INFO.rateRange}.
              </p>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <Button
                href={`mailto:${PERSONAL_INFO.email}`}
                variant="cyan"
                icon={<BsSend size={14} />}
              >
                Initialize Contact
              </Button>
              <Button
                to="/hire-me"
                variant="dark"
                icon={<BsSend size={14} />}
              >
                View Availability
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
