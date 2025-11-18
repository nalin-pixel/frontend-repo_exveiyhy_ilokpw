import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-indigo-500/20">
      {/* Soft background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-indigo-300 to-cyan-200" />
        <div className="absolute top-1/2 -right-24 h-[35rem] w-[35rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-200 to-emerald-200" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Nebula Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
