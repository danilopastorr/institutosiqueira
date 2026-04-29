import './International.css'

export default function International() {
  return (
    <section className="intl-section">
      <div className="intl-inner">
        <div className="reveal">
          <div className="section-label">Atuação Internacional</div>
          <h2 className="section-title">Além das<br /><em>fronteiras.</em></h2>
          <p className="intl-body" style={{ marginTop: '1.5rem' }}>
            Treinamentos conduzidos em diferentes continentes, adaptando metodologia e dinâmicas
            para contextos culturais distintos — sem perder a profundidade do método.
          </p>
          <div className="intl-flags">
            {[
              { emoji: '🇧🇷', country: 'Brasil', detail: 'Base · São Paulo' },
              { emoji: '🇦🇴', country: 'Angola', detail: 'Treinamento Corporativo' },
              { emoji: '🇵🇭', country: 'Filipinas', detail: 'Ensaio Cognitivo · PNL' },
            ].map((f, i) => (
              <div key={i} className={`flag-card reveal reveal-d${i + 1}`}>
                <span className="flag-emoji">{f.emoji}</span>
                <div className="flag-info">
                  <span className="flag-country">{f.country}</span>
                  <span className="flag-detail">{f.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal reveal-d2">
          <div className="intl-highlight">20+</div>
          <div className="intl-highlight-label">Anos de formação ativa</div>
          <p className="intl-body">
            Nas Filipinas, conduzi um experimento que ficou gravado na memória de todos os
            participantes: usando ensaio cognitivo e reframe de PNL, fizemos uma pessoa levantar
            outra com dois dedos — depois de uma mudança de crença sobre o que era possível.
          </p>
          <p className="intl-body" style={{ marginTop: '1.4rem' }}>
            Não é mágica. É engenharia da mente em ação.
          </p>
        </div>
      </div>
    </section>
  )
}
