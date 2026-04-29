import './Testimonials.css'

const testimonials = [
  { text: 'A forma como o Paulinho conecta rigor analítico com desenvolvimento humano é única. Saí do treinamento com ferramentas práticas e uma nova leitura do meu papel como líder.', name: 'Diretor de Operações', role: 'Empresa de Energia · Brasil' },
  { text: 'Nunca imaginei que um treinamento de comunicação pudesse mudar minha relação com minha equipe tão profundamente. O NEURA deveria ser obrigatório para qualquer C-level.', name: 'CEO', role: 'Indústria · São Paulo' },
  { text: 'O Paulinho tem algo que poucos facilitadores têm: ele faz você pensar e sentir ao mesmo tempo. A metodologia é sólida, a entrega é magnética, o resultado é real.', name: 'Gerente de RH', role: 'Multinacional · Brasil' },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-label reveal">Depoimentos</div>
        <h2 className="section-title reveal">Quem viveu<br /><em>o método.</em></h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card reveal ${i > 0 ? `reveal-d${i}` : ''}`}>
              <span className="testimonial-quote-mark">"</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
