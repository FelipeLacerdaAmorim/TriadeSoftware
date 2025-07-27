'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCode, FaMobile, FaShoppingCart, FaLaptopCode, FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa'

const features = [
  {
    icon: FaCode,
    title: 'Desenvolvimento Personalizado',
    description: 'Soluções sob medida para seu negócio'
  },
  {
    icon: FaMobile,
    title: 'Apps Mobile Inovadores',
    description: 'Conecte-se com seus clientes'
  },
  {
    icon: FaShoppingCart,
    title: 'E-commerce Completo',
    description: 'Venda online com eficiência'
  },
  {
    icon: FaLaptopCode,
    title: 'Consultoria Especializada',
    description: 'Estratégias de transformação digital'
  }
]

const floatingElements = [
  { icon: FaCode, delay: 0, x: 15, y: 25, size: 'w-8 h-8' },
  { icon: FaMobile, delay: 0.5, x: -20, y: 15, size: 'w-6 h-6' },
  { icon: FaShoppingCart, delay: 1, x: 25, y: -15, size: 'w-7 h-7' },
  { icon: FaLaptopCode, delay: 1.5, x: -15, y: -25, size: 'w-8 h-8' },
]

export default function CTA() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary-dark to-blue-900"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/15 rounded-full"></div>
        </div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20 hidden lg:block"
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
            left: `${15 + (index * 20)}%`,
            top: `${20 + (index * 15)}%`,
          }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="text-center text-white">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8"
            >
              <FaRocket className="mr-2 w-4 h-4" />
              Transforme seu negócio hoje mesmo
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pronto para <span className="text-secondary">Inovar</span>?
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Junte-se a centenas de empresas que já transformaram seus negócios 
              com nossas soluções digitais personalizadas. Vamos construir o futuro juntos!
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contato"
                className="btn btn-secondary btn-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Iniciar Meu Projeto
                  <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <div className="flex items-center space-x-6">
                <a
                  href="tel:+5511999999999"
                  className="flex items-center text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-secondary/20 transition-colors">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Ligue agora</div>
                    <div className="font-semibold">(11) 9999-9999</div>
                  </div>
                </a>
                
                <a
                  href="mailto:contato@triadesoftware.com.br"
                  className="flex items-center text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-secondary/20 transition-colors">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Ou envie email</div>
                    <div className="font-semibold">contato@triadesoftware.com.br</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-secondary/50 group-hover:scale-105">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-display">24h</div>
              <div className="text-blue-200">Resposta Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-display">100%</div>
              <div className="text-blue-200">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-display">8+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="mt-16 pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-200 text-lg mb-6">
              Não perca tempo! Sua transformação digital começa agora.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contato"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento Gratuito
                <FaArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-secondary rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-400 hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-5 h-5 border-2 border-secondary/50 rotate-45 animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-10 left-32 w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-600 hidden lg:block"></div>
    </section>
  )
} 