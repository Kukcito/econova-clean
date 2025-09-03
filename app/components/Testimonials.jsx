export default function Testimonials(){
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <p className="kicker">Testimonios</p>
        <h2 className="h2">Lo que dicen nuestros clientes</h2>

        <div className="grid-3" style={{marginTop:'20px'}}>
          {[
            ['Directora HSE, Manufactura', '“Pasamos de iniciativas sueltas a un sistema vivo que previene incidentes y nos da claridad de prioridades. La auditoría fue fluida por la evidencia disponible.”'],
            ['Gerente de Operaciones, Energía', '“Radar4 nos permitió ordenar inversiones y justificar cada decisión con datos. El comité ejecutivo vio valor desde la primera sesión.”'],
            ['CFO, Alimentos', '“El enfoque en KPIs y trazabilidad nos dio confianza para publicar GRI. Lo mejor: el tablero ejecutivo que nos permite gestionar.”'],
            ['Líder de Planta', '“Las micro-capacitaciones bajaron a piso y la gente adoptó controles. Dejaron procesos que mantenemos sin consultores.”'],
            ['Gerente de Cumplimiento', '“Tener matriz legal, evidencias y auditorías internas calendarizadas nos cambió la conversación con la autoridad.”'],
          ].map(([role, quote]) => (
            <blockquote key={role} className="card" style={{display:'grid', gap:'8px'}}>
              <p className="lead">“{quote.replace(/(^“|”$)/g,'')}”</p>
              <cite style={{color:'var(--fg-muted)'}}>{role}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
