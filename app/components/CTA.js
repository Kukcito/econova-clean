export default function CTA(){
  return (
    <section className="section container">
      <div className="card" style={{display:'flex',justifyContent:'space-between',gap:16,alignItems:'center'}}>
        <div>
          <h3 style={{margin:'0 0 4px'}}>¿Listo para empezar?</h3>
          <p className="lead" style={{margin:0}}>Agenda un diagnóstico sin costo y llevemos tu plan a 90 días.</p>
        </div>
        <a className="btn btn-primary" href="#contacto">Agendar</a>
      </div>
    </section>
  );
}
