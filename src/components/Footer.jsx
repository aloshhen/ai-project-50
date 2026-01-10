import { motion } from 'framer-motion'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aura
            </h3>
            <p className="text-slate-400 mb-6">
              Minimalist phone accessories designed for those who appreciate quality and style.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -2 }} href="#">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white" />
              </motion.a>
              <motion.a whileHover={{ y: -2 }} href="#">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white" />
              </motion.a>
              <motion.a whileHover={{ y: -2 }} href="#">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Phone Cases</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Screen Protectors</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Stands & Holders</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cables & Chargers</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500"
        >
          <p>© {new Date().getFullYear()} Aura. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}