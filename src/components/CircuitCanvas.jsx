import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const C = {
  cyan: '#00C9C8', cyanL: '#6EE7B7',
  gold: '#D4A843', purple: '#C084FC', white: '#e8f4f4',
}

export default function CircuitCanvas() {
  const canvasRef = useRef(null)
  const state     = useRef({ W:0, H:0, t:0, nodes:[], lines:[], parts:[], raf:null })
  const location  = useLocation()

  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv.getContext('2d')
    const s  = state.current

    function build() {
      s.nodes = []; s.lines = []; s.parts = []
      const { W, H } = s
      const mob  = W < 820
      const fcx  = W * 0.72
      const fcy  = H * 0.50
      const fs   = Math.min(W, H) * (mob ? 0.55 : 0.42)

      // Face profile
      const fp = [
        [fcx-fs*.04,fcy-fs*.52],[fcx+fs*.16,fcy-fs*.54],[fcx+fs*.26,fcy-fs*.44],
        [fcx+fs*.30,fcy-fs*.30],[fcx+fs*.28,fcy-fs*.16],[fcx+fs*.26,fcy-fs*.06],
        [fcx+fs*.24,fcy+fs*.04],[fcx+fs*.22,fcy+fs*.12],[fcx+fs*.20,fcy+fs*.22],
        [fcx+fs*.23,fcy+fs*.30],[fcx+fs*.16,fcy+fs*.32],[fcx+fs*.14,fcy+fs*.38],
        [fcx+fs*.18,fcy+fs*.42],[fcx+fs*.12,fcy+fs*.45],[fcx+fs*.05,fcy+fs*.52],
        [fcx-fs*.04,fcy+fs*.54],[fcx-fs*.10,fcy+fs*.48],[fcx-fs*.13,fcy+fs*.35],
      ]
      s.lines.push({ pts:fp, col:C.cyan, w:1.4, op:.32, dash:false, travel:true })

      // Horizontal branches
      const branches = [
        [fcy-fs*.48,fs*.14,C.cyan,.16],[fcy-fs*.38,fs*.20,C.cyan,.14],
        [fcy-fs*.26,fs*.22,C.cyanL,.12],[fcy-fs*.14,fs*.20,C.white,.08],
        [fcy-fs*.04,fs*.18,C.cyan,.11],[fcy+fs*.08,fs*.16,C.gold,.12],
        [fcy+fs*.20,fs*.14,C.purple,.13],[fcy+fs*.32,fs*.10,C.cyan,.10],
        [fcy+fs*.44,fs*.06,C.gold,.09],
      ]
      branches.forEach(([y,xR,col,op]) => {
        const xL = fcx-fs*.42
        s.lines.push({ pts:[[xL,y],[fcx+xR,y]], col, w:.85, op, dash:false })
        s.lines.push({ pts:[[xL,y],[xL,y+fs*.05]], col, w:.55, op:op*.6, dash:false })
        s.nodes.push({ x:fcx+xR, y, r:2.8, col, op, glow:true, phase:Math.random()*Math.PI*2 })
        s.nodes.push({ x:xL, y, r:1.6, col, op:op*.65, glow:false, phase:Math.random()*Math.PI*2 })
      })

      // Dashed spine
      s.lines.push({ pts:[
        [fcx-fs*.04,fcy-fs*.52],[fcx-fs*.08,fcy-fs*.18],
        [fcx-fs*.11,fcy+fs*.18],[fcx-fs*.13,fcy+fs*.42],
      ], col:C.cyan, w:.6, op:.10, dash:true })

      // Eye
      const ex = fcx+fs*.22, ey = fcy-fs*.07
      s.nodes.push({ x:ex, y:ey, r:6, col:C.cyan, op:.55, glow:true, pulse:true, phase:0 })
      s.nodes.push({ x:ex-fs*.09, y:ey, r:3, col:C.white, op:.35, glow:true, phase:1.2 })
      for (let a=0; a<Math.PI*2; a+=Math.PI/6) {
        const len = fs*.07
        s.lines.push({ pts:[[ex,ey],[ex+Math.cos(a)*len,ey+Math.sin(a)*len*.55]], col:C.cyan, w:.55, op:.14, dash:false })
      }

      // Accent nodes
      s.nodes.push({ x:fcx+fs*.22, y:fcy+fs*.28, r:3.5, col:C.gold, op:.40, glow:true, phase:2.1 })
      s.nodes.push({ x:fcx+fs*.05, y:fcy+fs*.52, r:2.5, col:C.purple, op:.35, glow:true, phase:1.8 })

      // Scatter
      for (let i=0; i<38; i++) {
        const ang = Math.random()*Math.PI*2
        const rad = fs*(.12+Math.random()*.72)
        const px  = fcx+Math.cos(ang)*rad*1.15
        const py  = fcy+Math.sin(ang)*rad*.82
        if (px < fcx-fs*.42) continue
        s.nodes.push({
          x:px, y:py,
          r:.9+Math.random()*2.2,
          col:[C.cyan,C.gold,C.purple,C.cyanL,C.white][Math.floor(Math.random()*5)],
          op:.06+Math.random()*.22,
          glow:Math.random()>.6,
          phase:Math.random()*Math.PI*2,
        })
      }

      // Particles
      const pc = mob ? 130 : 180
      for (let i=0; i<pc; i++) {
        const px = Math.random()<.7 ? fcx-fs*.5+Math.random()*fs*1.4 : Math.random()*W
        const py = fcy-fs*.7+Math.random()*fs*1.4
        s.parts.push({
          x:px, y:py,
          r:.7+Math.random()*2.2,
          col:[C.cyan,C.cyanL,C.white,C.purple,C.gold][Math.floor(Math.random()*5)],
          op:.04+Math.random()*.28,
          spd:.5+Math.random()*1.4,
          phase:Math.random()*Math.PI*2,
          dx:(Math.random()-.5)*18,
          dy:(Math.random()-.5)*14,
        })
      }
    }

    function poly(pts, col, w, op, dash) {
      if (pts.length < 2) return
      cx.save()
      cx.globalAlpha = op; cx.strokeStyle = col; cx.lineWidth = w; cx.lineCap = 'round'
      cx.setLineDash(dash ? [4,7] : [])
      cx.beginPath(); cx.moveTo(pts[0][0], pts[0][1])
      for (let i=1; i<pts.length; i++) cx.lineTo(pts[i][0], pts[i][1])
      cx.stroke(); cx.restore()
    }

    function glw(x, y, r, col, op) {
      cx.save()
      const g = cx.createRadialGradient(x,y,0,x,y,r*5)
      g.addColorStop(0, col+'cc'); g.addColorStop(.5, col+'33'); g.addColorStop(1, 'transparent')
      cx.globalAlpha = op*.55; cx.fillStyle = g
      cx.beginPath(); cx.arc(x,y,r*5,0,Math.PI*2); cx.fill()
      cx.globalAlpha = op; cx.fillStyle = col
      cx.beginPath(); cx.arc(x,y,r,0,Math.PI*2); cx.fill()
      cx.restore()
    }

    function draw() {
      cx.clearRect(0, 0, s.W, s.H)
      s.t++

      // Atmosphere
      const a1 = cx.createRadialGradient(s.W*.7,s.H*.45,0,s.W*.7,s.H*.45,s.H*.55)
      a1.addColorStop(0,'rgba(0,201,200,.022)'); a1.addColorStop(1,'transparent')
      cx.fillStyle = a1; cx.fillRect(0,0,s.W,s.H)
      const a2 = cx.createRadialGradient(s.W*.73,s.H*.63,0,s.W*.73,s.H*.63,s.H*.38)
      a2.addColorStop(0,'rgba(192,132,252,.012)'); a2.addColorStop(1,'transparent')
      cx.fillStyle = a2; cx.fillRect(0,0,s.W,s.H)

      // Lines
      s.lines.forEach(l => {
        poly(l.pts, l.col, l.w, l.op, l.dash)
        if (l.travel && l.pts.length > 3) {
          const pts  = l.pts
          const prog = ((s.t*.22) % (pts.length*30)) / (pts.length*30)
          const idx  = Math.floor(prog*(pts.length-1))
          const frac = prog*(pts.length-1) - idx
          if (idx < pts.length-1) {
            const ax=pts[idx][0],ay=pts[idx][1],bx=pts[idx+1][0],by=pts[idx+1][1]
            glw(ax+(bx-ax)*frac, ay+(by-ay)*frac, 2.8, C.gold, .65)
          }
        }
      })

      // Nodes
      s.nodes.forEach(n => {
        const ph  = n.phase || 0
        const osc = .6 + .4*Math.sin(s.t*.025+ph)
        const pr  = n.pulse ? n.r*(1+.35*Math.sin(s.t*.038+ph)) : n.r
        if (n.glow) glw(n.x, n.y, pr, n.col, n.op*osc)
        else {
          cx.save(); cx.globalAlpha=n.op*osc; cx.fillStyle=n.col
          cx.beginPath(); cx.arc(n.x,n.y,pr,0,Math.PI*2); cx.fill(); cx.restore()
        }
      })

      // Particles
      s.parts.forEach(p => {
        const tt = s.t*.009*p.spd + p.phase
        const px = p.x + Math.sin(tt)*p.dx*.35
        const py = p.y + Math.cos(tt*.8)*p.dy*.35
        const osc = .45 + .55*Math.sin(tt*1.4)
        const op  = p.op*osc
        const r   = p.r*(.65+.7*osc)
        cx.save()
        const g = cx.createRadialGradient(px,py,0,px,py,r*3.5)
        g.addColorStop(0,p.col+'44'); g.addColorStop(1,'transparent')
        cx.globalAlpha=op*.5; cx.fillStyle=g
        cx.beginPath(); cx.arc(px,py,r*3.5,0,Math.PI*2); cx.fill()
        cx.globalAlpha=op; cx.fillStyle=p.col
        cx.beginPath(); cx.arc(px,py,r,0,Math.PI*2); cx.fill()
        cx.restore()
      })

      s.raf = requestAnimationFrame(draw)
    }

    function resize() {
      s.W = cv.width  = window.innerWidth
      s.H = cv.height = window.innerHeight
      build()
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(s.raf)
    }
  }, [])

  // Adjust veil opacity based on route
  const isHome = location.pathname === '/'
  const veilOp = isHome ? 0 : 0.55

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }}
      />
      {/* Hero veil — home only, gradient so text readable */}
      {isHome && (
        <div style={{
          position:'fixed', inset:0, zIndex:1, pointerEvents:'none',
          background:'linear-gradient(135deg,rgba(11,22,41,.93) 0%,rgba(11,22,41,.82) 45%,rgba(11,22,41,.55) 100%)',
        }} />
      )}
      {/* Inner page veil */}
      {!isHome && (
        <div style={{
          position:'fixed', inset:0, zIndex:1, pointerEvents:'none',
          background:`rgba(11,22,41,${veilOp})`,
          transition:'opacity .4s ease',
        }} />
      )}
    </>
  )
}
