export default function CTA(){
  return (
    <section className="section">
      <div className="container card" style={{background:'linear-gradient(135deg,#1e293b,#0f172a)'}}>
        <div className="grid grid-2" data-animate>
          <div>
            <h2 className="h2">¿Listo para acelerar la certificación?</h2>
            <p className="lead">Agenda un diagnóstico sin costo y recibe un plan de 45–60 minutos.</p>
          </div>
          <div className="btns" style={{alignSelf:'center',justifySelf:'end'}}>
            <a className="btn btn-primary" href="#contacto">Agendar ahora</a>
            <a className="btn btn-ghost" href="#faq">Resuelve dudas</a>
          </div>
        </div>
      </div>
    </section>
  )
}
