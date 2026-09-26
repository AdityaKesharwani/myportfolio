import React, { useState, useEffect } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
import { BsArrowUp } from 'react-icons/bs';

export default function ScrollToTop() {
  useScrollToTop();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="position-fixed border-atelier-strong d-flex align-items-center justify-content-center shadow"
      style={{
        bottom: '24px',
        right: '24px',
        width: '44px',
        height: '44px',
        backgroundColor: 'var(--primary)',
        color: 'var(--on-primary)',
        zIndex: 99,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      <BsArrowUp size={18} />
    </button>
  );
}
