import Reveal from './Reveal';

const PASOS = [
  {t:'Semana 1–2', h:'Descubrimiento & Riesgos', d:'Entrevistas, revisión documental, mapeo de procesos y matriz de riesgos; definimos alcance, objetivos y artefactos.'},
  {t:'Semana 3–6', h:'Diseño & Controles', d:'Definimos controles, responsables, registros y gobierno de datos. Prototipamos tableros y definimos KPIs.'},
  {t:'Semana 7–12', h:'Implementación', d:'Despliegue progresivo por áreas, entrenamiento y piloto. Cierre de brechas y auditoría interna.'},
  {t:'Post-Go-Live', h:'Operación asistida', d:'Monitoreo de KPIs, comité mensual, evidencias para GRI e inspecciones. Transferencia de la operación.'},
];

export default function Methodology(){
  return (
    <section id="metodologia" className="section">
      <div className="container">
        <Reveal><p className="kicker">Cómo trabajamos</p></Reveal>
        <Reveal delay={60}><h2 className="h2">Metodología orientada a impacto</h2></Reveal>
        <Reveal delay={120}><p className="lead-long" style={{maxWidth:'80ch'}}>No implementamos “papeles”: construimos sistemas vivos que resisten auditorías y generan decisiones basadas en evidencia.</p></Reveal>

        <div className="grid-3" style={{marginTop:'18px'}}>
          {PASOS.map((p, i) => (
            <Reveal key={p.h} delay={140 + i*90}>
              <div className="card">
                <p className="kicker">{p.t}</p>
                <h3 className="h3">{p.h}</h3>
                <p className="lead">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
