export default function KPIs(){
  return (
    <section className="section container">
      <h2 className="h2">KPIs</h2>
      <div className="kpi-grid">
        <div className="card kpi"><div className="num">-35%</div><div className="label">Incidentes</div><div className="label">en 12 meses</div></div>
        <div className="card kpi"><div className="num">+25%</div><div className="label">Cumplimiento</div><div className="label">efectivo</div></div>
        <div className="card kpi"><div className="num">90 días</div><div className="label">Tiempo a auditoría</div><div className="label">promedio</div></div>
      </div>
    </section>
  );
}
