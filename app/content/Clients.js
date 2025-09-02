import { clients } from '../content/home.data';

export default function Clients(){
  return (
    <section id="clientes" className="section container">
      <h2 className="h2">Clientes</h2>
      <div className="logos">
        {clients.map(c=>(
          <div key={c.name} className="logo">
            <img src={c.logo} alt={c.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
