import React from 'react';
import { PROJECT_FILTERS, PROJECTS } from '../../data/projects';

export default function ProjectFilter({ activeFilter, onSelectFilter }) {
  const getFilterCount = (filterId) => {
    if (filterId === 'all') return PROJECTS.length;
    return PROJECTS.filter(
      (p) =>
        p.category.toLowerCase().includes(filterId.toLowerCase()) ||
        p.type.toLowerCase().includes(filterId.toLowerCase()) ||
        p.stack.toLowerCase().includes(filterId.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(filterId.toLowerCase()))
    ).length;
  };

  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-4 font-mono">
      <span className="label-mono-sm text-secondary me-2">FILTER MATRIX:</span>
      {PROJECT_FILTERS.map((filter) => {
        const isActive = activeFilter === filter.id;
        const count = getFilterCount(filter.id);
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onSelectFilter(filter.id)}
            className={`btn-atelier py-1.5 px-3 text-xs d-inline-flex align-items-center gap-1.5 ${
              isActive ? 'btn-primary-atelier' : 'btn-secondary-atelier'
            }`}
            style={{ fontSize: '0.75rem' }}
          >
            <span>{filter.label}</span>
            <span
              className="badge-atelier font-mono"
              style={{
                fontSize: '0.625rem',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'var(--surface-container-high)',
                color: isActive ? '#fff' : 'var(--on-surface)',
                padding: '0.1rem 0.35rem',
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
