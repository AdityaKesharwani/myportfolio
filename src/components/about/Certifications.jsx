import React from 'react';
import { Link } from 'react-router-dom';
import { CERTIFICATIONS } from '../../data/experience';
import { BsAward, BsArrowUpRight, BsCheckCircleFill } from 'react-icons/bs';

export default function Certifications() {
  return (
    <div className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between">
      <div>
        <div
          className="d-flex align-items-center justify-content-between p-3 border-atelier -mx-4 -mt-4 mb-4"
          style={{ backgroundColor: 'var(--surface-container-low)' }}
        >
          <div className="d-flex align-items-center gap-2">
            <BsAward size={22} className="text-dark" />
            <h3 className="headline-md text-uppercase text-dark font-bold m-0" style={{ fontSize: '1.25rem' }}>
              Accreditations
            </h3>
          </div>
          <span className="badge-atelier">Validated</span>
        </div>

        <div className="d-flex flex-column gap-3">
          {CERTIFICATIONS.map((cert, idx) => {
            const cardContent = (
              <div
                className="p-3 border-atelier d-flex align-items-center justify-content-between gap-3 h-100 transition-colors"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center font-mono font-bold shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--on-primary)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    {cert.badge}
                  </div>
                  <div>
                    <h4 className="headline-sm text-dark m-0" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                      {cert.title}
                    </h4>
                    <span className="label-mono-sm text-secondary" style={{ fontSize: '0.6875rem' }}>
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 shrink-0">
                  {cert.url ? (
                    <span
                      className="badge-atelier d-inline-flex align-items-center gap-1 font-mono text-dark"
                      style={{ fontSize: '0.6875rem' }}
                    >
                      <span>Verify</span>
                      <BsArrowUpRight size={11} />
                    </span>
                  ) : (
                    <BsCheckCircleFill size={18} className="text-muted shrink-0" />
                  )}
                </div>
              </div>
            );

            return cert.url ? (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block interactive-card"
                title={`Verify ${cert.title} credential from ${cert.issuer}`}
              >
                {cardContent}
              </a>
            ) : (
              <div key={idx}>{cardContent}</div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-3 border-top border-atelier d-flex flex-wrap align-items-center justify-content-between gap-2 font-mono" style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
        <span>CONTINUOUS LEARNING INDEX</span>
        <Link
          to="/certificates"
          className="text-dark font-semibold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline"
          title="Open complete certificates archive with image downloads"
        >
          <span>VIEW FULL CERTIFICATES GALLERY</span>
          <BsArrowUpRight size={11} />
        </Link>
      </div>
    </div>
  );
}
