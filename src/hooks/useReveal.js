import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.06, rootMargin: '0px 0px -35px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => {
      obs.observe(el)
      if (el.getBoundingClientRect().top < window.innerHeight + 60) el.classList.add('visible')
    })
    return () => obs.disconnect()
  })
}
