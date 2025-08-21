'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaMobile, FaShoppingCart, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa'

const floatingElements = [
  { icon: FaCode, delay: 0, x: 20, y: 30 },
  { icon: FaMobile, delay: 0.5, x: -30, y: 20 },
  { icon: FaShoppingCart, delay: 1, x: 40, y: -20 },
  { icon: FaLaptopCode, delay: 1.5, x: -20, y: -30 },
]

const stats = [
  { number: '50+', label: 'Projetos Entregues', icon: FaRocket },
  { number: '4+', label: 'Anos de Experiência', icon: FaLaptopCode },
  { number: '100%', label: 'Satisfação dos Clientes', icon: FaUsers },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, element.x, 0],
            y: [0, element.y, 0],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${15 + (index * 20)}%`,
          }}
        >
          <element.icon className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Transformamos</span>
              <span className="block gradient-text bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Ideias em Software
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvemos soluções digitais personalizadas que impulsionam o crescimento 
              do seu negócio. Da concepção à implementação, somos seu parceiro em inovação tecnológica.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contato"
                className="btn btn-secondary btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link
                href="/portfolio"
                className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
              >
                Ver Nossos Projetos
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-white/70 text-sm mt-2 font-medium">Role para baixo</p>
      </motion.div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-secondary rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute top-40 right-40 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-400 hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 border-2 border-secondary/50 rotate-45 animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-20 left-40 w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-600 hidden lg:block"></div>
    </section>
  )
}