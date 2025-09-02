export default function Footer(){
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand b-invert">ECONOVA</div>
          <p>© {new Date().getFullYear()} Econova. Todos los derechos reservados.</p>
        </div>
        <div className="footer-cta">
          <a className="btn btn-primary" href="mailto:contacto@econova.mx">Escríbenos</a>
        </div>
      </div>
    </footer>
  );
}
