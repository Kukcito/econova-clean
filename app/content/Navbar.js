'use client';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="ECONOVA"><img src="/logo.svg" alt="" height="28" /></a>
        <div className="nav-links">
          <a href="#quienes">Quiénes</a>
          <a href="#clientes">Clientes</a>
          <a href="#casos">Casos</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-primary" href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
