import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../utils/emailConfig';
import {
  BsArrowRight,
  BsClock,
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsX,
} from 'react-icons/bs';

export default function ContactForm({
  formTitle = 'Scope & Engagement Form',
  formId = 'FORM_ID: AK-2026',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: 'hourly',
    message: '',
  });

  const [error, setError] = useState({ field: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [submittedName, setSubmittedName] = useState('');
  const [sendError, setSendError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    let timer;
    if (submitted && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (submitted && countdown === 0) {
      setSubmitted(false);
    }
    return () => clearTimeout(timer);
  }, [submitted, countdown]);

  const budgetOptions = [
    { id: '$500-$1,500', range: '$500–$1.5k', sub: 'Small Sprint' },
    { id: '$1,500-$3,000', range: '$1.5k–$3k', sub: 'Core Feature' },
    { id: '$3,000-$5,000', range: '$3k–$5k', sub: 'MVP Full Build' },
    { id: '$5,000+', range: '$5k+', sub: 'Enterprise App' },
    { id: 'hourly', range: '$12–$25 / hr', sub: 'Retainer Hourly' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error for the current field as user types
    if (error.field === id) {
      setError({ field: '', message: '' });
    }
    if (sendError) {
      setSendError('');
    }
  };

  const handleBudgetSelect = (budgetId) => {
    setFormData((prev) => ({ ...prev, budget: budgetId }));
    if (error.field === 'budget') {
      setError({ field: '', message: '' });
    }
  };

  // Strictly sequential one-by-one JavaScript validation
  const validateOneByOne = () => {
    // 1. Name Check
    if (!formData.name || !formData.name.trim()) {
      return {
        field: 'name',
        message: 'Please enter your name.',
      };
    }
    if (formData.name.trim().length < 2) {
      return {
        field: 'name',
        message: 'Name must be at least 2 characters long.',
      };
    }

    // 2. Email Address Check
    if (!formData.email || !formData.email.trim()) {
      return {
        field: 'email',
        message: 'Please enter your email address.',
      };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return {
        field: 'email',
        message: 'Please enter a valid email address (e.g. name@company.com).',
      };
    }

    // 3. Phone / WhatsApp Check (optional, but validated if filled)
    if (formData.phone && formData.phone.trim()) {
      const cleanDigits = formData.phone.replace(/[\s\-()+]/g, '');
      if (cleanDigits.length < 7 || !/^\d+$/.test(cleanDigits)) {
        return {
          field: 'phone',
          message: 'Please enter a valid phone number (at least 7 digits) or leave blank.',
        };
      }
    }

    // 4. Project Classification Check
    if (!formData.projectType || formData.projectType.trim() === '') {
      return {
        field: 'projectType',
        message: 'Please select a project classification.',
      };
    }

    // 5. Investment Bracket Check
    if (!formData.budget) {
      return {
        field: 'budget',
        message: 'Please select an investment bracket.',
      };
    }

    // 6. Message / Brief Check
    if (!formData.message || !formData.message.trim()) {
      return {
        field: 'message',
        message: 'Please describe your project scope or technical requirements.',
      };
    }
    if (formData.message.trim().length < 10) {
      return {
        field: 'message',
        message: 'Please provide at least 10 characters describing your technical requirements.',
      };
    }

    return null; // All valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');

    // Check one by one
    const firstInvalid = validateOneByOne();

    if (firstInvalid) {
      setError(firstInvalid);

      // Focus and smoothly scroll to the exact invalid field
      const targetElement = document.getElementById(firstInvalid.field);
      if (targetElement) {
        targetElement.focus();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Reset error state and proceed
    setError({ field: '', message: '' });
    setIsSubmitting(true);

    const serviceId = EMAILJS_CONFIG.SERVICE_ID;
    const templateId = EMAILJS_CONFIG.TEMPLATE_ID;
    const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Not Provided',
      company: formData.company.trim() || 'Not Provided',
      project_type: formData.projectType || 'General Architecture',
      budget: formData.budget || 'Hourly Retainer',
      message: formData.message.trim(),
      form_type: formTitle,
      form_id: formId,
      time:
        new Date().toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
          timeZone: 'Asia/Kolkata',
        }) + ' IST',
      title: `${formTitle} - ${formData.name.trim()}`,
      from_name: formData.name.trim(),
      to_name: 'Aditya Kesharwani',
      reply_to: formData.email.trim(),
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        console.warn(
          'EmailJS credentials missing in .env or emailConfig.js. Simulating dispatch...',
          templateParams
        );
        // Simulate slight delay for realistic user experience
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setSubmittedName(formData.name.trim());
      // Form empty ho jayega
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: 'hourly',
        message: '',
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setCountdown(5);
    } catch (err) {
      console.error('EmailJS send error:', err);
      setIsSubmitting(false);
      setSendError(
        'Failed to dispatch message via EmailJS. Please verify your EmailJS credentials or contact directly at akesharwani.info@gmail.com'
      );
    }
  };

  return (
    <div className="p-4 p-md-5 bg-white border-atelier shadow-sm">
      <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom border-atelier font-mono">
        <div>
          <span className="label-mono-sm text-secondary font-semibold d-block">
            PROJECT INITIATION REGISTER
          </span>
          <h3 className="headline-sm text-dark font-bold text-uppercase m-0 mt-1">
            {formTitle}
          </h3>
        </div>
        <span className="label-mono-sm text-muted">[{formId}]</span>
      </div>

      {/* Auto-Hiding 5-Second Success Notification */}
      {submitted && (
        <div
          className="p-4 border-atelier mb-4 d-flex flex-column gap-2 animate-fade-in-up position-relative overflow-hidden"
          style={{
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #16a34a',
            borderColor: 'rgba(22, 163, 74, 0.4)',
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2 font-mono text-dark font-bold">
              <BsCheckCircleFill size={18} className="text-success" />
              <span style={{ fontSize: '0.88rem' }}>
                DISPATCH ACKNOWLEDGED // TRANSMISSION REGISTERED
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 font-mono text-muted" style={{ fontSize: '0.75rem' }}>
              <span>Auto-closing in {countdown}s</span>
              <button
                type="button"
                className="btn btn-sm p-0 border-0 text-muted"
                onClick={() => setSubmitted(false)}
                title="Dismiss"
                aria-label="Dismiss notification"
              >
                <BsX size={20} />
              </button>
            </div>
          </div>
          <p className="font-body text-dark m-0" style={{ fontSize: '0.92rem', lineHeight: 1.5 }}>
            Thank you, <strong>{submittedName || 'there'}</strong>! Your requirement specification has been routed directly to Aditya's primary engineering queue. A technical review will follow within 24 hours.
          </p>
          {/* Animated 5s countdown progress bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              backgroundColor: '#16a34a',
              width: `${(countdown / 5) * 100}%`,
              transition: 'width 1s linear',
            }}
          />
        </div>
      )}

      {/* Error alert if EmailJS fails */}
      {sendError && (
        <div
          className="p-3 border-atelier mb-4 d-flex align-items-center gap-2 animate-fade-in-up"
          style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', color: '#b91c1c' }}
        >
          <BsExclamationCircleFill size={16} className="shrink-0" />
          <span className="font-mono" style={{ fontSize: '0.85rem' }}>
            {sendError}
          </span>
        </div>
      )}

      <form noValidate onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          {/* Row 1: Name & Email */}
          <div className="row g-3">
            <div className="col-12 col-md-6 d-flex flex-column gap-1">
              <label htmlFor="name" className="label-mono-sm text-dark font-semibold">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Henderson"
                className="w-100 p-2 px-3 border-atelier font-body text-dark transition-all"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  outline: 'none',
                  borderColor: error.field === 'name' ? '#ef4444' : undefined,
                  boxShadow: error.field === 'name' ? '0 0 0 1px #ef4444' : undefined,
                }}
              />
              {error.field === 'name' && (
                <div
                  className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                  style={{ fontSize: '0.75rem', color: '#ef4444' }}
                >
                  <BsExclamationCircleFill size={12} className="shrink-0" />
                  <span>{error.message}</span>
                </div>
              )}
            </div>

            <div className="col-12 col-md-6 d-flex flex-column gap-1">
              <label htmlFor="email" className="label-mono-sm text-dark font-semibold">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className="w-100 p-2 px-3 border-atelier font-body text-dark transition-all"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  outline: 'none',
                  borderColor: error.field === 'email' ? '#ef4444' : undefined,
                  boxShadow: error.field === 'email' ? '0 0 0 1px #ef4444' : undefined,
                }}
              />
              {error.field === 'email' && (
                <div
                  className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                  style={{ fontSize: '0.75rem', color: '#ef4444' }}
                >
                  <BsExclamationCircleFill size={12} className="shrink-0" />
                  <span>{error.message}</span>
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Company */}
          <div className="row g-3">
            <div className="col-12 col-md-6 d-flex flex-column gap-1">
              <label htmlFor="phone" className="label-mono-sm text-dark font-semibold">
                Phone / WhatsApp (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className="w-100 p-2 px-3 border-atelier font-body text-dark transition-all"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  outline: 'none',
                  borderColor: error.field === 'phone' ? '#ef4444' : undefined,
                  boxShadow: error.field === 'phone' ? '0 0 0 1px #ef4444' : undefined,
                }}
              />
              {error.field === 'phone' && (
                <div
                  className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                  style={{ fontSize: '0.75rem', color: '#ef4444' }}
                >
                  <BsExclamationCircleFill size={12} className="shrink-0" />
                  <span>{error.message}</span>
                </div>
              )}
            </div>

            <div className="col-12 col-md-6 d-flex flex-column gap-1">
              <label htmlFor="company" className="label-mono-sm text-dark font-semibold">
                Company / Venture Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Systems Labs"
                className="w-100 p-2 px-3 border-atelier font-body text-dark"
                style={{ backgroundColor: 'var(--surface-container-low)', outline: 'none' }}
              />
            </div>
          </div>

          {/* Project Type Dropdown */}
          <div className="d-flex flex-column gap-1">
            <label htmlFor="projectType" className="label-mono-sm text-dark font-semibold">
              Project Classification <span className="text-danger">*</span>
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-100 p-2 px-3 border-atelier font-mono text-dark transition-all"
              style={{
                backgroundColor: 'var(--surface-container-low)',
                outline: 'none',
                cursor: 'pointer',
                borderColor: error.field === 'projectType' ? '#ef4444' : undefined,
                boxShadow: error.field === 'projectType' ? '0 0 0 1px #ef4444' : undefined,
              }}
            >
              <option value="" disabled>Select project type or technical engagement...</option>
              <option value="fullstack">Full Stack Development (Laravel + React.js)</option>
              <option value="laravel">Laravel / PHP Specialized Architecture</option>
              <option value="react">React.js / Modern Frontend Architecture</option>
              <option value="api">Backend &amp; RESTful API Engineering</option>
              <option value="ai">AI Integration &amp; Workflow Automation</option>
              <option value="ecommerce">E-Commerce Architecture &amp; Cart Engines</option>
              <option value="performance">Existing Application Improvement / Scale Pass</option>
              <option value="other">Other Bespoke Requirement</option>
            </select>
            {error.field === 'projectType' && (
              <div
                className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                style={{ fontSize: '0.75rem', color: '#ef4444' }}
              >
                <BsExclamationCircleFill size={12} className="shrink-0" />
                <span>{error.message}</span>
              </div>
            )}
          </div>

          {/* Budget Range Tier Selector */}
          <div className="d-flex flex-column gap-2" id="budget">
            <label className="label-mono-sm text-dark font-semibold">
              Project Investment Bracket <span className="text-danger">*</span>
            </label>
            <div className="row g-2 budget-selector-grid">
              {budgetOptions.map((opt) => {
                const isSelected = formData.budget === opt.id;
                return (
                  <div key={opt.id} className="col">
                    <button
                      type="button"
                      onClick={() => handleBudgetSelect(opt.id)}
                      className={`w-100 p-2 text-center border-atelier font-mono d-flex flex-column align-items-center justify-content-center transition-all ${
                        isSelected
                          ? 'bg-primary text-white'
                          : 'bg-white text-dark hover:bg-light'
                      }`}
                      style={{
                        minHeight: '60px',
                        borderColor: error.field === 'budget' ? '#ef4444' : undefined,
                      }}
                    >
                      <span className="font-bold d-block" style={{ fontSize: '0.8125rem' }}>
                        {opt.range}
                      </span>
                      <span
                        className="d-block mt-0.5"
                        style={{
                          fontSize: '0.625rem',
                          color: isSelected ? 'var(--surface-container-high)' : 'var(--on-surface-variant)',
                        }}
                      >
                        {opt.sub}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            {error.field === 'budget' && (
              <div
                className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                style={{ fontSize: '0.75rem', color: '#ef4444' }}
              >
                <BsExclamationCircleFill size={12} className="shrink-0" />
                <span>{error.message}</span>
              </div>
            )}
          </div>

          {/* Message Textarea */}
          <div className="d-flex flex-column gap-1">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="message" className="label-mono-sm text-dark font-semibold">
                Brief / Technical Scope <span className="text-danger">*</span>
              </label>
              <span className="label-mono-sm text-muted">Min. 10 characters</span>
            </div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me what you're building, what problem you're solving and where you need technical support. Include existing links, Figma specs or API docs if available."
              className="w-100 p-3 border-atelier font-body text-dark transition-all"
              style={{
                backgroundColor: 'var(--surface-container-low)',
                outline: 'none',
                borderColor: error.field === 'message' ? '#ef4444' : undefined,
                boxShadow: error.field === 'message' ? '0 0 0 1px #ef4444' : undefined,
              }}
            ></textarea>
            {error.field === 'message' && (
              <div
                className="font-mono d-flex align-items-center gap-1 mt-1 text-danger animate-fade-in-up"
                style={{ fontSize: '0.75rem', color: '#ef4444' }}
              >
                <BsExclamationCircleFill size={12} className="shrink-0" />
                <span>{error.message}</span>
              </div>
            )}
          </div>

          {/* Bottom Action & SLA Row */}
          <div
            className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between p-3 border-atelier gap-3"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="d-flex align-items-center gap-2 font-mono text-muted" style={{ fontSize: '0.75rem' }}>
              <BsClock size={16} className="text-dark shrink-0" />
              <span>I will review the details and get back to you within 24 hours.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-atelier btn-primary-atelier py-2 px-4 shrink-0 d-inline-flex align-items-center gap-2"
            >
              <span>{isSubmitting ? 'Dispatching...' : 'Send Message'}</span>
              <BsArrowRight size={14} />
            </button>
          </div>
        </form>
      </div>
    );
  }
