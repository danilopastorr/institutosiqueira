import { useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programas', label: 'Programas' },
  { href: '#credenciais', label: 'Credenciais' },
  { href: '#academia', label: 'Academia' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => { setOpen(false); document.body.style.overflow = '' }
  const toggle = () => {
    setOpen(o => {
      document.body.style.overflow = !o ? 'hidden' : ''
      return !o
    })
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Instituto Siqueira</div>
        <ul className="nav-links">
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <a href="#contato" className="nav-cta">Solicitar Proposta</a>
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="menu-link" onClick={close}>{l.label}</a>
        ))}
        <a href="#contato" className="menu-link m-cta" onClick={close}>Solicitar Proposta</a>
      </div>
    </>
  )
}
