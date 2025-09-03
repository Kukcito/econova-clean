export const metadata = { title: "Radar4 — ECONOVA" };

export default function Radar4() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Radar4: prioriza con datos, no con percepciones</h1>
        <p className="lead">
          Radar4 convierte hallazgos dispersos en un <strong>backlog ejecutable</strong>:
          cada iniciativa tiene riesgo, beneficio, costo, dueño y fecha.
        </p>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>Funciones</b>
            <ul>
              <li>Normaliza datos de incidentes, hallazgos y normas.</li>
              <li>Calcula ROI, exposición y cumplimiento por iniciativa.</li>
              <li>Ordena por impacto y recomienda quick wins.</li>
              <li>Reportes y visualizaciones para dirección/finanzas.</li>
            </ul>
          </div>
          <div className="card">
            <b>Beneficios</b>
            <ul>
              <li>Reducción de incidentes 25–40% en 6–12 meses.</li>
              <li>Auditorías más simples y evidencias robustas.</li>
              <li>Inversiones justificadas con datos verificables.</li>
              <li>Transparencia y trazabilidad (99% de cobertura).</li>
            </ul>
          </div>
        </div>

        <h2 className="h2" style={{ marginTop: 32 }}>Cómo se usa en la práctica</h2>
        <ol>
          <li>Integramos tus fuentes (incidentes, inspecciones, hallazgos, CAPAs).</li>
          <li>Definimos criterios de priorización con tu equipo.</li>
          <li>Corremos escenarios y definimos el plan trimestral.</li>
          <li>Seguimos avance y actualizamos ROI y riesgo residual.</li>
        </ol>
      </div>
    </section>
  );
}
