export default function Media(){
  return (
    <section id="media" className="section">
      <div className="container">
        <p className="kicker">Material visual</p>
        <h2 className="h2">Imágenes y videos de nuestras soluciones</h2>
        <p className="lead-long" style={{maxWidth:'80ch'}}>
          Sustituye estos placeholders por material propio. Recomendación: usa imágenes 1600×900 (JPG) optimizadas y, para video,
          un thumbnail con enlace a YouTube/Vimeo o un embed ligero en HTML5.
        </p>

        <div className="grid-3" style={{marginTop:'20px'}}>
          {['media-1.jpg','media-2.jpg','media-3.jpg'].map((img) => (
            <a key={img} className="card-media" href="#" aria-label="Ver recurso">
              <img src={`/img/${img}`} alt="Recurso multimedia" />
              <div className="overlay" />
              <div className="content">
                <span className="badge">Demo</span>
                <h3 className="h3">Vista de tablero</h3>
                <p className="lead">KPIs, tendencias y acciones recomendadas</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
