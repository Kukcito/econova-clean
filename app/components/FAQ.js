export default function FAQ(){
  const items = [
    ['¿Trabajan con sector público e industria?','Sí, contamos con prácticas para ambos.'],
    ['¿Cuánto tarda una certificación ISO?','Depende del punto de partida; activamos un tramo de 90 días para quick wins.'],
    ['¿Pueden ayudar con GRI?','Sí, indicadores, narrativa y tablero ejecutivo.'],
  ];
  return (
    <section id="faq" className="section container">
      <h2 className="h2">Preguntas frecuentes</h2>
      <div className="grid-3">
        {items.map(([q,a])=>(
          <div key={q} className="faq-item">
            <h4>{q}</h4><p style={{margin:0,color:'var(--muted)'}}>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
