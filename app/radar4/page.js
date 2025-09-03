// app/radar4/page.js
import Radar4 from '../components/Radar4';

export const metadata = { title: 'Radar4' };

export default function Radar4Page() {
  return (
    <section className="section container">
      <p className="lead">Priorización con datos</p>
      <h1>Radar4: decide dónde enfocar primero</h1>
      <p>
        Radar4 es nuestro enfoque para priorizar acciones por impacto: combina criticidad, esfuerzo,
        costo y cumplimiento para definir una secuencia clara de ejecución con retorno medible.
      </p>

      {/* Reutiliza el módulo de Radar4 que ya tienes */}
      <div style={{ marginTop: '24px' }}>
        <Radar4 />
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h3>Beneficios</h3>
        <ul>
          <li>Menos incidentes y mejor cumplimiento</li>
          <li>Secuencia clara de iniciativas con ROI</li>
          <li>Alineación con objetivos de negocio</li>
        </ul>
      </div>
    </section>
  );
}
