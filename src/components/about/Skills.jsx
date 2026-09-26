import React from 'react';
import Container from '../common/Container';
import { ENGINEERING_PROTOCOL } from '../../data/experience';

export default function Skills() {
  return (
    <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
          <div>
            <span className="label-mono-sm text-secondary font-semibold d-block">METHODOLOGY // DISCIPLINE</span>
            <h2 className="headline-lg text-dark text-uppercase m-0">Structured Engineering Protocol</h2>
          </div>
          <p className="font-body text-muted m-0" style={{ maxWidth: '440px', fontSize: '0.8125rem' }}>
            A systematic framework turning ambiguous product goals into fault-tolerant, maintainable software architectures.
          </p>
        </div>

        {/* 6 Step Cards */}
        <div className="row g-3">
          {ENGINEERING_PROTOCOL.map((step) => (
            <div key={step.step} className="col-12 col-md-6 col-lg-4 col-xl-2">
              <div
                className="p-3 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between"
                style={{ minHeight: '210px' }}
              >
                <div>
                  <span className="label-mono-md text-secondary font-bold d-block">
                    {step.step} //
                  </span>
                  <h3 className="headline-sm text-dark font-semibold text-uppercase m-0 mt-2" style={{ fontSize: '0.9375rem' }}>
                    {step.title}
                  </h3>
                </div>

                <p className="font-body text-muted m-0 my-3" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
                  {step.desc}
                </p>

                <div className="w-100 border-top border-atelier pt-2">
                  <div className="w-100" style={{ height: '4px', backgroundColor: 'var(--surface-container)' }}>
                    <div
                      style={{
                        height: '100%',
                        backgroundColor: 'var(--primary)',
                        width: `calc(${step.progress} * 100%)`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
