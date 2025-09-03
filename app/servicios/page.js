export const metadata = {
  title: 'Servicios | ECONOVA',
  description:
    'Portafolio integral: diagnóstico, ISO 14001/45001, reportes GRI y priorización con Radar4 para generar valor medible.',
};

export default function Page() {
  return (
    <article className="container section">
      <header className="center" style={{ marginBottom: '2rem' }}>
        <h1>Servicios para acelerar tu sostenibilidad</h1>
        <p className="lead">
          Diseñamos, implementamos y operamos sistemas que <strong>protegen personas y medio ambiente</strong>, cumplen con normas internacionales y <strong>crean valor medible</strong>.
        </p>
      </header>

      <section className="section">
        <h2>Portafolio integral</h2>
        <p>
          Te acompañamos de punta a punta: diagnóstico, diseño, implementación, operación y mejora continua. Nuestros entregables se basan en evidencia y quedan documentados para auditorías y toma de decisiones.
        </p>

        <div className="grid-2">
          <div className="card">
            <h3>Diagnóstico & Gap Assessment</h3>
            <p>
              Mapeo de brechas contra <strong>ISO 14001</strong>, <strong>ISO 45001</strong> y <strong>GRI</strong>. Identificamos <em>quick wins</em> y riesgos críticos.
            </p>
            <ul>
              <li>Entrevistas, revisión documental y visitas a sitio</li>
              <li>Matriz legal aplicable y evidencias</li>
              <li>Plan priorizado por <strong>impacto</strong> y <strong>riesgo</strong></li>
              <li>Duración típica: 2–3 semanas</li>
            </ul>
          </div>

          <div className="card">
            <h3>Implementación ISO 14001 / 45001</h3>
            <p>Construimos tu Sistema de Gestión con procesos, controles, formatos y tableros listos para auditoría.</p>
            <ul>
              <li>Mapa de procesos, riesgos y controles</li>
              <li>Procedimientos, registros y capacitación</li>
              <li>KPIs y evidencias de cumplimiento</li>
              <li>Acompañamiento a auditorías</li>
            </ul>
          </div>

          <div className="card">
            <h3>Informes GRI & datos ESG</h3>
            <p>Estructuramos tu reporte con materialidad, límites, métricas y trazabilidad.</p>
            <ul>
              <li>Estudio de materialidad y matriz de temas</li>
              <li>Data dictionary y gobierno del dato</li>
              <li>Narrativa y visualizaciones ejecutivas</li>
              <li>Revisión de verificador independiente</li>
            </ul>
          </div>

          <div className="card">
            <h3>Radar4 — Priorización por impacto</h3>
            <p>Optimiza el orden de trabajo según <strong>impacto, esfuerzo, riesgo</strong> y <strong>madurez</strong>.</p>
            <ul>
              <li>Score por iniciativa y portafolio</li>
              <li>Simulaciones “qué pasaría si…”</li>
              <li>Roadmap 90 días + 12 meses</li>
              <li>Panel ejecutivo y operativo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Sectores con mayor impacto</h2>
        <p className="lead">Industria de procesos, energía, logística, alimentación, bienes de consumo y sector público.</p>
        <ul>
          <li><strong>Manufactura y alimentos:</strong> residuos, agua, energía, seguridad en planta.</li>
          <li><strong>Energía y utilities:</strong> permisos, emisiones, integridad de activos.</li>
          <li><strong>Logística y retail:</strong> cadena de suministro, trazabilidad, salud y seguridad.</li>
          <li><strong>Gobierno:</strong> cumplimiento regulatorio, transparencia e indicadores.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Indicadores de éxito</h2>
        <div className="kpi-grid">
          <div className="card"><h3>-35%</h3><p>Incidentes en 12 meses</p></div>
          <div className="card"><h3>+25%</h3><p>Cumplimiento efectivo</p></div>
          <div className="card"><h3>-18%</h3><p>Costos por sanciones/reprocesos</p></div>
          <div className="card"><h3>90 días</h3><p>Tiempo promedio a auditoría</p></div>
        </div>
      </section>

      <footer className="section center">
        <a className="btn btn-green" href="/contacto">Agendar diagnóstico sin costo</a>
      </footer>
    </article>
  );
}
