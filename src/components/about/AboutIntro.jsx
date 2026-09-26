import React from 'react';
import Container from '../common/Container';
import { PERSONAL_INFO } from '../../utils/constants';
import {
  BsCheckCircle,
  BsLayers,
  BsGlobe,
  BsCpu,
  BsRobot,
  BsCloud,
  BsDatabase,
  BsArrowRepeat,
  BsTerminal,
} from 'react-icons/bs';

export default function AboutIntro() {
  const vectors = [
    { code: 'VEC_01', icon: <BsCheckCircle size={18} />, title: '5+ Years Professional Experience', sub: 'Production lifecycle proven' },
    { code: 'VEC_02', icon: <BsLayers size={18} />, title: 'Production Web App Development', sub: 'Robust ERP, CRM, & Portals' },
    { code: 'VEC_03', icon: <BsGlobe size={18} />, title: 'International Client Experience', sub: 'Cross-border enterprise teams' },
    { code: 'VEC_04', icon: <BsCpu size={18} />, title: 'Backend & REST API Systems', sub: 'High throughput JSON protocols' },
    { code: 'VEC_05', icon: <BsRobot size={18} />, title: 'AI Integration & Automation', sub: 'LLM connectors & auto-pipelines' },
    { code: 'VEC_06', icon: <BsCloud size={18} />, title: 'Cloud Infrastructure & CI/CD', sub: 'AWS EC2, S3, Azure, GitHub' },
    { code: 'VEC_07', icon: <BsDatabase size={18} />, title: 'Database Optimization', sub: 'MySQL indexing, query tuning' },
    { code: 'VEC_08', icon: <BsArrowRepeat size={18} />, title: 'Agile / Scrum Execution', sub: 'Sprint cadence & fast shipping' },
  ];

  return (
    <>
      {/* SECTION 1: ARCHITECTURAL DOSSIER HEADER */}
      <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <Container>
          {/* Status Meta Bar */}
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier font-mono" style={{ fontSize: '0.75rem' }}>
            <div className="d-flex align-items-center gap-2">
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)' }}></span>
              <span className="text-muted text-uppercase tracking-wider">
                DOSSIER // EXP_REF_2026 // {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="badge-atelier">SYS STATUS: PRODUCTION READY</span>
              <span className="badge-atelier badge-primary-atelier">LOC: {PERSONAL_INFO.timezone}</span>
            </div>
          </div>

          {/* Main Headline Block */}
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-8 d-flex flex-column gap-3">
              <span className="label-mono-md text-secondary font-semibold">
                ABOUT ME &amp; EXPERIENCE
              </span>
              <h1 className="display-xl text-uppercase text-dark m-0">
                Behind the<br />Code.
              </h1>
              <p className="headline-md text-dark m-0 font-medium">
                Developer. Problem Solver. Builder.
              </p>
              <p className="font-body text-muted m-0" style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '720px' }}>
                I am Aditya Kesharwani, a Full Stack Developer with 5+ years of experience designing, developing, and maintaining scalable web applications. My core expertise includes Laravel, PHP, React.js, JavaScript, TypeScript, RESTful APIs, MySQL, authentication systems, background jobs, third-party integrations, AI automation, and cloud deployment. I enjoy solving complex technical problems and turning business requirements into reliable production-ready applications.
              </p>
            </div>

            {/* Metric Counter / Spec Inset */}
            <div className="col-12 col-lg-4">
              <div className="p-4 bg-white border-atelier shadow-sm d-flex flex-column justify-content-between h-100 gap-3 tilt-card">
                <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono layer-float-sm">
                  <span className="label-mono-sm text-secondary">SPEC // ARCHITECTURE SUMMARY</span>
                  <BsTerminal size={18} className="text-dark" />
                </div>

                <div className="my-2 layer-float-md">
                  <span className="stat-counter text-dark d-block">05+</span>
                  <span className="label-mono-sm text-secondary font-semibold">
                    Years Continuous Production Engineering
                  </span>
                </div>

                <p className="font-mono text-muted m-0 p-3 border-atelier layer-float-sm" style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.75rem', lineHeight: 1.6 }}>
                  Backend Developer with 5+ years of experience working across backend architecture, frontend development, API development, database optimization, security, automation, and cloud deployment. I have worked in Agile/Scrum environments and collaborated with cross-functional teams to deliver features for international clients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: TECHNICAL CAPABILITY HIGHLIGHTS (Bento Matrix) */}
      <section className="w-100 py-5 bg-surface border-bottom border-atelier perspective-container">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
            <div>
              <span className="label-mono-sm text-secondary font-semibold d-block">INDEX // 02</span>
              <h2 className="headline-lg text-dark text-uppercase m-0">Core Competency Matrix</h2>
            </div>
            <span className="label-mono-sm text-muted">8 KEY PRODUCTION VECTORS VERIFIED</span>
          </div>

          <div className="row g-3">
            {vectors.map((vec) => (
              <div key={vec.code} className="col-12 col-sm-6 col-lg-3">
                <div className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 badge-interactive">
                  <div className="d-flex align-items-center justify-content-between font-mono">
                    <span className="label-mono-sm text-secondary">{vec.code}</span>
                    <span className="text-dark">{vec.icon}</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="headline-sm text-dark font-semibold m-0" style={{ fontSize: '0.9375rem' }}>
                      {vec.title}
                    </h3>
                    <span className="font-mono text-muted d-block mt-1" style={{ fontSize: '0.6875rem' }}>
                      {vec.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
