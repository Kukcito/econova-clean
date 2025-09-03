export const metadata = { title: "Metodología — ECONOVA" };

export default function Metodologia() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Metodología basada en evidencia</h1>
        <p className="lead">
          Combinamos estándares internacionales, marcos regulatorios y analítica
          de decisiones para convertir hallazgos en acciones con ROI y reducción
          de riesgo.
        </p>

        <div className="grid-3" style={{ marginTop: 16 }}>
          <div className="card">
            <b>1) Descubrir</b>
            <p>
              Levantamiento de datos, entrevistas, recorridos, auditorías en sitio
              y revisión documental para construir la línea base real.
            </p>
          </div>
          <div className="card">
            <b>2) Priorizar</b>
            <p>
              Matriz de riesgo/impacto, estimación de costos y beneficios, y
              simulación de escenarios en Radar4 con restricciones reales.
            </p>
          </div>
          <div className="card">
            <b>3) Ejecutar</b>
            <p>
              Roadmap trimestral con dueños, metas y tablero. Auditorías internas
              y mejora continua.
            </p>
          </div>
        </div>

        <h2 className="h2" style={{ marginTop: 32 }}>Entregables</h2>
        <ul>
          <li>Mapa de brechas y matriz legal aplicable.</li>
          <li>Backlog priorizado con ROI estimado y quick wins.</li>
          <li>Procedimientos, formatos y evidencias listas.</li>
          <li>Reporte ejecutivo y narrativa ESG/GRI lista para stakeholders.</li>
        </ul>
      </div>
    </section>
  );
}
