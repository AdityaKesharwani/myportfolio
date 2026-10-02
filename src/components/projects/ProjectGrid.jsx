import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { PROJECTS } from '../../data/projects';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    const q = filter.toLowerCase();
    return PROJECTS.filter(
      (p) =>
        p.category.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.stack.toLowerCase().includes(q) ||
        p.engine.toLowerCase().includes(q) ||
        p.domainScope.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [filter]);

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="portfolio-grid">
      <Container>
        {/* Filter Bar */}
        <ProjectFilter activeFilter={filter} onSelectFilter={setFilter} />

        {/* Counter & Registry Status Header */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier font-mono"
          style={{ fontSize: '0.75rem' }}
        >
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary)', flexShrink: 0 }}></span>
            <span className="text-secondary font-semibold">
              INDEX // {filteredProjects.length} OF {PROJECTS.length} PRODUCTION PROJECTS LOADED
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="badge-atelier">JOURNEY: 5.5+ YEARS</span>
            <span className="badge-atelier badge-primary-atelier">
              AUDITED PRODUCTION REPO
            </span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="d-flex flex-column gap-5">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="p-5 text-center bg-white border-atelier font-mono">
              <p className="m-0 text-muted">No projects found matching the selected filter specification.</p>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className="btn-atelier btn-primary-atelier mt-3"
              >
                Reset Filter Matrix
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
