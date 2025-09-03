export const metadata = { title: 'Metodología | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Metodología: del diagnóstico a la mejora continua</h1>
        <p className="lead">
          Nuestro framework combina normas ISO, gestión de riesgos, analítica y change management
          para asegurar adopción real y resultados medibles.
        </p>

        <ol style={{lineHeight:1.9, marginTop:16}}>
          <li><strong>Descubrimiento & Materialidad.</strong> Entrevistas, talleres y data room.</li>
          <li><strong>Diseño del sistema.</strong> Procesos, roles, indicadores y repositorio de evidencias.</li>
          <li><strong>Despliegue & formación.</strong> Pilotos por área, formación por rol y simulacros.</li>
          <li><strong>Auditoría interna & cierre de brechas.</strong> Acciones correctivas y documentación.</li>
          <li><strong>Certificación & mejora continua.</strong> Comité mensual con tablero y backlog.</li>
        </ol>

        <div className="card" style={{marginTop:24}}>
          <h2 className="h3">Principios del enfoque</h2>
          <ul>
            <li>“Evidencia o no sucedió” (trazabilidad end-to-end).</li>
            <li>Decidir con datos, no con percepciones.</li>
            <li>Quick wins visibles y ownership por área.</li>
            <li>Escalable y auditable desde el día 1.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
