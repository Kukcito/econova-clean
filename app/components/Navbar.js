'use client';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // smooth scroll con offset para sticky
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72; // altura nav
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    // sombra al hacer scroll
    const nav = document.querySelector('.nav');
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="ECONOVA">
          <img src="/logo.svg" alt="" height="28" />
        </a>
        <div className="nav-links">
          <a href="#por-que">¿Por qué?</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodologia">Metodología</a>
          <a href="#radar4">Radar4</a>
          <a className="btn btn-primary" href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
