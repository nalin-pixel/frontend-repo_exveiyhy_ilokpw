export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_circle_at_80%_100%,rgba(45,212,191,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">We design for emotion and movement</h2>
            <p className="mt-4 text-slate-300/80">
              Nebula is a small, senior team focused on high‑impact digital experiences. We partner with founders and product teams to ship fast, sweat details, and elevate brands with thoughtful motion and 3D.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <Stat value="35+" label="Projects shipped" />
              <Stat value="6.2M" label="Users reached" />
              <Stat value="12" label="Awards & features" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-medium">Capabilities</h3>
            <ul className="mt-4 space-y-2 text-slate-300/80 text-sm">
              <li>Brand identity & design systems</li>
              <li>Marketing sites & product UI</li>
              <li>Framer Motion & Spline 3D</li>
              <li>Full‑stack development</li>
              <li>Analytics & optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="text-sm text-slate-300/70">{label}</div>
    </div>
  )
}
