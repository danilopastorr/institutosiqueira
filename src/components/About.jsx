import './About.css'

const stats = [
  { number: '20+', desc: 'Anos formando profissionais' },
  { number: '1.8k', desc: 'Episódios de podcast' },
  { number: '3', desc: 'Continentes atendidos' },
  { number: '∞', desc: 'Vidas transformadas' },
]

export default function About() {
  return (
    <section id="sobre">
      <div className="about-grid">
        <div className="reveal">
          <div className="section-label">Sobre</div>
          <h2 className="section-title">
            Engenharia<br />como<br /><em>método</em><br />de vida.
          </h2>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className={`stat-box reveal reveal-d${i + 1}`}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d2">
          <div className="about-text">
            <p>
              Desde criança, precisei entender como as coisas funcionam. Não apenas o que
              elas fazem — mas <strong>por que</strong> fazem. Essa curiosidade me levou à
              engenharia, e a engenharia me levou às pessoas.
            </p>
            <p>
              Descobri que o maior sistema a ser compreendido não é nenhuma máquina. É o
              ser humano. Seu comportamento, sua comunicação, sua capacidade de aprender,
              liderar e transformar.
            </p>
            <p>
              Hoje integro <strong>neurociência, PNL, coaching e comunicação persuasiva</strong>{' '}
              numa metodologia que trata o desenvolvimento humano com o mesmo rigor analítico
              de um projeto de engenharia.
            </p>
          </div>
          <blockquote className="about-quote">
            "Não ensino comunicação. Elimino suas falhas com precisão de engenheiro."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
