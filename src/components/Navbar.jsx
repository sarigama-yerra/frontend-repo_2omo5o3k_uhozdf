import { useState } from 'react'
import { ShieldCheck, Menu } from 'lucide-react'

export default function Navbar({ onStartIntake }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center shadow-inner shadow-cyan-500/20">
            <ShieldCheck size={18} className="text-white" />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">Accrue Flow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#intelligence" className="hover:text-white transition">Intelligence</a>
          <a href="#dossier" className="hover:text-white transition">Dossier</a>
          <button onClick={onStartIntake} className="ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Begin Secure Intake
          </button>
        </nav>
        <button className="md:hidden text-white/80" onClick={() => setOpen(v=>!v)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/50 border-t border-white/10">
          <a href="#how" className="block py-2 text-white/80">How it works</a>
          <a href="#intelligence" className="block py-2 text-white/80">Intelligence</a>
          <a href="#dossier" className="block py-2 text-white/80">Dossier</a>
          <button onClick={onStartIntake} className="w-full rounded bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-white font-medium">Begin Secure Intake</button>
        </div>
      )}
    </header>
  )
}
