export default function KPIs(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">KPIs</h2>
        <div className="grid-3">
          <div className="card">
            <div className="kpi-value">-35%</div>
            <div className="kpi-label">Incidentes</div>
            <div className="kpi-note">en 12 meses</div>
          </div>
          <div className="card">
            <div className="kpi-value">+25%</div>
            <div className="kpi-label">Cumplimiento efectivo</div>
            <div className="kpi-note">en auditorías</div>
          </div>
          <div className="card">
            <div className="kpi-value">90 días</div>
            <div className="kpi-label">Tiempo a auditoría</div>
            <div className="kpi-note">promedio de implementación</div>
          </div>
        </div>
      </div>
    </section>
  );
}
