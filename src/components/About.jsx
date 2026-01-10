import { motion } from 'framer-motion'
import { Smartphone, Package, CreditCard } from 'lucide-react'

export default function About() {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Browse Our Collection",
      description: "Explore our minimalist phone accessories designed for every device."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Select Your Favorite",
      description: "Choose from cases, stands, and other premium accessories."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fast Checkout",
      description: "Secure payment and express shipping options available."
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="lg:w-1/2 rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://source.unsplash.com/800x600/?phone,case" 
              alt="Phone accessories" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Minimalist Design, Maximum Protection
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              At Aura, we believe phone accessories should be both functional and beautiful. Our products are designed with clean lines and premium materials to complement your device without compromising on protection.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}