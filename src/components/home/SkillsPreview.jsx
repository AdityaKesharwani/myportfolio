import React from 'react';
import { CORE_PILLARS } from '../../data/skills';
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import {
  BsServer,
  BsLaptop,
  BsDiagram3,
  BsRobot,
  BsCloudCheck,
  BsDatabase,
  BsArrowRight,
} from 'react-icons/bs';

export default function SkillsPreview() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'dns':
        return <BsServer size={22} />;
      case 'devices':
        return <BsLaptop size={22} />;
      case 'hub':
        return <BsDiagram3 size={22} />;
      case 'smart_toy':
        return <BsRobot size={22} />;
      case 'cloud_sync':
        return <BsCloudCheck size={22} />;
      case 'database':
      default:
        return <BsDatabase size={22} />;
    }
  };

  return (
    <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
      <Container>
        <div className="row g-4 align-items-start">
          {/* Left Column: Dossier Narrative & Architectural Diagram */}
          <div className="col-12 col-lg-5 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2 font-mono">
              <span className="label-mono-sm text-secondary font-semibold">01 // DOSSIER</span>
              <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--border-strong)' }}></span>
              <span className="label-mono-sm text-dark font-semibold">ABOUT ME</span>
            </div>

            <h2 className="headline-lg text-uppercase tracking-tight text-dark m-0">
              From Backend Architecture to Digital Experiences.
            </h2>

            <div className="p-3 p-md-4 bg-white border-atelier shadow-sm d-flex flex-column gap-2">
              <span className="label-mono-sm text-dark font-semibold">
                Operational Profile
              </span>
              <p className="font-body text-muted m-0" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                I build reliable digital products by combining strong backend architecture, modern frontend development, API integrations, database optimization and cloud deployment. With 5+ years of professional experience, I have worked on ERP systems, CRM platforms, HRMS applications, resume builders, brand websites, recruitment platforms and third-party integrations for production environments.
              </p>
            </div>

            {/* Architectural Telemetry Line Diagram */}
            <div className="p-3 border-atelier" style={{ backgroundColor: 'var(--surface-container)' }}>
              <div className="d-flex align-items-center justify-content-between pb-2 font-mono" style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
                <span>PIPELINE VELOCITY / LATENCY DELTA</span>
                <span className="text-dark font-semibold">-28.4%</span>
              </div>
              <svg className="w-100" style={{ height: '60px', color: 'var(--primary)' }} fill="none" preserveAspectRatio="none" viewBox="0 0 380 60">
                <path d="M0 45 L50 42 L100 48 L150 30 L200 35 L250 18 L300 22 L350 8 L380 12" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
                <path d="M0 55 L50 53 L100 56 L150 48 L200 50 L250 40 L300 42 L350 30 L380 32" opacity="0.4" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1"></path>
              </svg>
              <div className="d-flex justify-content-between font-mono text-muted pt-1" style={{ fontSize: '0.625rem' }}>
                <span>REQ_INIT</span>
                <span>QUERY_OPT</span>
                <span>EDGE_DELIVERY</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Core Capabilities Cards */}
          <div className="col-12 col-lg-7 d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-between pb-1 font-mono">
              <span className="label-mono-sm text-dark font-semibold">CORE CAPABILITIES MATRIX</span>
              <span className="label-mono-sm text-secondary">6 PILLARS</span>
            </div>

            <div className="row g-3">
              {CORE_PILLARS.map((pillar) => (
                <div key={pillar.id} className="col-12 col-md-6">
                  <div
                    className="p-3 p-md-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between tilt-card badge-interactive"
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2 layer-float-sm">
                        <span className="text-dark">{getIcon(pillar.icon)}</span>
                        <span className="label-mono-sm text-secondary">{pillar.id}</span>
                      </div>
                      <h3 className="headline-sm text-dark font-semibold m-0 mb-2 layer-float-sm">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-muted m-0 layer-float-sm" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-end">
              <Link
                to="/about"
                className="label-mono-md text-primary font-semibold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline"
              >
                <span>Explore Full Dossier &amp; Architecture</span>
                <BsArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
