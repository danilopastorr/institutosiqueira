import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar           from './components/Navbar.jsx'
import CircuitCanvas    from './components/CircuitCanvas.jsx'
import { Footer, WAFloat } from './components/shared.jsx'
import SEO              from './components/SEO.jsx'
import Home             from './pages/Home.jsx'
import { Programas, Diagnosticos, Historia, Contato } from './pages/pages.jsx'
import Blog             from './pages/Blog.jsx'
import BlogPost         from './pages/BlogPost.jsx'
import './pages/Home.css'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0,0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <SEO />
      <CircuitCanvas />
      <Navbar />
      <WAFloat />
      <ScrollTop />

      <Routes>
        <Route path="/"               element={<Home />}         />
        <Route path="/programas"      element={<Programas />}    />
        <Route path="/diagnosticos"   element={<Diagnosticos />} />
        <Route path="/historia"       element={<Historia />}     />
        <Route path="/contato"        element={<Contato />}      />
        <Route path="/blog"           element={<Blog />}         />
        <Route path="/blog/:slug"     element={<BlogPost />}     />
        <Route path="*"               element={<Home />}         />
      </Routes>

      <Footer />
    </>
  )
}
