import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-slate-700 text-xs bg-white/80 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Bright, modern web experiences with real‑time 3D
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We combine strategy, design, and code to build standout brands and products with crisp motion and immersive 3D.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
              Start a project
            </a>
            <a href="#work" className="px-5 py-3 rounded-xl bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
