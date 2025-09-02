'use client';
import { useRef } from 'react';
import { testimonials } from '../content/home.data';

export default function Testimonials(){
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if(!el) return;
    const delta = dir === 'next' ? el.clientWidth : -el.clientWidth;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="testimonios" className="section container">
      <div className="row-head">
        <h2 className="h2">Testimonios</h2>
        <div className="seg">
          <button className="seg-btn" onClick={()=>scroll('prev')} aria-label="Anterior">◀</button>
          <button className="seg-btn" onClick={()=>scroll('next')} aria-label="Siguiente">▶</button>
        </div>
      </div>

      <div className="snap" ref={ref} role="region" aria-label="Carrusel de testimonios">
        {testimonials.map((t,i)=>(
          <figure key={i} className="testi-card">
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>— {t.person}, <span>{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
