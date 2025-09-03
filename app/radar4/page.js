// app/radar4/page.js
import Image from "next/image";

export const metadata = { title: "Radar4 — Priorización con datos" };

export default function Radar4() {
  return (
    <section className="section">
      <div className="container">
        {/* Hero con imagen */}
        <h1 className="h1">Radar4: convierte hallazgos en decisiones con ROI</h1>
        <p className="lead" style={{ maxWidth: 860 }}>
          Radar4 integra incidentes, inspecciones, no conformidades, CAPAs, exigencias legales
          y objetivos ESG para construir un <strong>backlog ejecutable</strong>. Cada iniciativa
          tiene costo, beneficio, impacto en riesgo, plazo y responsables. Se prioriza según
          restricciones reales (presupuesto, tiempo, dependencia operativa) y se justifica ante
          dirección con datos.
        </p>

        <div className="card" style={{ padding: 10, marginTop: 16 }}>
          <Image
            src="/media/radar4-ui.jpg"
            alt="Panel principal de Radar4"
            width={1400}
            height={800}
            className="img-fluid"
            priority
          />
        </div>

        {/* Módulos */}
        <h2 className="h2" style={{ marginTop: 32 }}>Módulos</h2>
        <div className="grid-3" style={{ marginTop: 16 }}>
          <div className="card">
            <b>1) Normalización de datos</b>
            <p>
              Integramos fuentes heterogéneas (Excel, G-Suite, ERPs, CMMS). Limpieza y
              catalogación para comparar “peras con peras”. Evitamos sesgos por criterios
              distintos en cada sitio.
            </p>
          </div>
          <div className="card">
            <b>2) Motor de priorización</b>
            <p>
              Calcula ROI, reducción de exposición y costo de no hacer. Simula escenarios
              con limitantes (presupuesto, ventanas de mantenimiento, recursos internos).
            </p>
          </div>
          <div className="card">
            <b>3) Tablero & trazabilidad</b>
            <p>
              Visualización por sitio/área/responsable, bitácora y evidencias. 99% de
              trazabilidad para auditorías internas/externas y comités.
            </p>
          </div>
        </div>

        {/* Imagen detalle */}
        <div className="card" style={{ padding: 10, marginTop: 16 }}>
          <Image
            src="/media/radar4-chart.jpg"
            alt="Detalle de priorización en Radar4"
            width={1400}
            height={900}
            className="img-fluid"
          />
        </div>

        {/* (Opcional) Vídeo corto */}
        {/* 
        <div className="card" style={{ marginTop: 16 }}>
          <video controls style={{ width:"100%", borderRadius:12 }}>
            <source src="/media/radar4-demo.mp4" type="video/mp4" />
          </video>
        </div>
        */}

        {/* Flujo operativo largo */}
        <h2 className="h2" style={{ marginTop: 32 }}>Cómo se opera mes a mes</h2>
        <ol>
          <li><b>Levantamiento & baseline:</b> consolidamos incidentes, hallazgos, inspecciones y exigencias regulatorias; definimos taxonomía única.</li>
          <li><b>Valoración & costo:</b> estimamos reducción de exposición (probabilidad x severidad), costo directo/indirecto y costo de no implementar.</li>
          <li><b>Escenarios & restricciones:</b> presupuesto, ventanas de mantenimiento, disponibilidades, dependencias y lead time de compras.</li>
          <li><b>Backlog trimestral:</b> quick wins + iniciativas de alto ROI; responsables, fechas, KPIs y riesgos residuales esperados.</li>
          <li><b>Seguimiento:</b> bitácora, checklists, evidencia fotográfica/docs; recalculamos ROI y riesgo residual al cierre de actividades.</li>
          <li><b>Reporte ejecutivo:</b> narrativa para comité/finanzas: por cada $ invertido, qué riesgo se reduce y qué cumplimiento se habilita.</li>
        </ol>

        <h2 className="h2" style={{ marginTop: 28 }}>Beneficios tangibles</h2>
        <ul>
          <li>Reducción de incidentes 25–40% en 6–12 meses.</li>
          <li>Auditorías más ágiles con evidencias centralizadas.</li>
          <li>Inversiones justificadas con datos (ROI y riesgo residual).</li>
          <li>Transparencia en múltiples sedes y áreas, con narrativa ESG.</li>
        </ul>

        <div className="card" style={{ marginTop: 20, display:"flex", gap:16, alignItems:"center", justifyContent:"space-between", flexWrap:"wrap" }}>
          <div>
            <h3 className="h3" style={{ marginBottom: 6 }}>¿Quieres ver Radar4 con tus datos?</h3>
            <p className="lead" style={{ margin: 0 }}>
              Hacemos una demo con un subconjunto real y definimos quick wins en menos de 90 días.
            </p>
          </div>
          <a className="btn btn-green" href="/contacto">Solicitar demo</a>
        </div>
      </div>
    </section>
  );
}
