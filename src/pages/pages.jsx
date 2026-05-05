import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import ProgramList from '../components/ProgramList.jsx'
import { img_p3 } from '../assets/images.js'

export function Programas() {
  useReveal()
  useEffect(() => { window.scrollTo(0,0) }, [])
  return (
    <>
      <SEO
        title="Programas de Desenvolvimento Corporativo — Comunicação e Liderança"
        description="6 programas in company: NEURA Corporativo, Comunicação Magnética, Confiabilidade Comportamental, Cultura em Movimento, palestra e day training."
        keywords="programas desenvolvimento corporativo, treinamento comunicação liderança, workshop equipes, cultura organizacional, palestra comunicação empresas"
        url="/programas"
      />
      <section style={{ paddingTop:'5.5rem' }}>
        <div className="inner">
          <div className="section-tag reveal">Programas de Desenvolvimento</div>
          <h1 className="section-title reveal" style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)' }}>
            Formação que<br /><em>muda comportamento.</em>
          </h1>
          <p className="reveal" style={{ fontSize:'.94rem',color:'var(--muted)',maxWidth:540,lineHeight:1.8,fontWeight:300,marginTop:'.75rem' }}>
            Programas in company — com método, não com motivação de palco.
          </p>
          <ProgramList />
        </div>
      </section>
    </>
  )
}

