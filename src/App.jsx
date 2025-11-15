import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustGrid from './components/TrustGrid'
import HowItWorks from './components/HowItWorks'
import IntakeForm from './components/IntakeForm'
import Footer from './components/Footer'

function App() {
  const intakeRef = useRef(null)
  const scrollToIntake = () => {
    const el = document.getElementById('intake')
    if(el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onStartIntake={scrollToIntake} />
      <main>
        <Hero />
        <TrustGrid />
        <HowItWorks />
        <IntakeForm ref={intakeRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
