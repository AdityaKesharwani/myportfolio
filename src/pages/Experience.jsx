import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import ExperienceStats from '../components/experience/ExperienceStats';
import Button from '../components/common/Button';
import { PERSONAL_INFO } from '../utils/constants';
import { EXPERIENCES } from '../data/experience';
import { calculateExperienceSummary } from '../utils/experienceCalculator';
import { BsArrowRight } from 'react-icons/bs';

export default function Experience() {
  const summary = useMemo(() => calculateExperienceSummary(EXPERIENCES), []);

  return (
    <>
      <Helmet>
        <title>Experience ({summary.formattedTotal}) | {PERSONAL_INFO.name} - Full Stack Developer</title>
        <meta
          name="description"
          content={`Professional engineering timeline of Aditya Kesharwani, spanning ${summary.formattedTotal} of enterprise software, ERP, CRM, and cloud application delivery.`}
        />
        <link rel="canonical" href="https://adityakesharwani.com/experience" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Experience | ${PERSONAL_INFO.name}`} />
        <meta property="og:url" content="https://adityakesharwani.com/experience" />
        <meta
          property="og:description"
          content="Experience timeline covering enterprise ERP, CRM, cloud deployments, and product engineering work delivered over 5+ years."
        />
      </Helmet>

      {/* Main Experience Timeline */}
      <ExperienceTimeline />

      {/* Telemetry and Quantitative Metrics */}
      <ExperienceStats />

      {/* Engagement Callout Banner */}
      <section className="w-100 py-5" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)' }}>
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-4">
            <div className="d-flex flex-column gap-2" style={{ maxWidth: '680px' }}>
              <span className="label-mono-sm" style={{ color: 'var(--accent-cyan)' }}>
                PRODUCTION HARDENED // READY TO DEPLOY
              </span>
              <h3 className="headline-lg text-white text-uppercase m-0">
                Ready to accelerate your engineering roadmap?
              </h3>
              <p className="font-body m-0" style={{ color: 'var(--on-primary-container)', fontSize: '0.9375rem' }}>
                Standard hourly engagement: {PERSONAL_INFO.rateRange}. Immediate availability for high-velocity teams.
              </p>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <Button
                to="/hire-me"
                variant="cyan"
                icon={<BsArrowRight size={14} />}
              >
                Hire Aditya
              </Button>
              <Button
                to="/contact"
                variant="dark"
                icon={<BsArrowRight size={14} />}
              >
                Schedule Briefing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
