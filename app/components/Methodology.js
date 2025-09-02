export default function Methodology(){
  const steps = [
    { n:'1', t:'Situación actual', d:'Evaluación, brechas y plan de ejes.'},
    { n:'2', t:'Mejora 90 días', d:'Quick wins y control de riesgos.'},
    { n:'3', t:'Objetivo 12 meses', d:'Certificación/Informe y operación.'},
  ];
  return (
    <section id="metodologia" className="section container">
      <h2 className="h2">Metodología</h2>
      <ol className="timeline">
        {steps.map(s=>(
          <li key={s.n} className="tl">
            <div className="tl-bullet">{s.n}</div>
            <div className="tl-body">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
