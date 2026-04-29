import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx - 4 + 'px'
      cursor.style.top = my - 4 + 'px'
    }

    let raf
    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx - 16 + 'px'
      ring.style.top = ry - 16 + 'px'
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const interactables = document.querySelectorAll('a, button, .program-card, .stat-box, .cred-item, .flag-card')
    const enter = () => { cursor.style.transform = 'scale(2)'; ring.style.transform = 'scale(1.5)'; ring.style.opacity = '.3' }
    const leave = () => { cursor.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)'; ring.style.opacity = '.6' }
    interactables.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { cursorRef, ringRef }
}
