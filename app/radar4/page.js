// app/radar4/page.js
export const metadata = { title: "Radar4 — ECONOVA" };

export default function Radar4() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Radar4: prioriza con datos, no con percepciones</h1>
        <p className="lead">
          Radar4 transforma hallazgos dispersos en un **backlog ejecutable**:
          cada iniciativa tiene riesgo, beneficio, costo, dueños y fecha.
        </p>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>Lo que hace</b>
            <ul>
              <li>Normaliza datos de incidentes, hallazgos y normas.</li>
              <li>Calcula ROI, exposición y cumplimiento.</li>
              <li>Ordena por impacto y te dice qué hacer primero.</li>
              <li>Genera reportes para dirección/finanzas.</li>
            </ul>
          </div>
          <div className="card">
            <b>Beneficios típicos</b>
            <ul>
              <li>Reducción de incidentes 25–40% en 6–12 meses.</li>
              <li>Mejoras en madurez HSE y auditorías exitosas.</li>
              <li>Inversiones justificadas con evidencia.</li>
              <li>Quick wins con payback &lt; 90 días.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
