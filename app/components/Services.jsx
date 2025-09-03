import Reveal from './Reveal';

const CARDS = [
  {
    img: '/img/services/iso-auditoria.jpg',
    title: 'Diagnóstico & Gap Assessment',
    badge: 'Inicio',
    desc: `Levantamiento integral, entrevistas, revisión documental, matriz legal y mapa de brechas con priorización por riesgo/impacto.`,
    items: [
      'Assessment en 2–3 semanas',
      'Entrega ejecutiva + plan táctico',
      'Quick wins de 30–45 días'
    ]
  },
  {
    img: '/img/services/iso-implementacion.jpg',
    title: 'ISO 14001 / ISO 45001',
    badge: 'Sistemas',
    desc: `Implementación sin “plantillas vacías”: procesos vivos, responsables claros, controles y evidencia desde el día 1.`,
    items: [
      'Mapeo de procesos + riesgos',
      'Controles, registros, KPIs',
      'Auditorías internas y cierre'
    ]
  },
  {
    img: '/img/services/gri-dashboard.jpg',
    title: 'Informes GRI con tablero ejecutivo',
    badge: 'Datos',
    desc: `Datos gobernados, métricas auditables y un dashboard para Dirección con alertas, tendencias y explicación de variaciones.`,
    items: [
      'Modelo de datos trazable',
      'ETL + validaciones',
      'Exportables y narrativa GRI'
    ]
  },
];

export default function Services(){
  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal><p className="kicker">Portafolio de servicio</p></Reveal>
        <Reveal delay={50}><h2 className="h2" style={{maxWidth:'26ch'}}>Servicios para acelerar tu sostenibilidad</h2></Reveal>
        <Reveal delay={100}><p className="lead-long" style={{maxWidth:'80ch'}}>Diseñamos, implementamos y operamos soluciones que protegen personas y medio ambiente, crean valor medible y dejan capacidad instalada.</p></Reveal>

        <div className="grid-3" style={{marginTop:'24px'}}>
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={120 + i*80}>
              <article className="card-media">
                <img src={c.img} alt={c.title} />
                <div className="overlay" />
                <div className="content">
                  <span className="badge">{c.badge}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p className="lead">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="card" style={{marginTop:'22px'}}>
            <h3 className="h3">Operación & mejora continua</h3>
            <p className="lead">Si lo deseas, operamos tus sistemas los primeros meses, entrenamos al equipo y medimos impacto para dejarlo estabilizado.</p>
            <ul className="list">
              <li>Gobierno de datos y evidencias</li>
              <li>Rituales de seguimiento (semanal/mensual)</li>
              <li>Roadmap de mejoras trimestral</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
