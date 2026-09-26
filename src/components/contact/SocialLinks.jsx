import React from 'react';
import { PERSONAL_INFO } from '../../utils/constants';
import { BsGithub, BsLinkedin, BsGlobe, BsArrowUpRight } from 'react-icons/bs';

export default function SocialLinks() {
  const socials = [
    {
      title: 'GitHub Organization',
      handle: PERSONAL_INFO.githubDisplay,
      link: PERSONAL_INFO.github,
      icon: <BsGithub size={20} />,
      type: 'Code Repositories',
    },
    {
      title: 'LinkedIn Network',
      handle: PERSONAL_INFO.linkedinDisplay,
      link: PERSONAL_INFO.linkedin,
      icon: <BsLinkedin size={20} />,
      type: 'Professional Profile',
    },
    {
      title: 'Canonical Archive',
      handle: PERSONAL_INFO.websiteDisplay,
      link: PERSONAL_INFO.website,
      icon: <BsGlobe size={20} />,
      type: 'Live Web Portfolio',
    },
  ];

  return (
    <div className="row g-3">
      {socials.map((item, i) => (
        <div key={i} className="col-12 col-md-4">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border-atelier shadow-sm d-flex flex-column justify-content-between h-100 text-decoration-none text-dark interactive-card"
          >
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-dark">{item.icon}</span>
              <BsArrowUpRight size={14} className="text-muted" />
            </div>

            <div className="mt-3">
              <h4 className="headline-sm m-0 font-bold" style={{ fontSize: '0.9375rem' }}>
                {item.title}
              </h4>
              <span className="label-mono-sm text-secondary d-block mt-1">
                {item.handle}
              </span>
              <span className="font-mono text-muted d-block mt-0.5" style={{ fontSize: '0.6875rem' }}>
                {item.type}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
