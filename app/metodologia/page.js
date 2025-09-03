export const metadata = {
  title: 'Metodología | ECONOVA',
  description:
    'Ruta en 6 fases: materialidad, datos, diseño del sistema, pilotaje, priorización Radar4 y auditoría para resultados en 90 días.',
};

export default function Page() {
  return (
    <article className="container section">
      <header className="center" style={{ marginBottom: '2rem' }}>
        <h1>Metodología ECONOVA</h1>
        <p className="lead">Resultados en <strong>90 días</strong> con bajo riesgo y capacidades duraderas.</p>
      </header>

      <section className="section">
        <h2>Fase 1 — Descubrimiento & Materialidad</h2>
        <ul>
          <li>Mapa de stakeholders y drivers</li>
          <li>Inventario legal y evidencias</li>
          <li>Matriz de materialidad (doble opcional)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Fase 2 — Datos & Gobierno</h2>
        <p>Definimos <em>data owners</em>, fuentes, periodicidad y reglas de calidad; creamos el <strong>diccionario de datos</strong>.</p>
        <ul>
          <li>Esquema de captura y controles</li>
          <li>Catálogo de KPIs y trazabilidad</li>
          <li>Políticas de seguridad y privacidad</li>
        </ul>
      </section>

      <section className="section">
        <h2>Fase 3 — Diseño del Sistema</h2>
        <ul>
          <li>Mapa de procesos y riesgos</li>
          <li>Procedimientos y formatos</li>
          <li>Plan de competencia y capacitación</li>
        </ul>
      </section>

      <section className="section">
        <h2>Fase 4 — Implementación & Pilotaje</h2>
        <ul>
          <li>Ejecución controlada, control de cambios</li>
          <li>Métricas de adopción y efectividad</li>
          <li>Lecciones aprendidas y mejoras</li>
        </ul>
      </section>

      <section className="section">
        <h2>Fase 5 — Radar4 & Roadmap</h2>
        <ul>
          <li>Score por iniciativa y portafolio</li>
          <li>Escenarios “qué pasaría si…”</li>
          <li>Hitos, responsables y dependencias</li>
        </ul>
      </section>

      <section className="section">
        <h2>Fase 6 — Auditoría & Mejora continua</h2>
        <ul>
          <li>Checklist, evidencias y trazabilidad</li>
          <li>Plan de acción y seguimiento</li>
          <li>Revisión por la dirección</li>
        </ul>
      </section>

      <footer className="section center">
        <a className="btn btn-primary" href="/servicios">Ver servicios</a>
        <span style={{ display: 'inline-block', width: 12 }} />
        <a className="btn btn-green" href="/contacto">Solicitar propuesta</a>
      </footer>
    </article>
  );
}
