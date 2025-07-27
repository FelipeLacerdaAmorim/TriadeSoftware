'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaCog, FaDollarSign, FaClock, FaComments, FaCheck, FaPaperPlane } from 'react-icons/fa'
import Loading from '@/components/ui/Loading'

const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  empresa: z.string().optional(),
  servico: z.string().min(1, 'Selecione um serviço'),
  orcamento: z.string().min(1, 'Selecione uma faixa de orçamento'),
  prazo: z.string().min(1, 'Selecione um prazo'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  aceitaTermos: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
})

type ContactFormData = z.infer<typeof contactSchema>

const servicos = [
  'Desenvolvimento Web',
  'Aplicativo Mobile',
  'E-commerce',
  'Sistema Personalizado',
  'Consultoria Digital',
  'Automação de Processos',
  'Integração de APIs',
  'Manutenção de Sistema',
  'Hospedagem e Domínio',
  'Outros'
]

const orcamentos = [
  'R$ 5.000 - R$ 15.000',
  'R$ 15.000 - R$ 30.000',
  'R$ 30.000 - R$ 50.000',
  'R$ 50.000 - R$ 100.000',
  'R$ 100.000 - R$ 200.000',
  'Acima de R$ 200.000'
]

const prazos = [
  '1-2 semanas',
  '3-4 semanas',
  '1-2 meses',
  '3-4 meses',
  '5-6 meses',
  'Mais de 6 meses'
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Dados do formulário:', data)
      setIsSuccess(true)
      reset()
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-200"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">
          Mensagem Enviada com Sucesso!
        </h3>
        <p className="text-green-600 mb-6">
          Recebemos sua solicitação e entraremos em contato em até 24 horas. 
          Obrigado por escolher a Triade Software!
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
          <FaPhone className="w-4 h-4" />
          <span>Ou ligue agora: (85) 8630-5347</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Nome */}
          <div>
            <label className="form-label flex items-center">
              <FaUser className="w-4 h-4 mr-2 text-blue-600" />
              Nome Completo *
            </label>
            <input
              {...register('nome')}
              type="text"
              className="form-input"
              placeholder="Seu nome completo"
            />
            {errors.nome && (
              <p className="form-error">{errors.nome.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="form-label flex items-center">
              <FaEnvelope className="w-4 h-4 mr-2 text-blue-600" />
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              className="form-input"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label className="form-label flex items-center">
              <FaPhone className="w-4 h-4 mr-2 text-blue-600" />
              Telefone/WhatsApp *
            </label>
            <input
              {...register('telefone')}
              type="tel"
              className="form-input"
              placeholder="(85) 99999-9999"
            />
            {errors.telefone && (
              <p className="form-error">{errors.telefone.message}</p>
            )}
          </div>

          {/* Empresa */}
          <div>
            <label className="form-label flex items-center">
              <FaBuilding className="w-4 h-4 mr-2 text-blue-600" />
              Empresa
            </label>
            <input
              {...register('empresa')}
              type="text"
              className="form-input"
              placeholder="Nome da sua empresa"
            />
          </div>

          {/* Serviço */}
          <div>
            <label className="form-label flex items-center">
              <FaCog className="w-4 h-4 mr-2 text-blue-600" />
              Tipo de Serviço *
            </label>
            <select {...register('servico')} className="form-input">
              <option value="">Selecione um serviço</option>
              {servicos.map(servico => (
                <option key={servico} value={servico}>{servico}</option>
              ))}
            </select>
            {errors.servico && (
              <p className="form-error">{errors.servico.message}</p>
            )}
          </div>

          {/* Orçamento */}
          <div>
            <label className="form-label flex items-center">
              <FaDollarSign className="w-4 h-4 mr-2 text-blue-600" />
              Faixa de Orçamento *
            </label>
            <select {...register('orcamento')} className="form-input">
              <option value="">Selecione uma faixa</option>
              {orcamentos.map(orcamento => (
                <option key={orcamento} value={orcamento}>{orcamento}</option>
              ))}
            </select>
            {errors.orcamento && (
              <p className="form-error">{errors.orcamento.message}</p>
            )}
          </div>

          {/* Prazo */}
          <div>
            <label className="form-label flex items-center">
              <FaClock className="w-4 h-4 mr-2 text-blue-600" />
              Prazo Desejado *
            </label>
            <select {...register('prazo')} className="form-input">
              <option value="">Selecione um prazo</option>
              {prazos.map(prazo => (
                <option key={prazo} value={prazo}>{prazo}</option>
              ))}
            </select>
            {errors.prazo && (
              <p className="form-error">{errors.prazo.message}</p>
            )}
          </div>
        </div>

        {/* Mensagem */}
        <div className="mt-6">
          <label className="form-label flex items-center">
            <FaComments className="w-4 h-4 mr-2 text-blue-600" />
            Descreva seu Projeto *
          </label>
          <textarea
            {...register('mensagem')}
            rows={5}
            className="form-input resize-none"
            placeholder="Conte-nos mais sobre seu projeto, objetivos e requisitos específicos..."
          />
          {errors.mensagem && (
            <p className="form-error">{errors.mensagem.message}</p>
          )}
        </div>

        {/* Termos */}
        <div className="mt-6">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              {...register('aceitaTermos')}
              type="checkbox"
              className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-gray-600">
              Aceito os{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                termos de uso
              </a>{' '}
              e{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                política de privacidade
              </a>
              . Autorizo o contato da Triade Software. *
            </span>
          </label>
          {errors.aceitaTermos && (
            <p className="form-error">{errors.aceitaTermos.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <Loading size="sm" text="" className="space-y-0" />
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                <span>Enviar Solicitação</span>
              </>
            )}
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Resposta garantida em até 24 horas úteis
          </p>
        </div>
      </div>
    </motion.form>
  )
} 