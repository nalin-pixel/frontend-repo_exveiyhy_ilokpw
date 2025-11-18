import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white/80 text-xs bg-white/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Design agency crafting interactive web experiences
          </h1>
          <p className="mt-5 text-lg text-slate-200/80">
            We combine strategy, design, and code to build standout brands and products with cinematic motion and real-time 3D.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
              Start a project
            </a>
            <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
