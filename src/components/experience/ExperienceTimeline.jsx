import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '../../data/experience';
import { calculateExperienceSummary } from '../../utils/experienceCalculator';
import { BsCheckCircleFill, BsListUl, BsGrid1X2 } from 'react-icons/bs';

export default function ExperienceTimeline() {
  const [isShortView, setIsShortView] = useState(false);

  // Automatically calculate total experience, breakdown with internship, and chronologically sort roles
  const summary = useMemo(() => calculateExperienceSummary(EXPERIENCES), []);

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="timeline">
      <Container>
        {/* Section Title */}
        <SectionTitle
          indexTag="CAREER TIMELINE // CHRONOLOGICAL"
          title="Building. Improving. Delivering."
          description={`Over ${summary.formattedTotal} (${summary.formattedTotalShort}), I have worked across software development, backend engineering, API development, enterprise applications, and cloud deployment.`}
        />

        {/* DYNAMIC AUTO-CALCULATED EXPERIENCE TELEMETRY BOARD */}
        <div className="p-3 p-md-4 bg-white border-atelier shadow-sm my-4">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 pb-3 border-bottom border-atelier">
            <div>
              <div className="d-flex align-items-center gap-2 font-mono flex-wrap">
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', flexShrink: 0 }}></span>
                <span className="label-mono-sm text-secondary font-semibold">
                  LIVE TELEMETRY // AUTO-CALCULATED EXPERIENCE METRICS
                </span>
                <span className="badge-atelier font-mono" style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--primary)' }}>
                  {summary.earliestDateStr} – Present
                </span>
              </div>
              <h2 className="headline-lg text-dark text-uppercase m-0 mt-1">
                Total Actual Experience: {summary.formattedTotal}
              </h2>
            </div>

            {/* View Mode Toggle: Detailed vs Short Content ("sort content") */}
            <div className="d-flex align-items-center gap-1 p-1 border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
              <button
                type="button"
                onClick={() => setIsShortView(false)}
                className={`btn btn-sm px-3 py-1.5 font-mono d-inline-flex align-items-center gap-1.5 border-0 ${
                  !isShortView ? 'bg-white text-dark shadow-sm fw-bold' : 'text-muted'
                }`}
                style={{ fontSize: '0.75rem', borderRadius: '2px' }}
                title="View full architectural deliverables"
              >
                <BsGrid1X2 size={12} />
                <span>Detailed Specs</span>
              </button>
              <button
                type="button"
                onClick={() => setIsShortView(true)}
                className={`btn btn-sm px-3 py-1.5 font-mono d-inline-flex align-items-center gap-1.5 border-0 ${
                  isShortView ? 'bg-white text-dark shadow-sm fw-bold' : 'text-muted'
                }`}
                style={{ fontSize: '0.75rem', borderRadius: '2px' }}
                title="View concise executive summary"
              >
                <BsListUl size={13} />
                <span>Short Summary</span>
              </button>
            </div>
          </div>

          {/* 4-Stat Metric Cards */}
          <div className="row g-3 pt-3">
            {/* Total Cumulative with Internship */}
            <div className="col-6 col-lg-3">
              <div className="p-3 border-atelier h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                <span className="font-mono text-muted text-xs text-uppercase">Total Experience</span>
                <div className="my-1">
                  <span className="font-display fw-bold text-dark d-block" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', lineHeight: 1.15 }}>
                    {summary.formattedTotal}
                  </span>
                  <span className="label-mono-sm text-secondary font-semibold">({summary.formattedTotalShort})</span>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  ✓ Includes 6-mo internship
                </span>
              </div>
            </div>

            {/* Full-Time Engineering Roles */}
            <div className="col-6 col-lg-3">
              <div className="p-3 border-atelier h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                <span className="font-mono text-muted text-xs text-uppercase">Full-Time Software Roles</span>
                <div className="my-1">
                  <span className="font-display fw-bold text-dark d-block" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', lineHeight: 1.15 }}>
                    {summary.formattedFullTime}
                  </span>
                  <span className="label-mono-sm text-secondary font-semibold">Production Systems</span>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  Kragos, Valethi &amp; White Force
                </span>
              </div>
            </div>

            {/* Internship Duration */}
            <div className="col-6 col-lg-3">
              <div className="p-3 border-atelier h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                <span className="font-mono text-muted text-xs text-uppercase">Internship Training</span>
                <div className="my-1">
                  <span className="font-display fw-bold text-dark d-block" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', lineHeight: 1.15 }}>
                    {summary.formattedInternship}
                  </span>
                  <span className="label-mono-sm text-secondary font-semibold">Core PHP &amp; OOP</span>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  Seven Eye IT Solutions (01/21–07/21)
                </span>
              </div>
            </div>

            {/* Organizations & Current Role */}
            <div className="col-6 col-lg-3">
              <div className="p-3 border-atelier h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                <span className="font-mono text-muted text-xs text-uppercase">Companies &amp; Tenures</span>
                <div className="my-1">
                  <span className="font-display fw-bold text-dark d-block" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', lineHeight: 1.15 }}>
                    {summary.totalCompanies} Companies
                  </span>
                  <div className="d-flex align-items-center gap-1.5 mt-1">
                    {summary.activeCompany.logo && (
                      <div
                        className="bg-white border-atelier p-0.5 d-flex align-items-center justify-content-center shrink-0"
                        style={{ width: '20px', height: '20px', borderRadius: '2px' }}
                      >
                        <img
                          src={summary.activeCompany.logo}
                          alt={summary.activeCompany.company}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                    )}
                    <span className="label-mono-sm text-primary font-semibold">Active: {summary.activeCompany.company}</span>
                  </div>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>
                  Chronologically verified
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Auto-Update Info Footnote */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pt-3 mt-3 border-top border-atelier font-mono" style={{ fontSize: '0.75rem' }}>
            <span className="text-muted d-inline-flex align-items-center gap-1.5">
              <BsCheckCircleFill size={12} className="text-primary" />
              <span>Engine automatically recalibrates total experience and durations as time progresses or new companies are registered.</span>
            </span>
            <span className="badge-atelier">SORTED: NEWEST FIRST</span>
          </div>
        </div>

        {/* Chronological Experience Cards Stack */}
        <div className="d-flex flex-column gap-4 pt-2">
          {summary.sortedExperiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} isShortView={isShortView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
