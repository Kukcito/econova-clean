export const metadata = { title: 'Contacto | ECONOVA' }

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Contacto</h1>
        <div className="card" style={{marginTop:16}}>
          <p><strong>Email:</strong> contacto@econova.mx</p>
          <p><strong>WhatsApp:</strong> +52 (55) 0000 0000</p>
          <a className="btn btn-green" href="mailto:contacto@econova.mx">Agendar diagnóstico</a>
        </div>
      </div>
    </section>
  )
}
