const items = [
  { t:'Diagnóstico & normativo', d:'Gap assessment, matriz legal, plan de implementación y auditoría interna.' },
  { t:'Reportes GRI & ODS', d:'Indicadores, narrativa, verificación y trazabilidad para publicación.' },
  { t:'Gestión de riesgos', d:'Mapa de riesgos, planes de acción y cultura de cambio.' },
  { t:'Capacitación', d:'Microlearning, comunicación ejecutiva y campañas de adopción.' },
  { t:'Sector público', d:'Metodología para fuerzas públicas, ODS/Ley Violeta, GRI.' },
  { t:'Radar4', d:'Analítica por ejes que prioriza acciones y acelera decisiones.' },
];

export default function Services(){
  return (
    <section className="section" id="servicios">
      <div className="container">
        <h2 className="h2">Servicios</h2>
        <div className="grid-3">
          {items.map((s, i)=>(
            <div className="card service" key={i}>
              <div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
