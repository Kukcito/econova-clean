export default function Methodology(){
  const steps = [
    'Diagnóstico y matriz legal',
    'Mapa de brechas y plan',
    'Implementación & capacitación',
    'Ejecución de controles y evidencias',
    'Auditoría interna',
    'Certificación y mejora continua'
  ]
  return (
    <section id="metodologia" className="section container">
      <h2 className="h2" data-animate>Metodología ECONOVA</h2>
      <div className="card" data-animate>
        <div className="timeline">
          {steps.map((s,i)=>(
            <div key={i} className="step" data-step={i+1}><strong>{s}</strong></div>
          ))}
        </div>
      </div>
    </section>
  )
}
