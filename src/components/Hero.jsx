import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] bg-black">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-slow-light-over-carbon-fiber-3065/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Digital Private Bank for Intelligence Assets
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1, duration:0.8}} className="mt-6 text-lg text-white/70 max-w-xl">
            We turn chaotic data into decisive advantage with institutional-grade security, clarity, and discretion.
          </motion.p>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.6}} className="mt-10 flex items-center gap-4">
            <a href="#intake" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              Order: Secure Intelligence Dossier
            </a>
            <span className="text-white/50 text-sm">E2E Encrypted • Non-custodial • Compliant</span>
          </motion.div>
        </div>
        <div className="relative h-[420px] lg:h-[520px]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
