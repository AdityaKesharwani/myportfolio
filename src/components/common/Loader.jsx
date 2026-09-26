import React from 'react';

export default function Loader({ message = 'LOADING SYSTEM MODULES...' }) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ minHeight: '50vh', backgroundColor: 'var(--surface)' }}
    >
      <div
        className="p-4 border-atelier bg-white shadow-sm d-flex flex-column align-items-center gap-3 text-center"
        style={{ minWidth: '280px', maxWidth: '360px' }}
      >
        <div className="d-flex align-items-center gap-2">
          <span
            className="d-inline-block pulse-glow-cyan"
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'var(--primary)',
            }}
          ></span>
          <span className="label-mono-sm" style={{ color: 'var(--primary)' }}>
            SYS_INIT // 2026
          </span>
        </div>

        <div className="w-100" style={{ height: '3px', backgroundColor: 'var(--surface-container-high)' }}>
          <div
            style={{
              height: '100%',
              backgroundColor: 'var(--primary)',
              width: '60%',
              animation: 'pulseGlowCyan 1.5s infinite alternate',
            }}
          ></div>
        </div>

        <p className="m-0 label-mono-sm" style={{ color: 'var(--on-surface-variant)', letterSpacing: '0.08em' }}>
          {message}
        </p>
      </div>
    </div>
  );
}
