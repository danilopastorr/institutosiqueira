import { useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const fields = {
    nome: useRef(), empresa: useRef(), cargo: useRef(),
    whatsapp: useRef(), demanda: useRef(),
    pessoas: useRef(), previsao: useRef(), mensagem: useRef(),
  }

  const handleSubmit = () => {
    const v = k => fields[k].current?.value?.trim() || ''
    let text = 'Olá Paulinho! Vim pelo institutosiqueira.com.br e gostaria de solicitar uma proposta.'
    if (v('nome'))     text += `\n\nNome: ${v('nome')}`
    if (v('empresa'))  text += `\nEmpresa: ${v('empresa')}`
    if (v('cargo'))    text += `\nCargo: ${v('cargo')}`
    if (v('demanda'))  text += `\nDemanda: ${v('demanda')}`
    if (v('pessoas'))  text += `\nPessoas: ${v('pessoas')}`
    if (v('mensagem')) text += `\n\nMensagem: ${v('mensagem')}`
    window.open('https://wa.me/5511920926873?text=' + encodeURIComponent(text), '_blank')
  }

  return (
    <section id="contato" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="contact-inner">
        <div className="reveal">
          <div className="section-label">Contato</div>
          <h2 className="section-title">Vamos<br />construir<br /><em>juntos.</em></h2>
          <p className="contact-intro">Se você chegou até aqui, algo disse que vale a conversa.</p>

          {[
            { icon: 'WhatsApp', content: <a href="https://wa.me/5511920926873">+55 11 92092-6873</a> },
            { icon: 'Instagram', content: <a href="https://instagram.com/engenheirodamente" target="_blank" rel="noopener noreferrer">@engenheirodamente</a> },
            { icon: 'LinkedIn', content: <a href="#">Paulinho Siqueira</a> },
            { icon: 'Base', content: <>São Paulo, Brasil<br />Atendimento nacional e internacional</> },
          ].map((item, i) => (
            <div key={i} className="contact-info-item">
              <span className="contact-info-icon">{item.icon}</span>
              <span className="contact-info-value">{item.content}</span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-d2">
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input ref={fields.nome} className="form-input" type="text" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label className="form-label">Empresa</label>
                <input ref={fields.empresa} className="form-input" type="text" placeholder="Sua empresa" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Cargo</label>
                <input ref={fields.cargo} className="form-input" type="text" placeholder="Seu cargo" />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp</label>
                <input ref={fields.whatsapp} className="form-input" type="tel" placeholder="+55 (11) 99999-9999" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de demanda</label>
              <select ref={fields.demanda} className="form-select">
                <option value="">Selecione...</option>
                <option>NEURA Corporativo</option>
                <option>Comunicação Magnética</option>
                <option>Confiabilidade Comportamental</option>
                <option>Cultura em Movimento</option>
                <option>Palestra</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nº de pessoas</label>
                <input ref={fields.pessoas} className="form-input" type="text" placeholder="Estimativa" />
              </div>
              <div className="form-group">
                <label className="form-label">Previsão</label>
                <input ref={fields.previsao} className="form-input" type="text" placeholder="Quando?" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Mensagem</label>
              <textarea ref={fields.mensagem} className="form-textarea" placeholder="Conte um pouco sobre sua necessidade..." />
            </div>
            <button className="form-submit btn-primary" onClick={handleSubmit}>
              Solicitar Proposta →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
