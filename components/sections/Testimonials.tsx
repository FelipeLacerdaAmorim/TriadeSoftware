'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'CEO',
    company: 'TechCorp Solutions',
    image: '/testimonials/carlos.jpg',
    content: 'A Triade Software transformou completamente nossos processos. O sistema ERP desenvolvido por eles aumentou nossa produtividade em 40% e reduziu custos operacionais significativamente.',
    rating: 5,
    project: 'Sistema ERP Personalizado'
  },
  {
    id: 2,
    name: 'Ana Paula Rodrigues',
    role: 'Diretora de Marketing',
    company: 'Fashion Trends',
    image: '/testimonials/ana.jpg',
    content: 'O e-commerce criado pela Triade superou todas nossas expectativas. As vendas online cresceram 300% no primeiro ano. A equipe é altamente profissional e sempre disponível.',
    rating: 5,
    project: 'Plataforma E-commerce'
  },
  {
    id: 3,
    name: 'Roberto Santos',
    role: 'CTO',
    company: 'StartupTech',
    image: '/testimonials/roberto.jpg',
    content: 'Excelente parceria! O aplicativo mobile desenvolvido tem uma interface incrível e performance excepcional. Nossos usuários adoraram a experiência.',
    rating: 5,
    project: 'Aplicativo Mobile'
  },
  {
    id: 4,
    name: 'Mariana Costa',
    role: 'Gerente de TI',
    company: 'Inovação Digital',
    image: '/testimonials/mariana.jpg',
    content: 'A consultoria em TI da Triade foi fundamental para modernizar nossa infraestrutura. Eles nos ajudaram a migrar para a nuvem com zero downtime.',
    rating: 5,
    project: 'Consultoria e Migração Cloud'
  },
  {
    id: 5,
    name: 'Fernando Oliveira',
    role: 'Diretor Comercial',
    company: 'VendaMais',
    image: '/testimonials/fernando.jpg',
    content: 'O CRM personalizado revolucionou nossa gestão de vendas. Conseguimos aumentar a conversão em 60% e melhorar significativamente o relacionamento com clientes.',
    rating: 5,
    project: 'Sistema CRM'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
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
            O que Nossos <span className="gradient-text">Clientes Dizem</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Depoimentos reais de empresas que transformaram seus negócios 
            com nossas soluções digitais personalizadas.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FaQuoteLeft className="w-6 h-6 text-primary" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Depoimento anterior"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Próximo depoimento"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-8"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400 mx-0.5" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Project */}
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {testimonials[currentIndex].project}
                </span>
              </div>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 font-display">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-primary font-semibold">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 font-display">5.0</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-400 mx-0.5" />
              ))}
            </div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 font-display">100%</div>
            <div className="text-gray-600">Clientes Recomendariam</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2 font-display">0</div>
            <div className="text-gray-600">Projetos Cancelados</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">
            Pronto para ser nosso próximo case de sucesso?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já transformaram seus negócios 
            com nossas soluções digitais inovadoras.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg"
            onClick={() => window.location.href = '/contato'}
          >
            Iniciar Meu Projeto
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Quotes */}
      <div className="absolute top-20 left-10 text-primary/10 text-6xl hidden lg:block">
        <FaQuoteLeft />
      </div>
      <div className="absolute bottom-20 right-10 text-secondary/10 text-6xl hidden lg:block transform rotate-180">
        <FaQuoteLeft />
      </div>
    </section>
  )
} 