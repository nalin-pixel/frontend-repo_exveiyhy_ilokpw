import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-violet-500/30">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-violet-600 to-cyan-400" />
        <div className="absolute top-1/2 -right-24 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-cyan-400 to-emerald-400" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nebula Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
