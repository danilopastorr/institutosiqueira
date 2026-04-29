import './Podcast.css'

export default function Podcast() {
  return (
    <section style={{ borderTop: '1px solid var(--line)' }}>
      <div className="section-label reveal">Autoridade de Conteúdo</div>
      <h2 className="section-title reveal">
        O primeiro podcast<br />de desenvolvimento<br /><em>humano</em> do Brasil.
      </h2>
      <div className="podcast-inner">
        <div className="podcast-visual reveal">
          <div className="podcast-logo-text">COACHCAST BRASIL</div>
          <div className="podcast-episodes">1800</div>
          <div className="podcast-label">Episódios · 2016 — 2024</div>
        </div>
        <div className="reveal reveal-d2">
          <p className="podcast-text">
            Em 2016, quando podcasts ainda eram raridade no Brasil, lancei o Coachcast Brasil
            — dedicado inteiramente ao desenvolvimento humano, coaching, PNL e comportamento.
          </p>
          <p className="podcast-text" style={{ marginTop: '1.4rem' }}>
            Mais de 1.800 episódios depois, construí uma das maiores bibliotecas de conteúdo de
            desenvolvimento pessoal em língua portuguesa — entrevistando especialistas, compartilhando
            metodologias e formando uma comunidade fiel ao longo de quase uma década.
          </p>
          <p className="podcast-text" style={{ marginTop: '1.4rem' }}>
            Conteúdo consistente é a prova mais honesta de domínio. E o Coachcast é o meu registro.
          </p>
          <a href="#contato" className="btn-primary" style={{ marginTop: '2rem' }}>Falar com Paulinho</a>
        </div>
      </div>
    </section>
  )
}
