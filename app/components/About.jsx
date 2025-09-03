export default function About(){
  return (
    <section id="quienes-somos" className="section">
      <div className="container">
        <p className="kicker">Quiénes somos</p>
        <h2 className="h2" style={{maxWidth:'28ch'}}>Una firma técnica con enfoque en valor de negocio</h2>
        <p className="lead-long" style={{maxWidth:'80ch'}}>
          En ECONOVA ayudamos a organizaciones a proteger vidas, cumplir con regulaciones y convertir la sostenibilidad en
          un motor de competitividad. Trabajamos con equipos operativos, HSE y dirección para diseñar sistemas que funcionan
          en campo, resisten auditorías y generan señales accionables para decidir. Nuestros proyectos combinan procesos,
          gobierno de datos, cultura y tecnología: desde ISO 14001/45001 y reportes GRI hasta tableros ejecutivos y Radar4
          para priorizar por impacto real.
        </p>

        <div className="grid-2" style={{marginTop: '20px'}}>
          <div className="card">
            <h3 className="h3">Misión</h3>
            <p className="lead">
              Proteger a las personas y al entorno natural, construyendo sistemas de sostenibilidad que generen evidencia,
              reduzcan riesgos y creen valor medible para el negocio.
            </p>
            <h3 className="h3" style={{marginTop:12}}>Visión</h3>
            <p className="lead">
              Ser la firma latinoamericana de referencia en sostenibilidad operativa, donde cada intervención deje capacidad
              instalada y resultados visibles en 90 días.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Valores</h3>
            <ul className="list">
              <li><strong>Impacto primero:</strong> priorizamos lo que cambia resultados, no el papel.</li>
              <li><strong>Evidencia y transparencia:</strong> decisiones con datos, tableros y trazabilidad.</li>
              <li><strong>Respeto por las personas:</strong> seguridad, bienestar y desarrollo de capacidades.</li>
              <li><strong>Mejora continua:</strong> iteración rápida, auditorías internas y aprendizaje.</li>
              <li><strong>Ética:</strong> cumplimiento normativo y cero tolerancia a atajos.</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{marginTop: '20px'}}>
          <h3 className="h3">Equipo y gobierno</h3>
          <p className="lead">
            Nuestro equipo integra perfiles HSE, ingenieros de procesos, especialistas en datos y auditores líderes ISO.
            Operamos con un modelo de gobierno simple: responsable ejecutivo del proyecto, PM y responsables por frente
            (riesgos, cumplimiento, datos, cultura). Cada mes entregamos un reporte claro de avances, indicadores y brechas
            por cerrar.
          </p>
        </div>
      </div>
    </section>
  );
}
