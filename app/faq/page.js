export const metadata = { title: "FAQ — ECONOVA" };

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Preguntas frecuentes</h1>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>¿Cuánto tarda un diagnóstico?</b>
            <p>2–4 semanas según complejidad y número de sitios.</p>
            <b>¿Se puede empezar solo con Radar4?</b>
            <p>Sí. Aceleramos priorización con tus datos actuales.</p>
            <b>¿Trabajan remoto o en sitio?</b>
            <p>Modelo híbrido con visitas programadas y workshops.</p>
          </div>
          <div className="card">
            <b>¿Acompañan auditorías?</b>
            <p>Pre-auditorías internas y acompañamiento a auditor externo.</p>
            <b>¿Costo del diagnóstico?</b>
            <p>Lo cotizamos tras una sesión sin costo para dimensionar.</p>
            <b>¿Pueden hacer reporte GRI?</b>
            <p>Sí, con levantamiento, aseguramiento y narrativa de impacto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
<h2 className="h2" style={{ marginTop: 32 }}>Más preguntas</h2>
<div className="grid-2" style={{ marginTop: 12 }}>
  <div className="card">
    <b>¿Pueden trabajar por etapas?</b>
    <p>Sí: diagnóstico → quick wins → implementación → auditoría → reporte ESG.</p>
    <b>¿Firmas NDA?</b>
    <p>Sí, tratamos la información como confidencial desde la primera conversación.</p>
  </div>
  <div className="card">
    <b>¿Cómo se integra con mis sistemas?</b>
    <p>Importamos desde Excel, Google, ERPs y CMMS; exportamos reportes y datasets.</p>
    <b>¿Qué KPI veré primero?</b>
    <p>Incidentes, cierre de CAPAs, cumplimiento legal y exposición por área/sitio.</p>
  </div>
</div>
