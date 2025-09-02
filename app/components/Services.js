const list = [
  {t:'Diagnóstico & Gap Assessment', d:'Levantamiento, matriz legal y mapa de brechas.'},
  {t:'ISO 14001 / 45001', d:'Diseño, implementación y acompañamiento a certificación.'},
  {t:'GRI & Reportes', d:'Metodología GRI con tablero ejecutivo y narrativa.'},
  {t:'Radar4', d:'Priorización por impacto con trazabilidad y evidencia.'},
  {t:'Capacitación & Cultura', d:'Programas de adopción, cursos y microlearning.'},
  {t:'Auditoría interna', d:'Auditoría, acciones correctivas y plan de mejora.'},
]

export default function Services(){
  return (
    <section id="servicios" className="section container">
      <h2 className="h2" data-animate>Servicios</h2>
      <div className="grid grid-3">
        {list.map((s,i)=>(
          <article className="card" key={i} data-animate>
            <h3 style={{margin:'0 0 6px'}}>{s.t}</h3>
            <p className="lead" style={{margin:0}}>{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
