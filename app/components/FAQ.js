export default function FAQ(){
  const q = [
    ['¿Trabajan con sector público y privado?', 'Sí. Hemos acompañado fuerzas públicas, industria de manufactura y servicios.'],
    ['¿Cuánto tarda una certificación?', 'En promedio 90 días, dependiendo del punto de partida y recursos.'],
    ['¿Qué entregables recibo?', 'Plan de acciones, matriz legal, radar de priorización, evidencias y tablero ejecutivo.'],
  ]
  return (
    <section id="faq" className="section container">
      <h2 className="h2" data-animate>Preguntas frecuentes</h2>
      <div className="grid grid-2">
        {q.map(([t,a],i)=>(
          <details key={i} className="card" data-animate>
            <summary style={{cursor:'pointer',fontWeight:800}}>{t}</summary>
            <p className="lead" style={{marginTop:6}}>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
