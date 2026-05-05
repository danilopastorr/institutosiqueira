import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { img_logo } from '../assets/images.js'
import './Navbar.css'

const LINKS = [
  { to:'/',           label:'Início',       end:true },
  { to:'/programas',  label:'Programas'             },
  { to:'/diagnosticos', label:'Diagnósticos'         },
  { to:'/blog',       label:'Blog'                   },
  { to:'/historia',   label:'Minha História'         },
  { to:'/contato',    label:'Contato'                },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

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
        <div className="nav-brand" onClick={() => { nav('/'); close() }}>
          <img src={img_logo} className="nav-logo" alt="Academia Engenharia da Mente" />
          <span className="nav-name">Instituto <em>Siqueira</em></span>
        </div>

        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={({isActive}) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contato" className="nav-cta">Solicitar Proposta</NavLink>

        <button className={`ham ${open ? 'open' : ''}`} onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mob-menu ${open ? 'open' : ''}`}>
        {LINKS.map(l => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>{l.label}</NavLink>
        ))}
        <NavLink to="/contato" className="mob-cta" onClick={close}>Solicitar Proposta</NavLink>
      </div>
    </>
  )
}
