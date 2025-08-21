'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaEye, FaHeart, FaUsers, FaCode, FaLightbulb, FaHandshake, FaTrophy, FaLinkedin, FaGithub, FaTwitter, FaShieldAlt, FaCog } from 'react-icons/fa'

const valores = [
  {
    icon: FaLightbulb,
    title: 'Inovação',
    description: 'Buscamos constantemente novas tecnologias e metodologias para entregar soluções de ponta que superem expectativas.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaHeart,
    title: 'Excelência',
    description: 'Comprometimento com a qualidade em cada linha de código, cada processo e cada interação com nossos clientes.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: FaHandshake,
    title: 'Transparência',
    description: 'Comunicação clara, prazos realistas e total transparência em todos os aspectos dos nossos projetos.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: FaUsers,
    title: 'Colaboração',
    description: 'Trabalhamos como uma extensão da sua equipe, construindo parcerias duradouras baseadas na confiança mútua.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: FaRocket,
    title: 'Agilidade',
    description: 'Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade e a funcionalidade.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: FaShieldAlt,
    title: 'Confiabilidade',
    description: 'Soluções robustas e seguras que garantem a proteção dos dados e a continuidade dos negócios dos nossos clientes.',
    color: 'from-blue-700 to-indigo-600'
  }
]

const equipe = [
  {
    nome: 'João Silva',
    cargo: 'CEO & Founder',
    bio: 'Engenheiro de Software com 12+ anos de experiência em transformação digital. Especialista em arquitetura de sistemas e liderança técnica.',
    especialidades: ['Gestão Estratégica', 'Arquitetura de Software', 'Transformação Digital'],
    avatar: 'JS',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    nome: 'Maria Santos',
    cargo: 'CTO',
    bio: 'Desenvolvedora Full-Stack apaixonada por tecnologias emergentes. Mestre em Ciência da Computação com foco em IA e Machine Learning.',
    especialidades: ['Full-Stack Development', 'IA/ML', 'DevOps'],
    avatar: 'MS',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    nome: 'Carlos Oliveira',
    cargo: 'Lead Developer',
    bio: 'Especialista em desenvolvimento mobile e web. 8+ anos criando aplicações robustas e escaláveis para diversos segmentos.',
    especialidades: ['React/Next.js', 'React Native', 'Node.js'],
    avatar: 'CO',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    nome: 'Ana Costa',
    cargo: 'UX/UI Designer',
    bio: 'Designer com paixão por criar experiências digitais intuitivas e envolventes. Especialista em design centrado no usuário.',
    especialidades: ['UI/UX Design', 'Design Systems', 'Prototipagem'],
    avatar: 'AC',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  }
]

export default function Sobre() {
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
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor"/>
                  <path d="M2,2 L18,2 M2,2 L2,18" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
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
                <FaUsers className="mr-2 w-4 h-4 text-cyan-400" />
                <span className="text-blue-100">Conheça a Triade Software</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                Transformamos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Ideias</span> em Realidade Digital
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções 
                digitais inovadoras que impulsionam o crescimento dos nossos clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Democratizar a transformação digital, oferecendo soluções tecnológicas 
                inovadoras e acessíveis que potencializam o crescimento sustentável 
                dos nossos clientes.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal parceira em transformação digital 
                para empresas que buscam inovação, excelência e resultados 
                excepcionais em suas jornadas tecnológicas.
              </p>
            </motion.div>

            {/* Propósito */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Nosso Propósito</h2>
              <p className="text-gray-600 leading-relaxed">
                Conectar pessoas e empresas através da tecnologia, criando um 
                futuro mais eficiente, sustentável e próspero para todos os 
                envolvidos em nossa jornada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-slate-50" id="valores">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Nossos <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Valores</span>
            </h2>
            <p className="section-subtitle">
              Os princípios que guiam cada decisão e ação em nossa jornada 
              de transformação digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <valor.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-display group-hover:text-blue-600 transition-colors">
                      {valor.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {valor.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${valor.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Final */}
      <section className="section bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          
          {/* Logo Pattern CSS */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-16 h-16">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-blue-400"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-cyan-400 transform translate-x-4 -translate-y-3"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-blue-500 transform translate-x-8 -translate-y-6"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Pronto para Conhecer <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Nossa</span> <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Equipe</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma conversa conosco e descubra como podemos transformar 
              suas ideias em soluções digitais de sucesso.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/contato'}
            >
              Falar com Nossa Equipe
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}