import Reveal from './Reveal';

export default function Radar4(){
  return (
    <section id="radar4" className="section">
      <div className="container">
        <Reveal><p className="kicker">Herramienta</p></Reveal>
        <Reveal delay={60}><h2 className="h2">Radar4: priorización por impacto, no por intuición</h2></Reveal>
        <Reveal delay={120}><p className="lead-long" style={{maxWidth:'78ch'}}>Cargamos riesgos, costos, probabilidad y consecuencias. El radar calcula impacto y te devuelve un backlog priorizado con justificación y escenarios “what-if”.</p></Reveal>

        <div className="grid-2" style={{marginTop:'18px', alignItems:'center'}}>
          <Reveal delay={160}>
            <img src="/img/radar4-demo.jpg" alt="Radar4 demo" className="card" />
          </Reveal>
          <Reveal delay={220}>
            <div className="card">
              <h3 className="h3">Beneficios</h3>
              <ul className="list">
                <li>Backlog priorizado con ROI y riesgo residual</li>
                <li>Escenarios con sensibilidad (+/- 10–30%)</li>
                <li>Historial de decisiones y evidencias</li>
              </ul>
              <div style={{marginTop:'14px', display:'flex', gap:'10px', flexWrap:'wrap'}}>
                <a href="/radar4" className="btn">Conocer más</a>
                <a href="/contacto" className="btn btn-green">Solicitar demo</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
