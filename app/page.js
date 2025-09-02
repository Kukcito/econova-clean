// app/page.js (mínimo seguro que compila)
export default function Page(){
  return (
    <main>
      <section className="section container" style={{paddingTop:40}}>
        <h1 className="h1">ECONOVA — sitio en construcción</h1>
        <p className="lead">Estamos preparando las secciones completas.</p>

        <div className="grid-3" style={{marginTop:16}}>
          <div className="card">
            <h3>Diagnóstico sin costo</h3>
            <p>Agenda una sesión de 45–60 min para mapear tu punto de partida.</p>
            <a className="btn btn-primary" href="#contacto">Agendar</a>
          </div>
          <div className="card">
            <h3>ISO &amp; GRI</h3>
            <p>Implementación ISO 14001/45001 y reportes GRI con tablero ejecutivo.</p>
          </div>
          <div className="card">
            <h3>ODS &amp; Radar4</h3>
            <p>Priorización por impacto con un radar sencillo para decidir.</p>
          </div>
        </div>
      </section>

      <footer style={{background:'#0F172A',color:'#cbd5e1',padding:'32px 0',marginTop:40}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16}}>
          <div><strong>ECONOVA</strong> · Sostenibilidad y Seguridad</div>
          <div><a href="mailto:contacto@econova.mx" style={{color:'#e2e8f0'}}>contacto@econova.mx</a></div>
        </div>
      </footer>
    </main>
  );
}
