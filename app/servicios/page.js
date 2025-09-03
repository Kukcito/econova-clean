// app/servicios/page.js
export const metadata = { title: 'Servicios' };

export default function ServiciosPage() {
  return (
    <section className="section container">
      <p className="lead">Portafolio de servicio</p>
      <h1>Servicios para acelerar tu sostenibilidad</h1>
      <p>
        Diseñamos, implementamos y operamos sistemas que <strong>protegen personas y medio ambiente</strong>,
        entregan evidencia y <strong>crean valor medible</strong> en el negocio.
      </p>

      <div className="card" style={{marginTop:'24px'}}>
        <h3>Diagnóstico & Gap Assessment</h3>
        <ul>
          <li>Assessment en 2–3 semanas</li>
          <li>Entrega ejecutiva + plan táctico</li>
          <li>Quick wins de 30–45 días</li>
        </ul>
      </div>
    </section>
  );
}
