// app/metodologia/page.js
import Methodology from '../components/Methodology';

export const metadata = { title: 'Metodología' };

export default function MetodologiaPage() {
  return (
    <section className="section container">
      <p className="lead">Cómo trabajamos</p>
      <h1>Metodología ECONOVA</h1>
      <p>
        Aplicamos una metodología práctica orientada a resultados: diagnóstico, priorización por impacto,
        ejecución ágil con quick-wins y medición continua. Integra estándares como ISO 14001 / ISO 45001
        y marcos de reporte (GRI / ODS) para crear valor medible.
      </p>

      {/* Bloque ampliado de metodología (reutiliza tu componente) */}
      <div style={{ marginTop: '24px' }}>
        <Methodology />
      </div>

      {/* Extra opcional en tarjeta */}
      <div className="card" style={{ marginTop: '24px' }}>
        <h3>Entregables típicos</h3>
        <ul>
          <li>Mapa de brechas y roadmap de implementación</li>
          <li>Matriz de priorización por riesgo/impacto</li>
          <li>Quick-wins (30–45 días) y tablero ejecutivo</li>
        </ul>
      </div>
    </section>
  );
}