// ─── Diagnósticos ─────────────────────────────────────────────────────────────
export function Diagnosticos() {
  useReveal()
  const nav = useNavigate()
  useEffect(() => { window.scrollTo(0,0) }, [])
  return (
    <>
      <SEO
        title="Diagnósticos Gratuitos — NEURA para Equipes e LUX para Especialistas"
        description="Dois diagnósticos online gratuitos: NEURA para equipes corporativas (9 dimensões organizacionais) e LUX para especialistas e coaches (9 pilares do negócio de conhecimento)."
        url="/diagnosticos"
      />
      <section style={{ paddingTop:'5.5rem' }}>
        <div className="inner">
          <div className="section-tag reveal">Diagnósticos Online</div>
          <h1 className="section-title reveal" style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)' }}>
            Mapeie antes<br /><em>de agir.</em>
          </h1>
          <p className="reveal" style={{ fontSize:'.94rem',color:'var(--muted)',maxWidth:500,lineHeight:1.8,fontWeight:300,marginTop:'.75rem' }}>
            Dois instrumentos gratuitos, imediatos e reveladores.
          </p>
          <div className="diag-grid" style={{ marginTop:'2.5rem' }}>
            <div className="diag-card reveal">
              <div className="diag-badge c">Para Equipes e Empresas · Gratuito</div>
              <div className="diag-name">Diagnóstico NEURA<br /><em style={{color:'var(--cyan)',fontFamily:"'Playfair Display',serif"}}>para sua equipe</em></div>
              <div className="diag-desc">Avalia 9 dimensões de eficácia organizacional: alinhamento, diagnóstico, design, engajamento, transferência, medição, comunicação, cultura e transformação.</div>
              <div style={{display:'flex',flexDirection:'column',gap:'.45rem'}}>
                {['9 dimensões organizacionais','Gráfico radar com resultado imediato','Ideal para RH, Diretores e C-Level','Dados salvos para análise comparativa'].map((f,i)=>(
                  <div key={i} className="diag-feat">{f}</div>
                ))}
              </div>
              <a className="diag-btn c" href="https://neura.institutosiqueira.com.br" target="_blank" rel="noopener noreferrer">Acesse já</a>
            </div>
            <div className="diag-card reveal rd1">
              <div className="diag-badge g">Para Especialistas · Gratuito</div>
              <div className="diag-name">Diagnóstico LUX<br /><em style={{color:'var(--gold)',fontFamily:"'Playfair Display',serif"}}>A Engrenagem do Expert</em></div>
              <div className="diag-desc">9 pilares do negócio de conhecimento. Para coaches, consultores e formadores que querem crescer com estrutura.</div>
              <div style={{display:'flex',flexDirection:'column',gap:'.45rem'}}>
                {['9 pilares do negócio de conhecimento','Engrenagem visual com scores por pilar','Ideal para coaches e consultores','Resultado em PDF para download'].map((f,i)=>(
                  <div key={i} className="diag-feat">{f}</div>
                ))}
              </div>
              <a className="diag-btn g" href="https://lux.institutosiqueira.com.br" target="_blank" rel="noopener noreferrer">Acesse já</a>
            </div>
          </div>
          <div style={{marginTop:'2rem',padding:'1.75rem 2rem',background:'rgba(0,201,200,.05)',border:'1px solid var(--line)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1.5rem'}} className="reveal">
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',fontWeight:700,color:'var(--white)',marginBottom:'.35rem'}}>Quer interpretar o resultado com Paulinho?</div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:'.84rem',fontWeight:300,color:'var(--muted)'}}>Uma sessão de 45 minutos para transformar o diagnóstico em plano de ação.</div>
            </div>
            <button className="btn-c" onClick={()=>nav('/contato')}>Agendar sessão</button>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Historia ─────────────────────────────────────────────────────────────────
const tlItems = [
  { year:'1990s', txt:<><strong>Engenharia Mecânica</strong> · Univ. Cruzeiro do Sul. Primeiro emprego aos 16 anos.</> },
  { year:'2010s', txt:<><strong>PNL Trainer</strong> com John Grinder (Portugal). Hipnose clínica. Clown e improviso.</> },
  { year:'2016',  txt:<>Lançamento do <strong>Coachcast Brasil</strong> — 1º podcast de desenvolvimento humano do Brasil.</> },
  { year:'2018',  txt:<><strong>Neuroeducação & Neurocomunicação</strong> (PUCPR). Angola e Filipinas.</> },
  { year:'2024',  txt:<>Lançamento do <strong>Instituto Siqueira</strong> — Academia Engenharia da Mente.</> },
]

export function Historia() {
  useReveal()
  const nav = useNavigate()
  useEffect(() => { window.scrollTo(0,0) }, [])
  return (
    <>
      <SEO
        title="Paulinho Siqueira — De Engenheiro a Engenheiro da Mente"
        description="A história de Paulinho Siqueira: engenheiro mecânico que se tornou PNL Trainer com John Grinder, MasterCoach e criador do Coachcast Brasil — o 1º podcast de desenvolvimento humano do Brasil."
        keywords="Paulinho Siqueira história, engenheiro da mente, PNL trainer Brasil, Coachcast Brasil, comunicação magnética, quem é Paulinho Siqueira"
        url="/historia"
      />
      <section style={{ paddingTop:'5.5rem' }}>
        <div className="inner" style={{ maxWidth:820 }}>
          <div className="section-tag reveal">Minha história</div>
          <h1 className="section-title reveal" style={{ fontSize:'clamp(2rem,5vw,3.8rem)' }}>
            De engenheiro a<br /><em>Engenheiro da Mente.</em>
          </h1>
          <div style={{ display:'flex',flexDirection:'column',gap:'1.75rem',marginTop:'2rem' }}>
            <p className="reveal" style={{ fontSize:'.95rem',color:'var(--muted)',lineHeight:1.9,fontWeight:300 }}>
              Desde criança, precisei entender como as coisas funcionam por dentro. Não apenas o que elas fazem — mas <strong style={{color:'var(--white)',fontWeight:500}}>por que</strong> fazem. Essa curiosidade me levou à engenharia, e a engenharia me levou às pessoas.
            </p>
            <blockquote className="reveal" style={{ padding:'1.4rem 1.75rem',borderLeft:'3px solid var(--cyan)',background:'rgba(0,201,200,.05)',fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',fontStyle:'italic',color:'var(--white)',lineHeight:1.6 }}>
              "Sempre precisei entender não o que as coisas fazem, mas <em>por que</em> elas fazem."
            </blockquote>
            <p className="reveal" style={{ fontSize:'.95rem',color:'var(--muted)',lineHeight:1.9,fontWeight:300 }}>
              A formação como MasterCoach, a certificação em <strong style={{color:'var(--white)',fontWeight:500}}>PNL Trainer com John Grinder</strong> em Portugal, a hipnose clínica e a pós-graduação em neuroeducação (PUCPR) — não foi acumulação de diplomas. Foi a construção de um único método.
            </p>
            <p className="reveal" style={{ fontSize:'.95rem',color:'var(--muted)',lineHeight:1.9,fontWeight:300 }}>
              Em 2016, lancei o <strong style={{color:'var(--white)',fontWeight:500}}>Coachcast Brasil</strong> — o primeiro podcast de desenvolvimento humano do Brasil. 1.800+ episódios. Nas Filipinas, fizemos uma pessoa levantar outra com dois dedos — depois de uma mudança de crença. Não é mágica. É engenharia da mente em ação.
            </p>
          </div>
          {/* SINGLE PHOTO */}
          <div className="historia-photo reveal">
            <img src={img_p3} alt="Paulinho Siqueira" />
            <div className="historia-photo-overlay" />
            <div className="historia-photo-quote">
              "Transformando Comunicação<br />em Engenharia da Mente."
            </div>
          </div>

          <div style={{ marginTop:'2rem' }} className="reveal">
            <div className="section-tag">Linha do tempo</div>
            <div style={{ display:'flex',flexDirection:'column',gap:'.85rem',marginTop:'1rem' }}>
              {tlItems.map((t,i)=>(
                <div key={i} style={{ display:'grid',gridTemplateColumns:'3.5rem 1fr',gap:'.85rem',alignItems:'start' }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.1rem',color:'var(--gold)' }}>{t.year}</span>
                  <span style={{ fontSize:'.84rem',color:'var(--muted)',fontWeight:300,lineHeight:1.65 }}>{t.txt}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop:'2.5rem',display:'flex',gap:'.75rem',flexWrap:'wrap' }} className="reveal">
            <button className="btn-c" onClick={()=>nav('/contato')}>Trabalhar com Paulinho</button>
            <button className="btn-o" onClick={()=>nav('/programas')}>Ver programas</button>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── Contato ──────────────────────────────────────────────────────────────────
import { useRef } from 'react'

const interests = ['NEURA Corporativo','Comunicação Magnética','Confiabilidade Comportamental','Cultura em Movimento','A Voz que Transforma','Day Training','Diagnóstico NEURA','Diagnóstico LUX','Outro']

export function Contato() {
  useReveal()
  useEffect(() => { window.scrollTo(0,0) }, [])
  const r = { nome:useRef(),empresa:useRef(),cargo:useRef(),wa:useRef(),inter:useRef(),pessoas:useRef(),prev:useRef(),msg:useRef() }
  const submit = () => {
    const g = k => r[k].current?.value?.trim() || ''
    let t = 'Olá Paulinho! Vim pelo institutosiqueira.com.br.'
    if(g('nome'))    t += `\n\nNome: ${g('nome')}`
    if(g('empresa')) t += `\nEmpresa: ${g('empresa')}`
    if(g('cargo'))   t += `\nCargo: ${g('cargo')}`
    if(g('inter'))   t += `\nInteresse: ${g('inter')}`
    if(g('pessoas')) t += `\nPessoas: ${g('pessoas')}`
    if(g('msg'))     t += `\n\nMensagem: ${g('msg')}`
    window.open('https://wa.me/5511920926873?text='+encodeURIComponent(t),'_blank')
  }
  return (
    <>
      <SEO title="Contato — Solicitar Proposta de Programa Corporativo" description="Fale com Paulinho Siqueira para contratar programas de desenvolvimento corporativo. WhatsApp: +55 11 92092-6873. São Paulo e todo o Brasil." url="/contato" />
      <section style={{ paddingTop:'5.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', top:0, left:0, width:'40%', height:'100%',
          backgroundImage:`url(${img_p3})`,
          backgroundSize:'cover', backgroundPosition:'center top',
          opacity:.07, filter:'grayscale(100%)',
          zIndex:0, pointerEvents:'none',
          maskImage:'linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)',
          WebkitMaskImage:'linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)',
        }} />
        <div className="inner" style={{ position:'relative', zIndex:1 }}>
          <div className="section-tag reveal">Contato</div>
          <h1 className="section-title reveal" style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)' }}>Vamos construir<br /><em>juntos.</em></h1>
          <div className="contact-grid" style={{ marginTop:'2.5rem' }}>
            <div className="reveal">
              <p style={{ fontSize:'.94rem',color:'var(--muted)',fontWeight:300,lineHeight:1.8,marginBottom:'2rem' }}>Se você chegou até aqui, algo disse que vale a conversa.</p>
              <div>
                {[['WhatsApp',<a href="https://wa.me/5511920926873">+55 11 92092-6873</a>],['Instagram',<a href="https://instagram.com/engenheirodamente" target="_blank" rel="noopener noreferrer">@engenheirodamente</a>],['LinkedIn',<a href="#">Paulinho Siqueira</a>],['Base',<>São Paulo, Brasil · Atendimento nacional e internacional</>]].map(([l,v],i)=>(
                  <div key={i} className="ci-item"><span className="ci-lbl">{l}</span><span className="ci-val">{v}</span></div>
                ))}
              </div>
            </div>
            <div className="reveal rd2">
              <div className="form">
                <div className="frow">
                  <div className="fg"><label>Nome</label><input ref={r.nome} type="text" placeholder="Seu nome" /></div>
                  <div className="fg"><label>Empresa</label><input ref={r.empresa} type="text" placeholder="Sua empresa" /></div>
                </div>
                <div className="frow">
                  <div className="fg"><label>Cargo</label><input ref={r.cargo} type="text" placeholder="Seu cargo" /></div>
                  <div className="fg"><label>WhatsApp</label><input ref={r.wa} type="tel" placeholder="+55 (11) 99999-9999" /></div>
                </div>
                <div className="fg"><label>Interesse</label>
                  <select ref={r.inter}><option value="">Selecione...</option>{interests.map(o=><option key={o}>{o}</option>)}</select>
                </div>
                <div className="frow">
                  <div className="fg"><label>Nº de pessoas</label><input ref={r.pessoas} type="text" placeholder="Estimativa" /></div>
                  <div className="fg"><label>Previsão</label><input ref={r.prev} type="text" placeholder="Quando?" /></div>
                </div>
                <div className="fg"><label>Mensagem</label><textarea ref={r.msg} placeholder="Conte sobre sua necessidade..." /></div>
                <button className="fsub" onClick={submit}>Solicitar Proposta →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
