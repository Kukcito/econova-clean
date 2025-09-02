export default function Methodology(){
  const steps = [
    ['1','Diagnóstico', 'Sesión 45–60min, riesgos y madurez.'],
    ['2','Ruta 90 días', 'Quick wins y plan priorizado.'],
    ['3','Implementación', 'ISO/GRI/ODS con responsables y evidencias.'],
    ['4','Ejecución y cultura', 'Roles, microlearning, simulacros y comunicación.'],
    ['5','Auditoría y mejora', 'Auditoría interna y roadmap anual.'],
  ];
  return (
    <section id="metodologia" className="section container">
      <h2 className="h2">Metodología</h2>
      <div className="timeline">
        {steps.map(([n,t,txt])=>(
          <div key={n} className="step">
            <div className="dot">{n}</div>
            <div><div className="badge">{t}</div><div>{txt}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
