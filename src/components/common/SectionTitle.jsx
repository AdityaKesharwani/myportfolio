import React from 'react';

export default function SectionTitle({
  indexTag,
  title,
  subtitle,
  description,
  rightElement,
  dark = false,
  align = 'left',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-header-block mb-4 pb-3 ${
        dark ? 'text-white' : ''
      } ${className}`}
    >
      <div
        className={`d-flex flex-column flex-md-row ${
          isCenter
            ? 'align-items-center text-center'
            : 'align-items-start align-items-md-end justify-content-between'
        } gap-3`}
      >
        <div className="d-flex flex-column gap-2" style={{ maxWidth: isCenter ? '800px' : '700px' }}>
          {indexTag && (
            <div
              className={`d-flex align-items-center ${
                isCenter ? 'justify-content-center' : ''
              } gap-2 font-mono`}
              style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}
            >
              <span
                className="d-inline-block"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: dark ? 'var(--accent-cyan)' : 'var(--primary)',
                }}
              ></span>
              <span
                style={{
                  color: dark ? 'var(--accent-cyan)' : 'var(--secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {indexTag}
              </span>
            </div>
          )}

          <h2
            className={`font-display text-uppercase tracking-tight m-0 ${
              dark ? 'text-white' : ''
            }`}
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              fontWeight: 600,
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="font-display m-0"
              style={{
                fontSize: '1.25rem',
                color: dark ? 'var(--dark-text-secondary)' : 'var(--on-surface-variant)',
              }}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              className="m-0 font-body"
              style={{
                fontSize: '0.95rem',
                color: dark ? 'var(--dark-text-muted)' : 'var(--on-surface-variant)',
                maxWidth: '650px',
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {rightElement && <div className="section-title-right shrink-0">{rightElement}</div>}
      </div>
    </div>
  );
}
