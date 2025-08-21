'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SliderCards from '@/components/ui/SliderCards'
import { dashboardProjects, webappProjects, desktopProjects, otherApplicationTypes } from '@/lib/data/portfolio-data'

// Projetos antigos para referência
const oldProjects = [
  {
    id: 1,
    title: 'E-commerce Premium',
    category: 'E-commerce',
    description: 'Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo personalizado.',
    image: '/images/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/portfolio/ecommerce'
  },
  {
    id: 2,
    title: 'App de Delivery',
    category: 'Mobile',
    description: 'Aplicativo de delivery para restaurantes com rastreamento em tempo real, pagamento in-app e sistema de avaliações.',
    image: '/images/portfolio/delivery.jpg',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    link: '/portfolio/delivery-app'
  },
  {
    id: 3,
    title: 'Sistema de Gestão Empresarial',
    category: 'Sistema Web',
    description: 'ERP completo para gestão de processos internos, finanças, RH e relacionamento com clientes.',
    image: '/images/portfolio/erp.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    link: '/portfolio/erp-system'
  },
  {
    id: 4,
    title: 'Plataforma Educacional',
    category: 'Plataforma',
    description: 'Ambiente virtual de aprendizagem com cursos online, avaliações automatizadas e certificados digitais.',
    image: '/images/portfolio/education.jpg',
    technologies: ['Next.js', 'Express', 'MongoDB', 'AWS'],
    link: '/portfolio/education-platform'
  },
  {
    id: 5,
    title: 'Dashboard Analítico',
    category: 'Business Intelligence',
    description: 'Dashboard interativo para visualização de dados de negócio com gráficos personalizados e relatórios automatizados.',
    image: '/images/portfolio/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    link: '/portfolio/analytics-dashboard'
  },
  {
    id: 6,
    title: 'Aplicativo de Saúde',
    category: 'Mobile',
    description: 'App para monitoramento de saúde com integração a dispositivos IoT, histórico médico e agendamento de consultas.',
    image: '/images/portfolio/health.jpg',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    link: '/portfolio/health-app'
  }
]

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <pattern id="circuit-portfolio" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor"/>
                  <path d="M2,2 L18,2 M2,2 L2,18" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-portfolio)"/>
            </svg>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-blue-400/30"
              >
                <span className="text-blue-100">Nossos Projetos</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                Nosso <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Portfólio</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Conheça alguns dos projetos que desenvolvemos e as histórias de sucesso que ajudamos a construir.
              </p>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Dashboards Section */}
      <section className="section py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboards</h2>
            <p className="text-gray-600 text-lg">Painéis interativos e personalizados para visualização de dados e tomada de decisões estratégicas em tempo real.</p>
          </div>
          <div className="mb-12">
            <SliderCards projects={dashboardProjects} />
          </div>
        </div>
      </section>

      {/* WebApps Section */}
      <section className="section py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">WebApps</h2>
            <p className="text-gray-600 text-lg">Aplicações web responsivas e escaláveis para otimizar processos e melhorar a experiência dos usuários em diferentes dispositivos.</p>
          </div>
          <div className="mb-12">
            <SliderCards projects={webappProjects} />
          </div>
        </div>
      </section>

      {/* Desktop/Soluções Section */}
      <section className="section py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Desktop/Soluções</h2>
            <p className="text-gray-600 text-lg">Softwares robustos para desktop e soluções empresariais completas que atendem às necessidades específicas do seu negócio.</p>
          </div>
          <div className="mb-12">
            <SliderCards projects={desktopProjects} />
          </div>
        </div>
      </section>

      {/* Outros Tipos de Aplicações */}
      <section className="section py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outras Especialidades</h2>
            <p className="text-gray-600 text-lg">Além dos projetos apresentados, desenvolvemos diversos tipos de soluções tecnológicas para atender às necessidades específicas de cada cliente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherApplicationTypes.map((app, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos criar algo incrível juntos?</h2>
              <p className="text-xl opacity-90 mb-8 md:pr-12">
                Conte-nos sobre seu projeto e descubra como podemos transformar suas ideias em realidade com soluções tecnológicas personalizadas.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contato" 
                  className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Fale Conosco
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <motion.div 
                className="relative w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-lg opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Transforme sua visão em realidade</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-300">✓</span> Consultoria especializada
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-300">✓</span> Desenvolvimento ágil
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-300">✓</span> Suporte contínuo
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-blue-300">✓</span> Tecnologias de ponta
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}