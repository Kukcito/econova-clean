// app/faq/page.js
export const metadata = { title: "FAQ — ECONOVA" };

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Preguntas frecuentes</h1>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <b>¿Cuánto tarda un diagnóstico?</b>
            <p>Entre 2 y 4 semanas según tamaño y complejidad.</p>
            <b>¿Se puede empezar solo con Radar4?</b>
            <p>Sí. Aceleramos priorización con tus datos actuales.</p>
            <b>¿Trabajan remoto o en sitio?</b>
            <p>Modelo híbrido con visitas programadas.</p>
          </div>
          <div className="card">
            <b>¿Acompañan auditorías?</b>
            <p>Sí, pre-auditorías internas y acompañamiento externo.</p>
            <b>¿Costo del diagnóstico?</b>
            <p>
              Depende del alcance; iniciamos con una sesión sin costo para
              dimensionar y estimar.
            </p>
            <b>¿Pueden hacer el reporte GRI?</b>
            <p>Sí, con levantamiento de datos y validación interna.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
