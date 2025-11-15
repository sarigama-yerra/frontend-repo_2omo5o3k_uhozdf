import { ShieldCheck, Lock, CheckCircle2, FileCheck2, KeyRound } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Institutional Security', desc: 'Hardware-backed encryption, strict access controls, and rigorous operational hygiene.' },
  { icon: Lock, title: 'Zero-Trust Architecture', desc: 'All requests verified. Least-privilege by default. Your data never used for training.' },
  { icon: KeyRound, title: 'Verified Identity', desc: 'KYC/KYB on request. Audit trails and tamper-evident logs available to counterparties.' },
  { icon: FileCheck2, title: 'Signed Deliverables', desc: 'Every dossier is cryptographically signed and watermarked for authenticity.' },
  { icon: CheckCircle2, title: 'Operational Excellence', desc: 'Red-team reviewed procedures and continuous monitoring ensure integrity.' },
]

export default function TrustGrid() {
  return (
    <section className="bg-black py-24" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-white font-semibold">Built for absolute trust</h2>
        <p className="text-white/60 mt-3 max-w-2xl">Every interaction is designed to reassure. No gimmicks. Only verifiable rigor.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <Icon className="text-cyan-400" />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
