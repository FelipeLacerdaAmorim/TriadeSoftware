'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaRocket, FaUsers, FaCode, FaTrophy, FaClock, FaHeart } from 'react-icons/fa'

const stats = [
  {
    icon: FaRocket,
    number: 200,
    suffix: '+',
    label: 'Projetos Entregues',
    description: 'Soluções desenvolvidas com excelência',
    color: 'text-blue-600'
  },
  {
    icon: FaClock,
    number: 8,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Construindo o futuro digital',
    color: 'text-green-600'
  },
  {
    icon: FaUsers,
    number: 150,
    suffix: '+',
    label: 'Clientes Satisfeitos',
    description: 'Empresas que confiam em nós',
    color: 'text-purple-600'
  },
  {
    icon: FaHeart,
    number: 100,
    suffix: '%',
    label: 'Satisfação',
    description: 'Taxa de aprovação dos clientes',
    color: 'text-red-600'
  },
  {
    icon: FaCode,
    number: 50,
    suffix: '+',
    label: 'Tecnologias',
    description: 'Ferramentas e frameworks dominados',
    color: 'text-orange-600'
  },
  {
    icon: FaTrophy,
    number: 25,
    suffix: '+',
    label: 'Prêmios',
    description: 'Reconhecimentos conquistados',
    color: 'text-yellow-600'
  }
]

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)
      
      setCount(currentCount)

      if (percentage < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, end, duration])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="stat-number"
    >
      {count}{suffix}
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Números que <span className="gradient-text">Impressionam</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossa trajetória é marcada por resultados excepcionais e a confiança 
            de clientes que escolheram a Triade Software para suas transformações digitais.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 text-center relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors duration-300`} />
                  </div>
                </div>

                {/* Number */}
                <div className="relative mb-4">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                Pronto para fazer parte dessas estatísticas?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Junte-se aos nossos clientes satisfeitos e transforme seu negócio 
                com soluções digitais inovadoras.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary btn-lg"
                onClick={() => window.location.href = '/contato'}
              >
                Começar Meu Projeto
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-secondary/30 rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-primary/30 rounded-full animate-bounce animation-delay-200 hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-5 h-5 border-2 border-secondary/30 rotate-45 animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-20 left-32 w-2 h-2 bg-primary/30 rounded-full animate-pulse animation-delay-400 hidden lg:block"></div>
    </section>
  )
} 