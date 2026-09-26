import React from 'react';
import Container from '../common/Container';
import { PROJECTS } from '../../data/projects';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function ArchitectureSection() {
  return (
    <section className="w-100 py-5 border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-low)' }}>
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
          <div>
            <span className="label-mono-sm text-secondary font-semibold d-block">04 // LEDGER INDEX</span>
            <h2 className="headline-lg text-dark text-uppercase m-0">System Implementation Audit</h2>
          </div>
          <span className="label-mono-sm text-muted">TOTAL PROJECTS DOCUMENTED: 04</span>
        </div>

        {/* Tabular Records */}
        <div className="table-responsive bg-white border-atelier shadow-sm">
          <table className="table table-hover m-0 align-middle font-mono" style={{ fontSize: '0.8125rem' }}>
            <thead>
              <tr className="border-bottom border-atelier" style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--primary)' }}>
                <th className="p-3 text-uppercase font-semibold">Identifier</th>
                <th className="p-3 text-uppercase font-semibold">Application Title</th>
                <th className="p-3 text-uppercase font-semibold">Primary Engine</th>
                <th className="p-3 text-uppercase font-semibold">Domain / Scope</th>
                <th className="p-3 text-uppercase font-semibold">Key Deliverable</th>
                <th className="p-3 text-uppercase font-semibold">Live System</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((proj) => (
                <tr key={proj.id} className="border-bottom border-atelier">
                  <td className="p-3 text-muted">{proj.code.replace('_', '-')}</td>
                  <td className="p-3 font-semibold text-dark">{proj.title}</td>
                  <td className="p-3 text-dark">{proj.engine}</td>
                  <td className="p-3 text-secondary">{proj.domainScope}</td>
                  <td className="p-3 text-muted">{proj.deliverable}</td>
                  <td className="p-3">
                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-1 hover:underline"
                        style={{ fontSize: '0.75rem' }}
                      >
                        <span>{proj.displayUrl || 'Live Site'}</span>
                        <BsBoxArrowUpRight size={11} />
                      </a>
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
