import { motion } from 'framer-motion'
import { Check, Shield, Zap, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Shipping",
      description: "Get your order delivered in 2-3 business days with our express shipping."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Crafted with high-quality materials that last and protect your device."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "1-Year Warranty",
      description: "All our products come with a 12-month warranty for peace of mind."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Sustainable materials and packaging to reduce environmental impact."
    }
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Aura
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our accessories combine minimalist design with exceptional functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-lg shadow-slate-900/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}