import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import { PERSONAL_INFO } from '../utils/constants';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Studio | {PERSONAL_INFO.name} - Full Stack Developer</title>
        <meta
          name="description"
          content="Initiate contact with Aditya Kesharwani for project development, full-stack architecture, or consulting engagements. Response within 24 hours guaranteed."
        />
      </Helmet>

      {/* Header */}
      <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 font-mono">
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)' }}></span>
                <span className="label-mono-sm text-secondary font-semibold">
                  CHANNEL 03 // DIRECT INTERFACE
                </span>
              </div>
              <h1 className="display-xl text-dark text-uppercase m-0 mt-1">
                Let's Talk.
              </h1>
            </div>
            <p className="font-body text-muted m-0" style={{ maxWidth: '480px', fontSize: '1rem', lineHeight: 1.6 }}>
              Have a project, idea or technical challenge? I'd love to hear about it. Direct channel open for high-impact technical engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Dossier Layout */}
      <section className="w-100 py-5 bg-surface border-bottom border-atelier">
        <Container>
          <div className="row g-4 align-items-start contact-grid">
            <div className="col-12 col-lg-4">
              <ContactInfo />
            </div>
            <div className="col-12 col-lg-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Connected Networks Section */}
      <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <Container>
          <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom border-atelier font-mono">
            <span className="label-mono-sm text-secondary font-semibold">
              CONNECTED NETWORKS &amp; PROFILE REGISTERS
            </span>
            <span className="label-mono-sm text-muted">EXTERNAL NODES</span>
          </div>

          <SocialLinks />
        </Container>
      </section>
    </>
  );
}
