import { useState } from 'react'

const projects = [
  {
    title: 'Cosmic Commerce',
    tag: 'E‑commerce',
    image: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3NtaWMlMjBDb21tZXJjZXxlbnwwfDB8fHwxNzYzNDU5NDIyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Neon Newsroom',
    tag: 'Publishing',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Orbit Ops',
    tag: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  const [active, setActive] = useState(0)

  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-600">A snapshot of recent projects across commerce, media, and software.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onMouseEnter={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border ${
                active === i ? 'border-slate-400' : 'border-slate-200'
              } bg-white hover:shadow-xl transition-all`}
            >
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-5 text-left">
                <span className="text-xs text-white/90 drop-shadow">{p.tag}</span>
                <h3 className="text-white font-medium drop-shadow">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
