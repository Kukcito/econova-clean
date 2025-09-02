export default function Services(){
  const items = [
    ['ISO 14001 / 45001','Diagnóstico, gap assessment, plan e implementación, auditoría interna.'],
    ['Reportes GRI','Levantamiento de indicadores, narrativa y verificación.'],
    ['ODS por ejes','Mapa de metas 3, 8, 11, 13 y 16 con quick wins.'],
    ['Gestión de riesgos','Matriz legal, controles críticos, cultura y capacitación.'],
    ['Análisis y tableros','Radar4 y tablero ejecutivo para priorizar.'],
    ['Comunicación','Campañas y comunicación ejecutiva basada en datos.'],
  ];
  return (
    <section id="servicios" className="section container">
      <h2 className="h2">Servicios</h2>
      <div className="grid-3">
        {items.map(([t,d])=>(
          <article key={t} className="card">
            <h3 style={{margin:'0 0 6px'}}>{t}</h3>
            <p style={{color:'var(--muted)',margin:0}}>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
