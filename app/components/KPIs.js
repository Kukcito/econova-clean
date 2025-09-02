export default function KPIs(){
  const items = [
    {value:'-35%', label:'Incidentes en 12 meses'},
    {value:'+25%', label:'Cumplimiento efectivo'},
    {value:'90 días', label:'Promedio a auditoría'},
  ]
  return (
    <section className="section container">
      <h2 className="h2" data-animate>Impacto probado</h2>
      <div className="grid grid-3">
        {items.map((k,i)=>(
          <div className="card kpi" key={i} data-animate>
            <div className="value">{k.value}</div>
            <div className="label">{k.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
