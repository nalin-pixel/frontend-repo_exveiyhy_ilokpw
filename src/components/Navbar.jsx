import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/70 border border-slate-200 rounded-2xl shadow-[0_10px_50px_-15px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#home" className="flex items-center gap-3 group" onClick={close}>
              <div className="relative grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-900 font-semibold tracking-tight group-hover:opacity-90">Nebula Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium bg-slate-900 hover:bg-slate-800 transition-colors px-4 py-2 rounded-xl">
                Start a project
              </a>
            </nav>

            <button onClick={handleNav} className="md:hidden text-slate-900 p-2 rounded-lg bg-slate-900/5">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-200 px-5 py-4 space-y-4 bg-white/70 backdrop-blur">
              <div className="grid gap-3">
                <NavLink href="#services" onClick={close}>Services</NavLink>
                <NavLink href="#work" onClick={close}>Work</NavLink>
                <NavLink href="#about" onClick={close}>About</NavLink>
              </div>
              <a href="#contact" onClick={close} className="block text-center w-full text-white font-medium bg-slate-900 hover:bg-slate-800 transition-colors px-4 py-2 rounded-xl">
                Start a project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
