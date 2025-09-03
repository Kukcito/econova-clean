export const metadata = { title: 'Servicios | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Servicios para acelerar tu sostenibilidad</h1>
        <p className="lead">
          Diseñamos, implementamos y operamos sistemas que protegen personas y medio ambiente,
          entregan evidencia confiable y convierten la sostenibilidad en ventaja competitiva.
        </p>

        <div className="grid-2" style={{marginTop:24}}>
          <div className="card">
            <h2 className="h3">Diagnóstico & Gap Assessment</h2>
            <p>
              Levantamiento integral, entrevistas y revisión documental para establecer línea base.
              Entregamos un mapa de brechas priorizadas con plan de acción táctico y quick wins (30–45 días).
            </p>
            <ul>
              <li>Assessment 2–3 semanas</li>
              <li>Matriz legal aplicable y criticidad</li>
              <li>Plan táctico y tablero de seguimiento</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h3">ISO 14001 / 45001</h2>
            <p>
              Implementación end-to-end, manuales, procedimientos, formación y auditorías internas.
              Migramos tu operación a un sistema vivo, con roles claros y evidencias auditables.
            </p>
            <ul>
              <li>Diseño del SGA/SST y despliegue</li>
              <li>Formación por rol y simulacros</li>
              <li>Preparación para certificación</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h3">Informes GRI & Estrategia ODS</h2>
            <p>
              Materialidad, mapeo de stakeholders, indicadores y narrativa. Convertimos resultados
              en reputación y en decisiones de negocio con foco en materialidad real.
            </p>
            <ul>
              <li>GRI Standards (Core/Comprehensive)</li>
              <li>Vinculación con ODS prioritarios</li>
              <li>Tablero ejecutivo y repositorio</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h3">Radar4: priorización por impacto</h2>
            <p>
              Modelo de decisión que pondera riesgo, costo y beneficio. Reduce 35% incidentes
              en 12 meses y aumenta 25% la madurez HSE con foco en evidencias.
            </p>
            <ul>
              <li>Visibilidad de riesgos accionables</li>
              <li>Justificables ante comité</li>
              <li>Integración con tu BI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
