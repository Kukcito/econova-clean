export const metadata = { title: "Servicios — ECONOVA" };

export default function Servicios() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Servicios para acelerar tu sostenibilidad</h1>
        <p className="lead">
          Enfocamos cada proyecto a resultados en 90 días. Integramos diagnóstico,
          implementación y operación continua para que HSE/ESG sea una palanca
          de competitividad, no sólo cumplimiento.
        </p>

        <div className="grid-3" style={{ marginTop: 16 }}>
          <div className="card">
            <h2 className="h3">Diagnóstico & Gap Assessment</h2>
            <ul>
              <li>Entrevistas, recorridos, revisión documental, línea base.</li>
              <li>Matriz legal aplicable y mapa de brechas con riesgo/impacto.</li>
              <li>Priorización costo/beneficio/tiempo y dueños por iniciativa.</li>
              <li>Quick wins con cronograma y costo estimado.</li>
            </ul>
            <p>
              Entregamos un reporte ejecutivo claro para dirección y un backlog
              accionable para operación.
            </p>
          </div>

          <div className="card">
            <h2 className="h3">ISO 14001 / 45001</h2>
            <ul>
              <li>Diseño e implementación de políticas, procedimientos y formatos.</li>
              <li>Capacitación, simulacros, mediciones y controles operativos.</li>
              <li>Auditorías internas y acompañamiento a auditor externo.</li>
              <li>Tablero de indicadores y programa anual de mejora.</li>
            </ul>
            <p>
              Dejamos evidencias listas y una operación sostenible en el tiempo.
            </p>
          </div>

          <div className="card">
            <h2 className="h3">ESG, GRI & ODS</h2>
            <ul>
              <li>Levantamiento y aseguramiento de datos multisede.</li>
              <li>Materialidad y relación con stakeholders.</li>
              <li>Reporte GRI y narrativa de impacto alineada a ODS.</li>
              <li>Integración a Radar4 para seguimiento trimestral.</li>
            </ul>
          </div>
        </div>

        <h2 className="h2" style={{ marginTop: 32 }}>Paquetes y ejemplos</h2>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>Fast-track 90 días</b>
            <p>
              Diagnóstico, quick wins, tablero y plan de inversión priorizado.
              Ideal para “poner la casa en orden” y demostrar resultados visibles.
            </p>
            <ul>
              <li>Reducción de incidentes 10–25% promedio.</li>
              <li>Backlog ejecutable con dueños y fechas.</li>
              <li>Base para certificación y reporte ESG.</li>
            </ul>
          </div>
          <div className="card">
            <b>Certificación 6–9 meses</b>
            <p>
              Implementación completa ISO 14001/45001 con auditorías internas,
              operación estabilizada y transferencia de conocimiento.
            </p>
            <ul>
              <li>Procesos estándar y evidencias robustas.</li>
              <li>Capacitación y cultura de seguridad.</li>
              <li>Mejora continua con Radar4.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
