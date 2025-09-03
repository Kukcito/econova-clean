export default function Compliance(){
  return (
    <section id="cumplimiento" className="section">
      <div className="container">
        <p className="kicker">Marcos y estándares</p>
        <h2 className="h2">Cumplimiento que habilita el negocio</h2>
        <p className="lead-long" style={{maxWidth:'82ch'}}>
          Diseñamos e integramos sistemas de gestión alineados con normas internacionales y requisitos legales locales.
          Nuestra filosofía: “cumplimiento útil”. Cada control y registro debe servir para gestionar riesgos, medir desempeño
          y tomar decisiones, además de cumplir inspecciones y auditorías.
        </p>

        <div className="grid-3" style={{marginTop: '20px'}}>
          <div className="card">
            <h3 className="h3">ISO 14001</h3>
            <p className="lead">Sistema de gestión ambiental centrado en riesgos y desempeño.</p>
            <ul className="list">
              <li>Identificación de aspectos/impactos & matriz legal</li>
              <li>Controles operativos y respuesta a emergencias</li>
              <li>KPIs ambientales y revisión por la dirección</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">ISO 45001</h3>
            <p className="lead">Seguridad y salud ocupacional con foco en prevención y cultura.</p>
            <ul className="list">
              <li>Evaluación de riesgos, permisos y capacitaciones</li>
              <li>Investigación de incidentes y acciones correctivas</li>
              <li>Comités, auditorías internas y mejora continua</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">GRI & ODS</h3>
            <p className="lead">Datos de sostenibilidad y narrativa para grupos de interés.</p>
            <ul className="list">
              <li>Modelo de datos trazable y gobernado</li>
              <li>Indicadores materiales y tableros ejecutivos</li>
              <li>Reporte anual y vínculo con ODS prioritarios</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{marginTop: '20px'}}>
          <h3 className="h3">Gobierno de datos y auditoría</h3>
          <p className="lead">
            Aseguramos calidad y trazabilidad de la información: fuentes, responsables, validaciones y bitácoras. Esto
            permite auditorías fluidas, confiabilidad de KPIs y reportes que resisten escrutinio.
          </p>
        </div>
      </div>
    </section>
  );
}
