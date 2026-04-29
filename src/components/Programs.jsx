import './Programs.css'

const programs = [
  {
    num: '01', tag: 'Imersão · C-Level & Liderança Sênior', name: 'NEURA Corporativo',
    desc: 'Três imersões mensais de 8 horas cada, estruturadas na Jornada do Herói. Neuroliderança, comunicação de alto impacto e inteligência comportamental para quem lidera organizações.',
    details: [
      { label: 'Formato', value: '3 imersões / 8h' },
      { label: 'Público', value: 'C-Level · Diretores' },
      { label: 'Entrega', value: 'In company' },
    ],
  },
  {
    num: '02', tag: 'Treinamento · Equipes e Líderes', name: 'Comunicação Magnética',
    desc: 'O método que transforma como profissionais se comunicam, persuadem e influenciam. Integra neurociência, PNL e técnicas de presença para gerar conexão real e resultados concretos.',
    details: [
      { label: 'Formato', value: 'Workshop · Imersão' },
      { label: 'Público', value: 'Líderes · Equipes' },
      { label: 'Entrega', value: 'In company · Online' },
    ],
  },
  {
    num: '03', tag: 'Programa Corporativo · Cultura', name: 'Confiabilidade Comportamental',
    desc: 'Framework C.O.M.P.O.R.T.A.R. — intervenção estruturada para equipes que precisam elevar execução, responsabilidade e comunicação interna.',
    details: [
      { label: 'Formato', value: 'Programa modular' },
      { label: 'Público', value: 'Operação · Gestão' },
      { label: 'Entrega', value: 'In company' },
    ],
  },
  {
    num: '04', tag: 'Programa Corporativo · Transformação', name: 'Cultura em Movimento',
    desc: 'Frameworks P.O.N.T.E., C.A.L.M.A. e C.E.R.T.O. para criar pontes entre gestão e equipes e instalar uma cultura de alto desempenho sustentável.',
    details: [
      { label: 'Formato', value: 'Jornada contínua' },
      { label: 'Público', value: 'RH · Liderança' },
      { label: 'Entrega', value: 'In company · Online' },
    ],
  },
]

export default function Programs() {
  return (
    <section id="programas">
      <div className="section-label reveal">Programas Corporativos</div>
      <h2 className="section-title reveal">O que entrego<br />para sua <em>empresa.</em></h2>
      <div className="programs-grid">
        {programs.map((p, i) => (
          <div key={i} className={`program-card reveal ${i % 2 === 1 ? 'reveal-d1' : ''}`}>
            <span className="program-number">{p.num}</span>
            <div className="program-tag">{p.tag}</div>
            <h3 className="program-name">{p.name}</h3>
            <p className="program-desc">{p.desc}</p>
            <div className="program-details">
              {p.details.map((d, j) => (
                <div key={j} className="program-detail">
                  <span className="program-detail-label">{d.label}</span>
                  <span className="program-detail-value">{d.value}</span>
                </div>
              ))}
            </div>
            <a href="#contato" className="program-cta">Solicitar proposta</a>
          </div>
        ))}
      </div>
    </section>
  )
}
