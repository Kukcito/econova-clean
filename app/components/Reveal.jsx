'use client';
import {useEffect, useRef} from 'react';

export default function Reveal({as: Tag = 'div', delay = 0, children, className = ''}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.setProperty('--rv-delay', `${delay}ms`);
            el.classList.add('reveal-in');
            obs.unobserve(el);
          }
        });
      },
      {rootMargin: '0px 0px -10% 0px', threshold: 0.2}
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
