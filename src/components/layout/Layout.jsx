import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import BubbleCanvas from '../common/BubbleCanvas';
import { PERSONAL_INFO } from '../../utils/constants';

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Ambient Multi-Colored Floating Particle Bubbles */}
      <BubbleCanvas />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1 w-100" style={{ paddingTop: 'var(--header-height)' }}>
        {/* Top Architectural Blueprint Accent Strip */}
        <div
          className="w-100 border-bottom py-2"
          style={{
            backgroundColor: '#07080c',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="atelier-container d-flex flex-wrap align-items-center justify-content-between gap-2 font-mono text-xs">
            <div className="d-flex align-items-center gap-2">
              <span
                className="d-inline-block rounded-circle"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent-cyan)',
                  animation: 'pulseGlowCyan 2s infinite',
                }}
              ></span>
              <span
                className="fw-semibold text-uppercase tracking-wider"
                style={{ color: 'var(--accent-cyan)' }}
              >
                SYS_ACTIVE // PRODUCTION READY
              </span>
              <span className="d-none d-sm-inline" style={{ color: '#475569' }}>/</span>
              <span className="d-none d-sm-inline" style={{ color: '#94a3b8' }}>{PERSONAL_INFO.timezone}</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="d-none d-md-inline" style={{ color: '#94a3b8' }}>
                ARCHITECTURAL SPEC: {PERSONAL_INFO.specVersion}
              </span>
              <span
                className="text-white fw-medium px-2 py-0.5 border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  fontSize: '0.7rem',
                }}
              >
                INDEX {PERSONAL_INFO.releaseYear}
              </span>
            </div>
          </div>
        </div>

        {/* Child Pages */}
        {children}
      </main>

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
