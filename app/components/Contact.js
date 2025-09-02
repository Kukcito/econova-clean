export default function Contact(){
  return (
    <section id="contacto" className="section container">
      <h2 className="h2">Contacto</h2>
      <form method="post" action="/api/contact" className="card" style={{display:'grid',gap:12}}>
        <input name="name" placeholder="Nombre" required style="padding:10px;border-radius:8px;border:1px solid var(--border);background:#0b132f;color:var(--text)"/>
        <input type="email" name="email" placeholder="Email" required style="padding:10px;border-radius:8px;border:1px solid var(--border);background:#0b132f;color:var(--text)"/>
        <textarea name="message" rows="4" placeholder="Cuéntanos tu reto" required style="padding:10px;border-radius:8px;border:1px solid var(--border);background:#0b132f;color:var(--text)"></textarea>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
      <p className="lead" style={{marginTop:10}}>También en <a href="mailto:contacto@econova.mx">contacto@econova.mx</a></p>
    </section>
  );
}
