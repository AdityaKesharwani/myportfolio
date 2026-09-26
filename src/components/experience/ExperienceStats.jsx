import React from 'react';
import Container from '../common/Container';

export default function ExperienceStats() {
  const statRibbon = [
    { title: 'Payroll Variance', val: '-40%', sub: 'Error Rate', note: 'White Force Automation' },
    { title: 'Runtime Overhead', val: '+30%', sub: 'Throughput', note: 'Query Index Optimization' },
    { title: 'Sync Pipeline', val: '16+', sub: 'Portals', note: 'Unified HRMS Ingestion' },
    { title: 'Incident Reduction', val: '-30%', sub: 'Defects', note: 'Production Rollouts' },
  ];

  return (
    <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
          <div>
            <span className="label-mono-sm text-secondary font-semibold d-block">QUANTITATIVE IMPACT // TELEMETRY</span>
            <h2 className="headline-lg text-dark text-uppercase m-0">Engineering Telemetry</h2>
          </div>
          <p className="font-mono text-muted m-0" style={{ maxWidth: '440px', fontSize: '0.75rem' }}>
            Measured optimizations observed across production client deployments following refactoring, index restructuring, and automated validation gates.
          </p>
        </div>

        {/* 4-Stat Ribbon */}
        <div className="row g-3 mb-4">
          {statRibbon.map((stat, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="p-3 bg-white border-atelier shadow-sm d-flex flex-column justify-content-between h-100 tilt-card">
                <span className="label-mono-sm text-muted">{stat.title}</span>
                <div className="d-flex align-items-baseline gap-2 my-2">
                  <span className="stat-counter text-dark" style={{ fontSize: '2.5rem' }}>
                    {stat.val}
                  </span>
                  <span className="label-mono-sm text-secondary font-semibold">{stat.sub}</span>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  {stat.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 In-Depth Telemetry Cards with SVG Data Visualizations */}
        <div className="row g-4">
          {/* Card 1: Payroll Calculation */}
          <div className="col-12 col-lg-4">
            <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3">
              <div>
                <div className="d-flex justify-content-between align-items-center font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  <span>METRIC // PR_01</span>
                  <span>PAYROLL ACCURACY</span>
                </div>
                <h4 className="headline-sm text-dark font-semibold mt-2 mb-1">
                  Payroll Calculation Variance
                </h4>
                <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                  White Force HRMS automation eliminated edge-case manual deductions through transactional tax calculation workers.
                </p>
              </div>

              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <span className="stat-counter text-dark d-block" style={{ fontSize: '2.75rem' }}>
                    -40%
                  </span>
                  <span className="label-mono-sm text-secondary d-block mt-1">Manual Intervention Rate</span>
                </div>
                {/* Progress Arc SVG */}
                <svg className="shrink-0" style={{ width: '70px', height: '70px', color: 'var(--primary)' }} viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="var(--surface-container-high)"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="40, 100"
                    strokeLinecap="butt"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>

              <div className="p-2 font-mono text-muted border-atelier" style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.6875rem' }}>
                STATUS: Verified across 1,200+ employee records
              </div>
            </div>
          </div>

          {/* Card 2: Database Query Latency */}
          <div className="col-12 col-lg-4">
            <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3">
              <div>
                <div className="d-flex justify-content-between align-items-center font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  <span>METRIC // DB_02</span>
                  <span>QUERY LATENCY</span>
                </div>
                <h4 className="headline-sm text-dark font-semibold mt-2 mb-1">
                  Database Query Throughput
                </h4>
                <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                  Strategic index trees on high-cardinality candidate catalogs, coupled with Redis key caching on repeat queries.
                </p>
              </div>

              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <span className="stat-counter text-dark d-block" style={{ fontSize: '2.75rem' }}>
                    25-30%
                  </span>
                  <span className="label-mono-sm text-secondary d-block mt-1">Response Time Reduction</span>
                </div>
                {/* Bar Chart Sparkline SVG */}
                <svg className="shrink-0" style={{ width: '85px', height: '55px', color: 'var(--primary)' }} viewBox="0 0 100 60">
                  <rect fill="currentColor" height="25" opacity="0.2" width="14" x="5" y="35"></rect>
                  <rect fill="currentColor" height="15" opacity="0.3" width="14" x="25" y="45"></rect>
                  <rect fill="currentColor" height="35" opacity="0.5" width="14" x="45" y="25"></rect>
                  <rect fill="currentColor" height="45" opacity="0.75" width="14" x="65" y="15"></rect>
                  <rect fill="currentColor" height="55" width="14" x="85" y="5"></rect>
                </svg>
              </div>

              <div className="p-2 font-mono text-muted border-atelier" style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.6875rem' }}>
                BENCHMARK: p99 latency dropped from 480ms to 320ms
              </div>
            </div>
          </div>

          {/* Card 3: Defect Rate Mitigation */}
          <div className="col-12 col-lg-4">
            <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3">
              <div>
                <div className="d-flex justify-content-between align-items-center font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  <span>METRIC // REL_03</span>
                  <span>DEFECT RATE</span>
                </div>
                <h4 className="headline-sm text-dark font-semibold mt-2 mb-1">
                  Production Issue Mitigation
                </h4>
                <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                  Automated linting, input sanitation guards, and CI/CD pre-merge staging validations.
                </p>
              </div>

              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <span className="stat-counter text-dark d-block" style={{ fontSize: '2.75rem' }}>
                    -30%
                  </span>
                  <span className="label-mono-sm text-secondary d-block mt-1">Post-Release Incidents</span>
                </div>
                {/* Sync Pipeline Graph SVG */}
                <svg className="shrink-0" style={{ width: '65px', height: '65px', color: 'var(--primary)' }} viewBox="0 0 40 40">
                  <circle cx="20" cy="20" fill="none" r="16" stroke="currentColor" strokeDasharray="4,4" strokeWidth="2"></circle>
                  <circle cx="20" cy="20" fill="currentColor" r="8"></circle>
                  <line stroke="currentColor" strokeWidth="2" x1="20" x2="20" y1="4" y2="12"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="20" x2="20" y1="28" y2="36"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="4" x2="12" y1="20" y2="20"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="28" x2="36" y1="20" y2="20"></line>
                </svg>
              </div>

              <div className="p-2 font-mono text-muted border-atelier" style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.6875rem' }}>
                ECOSYSTEM: 16+ Job Portals Integrated &amp; Monitored
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
