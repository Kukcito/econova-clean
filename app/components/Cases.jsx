export default function Cases(){
  return (
    <section id="casos" className="section">
      <div className="container">
        <p className="kicker">Casos de éxito</p>
        <h2 className="h2">Resultados recientes con impacto tangible</h2>

        <div className="grid-3" style={{marginTop:'20px'}}>
          <article className="card">
            <p className="kicker">Manufactura – 4 plantas</p>
            <h3 className="h3">ISO 45001 + cultura preventiva</h3>
            <p className="lead">
              Implementamos controles críticos, permisos de trabajo y micro-capacitaciones.
              Se integró investigación de incidentes con acciones verificables y tablero de severidad.
            </p>
            <ul className="list">
              <li><strong>-37%</strong> incidentes registrables en 12 meses</li>
              <li><strong>100%</strong> cierre de acciones mayores a tiempo</li>
              <li><strong>Auditoría</strong> sin no conformidades mayores</li>
            </ul>
          </article>

          <article className="card">
            <p className="kicker">Alimentos – 2 países</p>
            <h3 className="h3">ISO 14001 + GRI con gobierno de datos</h3>
            <p className="lead">
              Modelo de datos y ETL con trazabilidad, KPIs ambientales y reporte alineado a materialidad.
            </p>
            <ul className="list">
              <li><strong>-18%</strong> consumo específico de agua en 9 meses</li>
              <li><strong>+24%</strong> cumplimiento de mantenimiento preventivo</li>
              <li><strong>GRI</strong> publicado con verificación limitada</li>
            </ul>
          </article>

          <article className="card">
            <p className="kicker">Energía – generación</p>
            <h3 className="h3">Radar4 para priorizar inversiones</h3>
            <p className="lead">
              Cargamos riesgos, costos y escenarios; se priorizaron 14 iniciativas con ROI y reducción de riesgo residual.
            </p>
            <ul className="list">
              <li><strong>90 días</strong> del assessment a la ejecución</li>
              <li><strong>TOP 5</strong> iniciativas financiadas de inmediato</li>
              <li><strong>Backlog</strong> con responsables y métricas</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
