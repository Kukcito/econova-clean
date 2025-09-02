export default function Hero(){
  return (
    <header className="hero">
      <div className="container">
        <p className="muted" style={{margin:'0 0 10px'}}>ISO 14001 · ISO 45001 · GRI · ODS · Radar4</p>
        <h1 className="h1">Sostenibilidad que protege vidas, fortalece instituciones y crea valor medible.</h1>
        <p className="lead" style={{color:'rgba(255,255,255,.85)'}}>
          Implementamos sistemas, reportes y analítica que convierten la sostenibilidad en ventaja competitiva.
        </p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:16}}>
          <a className="btn btn-primary" href="#contacto">Agendar diagnóstico</a>
          <a className="btn btn-ghost" href="#radar4">Ver Radar4 en acción</a>
        </div>
      </div>
    </header>
  );
}
