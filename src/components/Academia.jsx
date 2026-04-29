import './Academia.css'

const items = [
  { tag: 'Apps', text: 'Ferramentas e diagnósticos interativos' },
  { tag: 'Cursos', text: 'Comunicação Magnética · NEURA · Aprender 10x' },
  { tag: 'Conteúdo', text: 'Biblioteca de aulas, e-books e vídeos' },
]

export default function Academia() {
  return (
    <section id="academia" className="academia-section">
      <div className="academia-inner">
        <div className="reveal">
          <div className="section-label">Academia</div>
          <h2 className="section-title">Engenharia<br />da <em>Mente.</em></h2>
          <p className="academia-text" style={{ marginTop: '1.5rem' }}>
            Portal de acesso a todos os programas, ferramentas, apps e conteúdos do ecossistema Instituto Siqueira.
          </p>
          <div className="academia-list">
            {items.map((item, i) => (
              <div key={i} className="academia-item">
                <span className="academia-item-tag">{item.tag}</span>
                <span className="academia-item-text">{item.text}</span>
              </div>
            ))}
          </div>
          <a href="#" className="btn-primary" style={{ marginTop: '2rem' }}>Acessar Academia</a>
        </div>

        <div className="reveal reveal-d2 orbit-container">
          <div className="orbit-ring">
            <div className="orbit-inner">
              <div style={{ textAlign: 'center' }}>
                <div className="orbit-em">EM</div>
                <div className="orbit-label">Academia</div>
              </div>
            </div>
            <div className="orbit-dot orbit-dot-1" />
            <div className="orbit-dot orbit-dot-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
