import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PROGRAMS = [
  {
    code:'// PROG_01', name:'NEURA Corporativo',
    tag:'Imersão · C-Level & Liderança Sênior',
    desc:'Três imersões mensais de 8 horas cada, estruturadas na Jornada do Herói. Neuroliderança, comunicação de alto impacto e inteligência comportamental para quem lidera organizações.',
    meta:[{l:'Formato',v:'3 imersões / 8h'},{l:'Público',v:'C-Level · Diretores'},{l:'Entrega',v:'In company'}],
    page:'/neura',
  },
  {
    code:'// PROG_02', name:'Comunicação Magnética',
    tag:'Treinamento · Equipes e Líderes',
    desc:'O método que transforma como profissionais se comunicam, persuadem e influenciam. Integra neurociência, PNL e técnicas de presença para gerar conexão real e resultados concretos.',
    meta:[{l:'Formato',v:'Workshop 8h · Imersão 2 dias'},{l:'Público',v:'Líderes · Equipes'},{l:'Entrega',v:'In company · Online'}],
    page:'/contato',
  },
  {
    code:'// PROG_03', name:'Confiabilidade Comportamental',
    tag:'Framework · Cultura',
    desc:'C.O.M.P.O.R.T.A.R. — intervenção estruturada para equipes que precisam elevar execução, responsabilidade e comunicação interna. Comportamento como ativo estratégico.',
    meta:[{l:'Formato',v:'Programa modular'},{l:'Público',v:'Operação · Gestão'},{l:'Entrega',v:'In company'}],
    page:'/contato',
  },
  {
    code:'// PROG_04', name:'Cultura em Movimento',
    tag:'Jornada · Transformação Cultural',
    desc:'P.O.N.T.E., C.A.L.M.A. e C.E.R.T.O. — frameworks para criar pontes entre gestão e equipes e instalar uma cultura de alta performance sustentável.',
    meta:[{l:'Formato',v:'Jornada contínua'},{l:'Público',v:'RH · Liderança'},{l:'Entrega',v:'In company · Online'}],
    page:'/contato',
  },
  {
    code:'// PROG_05', name:'A Voz que Transforma',
    tag:'Palestra · Evento Corporativo',
    desc:'Palestra de alto impacto sobre comunicação, presença e influência. 60 a 120 minutos — ideal para convenções, kick-offs e eventos de liderança.',
    meta:[{l:'Formato',v:'Palestra 60–120 min'},{l:'Público',v:'Todos os níveis'},{l:'Entrega',v:'Presencial · Online'}],
    page:'/contato',
  },
  {
    code:'// PROG_06', name:'Day Training',
    tag:'Imersão · 1 Dia',
    desc:'Imersão de 8 horas baseada na Jornada do Herói. 12 blocos de conteúdo e prática — do autoconhecimento à comunicação de impacto.',
    meta:[{l:'Formato',v:'1 dia / 8h'},{l:'Público',v:'Equipes · Líderes'},{l:'Entrega',v:'Presencial'}],
    page:'/contato',
  },
]

export { PROGRAMS }

export default function ProgramList({ limit }) {
  const [open, setOpen] = useState(null)
  const nav = useNavigate()
  const list = limit ? PROGRAMS.slice(0, limit) : PROGRAMS

  const toggle = i => setOpen(open === i ? null : i)

  return (
    <div className="prog-list">
      {list.map((p, i) => (
        <div key={i} className={`prog-item ${open === i ? 'open' : ''}`}>
          <div className="prog-header" onClick={() => toggle(i)}>
            <div className="prog-left">
              <div className="prog-code">{p.code}</div>
              <div>
                <div className="prog-name">{p.name}</div>
                <div className="prog-tag">{p.tag}</div>
              </div>
            </div>
            <div className="prog-toggle">+</div>
          </div>
          <div className="prog-body">
            <div className="prog-body-inner">
              <div className="prog-desc">{p.desc}</div>
              <div className="prog-meta">
                {p.meta.map((m,j) => (
                  <div key={j} className="pm">
                    <span className="pm-l">{m.l}</span>
                    <span className="pm-v">{m.v}</span>
                  </div>
                ))}
              </div>
              <div className="prog-actions">
                <button className="btn-saiba" onClick={() => nav(p.page)}>
                  {p.page === '/neura' ? 'Ver programa completo' : 'Saiba mais'}
                </button>
                <button className="btn-prop" onClick={() => nav('/contato')}>
                  Solicitar proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
