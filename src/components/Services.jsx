import { Code2, LayoutPanelTop, Sparkle, Zap } from 'lucide-react'

const services = [
  {
    icon: LayoutPanelTop,
    title: 'Brand & Web Design',
    desc: 'Design systems, marketing sites, and product UI with a clean, modern aesthetic.'
  },
  {
    icon: Code2,
    title: 'Full‑stack Development',
    desc: 'From prototypes to production apps using React, FastAPI, and modern clouds.'
  },
  {
    icon: Zap,
    title: 'Motion & 3D',
    desc: 'Microinteractions, scroll scenes, and real‑time 3D using Spline and Framer Motion.'
  },
  {
    icon: Sparkle,
    title: 'Growth & Optimization',
    desc: 'A/B testing, performance budgets, and analytics to maximize impact.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_0,rgba(165,180,252,0.25),transparent_60%),radial-gradient(600px_circle_at_80%_0,rgba(103,232,249,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Services</h2>
          <p className="mt-3 text-slate-600">From identity to interactive product, we bring ideas to life with craft and velocity.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400 grid place-items-center shadow-inner">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 text-slate-900 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-slate-50 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
