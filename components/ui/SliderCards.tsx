'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type SliderCardsProps = {
  projects: Project[];
};

export default function SliderCards({ projects }: SliderCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [duplicatedProjects, setDuplicatedProjects] = useState<Project[]>([]);
  const controls = useAnimation();


  
  // Calcular quantidade ideal de repetições para loop suave
  const calculateOptimalDuplication = () => {
    // Verificar se há projetos para duplicar
    if (projects.length === 0) return [];
    
    // Sempre criar pelo menos 6 conjuntos para garantir loop suave
    const minSets = 6;
    
    // Se estiver no servidor, retornar com conjuntos mínimos
    if (typeof window === 'undefined') {
      const result = [];
      for (let i = 0; i < minSets; i++) {
        result.push(...projects);
      }
      return result;
    }
    
    const viewportWidth = window.innerWidth;
    const cardWidthWithGap = 735 + 24; // 735px card + 24px gap
    const singleSetWidth = cardWidthWithGap * projects.length;
    
    // Calcular quantos conjuntos cabem na viewport + buffer generoso
    const setsNeededForViewport = Math.ceil(viewportWidth / singleSetWidth);
    const totalSetsNeeded = Math.max(minSets, setsNeededForViewport + 4); // Buffer maior
    
    // Criar array com repetições calculadas
    const result = [];
    for (let i = 0; i < totalSetsNeeded; i++) {
      result.push(...projects);
    }
    
    console.log('Projetos originais:', projects.length, 'Conjuntos criados:', totalSetsNeeded, 'Total duplicados:', result.length);
    return result;
  };

  // Calcular largura do card baseado no número de projetos
  useEffect(() => {
    const singleSetWidth = (735 + 24) * projects.length; // 735px card + 24px gap
    setCardWidth(singleSetWidth);
  }, [projects.length]);

  // Calcular projetos duplicados e configurar listener de resize
  useEffect(() => {
    if (projects.length === 0) return;
    
    const updateDuplication = () => {
      const optimizedProjects = calculateOptimalDuplication();

      setDuplicatedProjects(optimizedProjects);
    };
    
    updateDuplication();

    // Listener para redimensionamento da janela
    const handleResize = () => {
      updateDuplication();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects]);

  useEffect(() => {
    if (cardWidth === 0 || duplicatedProjects.length === 0) return;

    let isMounted = true;
    let animationId: NodeJS.Timeout;

    // Iniciar animação automática infinita contínua
    const startAutoScroll = () => {
      const cardWidthWithGap = 735 + 24; // card width + gap
      const singleSetWidth = cardWidthWithGap * projects.length;
      const totalWidth = cardWidthWithGap * duplicatedProjects.length;
      
      // Animar através de todos os cards duplicados
      const scrollContinuously = async () => {
        if (!isMounted) return;
        
        try {
          // Animar do início até metade dos cards duplicados
          await controls.start({
            x: -(totalWidth / 2),
            transition: {
              duration: duplicatedProjects.length * 5, // Duração ainda mais lenta
              ease: "linear"
            }
          });
          
          if (!isMounted) return;
          
          // Reset position instantly using start with duration 0
          await controls.start({
            x: 0,
            transition: {
              duration: 0
            }
          });
          
          if (!isMounted) return;
          
          // Use setTimeout to prevent immediate recursive call
          animationId = setTimeout(() => {
            if (isMounted) scrollContinuously();
          }, 50); // Pausa menor para fluidez
        } catch (error) {
          // Ignore errors if component is unmounted
          console.warn('Animation error (component may be unmounted):', error);
        }
      };
      
      // Add a delay to ensure component is fully mounted and controls are ready
      animationId = setTimeout(() => {
        if (isMounted) scrollContinuously();
      }, 500); // Delay maior para garantir que está montado
    };

    startAutoScroll();

    return () => {
      isMounted = false;
      if (animationId) {
        clearTimeout(animationId);
      }
    };
  }, [cardWidth, controls, projects.length, duplicatedProjects.length]);

  // Não renderizar se não houver projetos duplicados
  if (duplicatedProjects.length === 0) {
    return <div className="flex justify-center items-center h-32 text-gray-500">Carregando projetos...</div>;
  }

  return (
    <div className="relative overflow-hidden">
      {/* Gradiente à esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      
      <motion.div
        ref={containerRef}
        className="flex gap-6 py-4 px-2"
        drag="x"
        dragConstraints={{ right: 0, left: -cardWidth }}
        animate={controls}
        onDragStart={() => controls.stop()}
        onDragEnd={() => {
          // Reiniciar a animação automática após o usuário soltar o arrasto
          controls.start({
            x: -cardWidth,
            transition: { duration: projects.length * 5, ease: "linear" }
          });
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            className="min-w-[735px] w-[735px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 relative group"
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="relative h-[320px] w-full bg-gray-200 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradiente à direita */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}