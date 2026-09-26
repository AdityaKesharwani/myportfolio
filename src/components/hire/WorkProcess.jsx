import React from 'react';
import Container from '../common/Container';
import { WORK_PROCESS } from '../../data/services';

export default function WorkProcess() {
  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="process">
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
          <div>
            <span className="label-mono-sm text-secondary font-semibold d-block">
              PROTOCOL 02 // OPERATIONAL METHODOLOGY
            </span>
            <h2 className="headline-lg text-dark text-uppercase m-0">
              The 6-Stage Delivery Protocol
            </h2>
          </div>
          <p className="font-body text-muted m-0" style={{ maxWidth: '440px', fontSize: '0.875rem' }}>
            An unbroken, disciplined pipeline from initial discovery session to deployed product enhancements.
          </p>
        </div>

        {/* 6 Stage Cards Grid */}
        <div className="row g-4">
          {WORK_PROCESS.map((proc) => (
            <div key={proc.phase} className="col-12 col-md-6 col-lg-4">
              <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 tilt-card step-card">
                <div>
                  <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono text-muted" style={{ fontSize: '0.75rem' }}>
                    <span className="font-semibold text-dark">{proc.phase}</span>
                    <span>{proc.tag}</span>
                  </div>

                  <div className="font-display text-muted my-2 step-number" style={{ fontSize: '3rem', opacity: 0.35, lineHeight: 1 }}>
                    {proc.code}
                  </div>

                  <h3 className="headline-sm text-uppercase text-dark font-bold m-0" style={{ fontSize: '1.25rem' }}>
                    {proc.title}
                  </h3>

                  <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {proc.description}
                  </p>
                </div>

                <div
                  className="p-2 px-3 border-atelier font-mono text-muted"
                  style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.75rem' }}
                >
                  {proc.output}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
