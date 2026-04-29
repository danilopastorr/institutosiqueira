import { useEffect } from 'react'
import Cursor from './components/Cursor'
import WAFloat from './components/WAFloat'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Credentials from './components/Credentials'
import Programs from './components/Programs'
import International from './components/International'
import Podcast from './components/Podcast'
import Testimonials from './components/Testimonials'
import Academia from './components/Academia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <WAFloat />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <div className="stripe" />
      <Credentials />
      <Programs />
      <div className="stripe" />
      <International />
      <Podcast />
      <Testimonials />
      <Academia />
      <Contact />
      <Footer />
    </>
  )
}
