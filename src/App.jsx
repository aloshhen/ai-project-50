import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}