import React, { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { FAQS } from '../../data/services';
import { BsShieldCheck, BsPlus, BsDash, BsSend } from 'react-icons/bs';

export default function HireCTA() {
  const [openFaq, setOpenFaq] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-100 py-5 bg-surface border-bottom border-atelier">
      <Container>
        <div className="row g-4">
          {/* Left Column: Contract Terms */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-3">
            <span className="label-mono-sm text-secondary font-semibold">
              VERIFICATION // CLIENT CONFIDENCE
            </span>

            <h3 className="headline-lg text-dark text-uppercase m-0">
              Contract Terms &amp; Standard Engagement Rules
            </h3>

            <p className="font-body text-muted m-0" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
              Clear commercial guidelines ensure focus stays entirely on shipping clean code and meeting business milestones.
            </p>

            <div className="p-3 border-atelier d-flex flex-column gap-2" style={{ backgroundColor: 'var(--surface-container-low)' }}>
              <div className="d-flex align-items-center gap-2 text-dark font-mono font-semibold" style={{ fontSize: '0.75rem' }}>
                <BsShieldCheck size={16} />
                <span>IP OWNERSHIP GUARANTEE</span>
              </div>
              <p className="font-body text-muted m-0" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                100% intellectual property transfer upon sprint payment clearance. All source code, configs, and container assets belong to you.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="p-3 p-md-4 bg-white border-atelier shadow-sm transition-all"
                >
                  <div
                    className="d-flex justify-content-between align-items-center gap-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleFaq(faq.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(faq.id)}
                  >
                    <h4 className="headline-sm text-dark font-semibold m-0" style={{ fontSize: '1rem' }}>
                      {faq.question}
                    </h4>
                    <span className="text-dark">
                      {isOpen ? <BsDash size={22} /> : <BsPlus size={22} />}
                    </span>
                  </div>

                  {isOpen && (
                    <p className="font-body text-muted m-0 mt-3 pt-2 border-top border-atelier" style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <a
                href="#briefing-form"
                className="btn-atelier btn-primary-atelier w-100 py-3 text-center d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
                style={{ fontSize: '0.9375rem' }}
              >
                <span>Initiate Project Briefing</span>
                <BsSend size={15} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
