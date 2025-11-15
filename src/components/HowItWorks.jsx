import { motion, useScroll, useTransform } from 'framer-motion'

function Stage({ step, title, desc }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10">
      <div className="absolute -left-3 -top-3 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center text-sm font-semibold">{step}</div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
      <p className="text-white/60 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function HowItWorks(){
  const { scrollYProgress } = useScroll()
  const line = useTransform(scrollYProgress, [0,1], ['0%','100%'])

  return (
    <section className="relative bg-black py-24" id="intelligence">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-500/30 via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl text-white font-semibold">From chaos to order</h2>
            <p className="text-white/60 mt-4">We ingest your fragmented inputs, reconcile sources, and deliver a decisive intelligence artifact.</p>
            <div className="mt-10 space-y-6">
              <Stage step={1} title="Secure intake" desc="E2E encrypted, non-custodial upload and brief. Identity verification as requested." />
              <Stage step={2} title="Analysis engine" desc="Cross-signal fusion, probabilistic scoring, and adversarial testing inside isolated enclaves." />
              <Stage step={3} title="Peer review" desc="Second-operator verification, traceable citations, and risk annotations." />
              <Stage step={4} title="Signed delivery" desc="Time-stamped, cryptographically signed dossier delivered through your chosen channel." />
            </div>
          </div>
          <div className="relative h-[520px]">
            <motion.div style={{height: line}} className="absolute left-3 top-6 w-[3px] bg-gradient-to-b from-cyan-500 to-blue-600 rounded" />
            <div className="absolute inset-0 grid grid-rows-4 gap-6 pl-10">
              {[...Array(4)].map((_,i)=> (
                <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.6, delay: 0.1*i}} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="text-white/80 font-mono text-sm">{i===0?'Chaos →': i===3?'→ Order':'→'}</div>
                  <div className="mt-2 h-24 rounded bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
