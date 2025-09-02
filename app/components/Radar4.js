export default function Radar4(){
  return (
    <section id="radar4" className="section container">
      <h2 className="h2" data-animate>Radar4: decide por impacto</h2>
      <div className="grid grid-2">
        <div className="card" data-animate>
          <p className="lead">
            Nuestra visual prioriza riesgos y ODS con <strong>puntuación multicriterio</strong>.
            Permite simular escenarios, trazar responsables y medir ROI de acciones.
          </p>
          <ul>
            <li>Cuadrantes por severidad y urgencia</li>
            <li>Indicadores GRI y ODS vinculados</li>
            <li>Trazabilidad y evidencia</li>
          </ul>
        </div>
        <div className="card" data-animate>
          {/* Radar SVG ligero como placeholder */}
          <svg viewBox="0 0 260 260" width="100%" height="220" aria-hidden>
            <defs><radialGradient id="g" r="1"><stop offset="0" stopColor="#22c55e44"/><stop offset="1" stopColor="#22c55e00"/></radialGradient></defs>
            <circle cx="130" cy="130" r="120" fill="url(#g)" stroke="#22c55e66"/>
            <g stroke="#60a5fa66"><line x1="10" y1="130" x2="250" y2="130"/><line x1="130" y1="10" x2="130" y2="250"/></g>
            <polygon points="130,40 210,130 160,220 80,190 50,120" fill="#60a5fa33" stroke="#60a5faaa"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
