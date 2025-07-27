import ContactForm from '@/components/forms/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaRocket } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Telefone',
    info: '(11) 9999-9999',
    link: 'tel:+5511999999999',
    description: 'Ligue agora e fale diretamente com nossa equipe'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    info: '(11) 9999-9999',
    link: 'https://wa.me/5511999999999',
    description: 'Conversa rápida e prática pelo WhatsApp'
  },
  {
    icon: FaEnvelope,
    title: 'E-mail',
    info: 'contato@triadesoftware.com.br',
    link: 'mailto:contato@triadesoftware.com.br',
    description: 'Envie sua mensagem e receba nossa resposta'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Localização',
    info: 'São Paulo, SP - Brasil',
    link: 'https://maps.google.com',
    description: 'Atendemos todo o Brasil e exterior'
  }
]

const features = [
  {
    icon: FaClock,
    title: 'Resposta em 24h',
    description: 'Garantimos retorno em até 24 horas úteis'
  },
  {
    icon: FaRocket,
    title: 'Orçamento Gratuito',
    description: 'Análise completa do seu projeto sem custo'
  },
  {
    icon: FaPhone,
    title: 'Consultoria Inicial',
    description: 'Primeira conversa técnica totalmente gratuita'
  }
]

export default function Contato() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <FaRocket className="mr-2 w-4 h-4" />
              Vamos transformar suas ideias em realidade
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              Fale <span className="text-secondary">Conosco</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Pronto para transformar seu negócio? Entre em contato conosco e descubra 
              como nossas soluções digitais podem impulsionar seus resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                Múltiplas Formas de <span className="gradient-text">Contato</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-display">
                  Por que escolher a Triade Software?
                </h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  Solicite seu Orçamento <span className="text-secondary">Gratuito</span>
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="section-subtitle">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Quanto tempo leva para desenvolver um projeto?',
                answer: 'O prazo varia conforme a complexidade do projeto. Projetos simples podem levar 2-4 semanas, enquanto sistemas mais complexos podem levar 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial.'
              },
              {
                question: 'Vocês oferecem suporte após a entrega?',
                answer: 'Sim! Oferecemos suporte técnico completo por 90 dias após a entrega, incluindo correções de bugs e pequenos ajustes. Também temos planos de manutenção contínua para garantir que seu sistema esteja sempre atualizado.'
              },
              {
                question: 'Como funciona o processo de desenvolvimento?',
                answer: 'Seguimos uma metodologia ágil: 1) Análise e planejamento, 2) Design e prototipagem, 3) Desenvolvimento iterativo, 4) Testes e validação, 5) Deploy e treinamento. Você acompanha cada etapa com relatórios regulares.'
              },
              {
                question: 'Qual é o investimento mínimo para um projeto?',
                answer: 'Nossos projetos começam a partir de R$ 5.000 para soluções mais simples. O investimento final depende da complexidade, funcionalidades e prazo desejado. Oferecemos orçamento gratuito e detalhado.'
              },
              {
                question: 'Vocês trabalham com que tecnologias?',
                answer: 'Utilizamos tecnologias modernas como React, Next.js, Node.js, Python, Flutter, React Native, AWS, e muitas outras. Escolhemos a stack ideal para cada projeto baseado nos requisitos específicos.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between group-hover:text-primary transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Não Perca Tempo, Comece Hoje!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cada dia que passa é uma oportunidade perdida. Transforme seu negócio 
            agora com nossas soluções digitais inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5511999999999"
              className="btn btn-secondary btn-lg"
            >
              Ligar Agora: (11) 9999-9999
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}