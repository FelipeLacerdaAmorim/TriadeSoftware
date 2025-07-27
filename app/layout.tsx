import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-display'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://triadesoftware.com.br'),
  title: 'Triade Software - Inovação e Resultados para sua Empresa',
  description: 'Transforme seu negócio com soluções de software personalizadas. Desenvolvimento de sistemas, aplicativos mobile, e-commerce e consultoria em tecnologia.',
  keywords: 'desenvolvimento de software, sistemas personalizados, aplicativos mobile, e-commerce, consultoria tecnologia, transformação digital',
  authors: [{ name: 'Triade Software' }],
  openGraph: {
    title: 'Triade Software - Inovação e Resultados para sua Empresa',
    description: 'Transforme seu negócio com soluções de software personalizadas. Desenvolvimento de sistemas, aplicativos mobile e consultoria em tecnologia.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Triade Software',
    images: ['/apple-touch-icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triade Software - Inovação e Resultados para sua Empresa',
    description: 'Soluções de software personalizadas para transformar seu negócio.',
    images: ['/apple-touch-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://triadesoftware.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14538E" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}