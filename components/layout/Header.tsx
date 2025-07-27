'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Portfólio', href: '/portfolio' },
  { name: 'Contato', href: '/contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href) || (href.includes('#') && pathname === '/')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
          : pathname === '/' ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100'
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Logo CSS - Três Triângulos */}
            <div className="relative w-12 h-10 flex items-end justify-center space-x-1">
              {/* Triângulo 1 - Azul Principal */}
              <div className="relative">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-blue-600 transform transition-all duration-300 group-hover:scale-110 group-hover:border-b-blue-700"></div>
                <div className="absolute inset-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Triângulo 2 - Cyan */}
              <div className="relative transform translate-y-[-4px]">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-cyan-500 transform transition-all duration-300 group-hover:scale-110 group-hover:border-b-cyan-600 animation-delay-200"></div>
                <div className="absolute inset-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-200"></div>
              </div>
              
              {/* Triângulo 3 - Azul Escuro */}
              <div className="relative transform translate-y-[-8px]">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[18px] border-l-transparent border-r-transparent border-b-blue-800 transform transition-all duration-300 group-hover:scale-110 group-hover:border-b-blue-900 animation-delay-400"></div>
                <div className="absolute inset-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[18px] border-l-transparent border-r-transparent border-b-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-400"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-display transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : pathname === '/' ? 'text-white' : 'text-gray-900'
              } group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent`}>
                Triade Software
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${
                scrolled ? 'text-blue-600' : pathname === '/' ? 'text-blue-200' : 'text-blue-600'
              }`}>
                Inteligência Digital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? scrolled 
                      ? 'text-blue-600' 
                      : pathname === '/' ? 'text-white' : 'text-blue-600'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : pathname === '/' ? 'text-blue-100 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                
                {/* Active Indicator */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transform transition-transform duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* CTA Button */}
            <Link
              href="/contato"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Orçamento Grátis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                : pathname === '/' ? 'text-white hover:text-blue-200 hover:bg-white/10' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-blue-100 shadow-lg"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-3">
                    
                    <Link
                      href="/contato"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Orçamento Grátis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}