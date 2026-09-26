import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import AboutIntro from '../components/about/AboutIntro';
import Skills from '../components/about/Skills';
import Education from '../components/about/Education';
import Certifications from '../components/about/Certifications';
import ResumeSection from '../components/common/ResumeSection';
import Button from '../components/common/Button';
import { PERSONAL_INFO } from '../utils/constants';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | {PERSONAL_INFO.name} - Full Stack Developer</title>
        <meta
          name="description"
          content="Learn about Aditya Kesharwani - Full Stack Developer with 5+ years of experience in Laravel, PHP, React.js, and cloud application engineering."
        />
      </Helmet>

      {/* Intro and Competency Matrix */}
      <AboutIntro />

      {/* 6-Step Engineering Protocol */}
      <Skills />

      {/* Dual Academic & Certification Section */}
      <section className="w-100 py-5 bg-surface border-bottom border-atelier">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
            <div>
              <span className="label-mono-sm text-secondary font-semibold d-block">
                ACADEMIC &amp; CREDENTIAL RECORD
              </span>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                Education &amp; Certifications
              </h2>
            </div>
            <span className="label-mono-sm text-muted">DOCUMENTATION VALIDATED // 2017–2026</span>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <Education />
            </div>
            <div className="col-12 col-lg-6">
              <Certifications />
            </div>
          </div>
        </Container>
      </section>

      {/* Official Resume Download Section */}
      <ResumeSection />

      {/* Collaboration Callout */}
      <section className="w-100 py-5" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-4">
            <div className="d-flex flex-column gap-2" style={{ maxWidth: '680px' }}>
              <span className="label-mono-sm" style={{ color: 'var(--accent-cyan)', letterSpacing: '0.08em' }}>
                NEXT STEPS // COLLABORATION
              </span>
              <h3 className="headline-lg text-white text-uppercase m-0">
                Need this caliber of engineering?
              </h3>
              <p className="font-body m-0" style={{ color: 'var(--on-primary-container)', fontSize: '0.9375rem' }}>
                Available for contract architecture, complex backend API delivery, or full-time strategic engineering appointments.
              </p>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <Button
                to="/contact"
                variant="secondary"
                icon={<BsArrowRight size={14} />}
              >
                Initiate Contact
              </Button>
              <Button
                to="/projects"
                variant="dark"
                icon={<BsArrowUpRight size={14} />}
              >
                View Production Code
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
