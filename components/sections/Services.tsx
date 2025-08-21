'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaCode, 
  FaMobile, 
  FaShoppingCart, 
  FaLaptopCode, 
  FaDatabase, 
  FaCloud,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython
} from 'react-icons/fa'
import { SiNextdotjs, SiFlutter, SiWordpress, SiAngular, SiVuedotjs, SiDotnet, SiTauri, SiSpring } from 'react-icons/si'

const services = [
  {
    icon: FaCode,
    title: 'Desenvolvimento de Sistemas',
    description: 'Sistemas web personalizados, ERPs, CRMs e soluções corporativas que otimizam processos e aumentam a produtividade.',
    features: [
      'Sistemas Web Responsivos',
      'ERPs Personalizados',
      'CRMs Inteligentes',
      'Portais Corporativos',
      'APIs Robustas'
    ],
    technologies: [FaReact, SiNextdotjs, FaNodeJs, FaPython, SiDotnet, SiTauri, SiSpring],
    color: 'from-blue-500 to-blue-600',
    href: '/servicos/sistemas'
  },
  {
    icon: FaDatabase,
    title: 'Dashboard & Análise de Dados',
    description: 'Dashboards interativos e sistemas de análise de dados que transformam informações em insights estratégicos.',
    features: [
      'Dashboards Interativos',
      'Relatórios Automatizados',
      'Análise de Performance',
      'Visualização de Dados',
      'Business Intelligence'
    ],
    technologies: [FaPython, FaReact, SiNextdotjs],
    color: 'from-green-500 to-green-600',
    href: '/servicos/dashboard'
   },
   {
    icon: FaShoppingCart,
    title: 'E-commerce',
    description: 'Lojas virtuais completas com integração de pagamentos, gestão de estoque e ferramentas de marketing digital.',
    features: [
      'Lojas Virtuais Completas',
      'Integração de Pagamentos',
      'Gestão de Estoque',
      'Marketing Digital',
      'Analytics Avançado'
    ],
    technologies: [SiAngular, SiVuedotjs, FaReact, SiNextdotjs],
    color: 'from-purple-500 to-purple-600',
    href: '/servicos/ecommerce'
  },
  {
    icon: FaLaptopCode,
    title: 'Consultoria em TI',
    description: 'Análise técnica, arquitetura de sistemas, otimização de performance e estratégias de transformação digital.',
    features: [
      'Análise de Sistemas',
      'Arquitetura de Software',
      'Otimização de Performance',
      'Migração de Sistemas',
      'Treinamento de Equipes'
    ],
    technologies: [FaDatabase, FaCloud],
    color: 'from-orange-500 to-orange-600',
    href: '/servicos/consultoria'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
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
            Nossos <span className="gradient-text">Serviços</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos soluções completas em tecnologia para transformar 
            seu negócio e impulsionar resultados excepcionais.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {service.technologies.map((Tech, techIndex) => (
                        <div key={techIndex} className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors duration-300">
                          <Tech className="w-full h-full" />
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
                    >
                      <span>Saiba mais</span>
                      <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para atender às necessidades específicas 
              do seu negócio. Conte-nos sobre seu projeto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="btn btn-primary btn-lg"
              >
                Falar com Especialista
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-outline btn-lg"
              >
                Ver Portfólio Completo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}