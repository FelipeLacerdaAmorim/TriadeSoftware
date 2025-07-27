'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Microsoft', logo: '🏢' },
  { name: 'Google', logo: '🔍' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Meta', logo: '📘' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'Uber', logo: '🚗' },
  { name: 'Airbnb', logo: '🏠' }
]

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Parceiros de <span className="gradient-text">Confiança</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com as principais empresas do mercado para 
            entregar soluções de excelência
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            + de <strong>200 empresas</strong> já confiam em nossas soluções
          </p>
        </motion.div>
      </div>
    </section>
  )
} 