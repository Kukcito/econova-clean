// app/servicios/page.js
export const metadata = { title: "Servicios — ECONOVA" };

export default function Servicios() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Servicios para acelerar tu sostenibilidad</h1>
        <p className="lead">
          Nuestro enfoque combina diagnóstico, implementación y operación
          continúa para asegurar resultados en **90 días** y un camino claro
          a certificaciones, cumplimiento y valor.
        </p>

        <div className="grid-3" style={{ marginTop: 16 }}>
          <div className="card">
            <h2 className="h3">Diagnóstico & Gap Assessment</h2>
            <ul>
              <li>Entrevistas, recorridos en sitio y revisión documental.</li>
              <li>Matriz legal aplicable y mapa de brechas.</li>
              <li>Prioridad por riesgo/impacto, costo y tiempo.</li>
              <li>Quick wins con dueños, fechas y costo estimado.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">ISO 14001 / 45001</h2>
            <ul>
              <li>Políticas, procedimientos, formatos y controles.</li>
              <li>Capacitación y evidencias listas para auditor.</li>
              <li>Auditorías internas y acompañamiento externo.</li>
              <li>Tablero de indicadores operativos/HSE.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="h3">ESG, GRI & ODS</h2>
            <ul>
              <li>Levantamiento y aseguramiento de datos.</li>
              <li>Materialidad y relacionamiento con stakeholders.</li>
              <li>Reportes GRI, anexos y línea base para rating ESG.</li>
              <li>Integración a Radar4 para seguimiento trimestral.</li>
            </ul>
          </div>
        </div>

        <h2 className="h2" style={{ marginTop: 32 }}>Paquetes típicos</h2>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>Fast-track 90 días</b>
            <p>
              Diagnóstico, quick wins, tablero y plan de inversión
              priorizado. Ideal para “poner la casa en orden”.
            </p>
          </div>
          <div className="card">
            <b>Certificación 6–9 meses</b>
            <p>
              Implementación completa ISO 14001/45001 y
              fortalecimiento HSE con auditorías internas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
