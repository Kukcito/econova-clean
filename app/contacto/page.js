export const metadata = { title: "Contacto — ECONOVA" };

export default function Contacto() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Agenda un diagnóstico</h1>
        <p className="lead">
          45–60 minutos para entender tu contexto, revisar riesgos y definir
          quick wins. Recibirás una propuesta clara con tiempos y costos.
        </p>

        <div className="card" style={{ marginTop: 16 }}>
          <p><b>Email:</b> contacto@econova.mx</p>
          <p><b>Teléfono:</b> +52 55 XXX XXXX</p>
          <p><b>Ubicación:</b> CDMX · México y LATAM (modalidad híbrida).</p>
        </div>
      </div>
    </section>
  );
}
