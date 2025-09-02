'use client';
import { useEffect, useRef } from 'react';

export default function Hero(){
  const bgRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const bgY = Math.min(30, y * 0.06);
      const shY = Math.min(60, y * 0.10);
      const zoom = 1 + Math.min(0.04, y * 0.00008);
      if (bgRef.current)  bgRef.current.style.transform = `translateY(${bgY}px) scale(${zoom})`;
      if (shapesRef.current) shapesRef.current.style.transform = `translateY(${shY}px) scale(${zoom})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero" aria-labelledby="hero-title">
      <div ref={bgRef} className="hero-bg" aria-hidden="true" />
      <div ref={shapesRef} className="hero-shapes" aria-hidden="true" />
      <div className="container hero-content">
        <h1 id="hero-title" className="h1">
          Sostenibilidad que protege vidas, fortalece
          instituciones y crea valor medible.
        </h1>
        <p className="lead">
          ISO 14001 / ISO 45001 · Informes GRI · ODS · Radar4 para decisiones basadas en datos.
        </p>
        <div className="btns">
          <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
          <a className="btn btn-green" href="#radar4">Ver Radar4</a>
        </div>
      </div>
    </header>
  );
}
