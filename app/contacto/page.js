export const metadata = { title: 'Contacto | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Contacto</h1>
        <p className="lead">Agenda una sesión de 45–60 min para entender tu punto de partida.</p>

        <div className="card" style={{marginTop:16}}>
          <p><strong>Email:</strong> contacto@econova.mx</p>
          <p><strong>WhatsApp:</strong> +52 (55) 0000 0000</p>
          <p><strong>Horario:</strong> L–V 9:00–18:00 (CDMX)</p>
          <a className="btn btn-green" href="mailto:contacto@econova.mx">Agendar diagnóstico</a>
        </div>
      </div>
    </section>
  )
}
