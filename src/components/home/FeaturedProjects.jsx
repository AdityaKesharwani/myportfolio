import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import Container from '../common/Container';
import { BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs';

export default function FeaturedProjects() {
  const featuredProjects = PROJECTS.filter((proj) => proj.featured);

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="projects">
      <Container>
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between p-3 p-md-4 mb-4 border-atelier bg-white shadow-sm gap-3">
          <div className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-2 font-mono flex-wrap">
              <span className="label-mono-sm text-secondary font-semibold">02 // INDEX</span>
              <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--border-strong)' }}></span>
              <span className="label-mono-sm text-dark font-semibold">SELECTED PROJECTS ({featuredProjects.length} OF {PROJECTS.length}+)</span>
            </div>
            <h2 className="headline-lg text-uppercase tracking-tight text-dark m-0">
              A Selection of My Work
            </h2>
          </div>

          <p className="font-mono text-muted m-0" style={{ maxWidth: '380px', fontSize: '0.8125rem', lineHeight: 1.5 }}>
            Engineered for international clients with zero tolerance for downtime, security lapses, or sluggish user response times.
          </p>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="row g-4 projects-grid">
          {featuredProjects.map((proj) => (
            <div key={proj.id} className="col-12 col-md-6">
              <article
                className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 tilt-card"
              >
                <div className="d-flex flex-column gap-3">
                  {/* Meta Bar */}
                  <div
                    className="d-flex align-items-center justify-content-between p-2 border-atelier -mx-4 -mt-4 mb-1"
                    style={{ backgroundColor: 'var(--surface-container-low)' }}
                  >
                    <span className="label-mono-sm font-semibold text-dark">
                      [{proj.code}] // {proj.category.toUpperCase()}
                    </span>
                    <span className="badge-atelier" style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--on-surface)' }}>
                      {proj.type}
                    </span>
                  </div>

                  {/* Visual Image Viewport */}
                  <div
                    className="w-100 overflow-hidden position-relative border-atelier project-img-frame"
                    style={{ height: '220px', backgroundColor: 'var(--surface-container-high)' }}
                  >
                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-100 h-100 d-block text-decoration-none"
                        title={`Open ${proj.title} live system`}
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-100 h-100"
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                            transition: 'transform 0.4s ease',
                          }}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transition: 'transform 0.4s ease',
                        }}
                        loading="lazy"
                      />
                    )}

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="position-absolute top-0 end-0 m-2 px-2 py-0.5 font-mono text-decoration-none d-inline-flex align-items-center gap-1.5 text-white"
                        style={{
                          backgroundColor: 'rgba(9, 10, 15, 0.92)',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(34, 211, 238, 0.5)',
                          fontSize: '0.625rem',
                          letterSpacing: '0.05em',
                          zIndex: 2,
                        }}
                      >
                        <span className="d-inline-block rounded-circle" style={{ width: '5px', height: '5px', backgroundColor: '#34d399' }} />
                        <span>LIVE</span>
                        <BsBoxArrowUpRight size={10} style={{ color: '#22d3ee' }} />
                      </a>
                    )}

                    <div
                      className="position-absolute bottom-0 start-0 m-2 px-2 py-0.5 font-mono text-white"
                      style={{
                        backgroundColor: 'rgba(9, 10, 15, 0.9)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontSize: '0.625rem',
                        letterSpacing: '0.05em',
                        pointerEvents: 'none',
                      }}
                    >
                      {proj.tagline}
                    </div>
                  </div>

                  <div>
                    <h3 className="headline-md text-uppercase tracking-tight text-dark m-0">
                      {proj.title}
                    </h3>
                    <p className="label-mono-sm text-secondary m-0 mt-1">
                      {proj.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-muted m-0" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {proj.description}
                  </p>
                </div>

                <div className="d-flex flex-column gap-3 pt-2">
                  {/* Badges */}
                  <div className="d-flex flex-wrap gap-1">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="badge-atelier">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-2 border-top border-atelier font-mono" style={{ fontSize: '0.75rem' }}>
                    <span className="text-secondary">STACK: {proj.stack}</span>
                    <div className="d-flex align-items-center gap-3">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline"
                        >
                          <span>Live Site</span>
                          <BsBoxArrowUpRight size={11} />
                        </a>
                      )}
                      <Link
                        to="/projects"
                        className="text-dark font-semibold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline"
                      >
                        <span>Specs</span>
                        <BsArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* View All Projects Footer Action */}
        <div className="text-center pt-4 mt-2">
          <Link
            to="/projects"
            className="btn-atelier btn-secondary-atelier py-2.5 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2"
            style={{ whiteSpace: 'normal', maxWidth: '100%', textAlign: 'center' }}
          >
            <span>Explore All {PROJECTS.length}+ Projects Across 5.5+ Years Engineering Journey</span>
            <BsArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
