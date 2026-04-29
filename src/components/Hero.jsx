import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">Engenheiro da Mente · São Paulo, Brasil</div>
        <h1 className="hero-title">
          Paulinho<br /><span>Siqueira</span>
        </h1>
        <p className="hero-subtitle">
          Trago o rigor da engenharia para dentro do comportamento humano.
        </p>
        <div className="hero-ctas">
          <a href="#programas" className="btn-primary">Para Empresas</a>
          <a href="#academia" className="btn-secondary">Academia</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-placeholder">
          <svg className="hero-gear" viewBox="0 0 100 100" fill="none">
            <path fill="rgba(201,168,76,1)" d="M43.3,7.8l-2,7.4c-1.4,0.4-2.7,0.9-4,1.5l-6.5-4.2l-8.5,8.5l4.2,6.5c-0.6,1.3-1.1,2.6-1.5,4l-7.4,2v12l7.4,2c0.4,1.4,0.9,2.7,1.5,4l-4.2,6.5l8.5,8.5l6.5-4.2c1.3,0.6,2.6,1.1,4,1.5l2,7.4h12l2-7.4c1.4-0.4,2.7-0.9,4-1.5l6.5,4.2l8.5-8.5l-4.2-6.5c0.6-1.3,1.1-2.6,1.5-4l7.4-2v-12l-7.4-2c-0.4-1.4-0.9-2.7-1.5-4l4.2-6.5l-8.5-8.5l-6.5,4.2c-1.3-0.6-2.6-1.1-4-1.5l-2-7.4H43.3z M49.3,35c7.9,0,14.3,6.4,14.3,14.3c0,7.9-6.4,14.3-14.3,14.3c-7.9,0-14.3-6.4-14.3-14.3C35,41.4,41.4,35,49.3,35z"/>
          </svg>
          <div className="hero-portrait-area">
            <div className="portrait-frame">
              <div className="portrait-initials">PS</div>
              <div className="portrait-label">
                Paulinho Siqueira<br />
                Engenheiro da Mente · PNL Trainer · MasterCoach
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-text">EM</div>
      </div>
    </section>
  )
}
