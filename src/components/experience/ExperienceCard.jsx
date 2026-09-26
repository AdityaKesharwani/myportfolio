import React from 'react';
import {
  BsCheckSquare,
  BsLayers,
  BsPhone,
  BsCpu,
  BsCloudCheck,
  BsTerminal,
} from 'react-icons/bs';

export default function ExperienceCard({ exp }) {
  const getDeliverableIcon = (icon) => {
    switch (icon) {
      case 'hub':
        return <BsLayers size={18} />;
      case 'smartphone':
        return <BsPhone size={18} />;
      case 'psychology':
        return <BsCpu size={18} />;
      case 'deployed_code':
        return <BsCloudCheck size={18} />;
      default:
        return <BsTerminal size={18} />;
    }
  };

  return (
    <article className="p-4 p-md-5 bg-white border-atelier shadow-sm d-flex flex-column gap-4 tilt-card">
      {/* Position Header Row */}
      <div
        className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between p-3 border-atelier gap-3 timeline-entry-header"
        style={{ backgroundColor: 'var(--surface-container-low)' }}
      >
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span
            className="label-mono-md font-bold px-2 py-1"
            style={{
              backgroundColor: exp.active ? 'var(--primary)' : 'var(--secondary)',
              color: '#ffffff',
            }}
          >
            {exp.id}
          </span>
          <div>
            <h3 className="headline-md text-dark font-bold m-0">
              {exp.company}
            </h3>
            <span className="font-body text-muted" style={{ fontSize: '0.875rem' }}>
              {exp.role} • {exp.location}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span
            className="label-mono-md text-dark font-semibold px-3 py-1 border-atelier"
            style={{ backgroundColor: 'var(--surface-container-high)' }}
          >
            {exp.period}
          </span>
          {exp.active && (
            <span
              className="d-inline-block pulse-glow-cyan"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: 'var(--primary)',
              }}
              title="Active Role"
            ></span>
          )}
        </div>
      </div>

      {/* Scope and Deliverables Grid */}
      <div className="row g-4 timeline-entry-grid">
        {/* Left Column: Scope & Tech Stack */}
        <div className="col-12 col-lg-4 d-flex flex-column gap-3">
          <span className="label-mono-sm text-dark font-bold">
            Scope of Engagement:
          </span>
          <p className="font-body text-muted m-0" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
            {exp.scope}
          </p>

          {/* Quantified Metrics Box (Valethi) */}
          {exp.gains && (
            <div className="p-3 border-atelier d-flex flex-column gap-2" style={{ backgroundColor: 'var(--surface-container)' }}>
              <span className="label-mono-sm text-dark font-bold">
                Measurable Operational Gains:
              </span>
              {exp.gains.map((gain, i) => (
                <div key={i} className="d-flex justify-content-between align-items-baseline font-mono" style={{ fontSize: '0.8125rem' }}>
                  <span className="text-muted">{gain.label}</span>
                  <span className="text-dark font-bold">{gain.val}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          {exp.tags && (
            <div className="d-flex flex-wrap gap-1 mt-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="badge-atelier">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Deliverables */}
        <div className="col-12 col-lg-8 d-flex flex-column gap-3">
          <span className="label-mono-sm text-dark font-bold">
            Key Architectural Deliverables:
          </span>

          {/* Type 1: Structured 4-Grid Deliverables (Kragos) */}
          {exp.deliverables && (
            <div className="row g-3">
              {exp.deliverables.map((item, i) => (
                <div key={i} className="col-12 col-md-6">
                  <div className="p-3 border-atelier h-100" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                    <div className="d-flex align-items-center gap-2 text-dark mb-1">
                      {getDeliverableIcon(item.icon)}
                      <h4 className="headline-sm m-0" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Type 2: Bullet List with Icons (Valethi) */}
          {exp.deliverablesList && (
            <div className="d-flex flex-column gap-2">
              {exp.deliverablesList.map((text, i) => (
                <div
                  key={i}
                  className="p-3 border-atelier d-flex align-items-start gap-2"
                  style={{ backgroundColor: 'var(--surface-container-low)' }}
                >
                  <BsCheckSquare size={16} className="text-dark mt-1 shrink-0" />
                  <p className="font-body text-muted m-0" style={{ fontSize: '0.875rem', lineHeight: 1.55 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Type 3: 3 Metric Cards (White Force) */}
          {exp.contributions && (
            <div className="row g-3">
              {exp.contributions.map((item, i) => (
                <div key={i} className="col-12 col-md-4">
                  <div className="p-3 border-atelier h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--surface-container-low)' }}>
                    <span className="label-mono-sm text-dark font-bold">{item.tag}</span>
                    <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Type 4: Foundations List (Seven Eye IT) */}
          {exp.foundations && (
            <div className="d-flex flex-column gap-2">
              {exp.foundations.map((item, i) => (
                <div
                  key={i}
                  className="p-2 px-3 border-atelier d-flex align-items-center gap-2 font-body"
                  style={{ backgroundColor: 'var(--surface-container-low)', fontSize: '0.875rem' }}
                >
                  <BsTerminal size={16} className="text-dark" />
                  <span className="text-muted">{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
