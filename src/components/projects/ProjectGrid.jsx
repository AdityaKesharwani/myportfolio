import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { PROJECTS } from '../../data/projects';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter(
      (p) =>
        p.category.toLowerCase().includes(filter.toLowerCase()) ||
        p.stack.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="portfolio-grid">
      <Container>
        {/* Filter Bar */}
        <ProjectFilter activeFilter={filter} onSelectFilter={setFilter} />

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
