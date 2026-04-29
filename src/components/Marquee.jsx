import './Marquee.css'

const items = [
  'Comunicação Magnética', 'NEURA Corporativo', 'PNL Trainer',
  'Neuroeducação', 'MasterCoach', 'Coachcast Brasil',
  'Hipnose Clínica', 'Cultura em Movimento',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
