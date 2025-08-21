'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaArrowUp, FaCode, FaRocket, FaHeart } from 'react-icons/fa'

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Serviços', href: '/#servicos' },
  { name: 'Portfólio', href: '/#portfolio' },
  { name: 'Contato', href: '/contato' },
]

const services = [
  { name: 'Desenvolvimento Web', href: '/#servicos' },
  { name: 'Aplicativos Mobile', href: '/#servicos' },
  { name: 'E-commerce', href: '/#servicos' },
  { name: 'Consultoria Digital', href: '/#servicos' },
  { name: 'Automação', href: '/#servicos' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: FaLinkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: '#', icon: FaGithub, color: 'hover:text-gray-800' },
  { name: 'Twitter', href: '#', icon: FaTwitter, color: 'hover:text-cyan-500' },
  { name: 'Instagram', href: '#', icon: FaInstagram, color: 'hover:text-pink-500' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor"/>
                <path d="M2,2 L18,2 M2,2 L2,18" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)"/>
          </svg>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600/5 rounded-full blur-3xl animate-pulse animation-delay-800"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group mb-6">
                {/* Logo SVG */}
                <div className="relative w-12 h-10 flex items-center justify-center">
                  <Image
                    src="/triade-logo-colored-no-text.svg"
                    alt="Triade Software Logo"
                    width={48}
                    height={40}
                    className="transform transition-all duration-300 group-hover:scale-110 brightness-0 invert"
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Brand Text */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-display text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Triade Software
                  </span>
                  <span className="text-xs font-medium text-blue-200">
                    Inteligência Digital
                  </span>
                </div>
              </Link>

              <p className="text-blue-100 leading-relaxed mb-6">
                Transformamos ideias em soluções digitais inovadoras. 
                Nossa paixão é criar tecnologia que impulsiona o sucesso 
                dos nossos clientes.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-200 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-display mb-6 text-white">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold font-display mb-6 text-white">
                Nossos Serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold font-display mb-6 text-white">
                Entre em Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:(85)86305347"
                  className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <span>(85) 8630-5347</span>
                </a>

                <a
                  href="mailto:triadesoftwares@gmail.com"
                  className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <span>triadesoftwares@gmail.com</span>
                </a>

                <div className="flex items-center space-x-3 text-blue-200">
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <span>Fortaleza, CE - Brasil</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contato"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaRocket className="w-4 h-4 mr-2" />
                  Iniciar Projeto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30">
          <div className="container mx-auto py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-blue-200 text-sm">
                <span>© {new Date().getFullYear()} Triade Software.</span>
                <span>Desenvolvido com</span>
                <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>em Fortaleza, CE</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-blue-200 text-sm">
                <div className="flex items-center space-x-2">
                  <FaCode className="w-4 h-4" />
                  <span>Next.js • TypeScript • Tailwind CSS</span>
                </div>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
                aria-label="Voltar ao topo"
              >
                <FaArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}