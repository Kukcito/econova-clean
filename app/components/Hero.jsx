import Reveal from './Reveal';

export default function Hero(){
  return (
    <header className="hero-wrap section">
      <div className="container hero-content">
        <Reveal delay={0}>
          <p className="kicker">Sostenibilidad & Seguridad basadas en datos</p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="h1" style={{maxWidth:'22ch'}}>
            Protegemos vidas, fortalecemos instituciones y creamos valor medible.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="lead-long" style={{maxWidth:'70ch'}}>
            Diseñamos, implementamos y operamos sistemas **ISO 14001 / ISO 45001**, tableros **GRI** y
            un radar de priorización (**Radar4**) que permite decidir por impacto, evidenciando reducción de incidentes,
            cumplimiento efectivo y avance tangible en **ODS**. No hacemos consultoría de “papel”: dejamos capacidad instalada.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div style={{display:'flex', gap:'12px', marginTop:'18px', flexWrap:'wrap'}}>
            <a className="btn btn-green" href="/contacto">Agendar diagnóstico</a>
            <a className="btn" href="/radar4">Ver Radar4 en acción</a>
          </div>
        </Reveal>

        <div className="kpi-grid" style={{marginTop:'28px'}}>
          <Reveal delay={250}><div className="card"><h3 className="h3">-35%</h3><p className="lead">Incidentes en 12 meses</p></div></Reveal>
          <Reveal delay={300}><div className="card"><h3 className="h3">+25%</h3><p className="lead">Cumplimiento efectivo</p></div></Reveal>
          <Reveal delay={350}><div className="card"><h3 className="h3">12</h3><p className="lead">ODS que abordamos</p></div></Reveal>
          <Reveal delay={400}><div className="card"><h3 className="h3">90 días</h3><p className="lead">Time-to-value promedio</p></div></Reveal>
        </div>
      </div>

      {/* Fondo visual (imagen + blur) */}
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source srcSet="/img/hero-wide.jpg" media="(min-width:900px)" />
          <img src="/img/hero-mobile.jpg" alt="" />
        </picture>
      </div>
      <div className="hero-shapes" aria-hidden="true" />
    </header>
  );
}
