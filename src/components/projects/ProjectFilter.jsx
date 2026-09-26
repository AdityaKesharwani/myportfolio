import React from 'react';
import { PROJECT_FILTERS } from '../../data/projects';

export default function ProjectFilter({ activeFilter, onSelectFilter }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-4 font-mono">
      <span className="label-mono-sm text-secondary me-2">FILTER MATRIX:</span>
      {PROJECT_FILTERS.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onSelectFilter(filter.id)}
            className={`btn-atelier py-1 px-3 text-xs ${
              isActive ? 'btn-primary-atelier' : 'btn-secondary-atelier'
            }`}
            style={{ fontSize: '0.75rem' }}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
