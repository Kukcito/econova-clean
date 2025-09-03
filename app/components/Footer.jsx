// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-2">
        <div>
          <strong>ECONOVA</strong>
          <p className="lead" style={{ marginTop: 8 }}>
            Sostenibilidad & Seguridad basadas en datos.
          </p>
        </div>
        <div className="center">
          <a href="mailto:contacto@econova.mx" className="btn btn-primary">
            contacto@econova.mx
          </a>
        </div>
      </div>
    </footer>
  )
}
