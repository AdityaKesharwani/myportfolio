import React from 'react';
import Container from '../common/Container';

export default function Availability() {
  return (
    <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-high)' }}>
      <Container>
        <div className="row g-4 align-items-center">
          {/* Left Column (5 cols on lg) */}
          <div className="col-12 col-lg-5 d-flex flex-column gap-3">
            <span className="label-mono-sm text-secondary font-semibold">
              [SYS_ARCH // METRICS]
            </span>

            <h2 className="headline-lg text-dark text-uppercase m-0">
              Engineered for Deterministic Outcomes
            </h2>

            <p className="font-body text-muted m-0" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
              Every line of code and architectural blueprint conforms to rigorous industry testing benchmarks. No speculative bloatware—just maintainable, scalable, and secure production units.
            </p>

            <div className="row g-3 pt-2">
              <div className="col-6">
                <div className="p-3 bg-white border-atelier shadow-sm">
                  <div className="stat-counter text-dark" style={{ fontSize: '2.5rem' }}>
                    99.9%
                  </div>
                  <span className="label-mono-sm text-muted d-block mt-1">
                    Architecture Uptime Record
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 bg-white border-atelier shadow-sm">
                  <div className="stat-counter text-dark" style={{ fontSize: '2.5rem' }}>
                    &lt; 24h
                  </div>
                  <span className="label-mono-sm text-muted d-block mt-1">
                    Turnaround SLA Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Runtime Monitor (7 cols on lg) */}
          <div className="col-12 col-lg-7">
            <div className="p-4 bg-white border-atelier shadow-sm d-flex flex-column gap-3">
              <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono">
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="d-inline-block"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      animation: 'pulseGlowCyan 2s infinite',
                    }}
                  ></span>
                  <span className="label-mono-sm text-dark font-semibold">
                    TERMINAL_RUNTIME_MONITOR
                  </span>
                </div>
                <span className="label-mono-sm text-muted">SYS_REV: 4.8.1</span>
              </div>

              {/* Clean SVG Sparkline / System Diagnostics Chart */}
              <div className="p-3 border-atelier d-flex flex-column gap-2" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                <div className="d-flex justify-content-between align-items-center font-mono" style={{ fontSize: '0.75rem' }}>
                  <span className="text-muted">THROUGHPUT STABILITY (OPS/SEC)</span>
                  <span className="text-dark font-semibold">9,420 ms avg / 0 err</span>
                </div>

                <svg className="w-100" style={{ height: '90px', color: 'var(--primary)' }} fill="none" preserveAspectRatio="none" viewBox="0 0 500 80">
                  <path d="M0,60 L40,55 L80,58 L120,40 L160,42 L200,25 L240,30 L280,18 L320,24 L360,10 L400,14 L440,8 L480,12 L500,6" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M0,60 L40,55 L80,58 L120,40 L160,42 L200,25 L240,30 L280,18 L320,24 L360,10 L400,14 L440,8 L480,12 L500,6 L500,80 L0,80 Z" fill="currentColor" fillOpacity="0.05"></path>
                </svg>

                <div className="row g-2 pt-2 border-top border-atelier font-mono text-muted text-center" style={{ fontSize: '0.6875rem' }}>
                  <div className="col-3">
                    <span className="d-block text-dark font-semibold">P99 LATENCY</span>
                    12.4ms
                  </div>
                  <div className="col-3">
                    <span className="d-block text-dark font-semibold">QUEUE BURST</span>
                    30k/m
                  </div>
                  <div className="col-3">
                    <span className="d-block text-dark font-semibold">DB POOL</span>
                    94% idle
                  </div>
                  <div className="col-3">
                    <span className="d-block text-dark font-semibold">CI/CD</span>
                    Automated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
