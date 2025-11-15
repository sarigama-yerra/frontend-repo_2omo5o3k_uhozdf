import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Identity',
    fields: [
      { name: 'fullName', label: 'Full name' },
      { name: 'email', label: 'Work email' },
      { name: 'org', label: 'Organization (optional)' },
    ],
  },
  {
    title: 'Brief',
    fields: [
      { name: 'objective', label: 'Objective' },
      { name: 'timeline', label: 'Timeline' },
    ],
  },
  {
    title: 'Secure upload',
    fields: [
      { name: 'notes', label: 'Notes (optional)' },
    ],
  },
]

export default function IntakeForm(){
  const [i, setI] = useState(0)
  const [data, setData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const onNext = () => { if (i < steps.length - 1) setI(i+1); else setSubmitted(true) }
  const onBack = () => setI(Math.max(0, i-1))

  const active = steps[i]

  return (
    <section id="intake" className="relative bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="px-6 sm:px-10 py-6 flex items-center justify-between bg-gradient-to-r from-white/[0.03] to-transparent border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 grid place-items-center text-white">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-white font-medium">Secure Intake</div>
                <div className="text-white/50 text-sm">Step {Math.min(i+1, steps.length)} of {steps.length}</div>
              </div>
            </div>
            <div className="text-white/50 text-sm">E2E Encrypted in transit</div>
          </div>

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="done" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="text-center py-16">
                  <CheckCircle2 className="mx-auto text-emerald-400" size={48} />
                  <h3 className="mt-6 text-white text-xl font-medium">Submission Secure</h3>
                  <p className="mt-2 text-white/60">Your brief has been sealed and queued for operator review.</p>
                </motion.div>
              ) : (
                <motion.div key={i} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
                  <h3 className="text-white text-xl font-medium">{active.title}</h3>
                  <div className="mt-6 grid gap-4">
                    {active.fields.map(f => (
                      <div key={f.name}>
                        <label className="block text-sm text-white/70 mb-2">{f.label}</label>
                        <input
                          type="text"
                          onChange={(e)=> setData({...data, [f.name]: e.target.value})}
                          className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                          placeholder="Securely enter..."
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button onClick={onBack} disabled={i===0} className="px-5 py-2 rounded-lg border border-white/10 text-white/80 disabled:opacity-40">Back</button>
                    <button onClick={onNext} className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20">
                      {i < steps.length - 1 ? 'Securely proceed' : 'Seal & Submit'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
