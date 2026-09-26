import React from 'react';
import Container from '../common/Container';
import { SERVICES } from '../../data/services';
import {
  BsLayers,
  BsDiagram3,
  BsCpu,
  BsDatabase,
  BsCloudCheck,
  BsShop,
} from 'react-icons/bs';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'layers':
        return <BsLayers size={22} />;
      case 'hub':
        return <BsDiagram3 size={22} />;
      case 'memory':
        return <BsCpu size={22} />;
      case 'database':
        return <BsDatabase size={22} />;
      case 'cloud_sync':
        return <BsCloudCheck size={22} />;
      case 'storefront':
      default:
        return <BsShop size={22} />;
    }
  };

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier" id="services">
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier">
          <div>
            <span className="label-mono-sm text-secondary font-semibold d-block">
              DIRECTORY 01 / CORE CAPABILITIES
            </span>
            <h2 className="headline-lg text-dark text-uppercase m-0">
              Structured Technical Disciplines
            </h2>
          </div>
          <p className="font-body text-muted m-0" style={{ maxWidth: '440px', fontSize: '0.875rem' }}>
            Precision engineering calibrated for high load, decoupled microservices, and reactive user experiences with zero operational overhead.
          </p>
        </div>

        {/* 6 Offered Service Modules Grid */}
        <div className="row g-4">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="p-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 tilt-card"
              >
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center justify-content-between font-mono">
                    <span className="label-mono-sm text-secondary font-semibold">[{srv.code}]</span>
                    <span className="text-dark">{getIcon(srv.icon)}</span>
                  </div>

                  <h3 className="headline-md text-dark font-bold m-0" style={{ fontSize: '1.25rem' }}>
                    {srv.title}
                  </h3>

                  <p className="font-body text-muted m-0" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {srv.description}
                  </p>
                </div>

                <div
                  className="p-3 border-top border-atelier -mx-4 -mb-4 font-mono"
                  style={{ backgroundColor: 'var(--surface-container-low)' }}
                >
                  <span className="label-mono-sm text-muted d-block mb-2 font-semibold">
                    Core Stacks:
                  </span>
                  <div className="d-flex flex-wrap gap-1">
                    {srv.stacks.map((st) => (
                      <span
                        key={st}
                        className="badge-atelier bg-white text-dark font-mono"
                        style={{ fontSize: '0.6875rem' }}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
