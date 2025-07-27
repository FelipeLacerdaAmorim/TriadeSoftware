interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function Loading({ size = 'md', text = 'Carregando...', className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Triade Logo Loading Animation */}
      <div className="relative flex items-end justify-center space-x-1">
        {/* Triângulo 1 - Azul Principal */}
        <div className="relative">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-blue-600 animate-pulse"></div>
        </div>
        
        {/* Triângulo 2 - Cyan */}
        <div className="relative transform translate-y-[-3px]">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-l-transparent border-r-transparent border-b-cyan-500 animate-pulse animation-delay-200"></div>
        </div>
        
        {/* Triângulo 3 - Azul Escuro */}
        <div className="relative transform translate-y-[-6px]">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[14px] border-l-transparent border-r-transparent border-b-blue-800 animate-pulse animation-delay-400"></div>
        </div>
      </div>

      {/* Loading Spinner */}
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text */}
      {text && (
        <p className="text-sm text-blue-600 font-medium animate-pulse">
          {text}
        </p>
      )}

      {/* Loading Dots */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  )
}

// Loading Skeleton Component
export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg h-4 mb-3"></div>
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg h-4 mb-3 w-3/4"></div>
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg h-4 w-1/2"></div>
    </div>
  )
}

// Loading Overlay Component
export function LoadingOverlay({ isVisible = false }: { isVisible?: boolean }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
        <Loading size="lg" text="Processando..." />
      </div>
    </div>
  )
} 