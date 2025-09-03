export default function Sectors(){
  return (
    <section id="sectores" className="section">
      <div className="container">
        <p className="kicker">Dónde operamos</p>
        <h2 className="h2">Sectores y contextos donde entregamos impacto</h2>
        <p className="lead-long" style={{maxWidth:'82ch'}}>
          Cada sector exige controles, métricas y cultura particulares. Adaptamos la metodología a tu realidad operativa:
          multi-sitio, contratistas, plantas críticas, obra, logística, retail o gobierno.
        </p>

        <div className="grid-3" style={{marginTop: '20px'}}>
          <div className="card">
            <h3 className="h3">Industria & manufactura</h3>
            <p className="lead">Procesos, residuos, emisiones, seguridad de máquina y cultura.</p>
            <ul className="list">
              <li>Evaluación de riesgos por línea</li>
              <li>KPIs de scrap, consumo y accidentes</li>
              <li>Inspecciones y LOTO digital</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Energía & utilities</h3>
            <p className="lead">Operación segura y reportes para stakeholders regulados.</p>
            <ul className="list">
              <li>Planes de contingencia y permisos de trabajo</li>
              <li>Monitoreo ambiental y emisiones</li>
              <li>Auditorías regulatorias efectivas</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Construcción & infraestructura</h3>
            <p className="lead">Control de obra, contratistas y seguridad en sitio.</p>
            <ul className="list">
              <li>Inducciones, EPP y permisos críticos</li>
              <li>Inspecciones móviles con evidencia</li>
              <li>Tableros diarios de avance y riesgos</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Alimentos & bebidas</h3>
            <p className="lead">Ambiental, seguridad y cumplimiento integrado con inocuidad.</p>
            <ul className="list">
              <li>Gestión de residuos, agua y energía</li>
              <li>Capacitación en piso con micro-módulos</li>
              <li>Auditorías internas integradas</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Logística & retail</h3>
            <p className="lead">Flotas, bodegas, riesgos personales y de terceros.</p>
            <ul className="list">
              <li>Controles de tráfico y carga</li>
              <li>Investigación de incidentes</li>
              <li>Indicadores de severidad y frecuencia</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h3">Gobierno</h3>
            <p className="lead">Programas y reportes alineados a ODS, transparencia y control.</p>
            <ul className="list">
              <li>Tableros de avances públicos</li>
              <li>Capacidad instalada en dependencias</li>
              <li>Evaluaciones independientes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
