export default function Radar4(){
  return (
    <section id="radar4" className="section container">
      <h2 className="h2">Radar4</h2>
      <p className="lead">Un radar por ejes para decidir con datos: impacto, esfuerzo, riesgo y cumplimiento.</p>
      <div className="grid-3" style={{alignItems:'stretch'}}>
        <div className="card" style={{gridColumn:'span 2'}}>
          <svg viewBox="0 0 200 200" style={{width:'100%',height:'220px'}}>
            <polygon points="100,20 180,100 100,180 20,100" fill="rgba(59,130,246,.12)" stroke="rgba(59,130,246,.4)"/>
            <polygon points="100,40 160,100 100,160 40,100" fill="rgba(34,197,94,.18)" stroke="rgba(34,197,94,.35)"/>
            <circle cx="100" cy="100" r="3" fill="#fff"/>
          </svg>
        </div>
        <div className="card">
          <h3 style={{marginTop:0}}>Qué entrega</h3>
          <ul className="bullets">
            <li>Priorización de iniciativas</li>
            <li>Impacto esperado y esfuerzo</li>
            <li>Riesgos críticos y cumplimiento</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
