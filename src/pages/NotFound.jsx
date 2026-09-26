import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { PERSONAL_INFO } from '../utils/constants';
import { BsArrowLeft, BsHouseDoor } from 'react-icons/bs';

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>404 Not Found | {PERSONAL_INFO.name} - Architectural Atelier</title>
        <meta name="description" content="The requested route does not exist in the architectural registry." />
      </Helmet>

      <section
        className="w-100 py-5 d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 280px)',
          backgroundColor: '#090a0f',
          color: '#ffffff',
        }}
      >
        {/* Ambient Glowing Backdrop Orb */}
        <div
          className="position-absolute rounded-circle pointer-events-none"
          style={{
            top: '20%',
            left: '30%',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            filter: 'blur(90px)',
          }}
        ></div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <div
            className="p-4 p-md-5 glow-border shadow-2xl text-center mx-auto d-flex flex-column align-items-center gap-3 tilt-card"
            style={{
              maxWidth: '640px',
              backgroundColor: 'rgba(15, 18, 29, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Architectural Error Badge */}
            <div className="d-flex align-items-center gap-2 font-mono text-xs">
              <span
                className="d-inline-block rounded-circle"
                style={{ width: '8px', height: '8px', backgroundColor: '#ef4444' }}
              ></span>
              <span style={{ color: '#f87171', fontWeight: 600, letterSpacing: '0.08em' }}>
                ERR_404 // NULL_POINTER_EXCEPTION
              </span>
            </div>

            {/* Big 404 Counter */}
            <div
              className="font-display fw-bold text-white tracking-tighter"
              style={{ fontSize: 'clamp(4.5rem, 11vw, 7.5rem)', lineHeight: 1 }}
            >
              404
            </div>

            <h1 className="font-display text-uppercase text-white m-0" style={{ fontSize: '1.5rem' }}>
              Endpoint Not Discovered
            </h1>

            <p className="font-body m-0" style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#94a3b8' }}>
              The requested address does not resolve to an active system module, verified project dossier, or valid architectural node.
            </p>

            {/* Diagnostic Terminal Card */}
            <div
              className="w-100 p-3 my-2 text-start font-mono"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.75rem',
              }}
            >
              <div
                className="d-flex justify-content-between pb-1 mb-1"
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748b' }}
              >
                <span>SYSTEM_DIAGNOSTIC // ROUTER</span>
                <span style={{ color: '#f87171' }}>STATUS: UNRESOLVED</span>
              </div>
              <p className="m-0 text-white">
                &gt; Requested URI: <span style={{ color: 'var(--accent-cyan)' }}>{location.pathname}</span>
              </p>
              <p className="m-0 text-muted">
                &gt; Expected: /about, /experience, /projects, /hire-me, /contact
              </p>
              <p className="m-0" style={{ color: '#64748b' }}>
                &gt; Fallback: Gracefully redirecting client agent...
              </p>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
              <Button
                to="/"
                variant="cyan"
                icon={<BsHouseDoor size={15} />}
                iconPosition="left"
              >
                Return to Overview
              </Button>
              <Button
                to="/projects"
                variant="dark"
                icon={<BsArrowLeft size={15} />}
                iconPosition="left"
              >
                Browse Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
