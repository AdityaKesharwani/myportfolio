import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <article
      className="p-3 p-sm-4 p-md-5 bg-white border-atelier shadow-sm d-flex flex-column gap-4 tilt-card"
    >
      <div
        className={`row g-4 align-items-center ${
          isEven ? 'flex-lg-row-reverse' : ''
        }`}
      >
        {/* Project Meta & Narrative (6 cols on lg) */}
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between gap-3">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-1 border-bottom border-atelier">
              <span className="label-mono-sm text-secondary font-semibold" style={{ wordBreak: 'break-word' }}>
                [{project.code}] // {project.archive}
              </span>
              <span className="badge-atelier font-mono">
                {project.type}
              </span>
            </div>

            <h3 className="display-xl text-uppercase tracking-tight text-dark m-0" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', wordBreak: 'break-word' }}>
              {project.title}
            </h3>

            <p className="label-mono-sm text-secondary m-0" style={{ wordBreak: 'break-word' }}>
              {project.subtitle}
            </p>

            <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>

          <div className="d-flex flex-column gap-3 pt-2">
            <div className="d-flex flex-column gap-2">
              <span className="label-mono-sm text-dark font-semibold">
                Key Deliverables &amp; Focus:
              </span>
              <div className="d-flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge-atelier">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2.5 pt-3 border-top border-atelier font-mono" style={{ fontSize: '0.75rem' }}>
              <span className="text-secondary" style={{ wordBreak: 'break-word' }}>STACK: {project.stack}</span>
              <div className="d-flex align-items-center gap-2 w-100 w-sm-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-atelier btn-primary-atelier py-1.5 px-3 text-decoration-none d-inline-flex align-items-center justify-content-center gap-1.5 w-100 w-sm-auto"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}
                  >
                    <span>View Live Project</span>
                    <BsBoxArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Visual Image Viewport (6 cols on lg) */}
        <div className="col-12 col-lg-6">
          <div
            className="w-100 position-relative border-atelier overflow-hidden project-image-frame"
            style={{
              aspectRatio: '16 / 9.5',
              backgroundColor: '#0a0d14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              borderRadius: '2px',
            }}
          >
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none"
                title={`Open ${project.title} live system`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100 h-100 project-card-img"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-100 project-card-img"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  transition: 'transform 0.4s ease',
                  display: 'block',
                }}
                loading="lazy"
              />
            )}

            {/* Floating Live Badge */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="position-absolute top-0 end-0 m-3 px-2.5 py-1 font-mono text-decoration-none d-inline-flex align-items-center gap-1.5 text-white shadow-sm"
                style={{
                  backgroundColor: 'rgba(9, 10, 16, 0.92)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(34, 211, 238, 0.5)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.05em',
                  zIndex: 2,
                  borderRadius: '2px',
                }}
              >
                <span
                  className="d-inline-block rounded-circle"
                  style={{ width: '6px', height: '6px', backgroundColor: '#34d399', boxShadow: '0 0 6px #34d399' }}
                />
                <span style={{ color: '#f8fafc' }}>LIVE SYSTEM</span>
                <BsBoxArrowUpRight size={11} style={{ color: '#22d3ee' }} />
              </a>
            )}

            <div
              className="position-absolute bottom-0 start-0 m-3 px-2 py-1 font-mono text-dark border-atelier"
              style={{
                backgroundColor: 'rgba(247, 249, 251, 0.95)',
                fontSize: '0.6875rem',
                backdropFilter: 'blur(4px)',
                letterSpacing: '0.05em',
                pointerEvents: 'none',
              }}
            >
              {project.fig}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
