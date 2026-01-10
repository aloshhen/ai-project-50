import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'fixed top-0 z-50 w-full',
        'backdrop-blur-xl bg-white/80 border-b border-slate-200/50',
        'px-6 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <ShoppingBag className="w-6 h-6 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Aura
          </span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
            Products
          </a>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#cta" className="text-slate-600 hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>
        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all">
          Shop Now
        </button>
      </div>
    </motion.nav>
  )
}