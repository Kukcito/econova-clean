'use client';
import { useEffect } from 'react';

export default function KPIs(){
  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.kpi-card').forEach(el=>io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section container" aria-labelledby="kpi-title">
      <h2 id="kpi-title" className="h2">KPIs</h2>
      <div className="kpi-grid">
        <div className="kpi-card"><div className="kpi-value">-35%</div><div className="kpi-label">Incidentes</div><div className="kpi-note">en 12 meses</div></div>
        <div className="kpi-card"><div className="kpi-value">+25%</div><div className="kpi-label">Cumplimiento</div><div className="kpi-note">efectivo</div></div>
        <div className="kpi-card"><div className="kpi-value">90 días</div><div className="kpi-label">Tiempo a auditoría</div><div className="kpi-note">promedio</div></div>
      </div>
    </section>
  );
}
