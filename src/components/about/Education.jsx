import React from 'react';
import { EDUCATION } from '../../data/experience';
import { BsMortarboard, BsCheckCircle } from 'react-icons/bs';

export default function Education() {
  return (
    <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between">
      <div>
        <div
          className="d-flex align-items-center justify-content-between p-3 border-atelier -mx-4 -mt-4 mb-4"
          style={{ backgroundColor: 'var(--surface-container-low)' }}
        >
          <div className="d-flex align-items-center gap-2">
            <BsMortarboard size={22} className="text-dark" />
            <h3 className="headline-md text-uppercase text-dark font-bold m-0" style={{ fontSize: '1.25rem' }}>
              Academic Degrees
            </h3>
          </div>
          <span className="badge-atelier">Formal Study</span>
        </div>

        <div className="d-flex flex-column gap-3">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-3 border-atelier d-flex flex-column gap-1"
              style={{ backgroundColor: 'var(--surface-container-low)' }}
            >
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                <span className="headline-sm text-dark font-bold" style={{ fontSize: '0.9375rem' }}>
                  {edu.degree}
                </span>
                <span
                  className="badge-atelier font-mono"
                  style={{
                    backgroundColor: edu.isPrimary ? 'var(--primary)' : 'var(--surface-container-highest)',
                    color: edu.isPrimary ? 'var(--on-primary)' : 'var(--on-surface)',
                    fontSize: '0.625rem',
                  }}
                >
                  {edu.status}
                </span>
              </div>
              <span className="label-mono-md text-secondary font-medium">
                Specialization: {edu.specialization}
              </span>
              <p className="font-body text-muted m-0 mt-1" style={{ fontSize: '0.8125rem' }}>
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-top border-atelier d-flex align-items-center justify-content-between font-mono" style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
        <span>RGPV / RDVV AFFILIATED</span>
        <span className="d-flex align-items-center gap-1 text-dark font-medium">
          <BsCheckCircle size={13} className="text-dark" /> DEGREE RECORD VERIFIED
        </span>
      </div>
    </div>
  );
}
