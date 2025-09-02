const steps = [
  {t:'1) Situación actual', d:'Levantamos información, indicadores y riesgos.'},
  {t:'2) Mejora 90 días', d:'Quick wins de alto impacto y baja fricción.'},
  {t:'3) Objetivo 12 meses', d:'Hoja de ruta con metas, responsables y métricas.'},
  {t:'4) Auditoría & reporte', d:'Acompañamiento hasta certificación y publicación.'},
];

export default function Methodology(){
  return (
    <section className="section" id="metodologia">
      <div className="container">
        <h2 className="h2">Metodología</h2>
        <div className="timeline">
          {steps.map((s,i)=>(
            <div className="step" key={i}>
              <b>{s.t}</b>
              <span style={{color:'#64748b'}}>{s.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
