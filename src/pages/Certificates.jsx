import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import { CERTIFICATES_DATA } from '../data/certificates';
import { PERSONAL_INFO } from '../utils/constants';
import {
  BsAward,
  BsDownload,
  BsArrowUpRight,
  BsCheckCircleFill,
  BsEye,
  BsX,
  BsShieldCheck,
  BsCalendar3,
  BsKey,
  BsBuildingCheck,
} from 'react-icons/bs';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalCert, setActiveModalCert] = useState(null);
  const [downloadedMap, setDownloadedMap] = useState({});

  const featuredCerts = CERTIFICATES_DATA.filter((c) => c.featured);
  const aiCerts = CERTIFICATES_DATA.filter((c) => c.issuer === 'Anthropic');
  const onlineCerts = CERTIFICATES_DATA.filter((c) => c.featured && c.issuer !== 'Anthropic');
  const corporateCerts = CERTIFICATES_DATA.filter((c) => !c.featured);

  const filteredCerts = CERTIFICATES_DATA.filter((c) => {
    if (activeTab === 'ai') return c.issuer === 'Anthropic';
    if (activeTab === 'online') return c.featured && c.issuer !== 'Anthropic';
    if (activeTab === 'corporate') return !c.featured;
    return true;
  });

  const handleDownload = (cert) => {
    setDownloadedMap((prev) => ({
      ...prev,
      [cert.id]: true,
    }));
  };

  const handleDownloadAllFeatured = () => {
    featuredCerts.forEach((c, idx) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = c.downloadUrl;
        link.download = c.downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleDownload(c);
      }, idx * 400);
    });
  };

  return (
    <>
      <Helmet>
        <title>Certificates &amp; Accreditations | {PERSONAL_INFO.name} - Full Stack Developer</title>
        <meta
          name="description"
          content={`Explore certified technical credentials, Anthropic Claude AI certifications, HackerRank SQL assessments, Google Analytics, and corporate engineering accreditations of ${PERSONAL_INFO.name}.`}
        />
      </Helmet>

      {/* Hero Header */}
      <section
        className="w-100 py-5 border-bottom border-atelier"
        style={{ backgroundColor: 'var(--surface-container-low)' }}
      >
        <Container>
          {/* Metadata Top Bar */}
          <div
            className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4 border-bottom border-atelier font-mono"
            style={{ fontSize: '0.75rem' }}
          >
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', flexShrink: 0 }}></span>
              <span className="text-muted text-uppercase tracking-wider" style={{ wordBreak: 'break-word' }}>
                INDEX // CREDENTIALS // {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <span className="badge-atelier">STATUS: AUDITED &amp; VALIDATED</span>
              <span className="badge-atelier badge-primary-atelier">
                {CERTIFICATES_DATA.length} CERTIFICATES ARCHIVED
              </span>
            </div>
          </div>

          <div className="row g-4 align-items-end">
            <div className="col-12 col-lg-8 d-flex flex-column gap-3">
              <span className="label-mono-md text-secondary font-semibold">
                PROFESSIONAL ACCREDITATIONS &amp; ASSESSMENTS
              </span>
              <h1 className="display-xl text-uppercase text-dark m-0">
                Verified<br />Certifications.
              </h1>
              <p className="headline-md text-dark m-0 font-medium">
                Authenticated Technical Mastery &amp; Corporate Training
              </p>
              <p
                className="font-body text-muted m-0"
                style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '720px' }}
              >
                Every credential recorded below represents verified hands-on evaluation, from Anthropic Claude AI
                coding agents and foundation models to rigorous HackerRank algorithmic SQL skill assessments, Google Analytics,
                and formal corporate enterprise training in Agile, Azure DevOps, POSH governance, and PHPUnit.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="col-12 col-lg-4">
              <div className="p-3 p-sm-4 bg-white border-atelier shadow-sm d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono">
                  <span className="label-mono-sm text-secondary">ARCHIVE SUMMARY</span>
                  <BsShieldCheck size={18} className="text-dark shrink-0" />
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2">
                  <div style={{ minWidth: '100px' }}>
                    <span className="stat-counter text-dark d-block">
                      {String(CERTIFICATES_DATA.length).padStart(2, '0')}
                    </span>
                    <span className="label-mono-sm text-secondary font-semibold d-block">Total Verified</span>
                  </div>
                  <div className="text-sm-end" style={{ minWidth: '100px' }}>
                    <span className="stat-counter text-dark d-block">
                      {String(featuredCerts.length).padStart(2, '0')}
                    </span>
                    <span className="label-mono-sm text-secondary font-semibold d-block">Online Live</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadAllFeatured}
                  className="btn-atelier btn-atelier-primary w-100 font-mono d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '0.75rem', padding: '0.65rem 1rem' }}
                >
                  <BsDownload size={13} className="shrink-0" />
                  <span>Download {featuredCerts.length} Online Certs</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Online Certifications Showcase */}
      <section className="w-100 py-5 bg-surface border-bottom border-atelier">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 pb-3 mb-4 border-bottom border-atelier">
            <div>
              <span className="label-mono-sm text-secondary font-semibold d-block">
                PRIMARY VERIFIED SUITE // DIRECT DOWNLOAD &amp; VERIFY
              </span>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                Core Online Certifications
              </h2>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="label-mono-sm text-muted">ANTHROPIC, HACKERRANK &amp; GREAT LEARNING</span>
            </div>
          </div>

          <div className="row g-4">
            {featuredCerts.map((cert) => {
              const isDownloaded = downloadedMap[cert.id];

              return (
                <div key={cert.id} className="col-12 col-lg-4">
                  <div className="p-3 p-sm-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 gap-sm-4 tilt-card">
                    {/* Top Header */}
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono">
                        <span className="label-mono-sm text-secondary font-semibold" style={{ wordBreak: 'break-all' }}>
                          ID: {cert.credentialId}
                        </span>
                        <span className="badge-atelier font-mono shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                          {cert.badge}
                        </span>
                      </div>

                      {/* Certificate Thumbnail Preview with overlay */}
                      <div
                        className="position-relative border-atelier overflow-hidden cursor-pointer group"
                        style={{
                          aspectRatio: '16/11',
                          backgroundColor: 'var(--surface-container-low)',
                          cursor: 'pointer',
                        }}
                        onClick={() => setActiveModalCert(cert)}
                        title="Click to view full certificate"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-100 h-100 object-fit-contain transition-all"
                          style={{ transition: 'transform 0.3s ease' }}
                        />
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 opacity-0 hover-opacity-100 transition-all"
                          style={{
                            backgroundColor: 'rgba(9, 10, 15, 0.75)',
                            backdropFilter: 'blur(3px)',
                          }}
                        >
                          <BsEye size={24} className="text-white" />
                          <span className="font-mono text-white text-xs fw-semibold">Click to Enlarge</span>
                        </div>
                      </div>

                      {/* Text Narrative */}
                      <div>
                        <h3 className="headline-md text-dark m-0 mt-1" style={{ fontSize: '1.15rem', fontWeight: 700, wordBreak: 'break-word' }}>
                          {cert.title}
                        </h3>
                        <span className="label-mono-sm text-secondary d-block mt-1" style={{ wordBreak: 'break-word' }}>
                          {cert.issuer}
                        </span>
                        <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                          {cert.description}
                        </p>
                      </div>

                      {/* Skills Tags */}
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {cert.skills.map((s, idx) => (
                          <span key={idx} className="badge-atelier font-mono" style={{ fontSize: '0.625rem' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Download & Verify */}
                    <div className="pt-3 border-top border-atelier d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between font-mono text-xs text-muted mb-1">
                        <span>Issued: {cert.date}</span>
                        {isDownloaded && (
                          <span className="text-success fw-bold d-inline-flex align-items-center gap-1">
                            <BsCheckCircleFill size={11} />
                            Downloaded
                          </span>
                        )}
                      </div>

                      <div className="card-actions-row">
                        <a
                          href={cert.downloadUrl}
                          download={cert.downloadName}
                          onClick={() => handleDownload(cert)}
                          className={`btn-atelier text-center font-mono d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none ${
                            isDownloaded ? 'btn-atelier-secondary' : 'btn-atelier-primary'
                          }`}
                          style={{ fontSize: '0.75rem', padding: '0.6rem 0.8rem' }}
                        >
                          <BsDownload size={13} className="shrink-0" />
                          <span>{isDownloaded ? 'Downloaded ✓' : 'Download File'}</span>
                        </a>

                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-atelier btn-atelier-secondary font-mono d-inline-flex align-items-center justify-content-center gap-1 text-decoration-none"
                            style={{ fontSize: '0.75rem', padding: '0.6rem 0.8rem' }}
                            title="Verify directly on official platform"
                          >
                            <span>Verify</span>
                            <BsArrowUpRight size={11} className="shrink-0" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* All Accreditations Grid with Filter */}
      <section
        className="w-100 py-5 border-bottom border-atelier"
        style={{ backgroundColor: 'var(--surface-container-low)' }}
      >
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 pb-3 mb-4 border-bottom border-atelier">
            <div>
              <span className="label-mono-sm text-secondary font-semibold d-block">
                FILTER ACCREDITATIONS
              </span>
              <h2 className="headline-lg text-dark text-uppercase m-0">
                All Certified Credentials
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`badge-atelier font-mono cursor-pointer border-0 ${
                  activeTab === 'all' ? 'badge-primary-atelier fw-bold' : ''
                }`}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
              >
                All Accreditations ({CERTIFICATES_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ai')}
                className={`badge-atelier font-mono cursor-pointer border-0 ${
                  activeTab === 'ai' ? 'badge-primary-atelier fw-bold' : ''
                }`}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
              >
                Anthropic &amp; AI ({aiCerts.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('online')}
                className={`badge-atelier font-mono cursor-pointer border-0 ${
                  activeTab === 'online' ? 'badge-primary-atelier fw-bold' : ''
                }`}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
              >
                Technical Assessments ({onlineCerts.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('corporate')}
                className={`badge-atelier font-mono cursor-pointer border-0 ${
                  activeTab === 'corporate' ? 'badge-primary-atelier fw-bold' : ''
                }`}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
              >
                Corporate Training ({corporateCerts.length})
              </button>
            </div>
          </div>

          <div className="row g-4">
            {filteredCerts.map((cert) => {
              const isDownloaded = downloadedMap[cert.id];

              return (
                <div key={cert.id} className="col-12 col-md-6 col-lg-4">
                  <div className="p-3 p-sm-4 bg-white border-atelier shadow-sm h-100 d-flex flex-column justify-content-between gap-3 tilt-card">
                    {/* Top Metadata */}
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between pb-2 border-bottom border-atelier font-mono">
                        <span className="label-mono-sm text-secondary" style={{ wordBreak: 'break-word' }}>
                          {cert.category}
                        </span>
                        <span className="badge-atelier font-mono shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'white', fontSize: '0.625rem' }}>
                          {cert.badge}
                        </span>
                      </div>

                      {/* Image Thumbnail */}
                      <div
                        className="position-relative border-atelier overflow-hidden"
                        style={{
                          aspectRatio: '16/11',
                          backgroundColor: 'var(--surface-container-low)',
                          cursor: 'pointer',
                        }}
                        onClick={() => setActiveModalCert(cert)}
                        title="Click to view full certificate"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-100 h-100 object-fit-contain"
                        />
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-1 opacity-0 hover-opacity-100 transition-all"
                          style={{
                            backgroundColor: 'rgba(9, 10, 15, 0.75)',
                            backdropFilter: 'blur(3px)',
                          }}
                        >
                          <BsEye size={20} className="text-white" />
                          <span className="font-mono text-white text-xs">Preview Full Certificate</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="headline-sm text-dark m-0" style={{ fontSize: '1rem', fontWeight: 600, wordBreak: 'break-word' }}>
                          {cert.title}
                        </h4>
                        <span className="label-mono-sm text-secondary d-block mt-1" style={{ wordBreak: 'break-word' }}>
                          {cert.issuer}
                        </span>
                        <p className="font-body text-muted m-0 mt-2" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
                          {cert.description}
                        </p>
                      </div>

                      {/* Skill chips */}
                      <div className="d-flex flex-wrap gap-1">
                        {cert.skills.map((s, idx) => (
                          <span key={idx} className="badge-atelier font-mono" style={{ fontSize: '0.625rem' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-top border-atelier d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between font-mono text-xs text-muted">
                        <span>Date: {cert.date}</span>
                        {isDownloaded && (
                          <span className="text-success fw-bold d-inline-flex align-items-center gap-1">
                            <BsCheckCircleFill size={10} />
                            Downloaded
                          </span>
                        )}
                      </div>

                      <div className="card-actions-row">
                        <a
                          href={cert.downloadUrl}
                          download={cert.downloadName}
                          onClick={() => handleDownload(cert)}
                          className={`btn-atelier text-center font-mono d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none ${
                            isDownloaded ? 'btn-atelier-secondary' : 'btn-atelier-primary'
                          }`}
                          style={{ fontSize: '0.75rem', padding: '0.55rem 0.75rem' }}
                        >
                          <BsDownload size={12} className="shrink-0" />
                          <span>{isDownloaded ? 'Downloaded ✓' : 'Download'}</span>
                        </a>

                        {cert.verifyUrl ? (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-atelier btn-atelier-secondary font-mono d-inline-flex align-items-center justify-content-center gap-1 text-decoration-none"
                            style={{ fontSize: '0.75rem', padding: '0.55rem 0.75rem' }}
                            title="Verify directly on official platform"
                          >
                            <span>Verify</span>
                            <BsArrowUpRight size={11} className="shrink-0" />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setActiveModalCert(cert)}
                            className="btn-atelier btn-atelier-secondary font-mono d-inline-flex align-items-center justify-content-center gap-1"
                            style={{ fontSize: '0.75rem', padding: '0.55rem 0.75rem' }}
                          >
                            <BsEye size={12} className="shrink-0" />
                            <span>View</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Modal / Lightbox */}
      {activeModalCert && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-2 p-sm-3"
          style={{
            backgroundColor: 'rgba(9, 10, 15, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
          }}
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="bg-white border-atelier shadow-lg p-3 p-sm-4 p-md-5 d-flex flex-column gap-3 position-relative modal-dialog-custom"
            style={{
              maxWidth: '920px',
              width: '100%',
              maxHeight: '94vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="d-flex align-items-start justify-content-between pb-3 border-bottom border-atelier gap-3 modal-header-custom">
              <div style={{ maxWidth: 'calc(100% - 44px)' }}>
                <span className="label-mono-sm text-secondary font-semibold d-block">
                  CERTIFICATE INSPECTION // {activeModalCert.category.toUpperCase()}
                </span>
                <h3 className="headline-lg text-dark text-uppercase m-0 mt-1" style={{ wordBreak: 'break-word' }}>
                  {activeModalCert.title}
                </h3>
                <span className="font-mono text-muted text-xs d-block mt-1" style={{ wordBreak: 'break-word' }}>
                  Issued by: {activeModalCert.issuer} — {activeModalCert.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCert(null)}
                className="btn-atelier btn-atelier-secondary p-2 d-flex align-items-center justify-content-center shrink-0"
                style={{ width: '38px', height: '38px', minWidth: '38px', flexShrink: 0 }}
                aria-label="Close Preview"
              >
                <BsX size={22} />
              </button>
            </div>

            {/* Modal Image Preview */}
            <div
              className="border-atelier p-2 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: 'var(--surface-container-low)', minHeight: '220px' }}
            >
              <img
                src={activeModalCert.image}
                alt={activeModalCert.title}
                className="w-100 h-auto object-fit-contain"
                style={{ maxHeight: '50vh' }}
              />
            </div>

            {/* Modal Metadata & Actions */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 pt-3 border-top border-atelier font-mono">
              <div className="d-flex flex-column gap-1" style={{ fontSize: '0.75rem' }}>
                <span className="text-secondary" style={{ wordBreak: 'break-all' }}>
                  Credential ID: <strong className="text-dark">{activeModalCert.credentialId}</strong>
                </span>
                <span className="text-muted">
                  Recipient: <strong className="text-dark">{PERSONAL_INFO.name}</strong>
                </span>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2 w-100 w-md-auto">
                <a
                  href={activeModalCert.downloadUrl}
                  download={activeModalCert.downloadName}
                  onClick={() => handleDownload(activeModalCert)}
                  className="btn-atelier btn-atelier-primary font-mono d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none flex-grow-1 flex-md-grow-0"
                  style={{ fontSize: '0.8125rem', padding: '0.65rem 1.25rem' }}
                >
                  <BsDownload size={13} className="shrink-0" />
                  <span>Download Original</span>
                </a>

                {activeModalCert.verifyUrl && (
                  <a
                    href={activeModalCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-atelier btn-atelier-secondary font-mono d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none flex-grow-1 flex-md-grow-0"
                    style={{ fontSize: '0.8125rem', padding: '0.65rem 1.25rem' }}
                  >
                    <span>Verify Credential Online</span>
                    <BsArrowUpRight size={12} className="shrink-0" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
