import React from 'react';
import { PERSONAL_INFO } from '../../utils/constants';
import { BsEnvelope, BsTelephone, BsGlobe, BsLinkedin } from 'react-icons/bs';

export default function ContactInfo() {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="p-4 bg-white border-atelier shadow-sm d-flex flex-column gap-4 tilt-card">
        <div>
          <span className="label-mono-sm text-secondary font-semibold d-block">
            DIRECT COMMUNICATIONS
          </span>
          <h3 className="headline-sm text-uppercase text-dark font-bold m-0 mt-1">
            {PERSONAL_INFO.name}
          </h3>
          <p className="label-mono-sm text-muted m-0">
            {PERSONAL_INFO.subtitle}
          </p>
        </div>

        {/* Contact Point Table */}
        <div className="d-flex flex-column gap-2 font-mono" style={{ fontSize: '0.75rem' }}>
          <div className="p-3 border-atelier badge-interactive" style={{ backgroundColor: 'var(--surface-container-low)' }}>
            <span className="d-block text-muted text-uppercase mb-1" style={{ fontSize: '0.625rem' }}>
              Direct Electronic Mail
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-dark font-semibold text-decoration-none d-flex align-items-center justify-content-between"
            >
              <span className="text-break">{PERSONAL_INFO.email}</span>
              <BsEnvelope size={14} className="shrink-0 ms-2" />
            </a>
          </div>

          <div className="p-3 border-atelier badge-interactive" style={{ backgroundColor: 'var(--surface-container-low)' }}>
            <span className="d-block text-muted text-uppercase mb-1" style={{ fontSize: '0.625rem' }}>
              Voice &amp; Secure WhatsApp
            </span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-dark font-semibold text-decoration-none d-flex align-items-center justify-content-between"
            >
              <span>{PERSONAL_INFO.phoneFormatted}</span>
              <BsTelephone size={14} className="shrink-0 ms-2" />
            </a>
          </div>

          <div className="p-3 border-atelier badge-interactive" style={{ backgroundColor: 'var(--surface-container-low)' }}>
            <span className="d-block text-muted text-uppercase mb-1" style={{ fontSize: '0.625rem' }}>
              Canonical Archive Web
            </span>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark font-semibold text-decoration-none d-flex align-items-center justify-content-between"
            >
              <span>{PERSONAL_INFO.websiteDisplay}</span>
              <BsGlobe size={14} className="shrink-0 ms-2" />
            </a>
          </div>

          <div className="p-3 border-atelier badge-interactive" style={{ backgroundColor: 'var(--surface-container-low)' }}>
            <span className="d-block text-muted text-uppercase mb-1" style={{ fontSize: '0.625rem' }}>
              Professional Graph / LinkedIn
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark font-semibold text-decoration-none d-flex align-items-center justify-content-between"
            >
              <span>{PERSONAL_INFO.linkedinDisplay}</span>
              <BsLinkedin size={14} className="shrink-0 ms-2" />
            </a>
          </div>
        </div>

        {/* Regional Geospatial Base Location Card */}
        <div className="p-3 border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
          <span className="d-block label-mono-sm text-secondary font-semibold mb-1" style={{ fontSize: '0.625rem' }}>
            Engineering Base
          </span>
          <p className="text-dark font-medium m-0 font-body" style={{ fontSize: '0.875rem' }}>
            {PERSONAL_INFO.location}
          </p>
          <p className="font-mono text-muted m-0 mt-1" style={{ fontSize: '0.75rem', lineHeight: 1.5 }}>
            {PERSONAL_INFO.timezone} — Operating on hybrid overlap across Americas, EMEA, and APAC time zones.
          </p>
        </div>

        {/* Studio Workstation Status Box */}
        <div
          className="p-3 border-atelier d-flex align-items-center justify-content-between font-mono dark-card-interactive"
          style={{ backgroundColor: '#090a0f', color: '#ffffff', fontSize: '0.6875rem' }}
        >
          <span>STUDIO WORKSTATION / 01</span>
          <span className="d-flex align-items-center gap-1.5" style={{ color: 'var(--accent-cyan)' }}>
            <span
              className="d-inline-block rounded-circle"
              style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-cyan)', animation: 'pulseGlowCyan 2s infinite' }}
            ></span>
            STATUS: OPERATIONAL
          </span>
        </div>
      </div>
    </div>
  );
}
