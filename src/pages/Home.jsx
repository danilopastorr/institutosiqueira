import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import ProgramList from '../components/ProgramList.jsx'
import { img_logo, img_p1, img_p2, img_p4 } from '../assets/images.js'
import './Home.css'

const testimonials = [
  { txt:'A forma como o Paulinho conecta rigor analítico com desenvolvimento humano é única. Saí com ferramentas práticas e uma nova leitura do meu papel como líder.', name:'Diretor de Operações', role:'Empresa de Energia · Brasil' },
  { txt:'Nunca imaginei que um programa de comunicação pudesse mudar minha relação com minha equipe tão profundamente. O NEURA deveria ser obrigatório para qualquer C-level.', name:'CEO', role:'Indústria · São Paulo' },
  { txt:'Ele faz você pensar e sentir ao mesmo tempo. A metodologia é sólida, a entrega é magnética, o resultado é real.', name:'Gerente de RH', role:'Multinacional · Brasil' },
]

export default function Home() {
  useReveal()
  const nav = useNavigate()
  useEffect(() => { window.scrollTo(0,0) }, [])

  return (
    <>
      <SEO
        title="Programas Corporativos de Comunicação e Liderança em São Paulo"
        description="Paulinho Siqueira — Engenheiro da Mente. Programas de desenvolvimento corporativo: comunicação magnética, neuroliderança e cultura organizacional para empresas."
        keywords="programas desenvolvimento corporativo São Paulo, comunicação corporativa, treinamento liderança, coaching executivo, neuroeducação empresas"
        url="/"
      />

      {/* ── HERO ── */}
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="hero-inner">
            <div className="eyebrow"><div className="dot" /><div className="eline" />Academia Engenharia da Mente</div>
            <h1 className="hero-name">Paulinho<br /><em>Siqueira</em></h1>
            <div className="hero-role">Engenheiro da Mente</div>
            <p className="hero-sub">Trago o <strong>rigor da engenharia</strong> para dentro do comportamento humano — neurociência, PNL e comunicação de alto impacto para empresas que exigem resultado real.</p>
            <div className="hero-ctas">
              <button className="btn-c" onClick={() => nav('/programas')}>Programas de Desenvolvimento</button>
              <button className="btn-o" onClick={() => nav('/diagnosticos')}>Ver Diagnósticos</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="stat-n c">20+</span><span className="stat-l">Anos de formação</span></div>
              <div className="stat-item"><span className="stat-n g">1.8K+</span><span className="stat-l">Podcast ep.</span></div>
              <div className="stat-item"><span className="stat-n p">3</span><span className="stat-l">Continentes</span></div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={img_p4} alt="Paulinho Siqueira — Engenheiro da Mente" />
        </div>
      </div>

      {/* Badge fixo */}
      <div className="badge-fixed">
        <img src={img_logo} alt="Academia Engenharia da Mente" />
      </div>

      {/* ── QUOTE ── */}
      <div className="quote-strip">
        <p>"Não ensino comunicação. <span>Elimino suas falhas</span> com precisão de engenheiro."</p>
      </div>

      {/* ── PROGRAMAS ── */}
      <section>
        <div className="inner">
          <div className="section-tag reveal">Programas de Desenvolvimento</div>
          <h2 className="section-title reveal">O que entrego<br /><em>para sua empresa.</em></h2>
          <ProgramList limit={4} />
          <div style={{ marginTop:'1.75rem' }} className="reveal">
            <button className="btn-o" onClick={() => nav('/programas')}>Ver todos os programas →</button>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS — p1 como marca d'água ── */}
      <section className="bg2" style={{ position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url(${img_p1})`,
          backgroundSize:'cover', backgroundPosition:'center top',
          opacity:.06, filter:'grayscale(100%)',
          zIndex:0, pointerEvents:'none',
        }} />
        <div className="inner" style={{ position:'relative', zIndex:1 }}>
          <div className="section-tag reveal">Depoimentos</div>
          <h2 className="section-title reveal">Quem viveu<br /><em>o método.</em></h2>
          <div className="test-grid">
            {testimonials.map((t,i) => (
              <div key={i} className={`test-card reveal ${i>0?`rd${i}`:''}`}>
                <span className="tq">"</span>
                <p className="ttxt">{t.txt}</p>
                <div className="tauth"><div className="tname">{t.name}</div><div className="trole">{t.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICOS — p2 como marca d'água ── */}
      <section style={{ position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', top:0, right:0,
          width:'45%', height:'100%',
          backgroundImage:`url(${img_p2})`,
          backgroundSize:'cover', backgroundPosition:'center top',
          opacity:.07, filter:'grayscale(100%)',
          zIndex:0, pointerEvents:'none',
          maskImage:'linear-gradient(to left,rgba(0,0,0,.5) 0%,transparent 100%)',
          WebkitMaskImage:'linear-gradient(to left,rgba(0,0,0,.5) 0%,transparent 100%)',
        }} />
        <div className="inner" style={{ position:'relative', zIndex:1 }}>
          <div className="section-tag reveal">Diagnósticos Gratuitos</div>
          <h2 className="section-title reveal">Mapeie antes<br /><em>de agir.</em></h2>
          <div className="diag-grid">
            <div className="diag-card reveal">
              <div className="diag-badge c">Para Equipes · Gratuito</div>
              <div className="diag-name">Diagnóstico NEURA<br /><em style={{color:'var(--cyan)',fontFamily:"'Playfair Display',serif"}}>para sua equipe</em></div>
              <div className="diag-desc">9 dimensões de eficácia organizacional. Resultado imediato com gráfico radar.</div>
              <a className="diag-btn c" href="https://neura.institutosiqueira.com.br" target="_blank" rel="noopener noreferrer">Acesse já</a>
            </div>
            <div className="diag-card reveal rd1">
              <div className="diag-badge g">Para Especialistas · Gratuito</div>
              <div className="diag-name">Diagnóstico LUX<br /><em style={{color:'var(--gold)',fontFamily:"'Playfair Display',serif"}}>A Engrenagem do Expert</em></div>
              <div className="diag-desc">9 pilares do negócio de conhecimento. Identifica o pilar mais fraco e o próximo passo.</div>
              <a className="diag-btn g" href="https://lux.institutosiqueira.com.br" target="_blank" rel="noopener noreferrer">Acesse já</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BLOG ── */}
      <section className="bg2" style={{ padding:'2.5rem var(--sp)', textAlign:'center' }}>
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:'.9rem', color:'var(--muted)', marginBottom:'1.25rem' }}>
          Conteúdo novo toda semana sobre comunicação, liderança e comportamento humano.
        </p>
        <button className="btn-c" onClick={() => nav('/blog')}>Ver artigos do Blog</button>
      </section>
    </>
  )
}
