// app/metodologia/page.js
export const metadata = { title: "Metodología — ECONOVA" };

export default function Metodologia() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Metodología basada en evidencia</h1>
        <p className="lead">
          Integramos estándares internacionales, marcos regulatorios y
          analítica para convertir hallazgos en **decisiones**: priorizar,
          planear y ejecutar.
        </p>

        <div className="grid-3" style={{ marginTop: 16 }}>
          <div className="card">
            <b>1) Descubrir</b>
            <p>
              Entrevistas, recorridos, revisión documental y levantamiento
              de datos para construir la línea base.
            </p>
          </div>
          <div className="card">
            <b>2) Priorizar</b>
            <p>
              Matriz de riesgo/impacto y simulación de escenarios con
              <i> trade-offs </i> costo/beneficio/tiempo en Radar4.
            </p>
          </div>
          <div className="card">
            <b>3) Ejecutar</b>
            <p>
              Roadmap con dueños y metas trimestrales. Tablero de
              indicadores y auditorías internas.
            </p>
          </div>
        </div>

        <h2 className="h2" style={{ marginTop: 32 }}>Entregables</h2>
        <ul>
          <li>Mapa de brechas, matriz legal aplicable y plan de cierre.</li>
          <li>Procedimientos, formatos y evidencias listas para auditor.</li>
          <li>Tablero de indicadores y reporte ejecutivo mensual.</li>
          <li>Reporte GRI y alineación a ODS prioritarios.</li>
        </ul>
      </div>
    </section>
  );
}
