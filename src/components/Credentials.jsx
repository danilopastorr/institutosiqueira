import './Credentials.css'

const creds = [
  { tag: 'PNL', title: 'PNL Trainer Certificado', desc: 'Formação direta com John Grinder, co-criador da PNL. Portugal.' },
  { tag: 'Coaching', title: 'MasterCoach — SBCoaching', desc: 'Maior escola de coaching da América Latina. Executivo, vida e alta performance.' },
  { tag: 'Mente', title: 'Hipnólogo Clínico', desc: 'Hipnose clínica aplicada ao desenvolvimento humano e transformação de crenças.' },
  { tag: 'Educação', title: 'Neuroeducação & Neurocomunicação', desc: 'Pós-graduação PUCPR. Neurociência, pedagogia e comunicação de alto impacto.' },
  { tag: 'Engenharia', title: 'Engenheiro Mecânico', desc: 'Univ. Cruzeiro do Sul. Raciocínio analítico e visão sistêmica como base de tudo.' },
  { tag: 'Palco', title: 'Palhaço & Improvisador', desc: 'Formação em clown e improviso aplicada à presença de palco corporativa.' },
]

export default function Credentials() {
  return (
    <section className="credentials-section" id="credenciais">
      <div className="credentials-inner">
        <div className="section-label reveal">Formação & Certificações</div>
        <h2 className="section-title reveal">
          A base<br />que sustenta<br />o <em>resultado.</em>
        </h2>
        <div className="credentials-grid">
          {creds.map((c, i) => (
            <div key={i} className={`cred-item reveal reveal-d${(i % 3) + 1}`}>
              <div className="cred-icon">{c.tag}</div>
              <div className="cred-title">{c.title}</div>
              <div className="cred-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
