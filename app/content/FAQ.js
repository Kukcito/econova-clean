'use client';
import { useState } from 'react';
import { faqs } from '../content/home.data';

export default function FAQ(){
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section container">
      <h2 className="h2">Preguntas frecuentes</h2>
      <div className="faq">
        {faqs.map(([q,a],i)=>(
          <details key={i} open={open===i} onToggle={(e)=> e.target.open && setOpen(i)}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
