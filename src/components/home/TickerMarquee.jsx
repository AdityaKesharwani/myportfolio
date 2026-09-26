import React from 'react';

const TICKER_ITEMS = [
  { type: 'capability', text: 'MOBILE APPS' },
  { type: 'metric', badge: '5+ YRS', text: 'PRODUCTION EXP' },
  { type: 'capability', text: 'CLOUD & AWS' },
  { type: 'metric', badge: '16+', text: 'PORTAL APIS' },
  { type: 'capability', text: 'ERP SYSTEMS' },
  { type: 'metric', badge: '30%', text: 'DEFECT REDUCTION' },
  { type: 'capability', text: 'AI & AUTOMATION' },
  { type: 'metric', badge: '25–30%', text: 'QUERY OPTIMIZATION' },
  { type: 'capability', text: 'IT CONSULTING' },
  { type: 'metric', badge: '99.9%', text: 'SYSTEM UPTIME' },
  { type: 'capability', text: 'WEB DEVELOPMENT' },
  { type: 'metric', badge: 'ZERO-DOWNTIME', text: 'CI/CD PIPELINES' },
  { type: 'capability', text: 'CYBERSECURITY' },
  { type: 'capability', text: 'FULL-STACK LARAVEL & REACT' },
  { type: 'capability', text: 'REST & GRAPHQL APIS' },
  { type: 'capability', text: 'DATABASE ARCHITECTURE' },
];

export default function TickerMarquee() {
  // Duplicate items twice to enable seamless infinite continuous scrolling loop
  const displayItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="ticker-marquee-wrapper w-100"
      aria-label="Capabilities & Telemetry Marquee"
    >
      <div className="ticker-marquee-track">
        {displayItems.map((item, index) => (
          <React.Fragment key={`${item.text}-${index}`}>
            <div className="ticker-item">
              {item.type === 'metric' && (
                <span className="ticker-metric-badge">{item.badge}</span>
              )}
              <span>{item.text}</span>
            </div>

            {/* Alternating Architectural Dot & Vertical Divider Line */}
            {index % 2 === 0 ? (
              <span className="ticker-dot" aria-hidden="true">
                ✦
              </span>
            ) : (
              <span className="ticker-divider-line" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
