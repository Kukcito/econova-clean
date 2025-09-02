export default function Services(){
  const items = [
    { t:'ISO 14001 / ISO 45001', d:'Diagnóstico, implementación y auditoría interna.' },
    { t:'GRI', d:'Indicadores & narrativa para publicación y verificación.' },
    { t:'ODS (3, 8, 11, 13, 16)', d:'Hoja de ruta, KPIs y trazabilidad.' },
    { t:'Matriz legal', d:'Mapeo de requisitos y brechas de cumplimiento.' },
    { t:'Cultura & adopción', d:'Programas de cambio y microlearning.' },
    { t:'Radar4', d:'Decisiones basadas en datos y comunicación ejecutiva.' }
  ];
  return (
    <section id="servicios" className="section container">
      <h2 className="h2">Servicios</h2>
      <div className="grid-3">
        {items.map((s,i)=>(
          <article key={i} className="card tilt">
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
